import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import AboutUs from './pages/AboutUs';
import Homes from './pages/Homes';
import Process from './pages/Process';
import Stories from './pages/Stories';
import DisplayHomes from './pages/DisplayHomes';
import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage';
import LoadingAnimation from './components/common/Loading';

const App = () => {
  return (
    <Router>

      <Navbar />
      {/* <LoadingAnimation /> */}
      <Routes>   
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/homes" element={<Homes />} />
        <Route path="/process" element={<Process />} />
        <Route path="/stories" element={<Stories/>} />
        <Route path="/display_homes" element={<DisplayHomes />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
