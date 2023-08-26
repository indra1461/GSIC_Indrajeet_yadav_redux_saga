import React from "react";
import Search from "../components/Search";
import MoviesList from "../components/MoviesList";

export default function Home() {
  return (
    <>
      {/* <div>Home</div> */}

      <Search />

      <MoviesList />
    </>
  );
}
