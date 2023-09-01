import axios from "axios";

// const API_KEY = "1af011d3416cd176a7ee34b5417338fb";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWYwMTFkMzQxNmNkMTc2YTdlZTM0YjU0MTczMzhmYiIsInN1YiI6IjY0ZGU4MmQ4ZTE5ZGU5MDExZDVkNjA4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kiHTn_Xa73KhHmU-oWCAsv0VFvL_K33PH7dg6XHmuoo";

const categories = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
];

const getMovies = async () => {
  let url = `https://api.themoviedb.org/3/person/popular`;

  try {
    const resp = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    return resp;
  } catch (error) {
    console.log("error getMovies: ", error);
  }
};

export default getMovies;
