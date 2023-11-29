import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import RootLayout from "../layout/RootLayout";
import Favorites from "../pages/Favorites";

export const router = createBrowserRouter([
  {
    path: "/api-movies",
    element: <RootLayout />,
    children: [
      {
        path: "/api-movies",
        element: <Home />,
      },
      {
        path: "/api-movies/movie/:movieId",
        element: <MovieDetails />,
      },
      {
        path: "/api-movies/favorites",
        element: <Favorites />,
      },
    ],
  },
]);
