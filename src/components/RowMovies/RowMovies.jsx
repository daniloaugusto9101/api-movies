import React from "react";
import { getMovies } from "../../api/api";

const RowMovies = ({ name, id }) => {
  const [movies, setMovies] = React.useState([]);

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      setMovies(data?.results);
    } catch (error) {
      console.log("FechtMovies error:", error);
    }
  };

  React.useEffect(() => {
    fetchMovies(path);
  }, [path]);

  return <div>{movies}</div>;
};

export default RowMovies;
