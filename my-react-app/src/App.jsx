import React from 'react'
import { useState } from 'react'
import './css/App.css';
import Navbar from './components/Navbar.jsx';
import MyExchange from './pages/MyExchange.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
      <div className="main-app">
        <header>
          <Navbar />
        </header>
        <div className="content">
          <MyExchange />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
