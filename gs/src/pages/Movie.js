import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Movie() {
  const dispatch = useDispatch();
  const movieState = useSelector((state) => ({
    ...state.movie.moviesList,
  }));

  const movies = movieState?.results || [];

  const { id } = useParams();
  const { navigate } = useNavigate();
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  const movie = movies && movies.length && movies.find((m) => m.id == id);
  console.log("moieData", movie);

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-3">
            <img
              className="card-img-top float-right"
              src={`${imgUrl}${movie.poster_path}`}
              alt="Card image cap"
            />
          </div>
          <div className="col-md-9">
            <div className="movie-title">
              {movie.title}{" "}
              <span className="rating">{movie.vote_average}/10</span>
            </div>
            <div className="movie-subtitle">
              Release Date: <span className="1"> {movie.release_date}</span> |
              Popularity: <span className="1"> {movie.popularity}</span>{" "}
            </div>
            <div className="overview">{movie.overview}</div>
          </div>
        </div>
      </div>
    </>
  );
}
