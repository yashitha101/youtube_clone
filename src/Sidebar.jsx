import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const Sidebar = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`sidebar ${darkMode ? 'dark' : ''}`}>
      <Link to="/" className="sidebar-item">🏠 Home</Link>
      <Link to="/shorts" className="sidebar-item">🎬 Shorts</Link>
      <Link to="/subscriptions" className="sidebar-item">🔔 Subscriptions</Link>
      <hr />
      <Link to="/history" className="sidebar-item">🕓 History</Link>
      <Link to="/playlists" className="sidebar-item">🎵 Playlists</Link>
      <Link to="/liked" className="sidebar-item">❤️ Liked Videos</Link>
      <Link to="/watch-later" className="sidebar-item">📺 Watch Later</Link>
      <hr />
      <Link to="/settings" className="sidebar-item">⚙️ Settings</Link>
      <Link to="/report-history" className="sidebar-item">📝 Report History</Link>
      <Link to="/help" className="sidebar-item">❓ Help</Link>
      <Link to="/feedback" className="sidebar-item">💬 Send Feedback</Link>
    </div>
  );
};

export default Sidebar;
