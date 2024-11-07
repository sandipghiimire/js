import React from 'react'
import { Router, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'
const MyRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Footer/>} />
        </Routes>
    </Router>
  )
}

export default MyRoutes