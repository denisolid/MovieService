import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjFlNjg2YjA3M2NkNTlkYzZmOWNlYjFmMWZjYmQxZSIsIm5iZiI6MTcyMjI4MzI3Mi43MjEzNDMsInN1YiI6IjY2YTdmNDRmY2UwMWI0MTkwZjgwODQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iwJiraXc-icDO3CCD5ygJlzN2vyw-73oUfT5CRELt5s";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrends = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie?query=${query}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response;
};
