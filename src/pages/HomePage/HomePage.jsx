import { useEffect, useState } from "react";

import { fetchTrends } from "../../services/api";

import { TailSpin } from "react-loader-spinner";
import MoviesList from "../../components/MoviesList/MoviesList";

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
      {loading && (
        <TailSpin
          height="80"
          width="80"
          radius="9"
          color="black"
          ariaLabel="loading"
        />
      )}
      {error && <p>Something wrong...</p>}

      <MoviesList movies={movies}>Tredings movies :</MoviesList>
    </>
  );
};

export default HomePage;
