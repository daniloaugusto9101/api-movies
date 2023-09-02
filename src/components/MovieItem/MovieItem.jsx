import { Link } from "react-router-dom";
import MovieImage from "../MovieImage/MovieImage";

const MovieItem = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <MovieImage path={movie.poster_path} />
      <div>
        <div>
          <strong>Data de lançamento: </strong>
          {movie.release_date}
        </div>
      </div>
      <div>
        <Link to={`/api-movies/movie/${movie.id}`}>Ver detalhes</Link>
        <p>id: {movie.id}</p>
      </div>
    </div>
  );
};

export default MovieItem;
