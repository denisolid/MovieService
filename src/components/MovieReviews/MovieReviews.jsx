import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import s from "./MovieReviews.module.css";
import Loader from "../../components/Loader/Loader";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div className={s.movieReviews}>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Something went wrong...</p>
      ) : (
        <>
          <h3>Reviews</h3>
          {reviews.length > 0 ? (
            <ul>
              {reviews.map((review) => (
                <li key={review.id} className={s.review}>
                  <h4 className={s.title}>{review.author}</h4>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className={s.noReviews}>
              Do not have any reviews for this movie
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default MovieReviews;
