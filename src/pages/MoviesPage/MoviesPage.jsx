import { useState } from "react";
import servise from "../../servise/servise";
import MovieList from "../../component/MovieList/MovieList";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formValueInput = form.elements.searchMoviesInput.value;
    const response = await servise(formValueInput);
    setMovies(response.Search || []);
    form.reset();
  };

  return (
    <div className={styles.moviesPage}>
      {!movies && <p>Який фільм ви хочете знайти?</p>}
      <form onSubmit={handleSearch}>
        <input
          name="searchMoviesInput"
          type="text"
          placeholder="Search for movies"
        />
        <button type="submit">Search</button>
      </form>
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
