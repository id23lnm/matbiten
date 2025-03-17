import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import FindUs from './pages/FindUs';
import ContactUs from './pages/ContactUs';


function App() {
  
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meny" element={<Menu />} />
		<Route path="/om-oss" element={<AboutUs />} />
		<Route path="/hitta-hit" element={<FindUs />} />
		<Route path="/kontakta-oss" element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App


