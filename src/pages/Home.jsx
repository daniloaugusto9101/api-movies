import React from "react";
import MoviesService from "../api/MoviesService";
import MoviesList from "../components/MoviesList/MoviesList";

const Home = () => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    MoviesService.getMovies().then(({ data }) => setMovies(data.results));
  }, []);

  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
