import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    moviesList: [],
    movie: {},
    searchList: [],
  },
  reducers: {
    getMovies(name) {
      return name;
    },
    setMovies: (state, action) => {
      state.moviesList = action.payload;
    },
    getMovie(id) {
      return id;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    setSearchMovies: (state, action) => {
      state.searchList = action.payload;
    },
  },
});
export const { getMovies, setMovies, getMovie, setMovie, setSearchMovies } =
  movieSlice.actions;
export default movieSlice.reducer;
