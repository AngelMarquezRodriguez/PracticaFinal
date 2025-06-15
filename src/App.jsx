import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Principal from './pages/Principal';
import Peliculas from './pages/Peliculas';
import './App.css'; // Importa tu archivo CSS para estilos globales

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Menu />
        <main className='main-content'>
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/peliculas" element={<Peliculas />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
