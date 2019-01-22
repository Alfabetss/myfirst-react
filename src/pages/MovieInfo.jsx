import React from 'react';
import axios from 'axios'; 
import Header from "../components/Header";
import MovieDetail from "../components/MovieDetail";
import Background from "../components/Background"

class MovieInfo extends React.Component {

    constructor(props) {
        super(props);
        this.updateUserBalanceStateHandler  = this.updateUserBalanceStateHandler.bind(this);
        this.updateMovieListStateHandler  = this.updateMovieListStateHandler.bind(this);
        this.state = {
            movie_id: 424783,
            detail_movie: {},
            user_data: {
                name: 'Alfabet Setiawan',
                balance: 100000
            },
            list_movie: [],
            actors: {}
        }
    }

    apiKey = '5d655c8572a61892be5edb9882fce97f';
    baseUrl = 'https://api.themoviedb.org/3';
    
    componentDidMount () {
        this.fetchMovieDetail()
        this.fetchCastMovie()
        this.fetchSimiliarMovie()
        this.fetchRecomendation()
    }
    
    updateUserBalanceStateHandler = (balance) => {
        let user_data = {...this.state.user_data}
        user_data.balance = balance;
        this.setState({user_data}, function(){
            console.log('updated balance')
        });
    }

    updateMovieListStateHandler = (movie) => {
        console.log(movie)
        this.setState({
            list_movie: [...this.state.list_movie, movie]
          }, function(){
              console.log('updated movie')
          })
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
        const user_data = this.state.user_data
        const list_movie = this.state.list_movie
        return (
            <div>
                <Background></Background>
                <Header userData={user_data}></Header> 
                <MovieDetail 
                    // user_data={this.state.user_data} 
                    movie={detail_movie} 
                    actors={casts} 
                    recommenMovie={recommendation} 
                    userData={user_data} 
                    listMovie={list_movie} 
                    similiar={similiar}
                    updateBalance={this.updateUserBalanceStateHandler}
                    updateMovie={this.updateMovieListStateHandler}
                    >
                </MovieDetail>
            </div>
        );
    }
}

export default MovieInfo;