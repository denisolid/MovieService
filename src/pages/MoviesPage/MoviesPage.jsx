import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [query, setQuery] = useState(searchParams.get("query") || "");
  const query = searchParams.get("query") || "";
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const page = Number(searchParams.get("page")) || 1;
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        try {
          setLoading(true);
          const response = await searchMovies(query, page);
          setMovies(response.data.results);
          setTotalPages(response.data.total_pages);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchMovies();
    }
  }, [query, page]);

  const handleQueryChange = (e) => {
    setSearchParams({ query: e.target.value, page: 1 });
  };

  const handlePageChange = (newPage) => {
    setSearchParams({ query, page: newPage });
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
      {!loading && <MovieList movies={movies} />}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MoviesPage;
