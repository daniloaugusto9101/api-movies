const MovieImage = ({ path, size = 200 }) => {
  return (
    <figure>
      <img src={`https://image.tmdb.org/t/p/w${size}/${path}`} />
    </figure>
  );
};

export default MovieImage;
