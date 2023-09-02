import React from "react";
import { useParams } from "react-router-dom";
import MoviesService from "../api/MoviesService";
import MovieImage from "../components/MovieImage/MovieImage";

const MovieDetails = () => {
  const [movie, setMovie] = React.useState({});
  const params = useParams();

  React.useEffect(() => {
    MoviesService.getMovieDetail(params.movieId).then(({ data }) =>
      setMovie(data)
    );
  }, [params.movieId]);

  return (
    <article>
      <MovieImage path={movie.poster_path} size={500} />
      <div>
        <h1>{movie.title}</h1>
        <div>{movie.overview}</div>
      </div>
    </article>
  );
};

export default MovieDetails;
