import React, { Component } from 'react';
import Title from "./Title";
import MovieCard from "./MovieCard";
import "../styles/now_playing.css";

class NowPlaying extends Component {

    render = () => {
        return (
            <div className="main-page">
                <div className="content-page">
                    <Title title="Now Playing"></Title>
                    <div className="movie-list-container">
                        <MovieCard></MovieCard>
                    </div>
                </div>
            </div>
        )
    }
}

export default NowPlaying;