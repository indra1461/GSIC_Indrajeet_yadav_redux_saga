import { all } from "redux-saga/effects";
import { moviesSaga } from "./moviesaga";

export default function* rootsaga() {
  yield all([...moviesSaga]);
}
