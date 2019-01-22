import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from "react-slick";
import Title from "./Title";
import * as utils from "../utils/utils";
import "../styles/movie_details.css";
import "../styles/slick-theme.css";
import "../styles/slick.css";


class MovieDetail extends Component {

    purchaseHandler(movie) {
        // const updateUserBalance = this.props.updateBalance;
        // const updateMovieList = this.props.updateMovie;
        const moviePrice = utils.priceHandler(movie.vote_average)
        const x = window.confirm('You Will buy ' + movie.title + ' for Rp.' + new Intl.NumberFormat('ID').format(moviePrice) + " ?")
        if (!x) {
            return
        }
        if (this.props.userData.balance < moviePrice) {
            return alert("Your money is not enough to buy this movie")
        }
        this.props.updateBalance(this.props.userData.balance - moviePrice)
        this.props.updateMovie(movie)
        window.alert("Successful purchased new movie")
    }

    hasBought = () => {
        return alert('You already have this movie')
    }

    render = () => {
        var sliderSetting = {
            dots: true,
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 5,
            lazyLoad: true
        }
        const movie = this.props.movie
        const casts = this.props.actors
        const similiar = this.props.similiar
        const recommenMovie = this.props.recommenMovie
        const listMovie = this.props.listMovie

        const baseUrl = "http://image.tmdb.org/t/p/original/"
        return (
            <div className="movie-detail-container">
                <div className="movie-poster">
                    <img src={baseUrl + movie.backdrop_path}/>
                    <div className="description-container">
                        <div className="poster-movie">
                            <img src={baseUrl + movie.poster_path}/>
                        </div>
                        <div className="description-movie">
                            <div className="movie-title">{movie.title} {movie.release_date ? "("+movie.release_date.split('-')[0]+")" : ''}</div>
                            <div className="movie-rating">IMDb {movie.vote_average}</div>
                            {
                                utils.existingMovie(listMovie, movie) ? 
                                    <div className="movie-rating bought" onClick={() => this.hasBought()}>
                                        <FontAwesomeIcon style={{"color": 'grey'}} icon="play-circle"/> Bought
                                    </div> 
                                :                             
                                    <div className="movie-rating purchase" onClick={() => this.purchaseHandler(movie)}>
                                        <FontAwesomeIcon icon="play-circle"/> Buy
                                    </div>
                            }
                            <div className="icon-container">
                                <div className="icon">
                                    <FontAwesomeIcon icon="money-bill-alt"/> Rp.{new Intl.NumberFormat('ID').format(parseInt(utils.priceHandler(movie.vote_average)))}
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon  icon="clock"/> {movie.runtime} min
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon  icon="ellipsis-h"/> {
                                            (movie.genres && movie.genres.length > 0) ? movie.genres.slice(0,3).map((genre, index) => 
                                                <span key={index}>{genre.name + (index != movie.genres.length - 1 ? ' | ' : '') }</span>
                                            ) : <div>Genres Not Found</div>
                                        }
                                </div>
                            </div>
                            <div className="about-movie">
                                {movie.overview ? movie.overview : "Overview Not Found"}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cast-carousel-container">
                    <Title title="Casts"></Title>
                    <Slider {...sliderSetting}>
                            {
                                (casts.cast && casts.cast.length > 0) ? casts.cast.map((actor, index) => 
                                <div key={index}>
                                    <div className="cast-card" style={{backgroundImage: 'url('+ (actor.profile_path ? baseUrl + actor.profile_path : '/src/styles/no-image.png') +')'}}>
                                        <div className="cast-name">
                                            {actor.name}
                                        </div>    
                                    </div>
                                </div>
                                ) : 
                                <div className="cast-card">
                                    <div className="cast-name">
                                        Loading
                                    </div>    
                                </div>
                            }
                    </Slider>
                </div>
                <div className="cast-carousel-container" style={{"margin": "70px 0px"}}>
                    <Title title="Similiar Movies"></Title>
                    <Slider {...sliderSetting}>
                        {
                            (similiar && similiar.results.length > 0) ? similiar.results.map((similiarMovie, index) => 
                                <div key={index}>
                                    <div className="cast-card movie" style={{backgroundImage: 'url('+ (similiarMovie.poster_path ? baseUrl + similiarMovie.poster_path : '/src/styles/no-image.png') +')', "cursor": "pointer"}}>
                                        <div className="cast-name" style={{"lineHeight": "1"}}>
                                            <span>
                                                {similiarMovie.title} {similiarMovie.release_date ? "(" + similiarMovie.release_date.split('-')[0] + ")" : '' }
                                            </span>
                                        </div>    
                                        {
                                            utils.existingMovie(listMovie, similiarMovie) ? 
                                                <div className="play-button bought" onClick={() => this.hasBought()}>
                                                    <FontAwesomeIcon style={{"fontSize": '45pt', "color": 'white'}} icon="play-circle"/>
                                                    <div style={{"fontSize": '12pt', "display": "block", "color": "whitesmoke", "lineHeight": "0", "marginTop": "-50px"}}>
                                                        Rp. {new Intl.NumberFormat('ID').format(parseInt(utils.priceHandler(similiarMovie.vote_average)))}
                                                    </div>
                                                </div>
                                            :
                                                <div className="play-button buy" onClick={() => this.purchaseHandler(similiarMovie)}>
                                                    <FontAwesomeIcon style={{"fontSize": '45pt', "color": 'gold'}} icon="play-circle"/>
                                                    <div style={{"fontSize": '12pt', "display": "block", "color": "whitesmoke", "lineHeight": "0", "marginTop": "-50px"}}>
                                                        Rp. {new Intl.NumberFormat('ID').format(parseInt(utils.priceHandler(similiarMovie.vote_average)))}
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                </div>    
                            ) :
                            <div className="cast-card">
                                <div className="cast-name">
                                    Loading
                                </div>    
                            </div>
                        }
                    </Slider>
                </div>
                <div className="cast-carousel-container" style={{"margin": "70px 0px"}}>
                    <Title title="Recomendation Movie"></Title>
                    <Slider {...sliderSetting}>
                        {
                            (recommenMovie && recommenMovie.results.length > 0) ? recommenMovie.results.map((recommenMovie, index) => 
                                <div key={index}>
                                    <div className="cast-card movie" style={{backgroundImage: 'url('+ (recommenMovie.poster_path ? baseUrl + recommenMovie.poster_path : '/src/styles/no-image.png') +')', "cursor": "pointer"}}>
                                        <div className="cast-name">
                                            {recommenMovie.title} {recommenMovie.release_date ? "(" + recommenMovie.release_date.split('-')[0] + ")" : '' }
                                        </div>    
                                        {
                                            utils.existingMovie(listMovie, recommenMovie) ? 
                                                <div className="play-button bought" onClick={() => this.hasBought()}>
                                                    <FontAwesomeIcon style={{"fontSize": '45pt', "color": 'white'}} icon="play-circle"/>
                                                    <div style={{"fontSize": '12pt', "display": "block", "color": "whitesmoke", "lineHeight": "0", "marginTop": "-50px"}}>
                                                        Rp. {new Intl.NumberFormat('ID').format(parseInt(utils.priceHandler(recommenMovie.vote_average)))}
                                                    </div>
                                                </div>
                                            :
                                                <div className="play-button buy" onClick={() => this.purchaseHandler(recommenMovie)}>
                                                    <FontAwesomeIcon style={{"fontSize": '45pt', "color": 'gold'}} icon="play-circle"/>
                                                    <div style={{"fontSize": '12pt', "display": "block", "color": "whitesmoke", "lineHeight": "0", "marginTop": "-50px"}}>
                                                        Rp. {new Intl.NumberFormat('ID').format(parseInt(utils.priceHandler(recommenMovie.vote_average)))}
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                </div>    
                            ) :
                            <div className="cast-card">
                                <div className="cast-name">
                                    Loading
                                </div>    
                            </div>
                        }
                    </Slider>
                </div>
            </div>
            
        )
    }
}

export default MovieDetail;