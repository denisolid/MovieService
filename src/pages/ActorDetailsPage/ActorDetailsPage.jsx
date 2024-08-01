import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchActorDetails } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import s from "./ActorDetailsPage.module.css";

const ActorDetailsPage = () => {
  const { actorId } = useParams();
  const [actor, setActor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActor = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchActorDetails(actorId);
        setActor(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchActor();
  }, [actorId]);

  return (
    <div className={s.actorDetailsPage}>
      {loading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {actor && (
        <>
          <h1>{actor.name}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            alt={actor.name}
          />
          <p>{actor.biography}</p>
        </>
      )}
    </div>
  );
};

export default ActorDetailsPage;
