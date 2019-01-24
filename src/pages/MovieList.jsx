import React from 'react';
import { connect } from "react-redux";
import axios from 'axios'; 
import Pagination from 'pagination-component';
import { css } from 'glamor';
import Header from "../components/Header";
import NowPlaying from "../components/NowPlaying";

const pageLink = css({
    margin: '2px',
    display: 'inline-block',
    padding: '2px',
    WebkitBorderRadius: '20px',
    MozBorderRadius: '20px',
    borderRadius: '3px',
    padding: '12px',
})
  
const currentLink = css({
    backgroundColor: '#0074c2',
    display: 'inline-block',
    color: '#FFFFFF',
    'a:link': { color: '#FFFFFF' },
    'a:visited': { color: '#FFFFFF' },
    'a:active': { color: '#FFFFFF' }
})
class MovieList extends React.Component {
    
    constructor(props) {
        super(props);
        this.setCurrentPage  = this.setCurrentPage.bind(this);
        this.state = {
            currentPage: 1,
            now_playing: []
        }
        this.apiKey = '5d655c8572a61892be5edb9882fce97f'
        this.baseUrl = 'https://api.themoviedb.org/3'
    }

    componentDidMount() {
        this.fetchNowPlaying()
    }

    fetchNowPlaying = () => {
        axios.get(`${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=${this.state.currentPage}`)
        .then(resp => {
            if (resp.error) return this.setState({now_playing: []});
            this.setState({now_playing: resp.data})
        });
    }

    setCurrentPage(page) {
        this.setState({currentPage: page}, function() {
            this.fetchNowPlaying()
            this.props.history.push(`/?page=${page}`)
        });
    }
    
    render() {
        const userData = this.props.userData
        const nowPlaying = this.state.now_playing
        const listMovie = this.props.listMovie
        return (
            <div>
                <Header userData={userData}></Header> 
                <NowPlaying userData={userData} listMovie={listMovie} nowPlaying={nowPlaying}></NowPlaying>
                <div className="pagination-container">
                    <Pagination currentPage={this.state.currentPage - 1 }
                        pageCount={this.state.now_playing ? this.state.now_playing.total_pages : 1}
                        pageLinkClassName={pageLink}
                        currentLinkClassName={currentLink}
                        onPageClick={i => {
                            this.setCurrentPage(i+1)
                    }}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    listMovie: state.list_movie,
    userData: {
        name: state.user_name,
        balance: state.user_balance
    }
 });

export default connect(mapStateToProps)(MovieList);