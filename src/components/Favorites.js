import React from 'react';
import './styles.css';


const Favorites = (props) => {

  return (
    <div>
      {props.favorites.map((movie, index) => (
        <div key={index}>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <br></br>
          <button onClick={() => props.removeFromFavorites(movie)}>Remove from Favorites</button>
          
        </div>
      ))}
    </div>
  );
}

export default Favorites;
