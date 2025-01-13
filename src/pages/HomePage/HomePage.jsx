import { useState, useEffect } from "react";
import servise from "../../servise/servise.jsx";
import MovieList from "../../component/MovieList/MovieList.jsx";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await servise("popular");
      console.log(response);

      setMovies(response.Search || []);
    };
    fetchMovies();
  }, []);

  return (
    <div className={styles.homePage}>
      <h1>Популярні фільми</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
