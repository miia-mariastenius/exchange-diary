import React from 'react'
import { useState } from 'react'
import './css/App.css';
import Navbar from './components/Navbar.jsx';

function App() {

  return (
    <>
      <div className="main-app">
        <header>
          <Navbar />
        </header>
      </div>
    </>
  )
}

export default App
