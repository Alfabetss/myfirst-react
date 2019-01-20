import Duck from 'extensible-duck';
import { combineReducers } from 'redux';

const movieDuck = new Duck({
  namespace: 'tokoflix',
  store: 'movie',
  types: [
    'FETCH_MOVIE',
    'FETCH_MOVIE_FAILED',
    'FETCH_MOVIE_SUCCESS',
    'FETCH_MOVIES',
    'FETCH_MOVIES_FAILED',
    'FETCH_MOVIES_SUCCESS'
  ],
  initialState: {
    movies: [],
    movie: null,
    loading: false,
  },
  selectors: {
    root: state => state
  },
  creators: duck => ({ 
    // actions types
    fetchMovie: movieID => dispatch => {
        dispatch({
            type: duck.types.FETCH_MOVIE,
            movieID,
        });
    },
    fetchMovieSuccess: (movieID, payload) => dispatch => {
        dispatch({
            type: duck.types.FETCH_MOVIE_SUCCESS,
            payload,
            movieID,
        });
    },
    fetchMovieFailed: () => dispatch => {
        dispatch({
            type: duck.types.FETCH_MOVIE_FAILED,
            movieID,
        });
    },
    fetchMovies: page => dispatch => {
        console.log("FETCH MOVIES", page);
        dispatch({
            type: duck.types.FETCH_MOVIES,
            page,
        });
    },
    fetchMoviesSuccess: payload => dispatch => {
        console.log("FETCH MOVIES SUCCESS", payload);
        dispatch({
            type: duck.types.FETCH_MOVIES_SUCCESS,
            payload,
        });
    },
    fetchMoviesFailed: () => dispatch => {
        console.log("FETCH MOVIES FAILED", payload);
        dispatch({
            type: duck.types.FETCH_MOVIES_FAILED,
        });
    }
  }),
  reducer: (state, action, duck) => {
    switch (action.type) {
        case duck.types.FETCH_MOVIE:
            return {
                ...state,
                movie: null,
                loading: true,
            }
        case duck.types.FETCH_MOVIE_FAILED:
            return {
                ...state,
                movie: null,
                loading: false,
            }
        case duck.types.FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                movie: payload,
                loading: false,
            }
        case duck.types.FETCH_MOVIES:
            return {
                ...state,
                movies: [],
                loading: true,
            }
        case duck.types.FETCH_MOVIES_FAILED:
            return {
                ...state,
                movies: [],
                loading: false,
            }
        case duck.types.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: payload,
                loading: false,
            }
        default:
            return state
    }
  }
});

export const actionTypes = movieDuck.types;
export const actions = movieDuck.creators;
export const store = movieDuck.store;
export default combineReducers({ [movieDuck.store]: movieDuck.reducer })
export const initialState = movieDuck.initialState;
