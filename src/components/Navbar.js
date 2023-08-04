import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
}

export default Navbar;
