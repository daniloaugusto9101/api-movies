import React from "react";
import MoviesService from "../api/MoviesService";

const useGetMovieDetails = (movieId) => {
  const [movie, setMovie] = React.useState({});

  React.useEffect(() => {
    MoviesService.getMovieDetail(movieId).then(({ data }) => setMovie(data));
  }, [movieId]);

  return movie;
};

export default useGetMovieDetails;
