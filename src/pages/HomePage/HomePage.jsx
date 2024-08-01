import { useEffect, useState } from "react";

import { fetchTrends } from "../../services/api";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import MoviesList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchTrends(page);
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      {loading && <Loader />}
      {error && <p>Something wrong...</p>}

      <MoviesList movies={movies}>Tredings movies :</MoviesList>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default HomePage;
