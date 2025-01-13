import { useLocation } from "react-router-dom";
import style from "./MovieCast.module.css";

const MovieCast = () => {
  const location = useLocation();
  const { actors } = location.state || {};
  const actorsList = actors ? actors.split(",") : [];

  return (
    <div className={style.movieCastPage}>
      <h3>У фільмі знімалися</h3>
      <ul>
        {actorsList.map((actor, index) => (
          <li key={index}>{actor}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
