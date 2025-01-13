import { Link } from "react-router-dom";
import styles from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <div className={styles.movieList}>
      {movies.map((movie) => (
        <Link
          to={`/movies/${movie.imdbID}`}
          key={movie.imdbID}
          className={styles.movieItem}
        >
          <div className={styles.movieCard}>
            <h3>{movie.Title}</h3>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
