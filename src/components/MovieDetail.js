import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from "react-slick";
import Title from "./Title";
import MovieCard from "./MovieCard";
import "../styles/movie_details.css";
import "../styles/slick-theme.css";
import "../styles/slick.css";


class MovieDetail extends Component {

    render = () => {
        console.log(this.props)
        var settings = {
            dots: true,
            infinite: false,
            // speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            lazyLoad: true
        }
        const movie = this.props.movie
        const casts = this.props.actors
        const user_data = this.props.user_data
        const similiar = this.props.similiar
        const recommenMovie = this.props.recommenMovie
        
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
                            <div className="movie-rating purchase">
                                <FontAwesomeIcon icon="play-circle"/> Purchase
                            </div>
                            <div className="icon-container">
                                <div className="icon">
                                    <FontAwesomeIcon icon="money-bill-alt"/> Rp.3.500
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
                    <Slider {...settings}>
                            {
                                (casts.cast && casts.cast.length > 0) ? casts.cast.map((actor, index) => 
                                <div key={index}>
                                    <div className="cast-card" style={{backgroundImage: 'url('+ (actor.profile_path ? baseUrl + actor.profile_path : '/src/styles/no-image.png') +')'}}>
                                        <div className="cast-name">
                                            {actor.character}
                                        </div>    
                                    </div>
                                </div>
                                ) : 
                                <div className="cast-card">
                                    <div className="cast-name">
                                        Anna Kendrick
                                    </div>    
                                </div>
                            }
                    </Slider>
                </div>
                <div className="cast-carousel-container" style={{"margin": "70px 0px"}}>
                    <Title title="Similiar Movies"></Title>
                    <Slider {...settings}>
                        {
                            (similiar && similiar.results.length > 0) ? similiar.results.map((similiarMovie, index) => 
                                <div key={index}>
                                    <div className="cast-card" style={{backgroundImage: 'url('+ (similiarMovie.poster_path ? baseUrl + similiarMovie.poster_path : '/src/styles/no-image.png') +')'}}>
                                        <div className="cast-name">
                                            {similiarMovie.title} {similiarMovie.release_date ? "(" + similiarMovie.release_date.split('-')[0] + ")" : '' }
                                        </div>    
                                    </div>
                                </div>    
                            ) :
                            <div className="cast-card">
                                <div className="cast-name">
                                    Anna Kendrick
                                </div>    
                            </div>
                        }
                    </Slider>
                </div>
                <div className="cast-carousel-container" style={{"margin": "70px 0px"}}>
                    <Title title="Recomendation Movie"></Title>
                    <Slider {...settings}>
                        {
                            (recommenMovie && recommenMovie.results.length > 0) ? recommenMovie.results.map((recommenMovie, index) => 
                                <div key={index}>
                                    <div className="cast-card" style={{backgroundImage: 'url('+ (recommenMovie.poster_path ? baseUrl + recommenMovie.poster_path : '/src/styles/no-image.png') +')'}}>
                                        <div className="cast-name">
                                            {recommenMovie.title} {recommenMovie.release_date ? "(" + recommenMovie.release_date.split('-')[0] + ")" : '' }
                                        </div>    
                                    </div>
                                </div>    
                            ) :
                            <div className="cast-card">
                                <div className="cast-name">
                                    Anna Kendrick
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