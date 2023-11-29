import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-slate-800 text-white text-xl">
      <div className="container m-auto flex flex-wrap justify-between p-6">
        <h1>
          <Link
            to={"/api-movies"}
            className="hover:text-red-500 transition-all"
          >
            Danilo Augusto | Api Movies
          </Link>
        </h1>
        <Link to={"/api-movies"} className="hover:text-red-500 transition-all">
          Home
        </Link>
        <Link
          to={"/api-movies/favorites"}
          className="hover:text-red-500 transition-all"
        >
          Filmes Favoritos
        </Link>
      </div>
    </header>
  );
};

export default Header;
