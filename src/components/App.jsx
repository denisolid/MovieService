import { Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { lazy, Suspense } from "react";
import MovieCast from "./MovieCast/MovieCast";
import MovieReviews from "./MovieReviews/MovieReviews";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PopularActorsPage from "../pages/PopularActorsPage/PopularActorsPage";
import ActorDetailsPage from "../pages/ActorDetailsPage/ActorDetailsPage";
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);
// const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="/actors" element={<PopularActorsPage />} />
          <Route path="/actors/:actorId" element={<ActorDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
