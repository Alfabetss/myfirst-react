import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as utils from "../utils/utils";
import { Link } from "react-router-dom";
import "../styles/component.css";

class MovieCard extends Component {

    render = () => {
        const movie = this.props.movie
        const baseUrl = "http://image.tmdb.org/t/p/original/"
        return (
            <div>
                <Link to={{
                    pathname: `/${movie.id}-${movie.original_title.split(' ').join('-').split('/').join('-')}`,
                    state: {
                        userData: this.props.userData,
                        listMovie: this.props.listMovie,
                    }
                }}>
                    <div className="card-container" style={{backgroundImage: 'url('+ (movie.poster_path ? baseUrl + movie.poster_path : '/src/styles/no-image.png') +')', cursor: 'pointer'}}>
                        <div className="icon">
                        {
                            utils.existingMovie(this.props.listMovie, movie) ? 
                                <FontAwesomeIcon style={{"fontSize": "24pt", "color": "gold"}} icon="star" title="Already Purchased"/>
                            : 
                                <FontAwesomeIcon style={{"fontSize": "24pt", "color": "gold", "display": 'none'}} icon="star" title="Already Purchased"/>
                        }
                        </div>
                        <div className="card-content">
                            <span>{movie.original_title}</span>
                            <br></br>
                            Rp.{new Intl.NumberFormat('ID').format(utils.priceHandler(movie.vote_average))}
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default MovieCard;