import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query === "") {
      setMovies([]);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      setLoading(true);
      try {
        const response = await searchMovies(query);
        setMovies(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    setSearchParams({ query: e.target.value });
  };

  return (
    <div className={s.moviesPage}>
      <h1>Search Movies</h1>
      <div className={s.searchBar}>
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder="Search for movies..."
        />
      </div>
      {loading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {!loading && <MovieList movies={movies} state={{ query }} />}
    </div>
  );
};

export default MoviesPage;
