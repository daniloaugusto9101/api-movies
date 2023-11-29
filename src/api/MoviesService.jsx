import { api } from "../config/http";

export default class MoviesService {
  // Buscar filmes populares
  static getMovies() {
    return api.get("movie/popular");
  }
  // Buscar detalhes de um filme
  static getMovieDetail(imovieID) {
    return api.get(`movie/${imovieID}`);
  }

  static searchByMovieTitle(movietitle) {
    return api.get(`search/movie`, {
      params: {
        query: movietitle,
      },
    });
  }
}
