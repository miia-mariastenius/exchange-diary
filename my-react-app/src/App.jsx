import React from 'react'
import { useState, useEffect } from 'react'
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
  const [showCookiesModal, setShowCookiesModal] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted')
    if (!cookiesAccepted) {
      setShowCookiesModal(true)
    }
  }, [])

  const handleAcceptedCookies = () => {
    // Dismiss the cookies modal and save the state in localStorage
    localStorage.setItem('cookiesAccepted', 'true')
    setShowCookiesModal(false)
  }

  return (
    <>
      <div className="main-app">
        <header>
          <Navbar />
        </header>
        <main>
          {showCookiesModal && (
            <div className="cookies-modal">
              <h1 className="cookies-modal-title">Cookie notice</h1>
              <p>This website uses cookies to enhance your experience. By continuing to browse the site, you agree to our use of cookies.</p>
              <div className="cookies-modal-button">
                <button className="cookies-accept-button" onClick={handleAcceptedCookies}>Accept</button>
              </div>
            </div>
          )}
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
