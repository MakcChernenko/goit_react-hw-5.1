import { useState, useEffect } from "react";
import { useParams, useNavigate, Link, Outlet } from "react-router-dom";
import servise from "../../servise/servise";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await servise(movieId, true);
        if (response && response.Error) {
          setError("Movie not found.");
          console.log(response);
          setMovie(null);
        } else {
          setMovie(response);
          console.log(response);
        }
      } catch (error) {
        setError("An error occurred while fetching movie details.");
        setMovie(null);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (error) {
    return (
      <div className={styles.error}>
        <p>{error}</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.movieDetailsPage}>
      <img src={movie.Poster} alt={movie.Title} />
      <div>
        <h1>{movie.Title}</h1>
        <div>
          <Link to="cast" state={{ actors: movie.Actors }}>
            Cast
          </Link>
          <Link to="reviews" state={{ ratings: movie.Ratings }}>
            Reviews
          </Link>
          <Outlet />
        </div>
        <h3>Опис</h3>
        <p>{movie.Plot}</p>
        <div className={styles.movieDetailsPageRatingEndBack}>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
