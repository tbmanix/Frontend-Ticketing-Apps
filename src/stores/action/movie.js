import axios from "../../utils/axios";

export const getMovie = (page, limit, search, sort, releaseDate) => {
  return {
    type: "GET_MOVIE",
    payload: !releaseDate
      ? axios.get(`movie/?page=${page}&limit=${limit}&searchName=${search}&sort=${sort}`)
      : axios.get(
          `movie/?page=${page}&limit=${limit}&searchName=${search}&sort=${sort}&searchReleaseDate=${releaseDate}`
        )
  };
};
