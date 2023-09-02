import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import RootLayout from "../layout/RootLayout";

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
    ],
  },
]);
