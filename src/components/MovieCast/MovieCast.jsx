import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetchMovieCast(movieId);
        setCast(response.data.cast);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div className={s.movieCast}>
      <h3>Cast</h3>
      <ul className={s.castList}>
        {cast.map(({ profile_path, character, original_name, cast_id }) => (
          <li key={cast_id} className={s.castMember}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={original_name}
            />
            <h3>{original_name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
