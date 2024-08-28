import React from 'react';
import SearchBar from './SearchBar';
import '../styles/Header.css';


const Header = () => (
  <header className="header">
    <h1 className="logo">🎵 Music Player</h1>
    <SearchBar />
  </header>
);

export default Header;
