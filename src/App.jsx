import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, useTheme } from './ThemeContext';
import AppRoutes from './AppRoutes';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const ThemedApp = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <AppRoutes />
      </div>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <Router>
      <ThemedApp />
    </Router>
  </ThemeProvider>
);

export default App;
