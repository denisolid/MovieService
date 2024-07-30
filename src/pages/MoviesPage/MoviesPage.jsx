import { useState } from "react";
import { searchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await searchMovies(query);
      setMovies(response.data.results);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className={s.moviesPage}>
      <h1>Search Movies</h1>
      <div className={s.searchBar}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
