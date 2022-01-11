import './App.css'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CopyRight from './components/CopyRight'
import HomePage from './components/HomePage'
import Menu from './components/Menu'
import Offers from './components/Offers'
import Contact from './components/Contact'
import { useState, useEffect } from 'react'

function App() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    })
  }
  const [showButton, setShowButton] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 20) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </Router>
      {showButton && (
        <button onClick={scrollTop} className="back-to-top">
          &#8679;
        </button>
      )}
      <Contact />

      {/*       <CopyRight /> */}
    </div>
  )
}

export default App
/* comment */
