import React, { Component } from 'react';
import Title from "./Title";
import MovieCard from "./MovieCard";
import "../styles/now-playing.css";

class NowPlaying extends Component {

    render = () => {
        const nowPlaying = this.props.nowPlaying
        const userData = this.props.userData
        const listMovie = this.props.listMovie
        return (
            <div className="main-page">
                <Title title="Now Playing" style={{color: 'gold', paddingBottom: '0px'}}></Title>
                <div className="content-page">
                    <div className="movie-list-container">
                        {
                            nowPlaying.results && nowPlaying.results.length > 0 ? nowPlaying.results.map((data, key) => 
                                <div key={key} style={{display: 'inline-block', margin: '6px 0px'}}>
                                    <MovieCard 
                                        userData={userData} 
                                        listMovie={listMovie}  
                                        movie={data}>
                                    </MovieCard>
                                </div>
                            ) 
                            :
                                <div className="loading-data">Loading Movie ...</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default NowPlaying;