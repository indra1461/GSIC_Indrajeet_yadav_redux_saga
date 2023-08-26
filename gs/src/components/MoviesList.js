import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies } from "../redux/feature/movieSlice";

export default function MoviesList() {
  const dispatch = useDispatch();
  const MoviesList = useSelector((state) => ({
    ...state.movie.moviesList.results,
  }));

  const imgUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <>
      <div className="row container mt-4">
        {Object.keys(MoviesList).map((item, index) => (
          <div className="col-md-2 pt-4">
            <div className="card " key={index}>
              <Link to={`/movie/getMovie/${MoviesList[item].id}`}>
                <img
                  className="card-img-top"
                  src={`${imgUrl}${MoviesList[item].poster_path}`}
                  alt="Card image cap"
                />
              </Link>
              <div className="card-body">
                <Link to={`/movie/getMovie/${MoviesList[item].id}`}>
                  <span className="card-title">
                    {MoviesList[item].title.substring(0, 25)}
                  </span>
                </Link>
                <span className="rating float-right">
                  {MoviesList[item].vote_average}/10
                </span>
                <p className="card-text">{}</p>
                {`${MoviesList[item].overview.substring(0, 60)}...`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
