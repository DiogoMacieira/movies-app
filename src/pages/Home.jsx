import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { API_KEY } from "../services/api";
import { movies } from "../services/api"; 
import "./MoviesGrid.css";

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async () => {
    const res = await fetch(
      `${movies}top_rated?api_key=${API_KEY}`
    );
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  return (
    <div className="container">
      <h2 className="title">Top Rated Movies:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Loading...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  );
};

export default Home;

