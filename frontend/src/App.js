import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  const [theme, setTheme] = useState('light-mode');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light-mode' ? 'dark-mode' : 'light-mode'));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <div className="container">
            <Navbar />
            <div className={`toggle-switch ${theme}`} onClick={toggleTheme}></div>
          </div>
        </header>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;