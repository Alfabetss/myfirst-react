import React from 'react';
import { connect } from "react-redux";
import { actions } from "../duck";
import axios from 'axios'; 
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import NowPlaying from "../components/NowPlaying";

class MovieList extends React.Component {
    
    constructor(props) {
        super(props);
        this.setCurrentPage  = this.setCurrentPage.bind(this);
        this.state = {
            user_data: {
                name: 'Alfabet Setiawan',
                balance: 1000000
            },
            list_movie: [],
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
        console.log(this.props.match);
        this.setState({currentPage: page});
    }

    render() {
        const userData = this.props.userData
        const nowPlaying = this.state.now_playing
        const listMovie = this.props.listMovie
        return (
            <div>
                <Header userData={userData}></Header> 
                <NowPlaying userData={userData} listMovie={listMovie} nowPlaying={nowPlaying}></NowPlaying>
                <Pagination></Pagination>
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