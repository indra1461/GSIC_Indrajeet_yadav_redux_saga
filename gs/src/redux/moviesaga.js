import { takeLatest, put, fork, call } from "redux-saga/effects";
import { getMovies, setMovies, setMovie, getMovie } from "./feature/movieSlice";
import { fetchMovies, fetchMovie } from "./api";

function* onLoadMoviesAsync(payload) {
  try {
    const movieName = payload;
    const response = yield call(fetchMovies, movieName);
    if (response.status === 200) {
      yield put(setMovies({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadMovieAsync(payload) {
  try {
    const movieId = payload;
    const response = yield call(fetchMovie, movieId);
    if (response.status === 200) {
      yield put(setMovie({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadMovies() {
  yield takeLatest(getMovies.type, onLoadMoviesAsync);
}
function* onLoadMovie() {
  yield takeLatest(getMovie.type, onLoadMovieAsync);
}

export const moviesSaga = [fork(onLoadMovies), fork(onLoadMovie)];
