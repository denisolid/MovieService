import { useEffect, useState } from "react";

import { fetchTrends } from "../../services/api";

import Loader from "../../components/Loader/Loader";
import MoviesList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchTrends();
        setMovies(res.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {error && <p>Something wrong...</p>}

      <MoviesList movies={movies}>Tredings movies :</MoviesList>
    </>
  );
};

export default HomePage;
