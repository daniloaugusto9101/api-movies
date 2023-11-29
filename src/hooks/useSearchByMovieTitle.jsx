import React from "react";
import MoviesService from "../api/MoviesService";

const useSearchByMovieTitle = (movieTitle) => {
  const [searchResults, setSearchResults] = React.useState([]);

  React.useEffect(() => {
    if (!movieTitle) {
      setSearchResults([]);
      return;
    }
    MoviesService.searchByMovieTitle(movieTitle).then(({ data }) => {
      setSearchResults(data.results);
    });
  }, [movieTitle]);

  return searchResults;
};

export default useSearchByMovieTitle;
