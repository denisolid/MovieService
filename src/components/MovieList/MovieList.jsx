import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies, children, state }) => {
  const location = useLocation();
  return (
    <>
      <div>
        <h1>{children}</h1>
        <ul className={s.movieList}>
          {movies.map(({ title, id, poster_path }) => (
            <li key={id} className={s.movieCard}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location, state }}
                className={s.movieLink}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                />

                <h3>{title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MovieList;
