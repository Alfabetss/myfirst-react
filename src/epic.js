import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import axios from 'axios';
import { types, creator } from './duck';

const apiKey = "5d655c8572a61892be5edb9882fce97f";

export const fetchMovie = (action$, movieID) => dispatch =>
    action$.ofType(types.FETCH_MOVIE).pipe(
        mergeMap(action => 
            Observable.fromPromise(
                axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}`)
                .then(resp => {
                    if (resp.error) return null;
                    return resp.data.results.data;
                }),
            )
        )
    ).pipe(
        switchMap(data => Observable.of(creator.fetchMovieSuccess(data))),
    );

export const fetchMovies = (action$, page) => {
    action$.ofType(types.FETCH_MOVIES).pipe(
        mergeMap(action => 
            Observable.fromPromise(
                axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`)
                .then(resp => {
                    if (resp.error) return [];
                    return resp.data.results.data;
                }),
            )
        )
    ).pipe(
        switchMap(data => Observable.of(creator.fetchMoviesSuccess(data))),
    );
}
export default combineEpics(fetchMovie, fetchMovies);