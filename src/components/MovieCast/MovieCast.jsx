import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";

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
    <div>
      <h3>Cast</h3>
      <ul>
        {cast.map(({ profile_path, actor, original_name, cast_id }) => (
          <li key={cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={original_name}
              height={120}
            />
            <h3>{original_name}</h3>
            <p>Character: {actor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
