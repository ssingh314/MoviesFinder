import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Favorites from './components/Favorites';
import MovieDetails from './components/MovieDetails';

const App = () => {
  const [favorites, setFavorites] = useState([]);
  
  const addToFavorites = movie => {
    setFavorites([...favorites, movie]);
  };

  const removeFromFavorites = movie => {
    setFavorites(favorites.filter(favorite => favorite.imdbID !== movie.imdbID));
  };
  
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/movie/:id" element={<MovieDetails addToFavorites={addToFavorites} favorites={favorites} />} />
      <Route path="/favorites" element={<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
  );
}

export default App;

