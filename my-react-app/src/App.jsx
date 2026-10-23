import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import MyExchange from './pages/MyExchange.jsx';
import Months12 from './pages/Months12.jsx';
import Months34 from './pages/Months34.jsx';
import Months56 from './pages/Months56.jsx';
import SaavutettavuusSeloste from './pages/SaavutettavuusSeloste.jsx';
import Footer from './components/Footer.jsx';
import CookiesModal from './components/CookiesModal.jsx';


function App() {
  const [showCookiesModal, setShowCookiesModal] = useState(false);
  const modalRef = useRef(null);

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

  useEffect(() => {
    if (!showCookiesModal) return;
    const focusableElements = modalRef.current.querySelectorAll('a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])',)
    if (focusableElements.length === 0) return;
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const trap = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault()
        lastElement.focus()
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener("keydown", trap)
    return () => document.removeEventListener("keydown", trap)
  }, [showCookiesModal])

  useEffect(() => {
    if (!showCookiesModal) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleAcceptedCookies()
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [showCookiesModal, handleAcceptedCookies])

  return (
    <>
      <div className="main-app">
        {showCookiesModal && (
          <CookiesModal handleAcceptedCookies={handleAcceptedCookies} modalRef={modalRef} />
        )}
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
