import axios from "axios";

export const fetchTrends = async () => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjFlNjg2YjA3M2NkNTlkYzZmOWNlYjFmMWZjYmQxZSIsIm5iZiI6MTcyMjI4MzI3Mi43MjEzNDMsInN1YiI6IjY2YTdmNDRmY2UwMWI0MTkwZjgwODQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iwJiraXc-icDO3CCD5ygJlzN2vyw-73oUfT5CRELt5s";
  const BaseURL =
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const response = axios.get(BaseURL, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response;
};

// import ApiKey from "./ApiKey.json";

export const fetchDetails = async (movieId) => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjFlNjg2YjA3M2NkNTlkYzZmOWNlYjFmMWZjYmQxZSIsIm5iZiI6MTcyMjI4MzI3Mi43MjEzNDMsInN1YiI6IjY2YTdmNDRmY2UwMWI0MTkwZjgwODQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iwJiraXc-icDO3CCD5ygJlzN2vyw-73oUfT5CRELt5s";
  const BaseURL = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US'`;

  const response = axios.get(BaseURL, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response;
};

export const fetchCredits = async (movieId) => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjFlNjg2YjA3M2NkNTlkYzZmOWNlYjFmMWZjYmQxZSIsIm5iZiI6MTcyMjI4MzI3Mi43MjEzNDMsInN1YiI6IjY2YTdmNDRmY2UwMWI0MTkwZjgwODQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iwJiraXc-icDO3CCD5ygJlzN2vyw-73oUfT5CRELt5s";
  const BaseURL = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US'`;

  const response = axios.get(BaseURL, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response;
};
export const fetchReviews = async (movieId) => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjFlNjg2YjA3M2NkNTlkYzZmOWNlYjFmMWZjYmQxZSIsIm5iZiI6MTcyMjI4MzI3Mi43MjEzNDMsInN1YiI6IjY2YTdmNDRmY2UwMWI0MTkwZjgwODQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iwJiraXc-icDO3CCD5ygJlzN2vyw-73oUfT5CRELt5s";
  const BaseURL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US'`;

  const response = axios.get(BaseURL, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response;
};
export const fetchSearch = async (query) => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjFlNjg2YjA3M2NkNTlkYzZmOWNlYjFmMWZjYmQxZSIsIm5iZiI6MTcyMjI4MzI3Mi43MjEzNDMsInN1YiI6IjY2YTdmNDRmY2UwMWI0MTkwZjgwODQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iwJiraXc-icDO3CCD5ygJlzN2vyw-73oUfT5CRELt5s";
  const BaseURL = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

  const response = axios.get(BaseURL, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response;
};
