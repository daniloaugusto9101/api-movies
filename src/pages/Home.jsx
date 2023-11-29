import React from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import SearchMovies from "../components/SearchMovies/SearchMovies";
import useGetMovies from "../hooks/useGetMovies";
import useSearchByMovieTitle from "../hooks/useSearchByMovieTitle";

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const movies = useGetMovies();
  const searchResults = useSearchByMovieTitle(searchQuery);

  function handleOnSearch(movieTitle) {
    setSearchQuery(movieTitle);
  }

  return (
    <>
      <SearchMovies onSearch={handleOnSearch} />
      <MoviesList movies={searchResults.length > 0 ? searchResults : movies} />
    </>
  );
};

export default Home;
