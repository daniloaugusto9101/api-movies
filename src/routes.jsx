import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Root from "./layout/Root";

export const router = createBrowserRouter([
  {
    path: "/api-movies",
    element: <Root />,
    children: [
      {
        path: "/api-movies",
        element: <Home />,
      },
      {
        path: "/api-movies/movie-details",
        element: <MovieDetail />,
      },
    ],
  },
]);
