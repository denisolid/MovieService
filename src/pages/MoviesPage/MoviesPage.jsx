import { useState } from "react";
import { searchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

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
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>Something went wrong...</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
