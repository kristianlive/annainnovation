import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import VaraTjanster from './components/Varatjanster';
import Prislista from './components/Prislista';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <main>
          <Routes>
            <Route path="/login" element={<Login onLogin={setIsAuthenticated} />} />
            <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
            <Route path="/about" element={<About isAuthenticated={isAuthenticated} />} />
            <Route path="/varatjanster" element={<VaraTjanster isAuthenticated={isAuthenticated} />} />
            <Route path="/prislista" element={<Prislista isAuthenticated={isAuthenticated} />} />
            <Route path="/contact" element={<Contact isAuthenticated={isAuthenticated} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
