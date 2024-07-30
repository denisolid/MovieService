import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies, children, state }) => {
  return (
    <>
      <div>
        <h1>{children}</h1>
        <ul className={s.movieList}>
          {movies.map(({ title, id, poster_path }) => (
            <li key={id} className={s.movieCard}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
              />
              <Link to={`/movies/${id}`} state={state}>
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MovieList;
