import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header>
      <img src="assets/icone.png" alt="Logo do site" />
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
    </header>
  );
}
