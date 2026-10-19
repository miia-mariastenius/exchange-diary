import React from 'react'
import { useState } from 'react'
import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import MyExchange from './pages/MyExchange.jsx';
import Months12 from './pages/Months12.jsx';
import Months34 from './pages/Months34.jsx';
import Months56 from './pages/Months56.jsx';
import SaavutettavuusSeloste from './pages/SaavutettavuusSeloste.jsx';
import Footer from './components/Footer.jsx';


function App() {

  return (
    <>
      <div className="main-app">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MyExchange />} />
            <Route path="/months-1-2" element={<Months12 />} />
            <Route path="/months-3-4" element={<Months34 />} />
            <Route path="/months-5-6" element={<Months56 />} />
            <Route path="/accessibility-statement" element={<SaavutettavuusSeloste />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
