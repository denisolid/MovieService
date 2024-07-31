import { useEffect, useState } from "react";
import {
  useParams,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import Loader from "../../components/Loader/Loader";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const response = await fetchMovieDetails(movieId);
        setMovie(response.data);
        console.log(location);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  const handleGoBack = () => {
    if (location.state && location.state.from) {
      navigate(location.state.from, { state: location.state.state });
    } else {
      navigate("/movies");
    }
  };

  return (
    <div>
      {loading && <Loader />}
      {movie && !loading && (
        <>
          <button className={s.goBackButton} onClick={handleGoBack}>
            Go Back
          </button>

          <div className={s.movieDetailsPage}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className={s.info}>
              <h1 className={s.title}>{movie.title}</h1>
              <h3 className={s.title}>Overview:</h3>
              <p className={s.overview}>{movie.overview}</p>
              <p>User score: {(movie.vote_average * 10).toFixed(0)}%</p>
              <h3 className={s.title}>Genres:</h3>
              <ul className={s.genres}>
                {movie.genres.map((e) => (
                  <li key={e.id}>{e.name}</li>
                ))}
              </ul>
            </div>
          </div>

          <nav className={s.links}>
            <Link to={`/movies/${movieId}/cast`} state={location.state}>
              Cast
            </Link>
            <Link to={`/movies/${movieId}/reviews`} state={location.state}>
              Reviews
            </Link>
          </nav>
          <Routes>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
