import MoviesList from "../components/MoviesList/MoviesList";
import { useSelector } from "react-redux";

const Favorites = () => {
  const movies = useSelector((state) => state.favorite.movies);

  return (
    <>
      <h1>Filmes marcados como favoritos</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default Favorites;
