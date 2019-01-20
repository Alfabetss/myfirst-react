import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/component.css"

class MovieCard extends Component {

    render = () => {
        return (
            <div>
                <div className="card-container">
                    <div className="card-content">
                        <div className="bought-indicator" title="Purchased">
                            <FontAwesomeIcon icon="check-square" />
                        </div>
                        <img src="https://image.tmdb.org/t/p/w185/rHbZckaoNTZK6Pm9chAkJ8uBj66.jpg"></img>
                    </div>
                    <div className="movie-info">
                        <span>Still (2019)</span>
                        <small>Rp.3.500</small>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card-content">
                        <img src="https://image.tmdb.org/t/p/w185/CSGJd80ajL7G7BIusniFi8XtFc.jpg"></img>
                    </div>
                    <div className="movie-info">
                        <span>The Last Laugh (2019)</span>
                        <small>Rp.3.500</small>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card-content">
                        <img src="https://image.tmdb.org/t/p/w185/e9TzqscNRUaG8HqEP3K1jUvi8pC.jpg"></img>
                    </div>
                    <div className="movie-info">
                        <span>Superman (2019)</span>
                        <small>Rp.3.500</small>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card-content">
                        <div className="bought-indicator" title="Purchased">
                            <FontAwesomeIcon icon="check-square" />
                        </div>
                        <img src="https://image.tmdb.org/t/p/w185/rHbZckaoNTZK6Pm9chAkJ8uBj66.jpg"></img>
                    </div>
                    <div className="movie-info">
                        <span>Still (2019)</span>
                        <small>Rp.3.500</small>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card-content">
                        <img src="https://image.tmdb.org/t/p/w185/CSGJd80ajL7G7BIusniFi8XtFc.jpg"></img>
                    </div>
                    <div className="movie-info">
                        <span>The Last Laugh (2019)</span>
                        <small>Rp.3.500</small>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card-content">
                        <img src="https://image.tmdb.org/t/p/w185/e9TzqscNRUaG8HqEP3K1jUvi8pC.jpg"></img>
                    </div>
                    <div className="movie-info">
                        <span>Superman (2019)</span>
                        <small>Rp.3.500</small>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;