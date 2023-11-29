import React from "react";
import MoviesService from "../api/MoviesService";

const useGetMovies = () => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    MoviesService.getMovies().then(({ data }) => setMovies(data.results));
  }, []);

  return movies;
};

export default useGetMovies;
