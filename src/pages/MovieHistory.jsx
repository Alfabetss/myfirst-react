import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from '../components/Header';
import MovieCard from '../components/MovieCard';
import Title from '../components/Title';
import "../styles/now-playing.css";

class MovieHistory extends Component {
    


    render() {
        const userData = this.props.userData
        const movies = this.props.listMovie
        return (
            <div>
                <Header userData={userData}></Header>
                <div className="main-page">
                    <Title title="Your Movie"></Title>
                    <div className="content-page">
                        <div className="movie-list-container">
                            {
                                movies && movies.length > 0 ? movies.map((data, key) => 
                                    <div key={key} style={{"display": "inline-block", "margin": "6px 0px"}}>
                                        <MovieCard
                                            userData={userData}
                                            listMovie={movies}
                                            movie={data}
                                        ></MovieCard>
                                    </div>
                                )
                                :
                                <div className="loading-data">
                                    Movie Not Found
                                </div>
                            }
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

const mapStateToProps = state => ({
    listMovie: state.list_movie,
    userData: {
        name: state.user_name,
        balance: state.user_balance
    }
 });

export default connect(mapStateToProps)(MovieHistory);