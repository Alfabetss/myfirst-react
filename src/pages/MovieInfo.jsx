import React from 'react';
import axios from 'axios'; 
import {connect} from 'react-redux';
import Header from "../components/Header";
import MovieDetail from "../components/MovieDetail";

class MovieInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            detail_movie: {},
            actors: {}
        }
        this.apiKey = '5d655c8572a61892be5edb9882fce97f';
        this.baseUrl = 'https://api.themoviedb.org/3';
        this.movie_id = null
    }

    componentDidMount () {
        this.movie_id = this.props.match.params.movieID.split('-')[0]
        this.fetchMovieDetail()
        this.fetchCastMovie()
        this.fetchSimiliarMovie()
        this.fetchRecomendation()
        this.updateState()
    }

    updateState = () => {
        if (this.props.location && this.props.location.state) {
            this.setState({user_data: this.props.location.state.userData})
            this.setState({list_movie: this.props.location.state.listMovie})
        }
    }

    fetchMovieDetail = () => {
        axios.get(`${this.baseUrl}/movie/${this.movie_id}/credits?api_key=${this.apiKey}`)
        .then(resp => {
            if (resp.error) this.setState({detail_movie: null});
            const casts = resp.data
            this.setState({actors: casts})
        });
    }   
    fetchCastMovie = () => {
        axios.get(`${this.baseUrl}/movie/${this.movie_id}?api_key=${this.apiKey}`)
        .then(resp => {
            if (resp.error) this.setState({detail_movie: null});
            const movie = resp.data
            this.setState({detail_movie: movie})
        });
    }
    fetchSimiliarMovie = () => {
        axios.get(`${this.baseUrl}/movie/${this.movie_id}/similar?api_key=${this.apiKey}`)
        .then(resp => {
            if (resp.error) this.setState({detail_movie: null});
            const similiar = resp.data
            this.setState({similiar_movie: similiar})
        });
    }
    fetchRecomendation = () => {
        axios.get(`${this.baseUrl}/movie/${this.movie_id}/recommendations?api_key=${this.apiKey}`)
        .then(resp => {
            if (resp.error) this.setState({detail_movie: null});
            const recomendation = resp.data
            this.setState({recomendation_movie: recomendation})
        });
    }
            
            
    render = () => {
        const detail_movie = this.state.detail_movie
        const casts = this.state.actors
        const similiar = this.state.similiar_movie
        const recommendation = this.state.recomendation_movie
        return (
            <div>
                <Header userData={this.props.userData}></Header> 
                <MovieDetail 
                    // user_data={this.state.user_data} 
                    movie={detail_movie} 
                    actors={casts} 
                    recommenMovie={recommendation} 
                    userData={this.props.userData} 
                    listMovie={this.props.listMovie} 
                    similiar={similiar}
                    purchaseMovie={this.props.purchaseMovie}
                    addMovieList={this.props.addMovieList}
                    >
                </MovieDetail>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    listMovie: state.list_movie,
    userData: {
        name: state.user_name,
        balance: state.user_balance
    },
});

const mapDispatchToProps = dispatch => {
    return {
        purchaseMovie: (params) => dispatch({type: 'userBalanceHandler', price: params}),
        addMovieList: (movie) => dispatch({type: 'movieListHandler', data: movie})
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);