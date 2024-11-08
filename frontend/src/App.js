// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar';


import { ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'; // Import icons
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const {user} = useAuthContext()
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
            <div className={`theme-toggle ${theme}`} onClick={toggleTheme}>
              <FontAwesomeIcon icon={faSun} className="icon" /> {/* Light Mode Icon */}
              <div className="toggle-switch"></div>
              <FontAwesomeIcon icon={faMoon} className="icon" /> {/* Dark Mode Icon */}
            </div>
          </div>
        </header>
        <div className="pages">
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to='/login'/>} />
          </Routes>
          <Routes>
            <Route path="/login" element={!user ? <Login /> : <Navigate to='/'/>} />
          </Routes>
          <Routes>
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to='/'/>} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;