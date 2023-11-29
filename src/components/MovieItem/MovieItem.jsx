import { Link } from "react-router-dom";
import MovieImage from "../MovieImage/MovieImage";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../../store/features/favorites";

const MovieItem = ({ movie }) => {
  const dispath = useDispatch();
  const favoriteMovies = useSelector((state) => state.favorite.movies);

  return (
    <div className="bg-gray-300 rounded-md border flex flex-col items-center gap-2 p-4 text-center">
      <h3>{movie.title}</h3>
      <MovieImage path={movie.poster_path} />
      <div>
        <div>
          <p>Data de lançamento:</p>
          {movie.release_date}
        </div>
      </div>
      <div>
        <Link to={`/api-movies/movie/${movie.id}`}>
          <strong>Ver detalhes</strong>{" "}
        </Link>
        {favoriteMovies.find((m) => m.id === movie.id) ? (
          <button onClick={() => dispath(removeMovie(movie))}>
            Remover dos favoritos
          </button>
        ) : (
          <button onClick={() => dispath(addMovie(movie))}>
            Adicionar aos favoritos
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieItem;
