import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "../styles";
import { getMovies, setSearchMovies } from "../redux/feature/movieSlice";

export default function Search() {
  const [name, setName] = useState("");

  const classes = useStyles();
  const movieList = useSelector((state) => ({
    ...state.movie.moviesList,
  }));
  const dispatch = useDispatch();
  const movies = (movieList && movieList?.results) || [];

  const matchFound =
    name.length > 0 &&
    movies.filter((m) => {
      return (
        m["title"].toString().toLowerCase().indexOf(name.toLowerCase()) > -1
      );
    });

  useEffect(() => {
    if (matchFound && matchFound.length > 0) {
      dispatch(setSearchMovies(matchFound));
    }
  }, [matchFound]);

  return (
    <>
      <div className="row container-fluid searchBar">
        <div className="col-md-6">
          <form
            className=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <i className="fa fa-search" aria-hidden="true"></i>
            <input
              type="text"
              className="form-control searchInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Search"
            />
          </form>
        </div>
        <div className="col-md-6"></div>
      </div>
    </>
  );
}
