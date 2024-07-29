import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import HomePage from "../pages/HomePage/HomePage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MovieCast from "./MovieCast/MovieCast";
import MovieReviews from "./MovieReviews/MovieReviews";
import { lazy, Suspense } from "react";

export const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<h2>Loading your page</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
