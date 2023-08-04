import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.css';



const Home = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
   // api 
    const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=6e0d9a96`);

    setMovies(response.data.Search);
  };

  return (
    <div>
      <hr></hr>
      <form onSubmit={searchMovies} className="search-form">         
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} /> 
      <br></br>   
      <p><b>Write movies full name or there will be error</b></p>     
      <button type="submit">Search</button>       
      </form>

      <div>
        {movies.map((movie, index) => (
          <Link to={`/movie/${movie.imdbID}`} key={index}>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
