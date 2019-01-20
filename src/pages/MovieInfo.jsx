import React from 'react';

class MovieInfo extends React.Component {

    render() {
        return <div>ini MovieInfo <pre>{JSON.stringify(this.props.movies)}</pre></div>;
    }
}

export default MovieInfo;