import { useState, useEffect } from "react";
import { getMovies } from "../../data-api";
import MovieList from "../../components/movieList/MovieList";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import { Section } from "../../components/section/Section";
import { Container } from "../../components/container/Container";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { results } = await getMovies();
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
<Section>
    <Container>
        <div>
          <h1>Trending today</h1>
          {isLoading && <Loader />}
          {error && <ErrorMessage>❌ Something went wrong</ErrorMessage>}
          <MovieList movies={movies} />
        </div>
    </Container>
</Section>
  );
};

export default HomePage;
