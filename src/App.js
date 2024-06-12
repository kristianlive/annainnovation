import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import VaraTjanster from './components/Varatjanster';
import Prislista from './components/Prislista'; // Импортируем новый компонент
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home'; // Импортируем компонент Home

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/varatjanster" element={<VaraTjanster />} />
            <Route path="/prislista" element={<Prislista />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
