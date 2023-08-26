import { configureStore } from "@reduxjs/toolkit";
import createsagamiddleware from "redux-saga";
import movieReducer from "./feature/movieSlice";
import rootsaga from "./rootsaga";

const sagaMiddleware = createsagamiddleware();

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootsaga);

export default store;
