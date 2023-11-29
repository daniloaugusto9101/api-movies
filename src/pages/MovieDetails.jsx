import React from "react";
import { useParams } from "react-router-dom";
import MovieImage from "../components/MovieImage/MovieImage";
import useGetMovieDetails from "../hooks/useGetMovieDetails";

const MovieDetails = () => {
  const { movieId } = useParams();
  const movie = useGetMovieDetails(movieId);

  return (
    <article className="max-w-5xl m-auto flex gap-4 mt-6">
      <MovieImage path={movie.poster_path} size={500} />
      <div>
        <h1>
          <strong>{movie.title}</strong>
        </h1>
        <div>
          <p>Description: {movie.overview}</p>
        </div>
      </div>
    </article>
  );
};

export default MovieDetails;
