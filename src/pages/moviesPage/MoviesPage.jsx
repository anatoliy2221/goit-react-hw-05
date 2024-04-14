import { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import { getMoviesByQuery } from "../../data-api";
import MovieList from "../../components/movieList/MovieList";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import { Container } from "../../components/container/Container";
import { Section } from "../../components/section/Section";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const moviesByQuery = searchParams.get("query");

  useEffect(() => {
    if (!moviesByQuery) return;
    const fetchdata = async () => {
      setIsLoading(true);
      try {
        const data = await getMoviesByQuery(moviesByQuery);
        setMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchdata();
  }, [moviesByQuery]);

  const onHandleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  return (
 <Section>
      <Container>
        <SearchBar onSubmit={onHandleSubmit} />
        {isLoading && <Loader />}
        {error && <ErrorMessage>❌ Something went wrong</ErrorMessage> }
        {movies.length > 0 && <MovieList movies={movies} />}
      </Container>
 </Section>
  );
};

export default MoviesPage;
