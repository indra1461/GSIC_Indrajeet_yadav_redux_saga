import axios from "axios";

const API_ENDPOINT = `https://api.themoviedb.org/3/movie/upcoming?api_key=49b378c0fb9a8bd3ba61a705155cd305`;

export const fetchMovies = async (movieName) => {
  return axios.get(`${API_ENDPOINT}&s=${movieName}`);
};

export const fetchMovie = async (movieId) => {
  return axios.get(`${API_ENDPOINT}&i=${movieId}`);
};
