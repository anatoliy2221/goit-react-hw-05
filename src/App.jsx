import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import Navigation from "./components/navigation/Navigation";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/homePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("./pages/moviesPage/MoviesPage.jsx"));
const MovieDetailsPage = lazy(() =>
  import("./pages/movieDetailsPage/MovieDetailsPage.jsx")
);
const MovieCast = lazy(() => import("./components/movieCast/MovieCast.jsx"));
const MovieReviews = lazy(() =>
  import("./components/movieReviews/MovieReviews.jsx")
);

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense>
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
    </>
  );
};

export default App;
