import { Link, useLocation } from "react-router-dom";
import s from "./ActorList.module.css";

const ActorList = ({ actors }) => {
  const location = useLocation();
  return (
    <ul className={s.actorList}>
      {actors.map(({ id, name, profile_path }) => (
        <li key={id} className={s.actorCard}>
          <Link
            to={`/actors/${id}`}
            state={{ from: location }}
            className={s.actorLink}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={name}
            />
            <p>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ActorList;
