import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { fetchDetails } from "../../services/api";

const MovieDetailsPage = () => {
  const params = useParams();
  console.log(params);
  const [movie, setMovie] = useState(null);
  // const navigate = useNavigate();
  const location = useLocation();
  const goBackRef = useRef(location?.state || "/movies");

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/users");
  //   }, 15000);
  // }, [navigate]);

  useEffect(() => {
    const fetchMovieDetails=async()=>{
      try {
        
      } catch (error) {
        
      }
    }

  if (!movie) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <Link to={goBackRef.current}>Go back to movies</Link>
      <p>Movie details #{params.movieId}</p>
      <img src={movie.image} />
      <h2>
        {movie.firstName} 
      </h2>
      <p>Email: {movie.email}</p>
      <p>Age: {movie.age}</p>
      <div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Suspense fallback={<h2>Loading your data</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
