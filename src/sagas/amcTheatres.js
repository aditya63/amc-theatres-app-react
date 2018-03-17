import { call, put } from "redux-saga/effects";
import fetchData from '../api/fetchData';

export function* fetchCurrentlyShowingMovies(action) {
 
    const url = '/moviesnowplaying';
     let  response = yield call(fetchData.fetchAmcApi, url);
    yield put({
        type: 'FETCH_NOW_SHOWING_LOAD',
        movies: response._embedded.movies,
    });
}


export function* fetchComingSoonMovies(action) { 
    const url = '/coming-soon';
     let  response = yield call(fetchData.fetchAmcApi, url);
    yield put({
        type: 'FETCH_COMING_SOON_LOAD',
        movies: response._embedded.movies,
    });
}



