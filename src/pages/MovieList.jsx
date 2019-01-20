import React from 'react';
import { connect } from "react-redux";
import { actions } from "../duck";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import NowPlaying from "../components/NowPlaying";
// import axios from 'axios'; 

class MovieList extends React.Component {
    state = {
        currentPage: 1,
    }

    componentDidMount() {

        // console.log(this.props.match.params);
        // if (this.props.match && this.props.match.page && parseInt(this.props.match.page) > 0) {
        //     this.setCurrentPage(parseInt(this.props.match.page));
        // }

    
        // axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=5d655c8572a61892be5edb9882fce97f&language=en-US&page=${this.state.currentPage}`)
        // .then(resp => {
        //     if (resp.error) return [];
        //     console.log(resp);
        //     return resp.data;
        // });
        this.props.dispatch(actions.fetchMovies(this.state.currentPage));
    }

    setCurrentPage(page) {
        console.log(this.props.match);
        this.setState({currentPage: page});
    }

    render() {
        const {movies} = this.props.state && this.props.state.movies ? this.props.state.movies : [];
        console.log("movies", movies)
        return (
            <div>
                <Header></Header> 
                <NowPlaying></NowPlaying>
                <Pagination></Pagination>
            </div>
        )
        // const {movies} = this.props;
        // return <div>movie info {movies && movies.length > 0 ? JSON.stringify(movies) :  <div />}</div>;
    }
}

const mapStateToProps = state => ({
   movies: state.movies,
});

export default connect(mapStateToProps)(MovieList);