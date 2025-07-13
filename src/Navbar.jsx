import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import './global.css';
import yl from './yl.jpg';     
import yld from './yld.jpg';   

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) {
      navigate(`/search/${encodeURIComponent(term)}`);
      setTerm('');
    }
  };

  return (
    <div className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="nav-left youtube-logo">
        <img src={darkMode ? yld : yl} alt="YouTube Logo" />
      </div>

      <div className="nav-center search-container">
        <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit" className="search-button">🔍</button>
        </form>
      </div>

      <div className="nav-right">
        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
