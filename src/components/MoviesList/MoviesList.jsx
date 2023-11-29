import React from "react";
import MovieItem from "../MovieItem/MovieItem";

const MoviesList = ({ movies }) => {
  return (
    <section className="grid md:grid-cols-4 gap-3 mt-2">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </section>
  );
};

export default MoviesList;
