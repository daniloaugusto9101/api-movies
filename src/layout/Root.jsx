import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <header>
        <h1>Primeira Aplicação SPA</h1>
        <ul>
          <li>
            <Link to={"/api-movies"}>Link: Home</Link>
          </li>
          <li>
            <Link to={"/api-movies/movie-details"}>Link: Movie Details</Link>
          </li>
        </ul>
      </header>
      <section>
        <Outlet />
      </section>
      <footer>Copyright 2023</footer>
    </>
  );
};

export default Root;
