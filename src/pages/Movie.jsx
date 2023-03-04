import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import { API_KEY, movies } from "../services/api";
import MovieCard from "../components/MovieCard";
import "./Movie.css";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-Us",{
        style:"currency",
        currency:"USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${movies}${id}?api_key=${API_KEY}`;
    getMovie(movieUrl);
  }, [id]);

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsWallet2 />
              Budget:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp />
              Worldwide gross:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit />
              Duration:
            </h3>
            <p>{movie.runtime} minutes</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill />
              Description:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
