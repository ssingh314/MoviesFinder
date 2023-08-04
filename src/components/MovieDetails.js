import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './styles.css';



const MovieDetails = ({ addToFavorites, favorites }) => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=6e0d9a96`);
      setMovie(response.data);
    };
    fetchMovie();
  }, [id]);

  const handleAddToFavorites = () => {
    addToFavorites(movie);
    window.alert("Movie added to favorites!");
  };

  return (
    <div>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <button onClick={handleAddToFavorites}>Add to Favorites</button>
    </div>
  );
}

export default MovieDetails;
