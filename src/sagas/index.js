import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { fetchCurrentlyShowingMovies, fetchComingSoonMovies } from './amcTheatres';


  export function* sagas() {
    yield [
      fork(takeLatest, 'FETCH_NOW_SHOWING', fetchCurrentlyShowingMovies),
      fork(takeLatest, 'FETCH_COMING_SOON', fetchComingSoonMovies)
    ];
  }

