import React from "react";
import MovieItem from "../MovieItem/MovieItem";

const MoviesList = ({ movies }) => {
  return (
    <section>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </section>
  );
};

export default MoviesList;
