import { useLocation } from "react-router-dom";
import style from "./MovieReviews.module.css";

const MovieReviews = () => {
  const location = useLocation();
  const { ratings } = location.state || {};
  return (
    <div className={style.movieReviewsPage}>
      <h3>Рейтинг</h3>
      <ul>
        {ratings.map((rating, index) => (
          <li key={index}>
            <p>
              {<span>{rating.Source}</span>} - {rating.Value}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
