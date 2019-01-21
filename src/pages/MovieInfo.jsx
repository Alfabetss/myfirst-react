import React from 'react';
import axios from 'axios'; 
import Header from "../components/Header";
import MovieDetail from "../components/MovieDetail";
import Background from "../components/Background"

class MovieInfo extends React.Component {

    state = {
        movieID: 424783,
        detail_movie: {},
        user_data: {
            name: 'ALFABET',
            balance: 100000
        },
        actors: {}
    }
    apiKey = '5d655c8572a61892be5edb9882fce97f';
    baseUrl = 'https://api.themoviedb.org/3';
    
    componentDidMount () {
        this.fetchMovieDetail()
        this.fetchCastMovie()
        this.fetchSimiliarMovie()
        this.fetchRecomendation()
    }
    
    fetchMovieDetail = () => {
        axios.get(`${this.baseUrl}/movie/424783/credits?api_key=${this.apiKey}`)
        .then(resp => {
            if (resp.error) this.setState({detail_movie: null});
            const casts = resp.data
            this.setState({actors: casts})
        });
    }   
    fetchCastMovie = () => {
        axios.get(`${this.baseUrl}/movie/424783?api_key=${this.apiKey}`)
        .then(resp => {
            if (resp.error) this.setState({detail_movie: null});
            const movie = resp.data
            this.setState({detail_movie: movie})
        });
    }
    fetchSimiliarMovie = () => {
        axios.get(`${this.baseUrl}/movie/424783/similar?api_key=${this.apiKey}`)
        .then(resp => {
            if (resp.error) this.setState({detail_movie: null});
            const similiar = resp.data
            this.setState({similiar_movie: similiar})
        });
    }
    fetchRecomendation = () => {
        axios.get(`${this.baseUrl}/movie/424783/recommendations?api_key=${this.apiKey}`)
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
                <Background></Background>
                <Header></Header> 
                <MovieDetail 
                    // user_data={this.state.user_data} 
                    movie={detail_movie} 
                    actors={casts} 
                    recommenMovie={recommendation} 
                    similiar={similiar}>
                </MovieDetail>
            </div>
        );
    }
}

export default MovieInfo;