import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      setLoading(true);
      try {
        const response = await fetchMovieCast(movieId);
        setCast(response.data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div className={s.movieCast}>
      {loading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {!loading && cast.length > 0 && (
        <>
          <h3>Cast</h3>
          <ul className={s.castList}>
            {cast.map(
              ({ profile_path, character, original_name, cast_id, id }) => (
                <li key={cast_id} className={s.castMember}>
                  <Link to={`/actors/${id}`} className={s.castLink}>
                    {profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                        alt={original_name}
                      />
                    ) : (
                      <div className={s.noImage}>No Image</div>
                    )}
                    <h3>{original_name}</h3>
                    <p>Character: {character}</p>
                  </Link>
                </li>
              )
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default MovieCast;
