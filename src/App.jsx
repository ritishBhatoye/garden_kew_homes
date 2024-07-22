import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import AboutUs from './pages/AboutUs';
import Homes from './pages/Homes';
import Process from './pages/Process';
import Stories from './pages/Stories';
import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage';
import Booking from './pages/Booking';
import LoadingAnimation from './components/common/Loading';
import NDIS from './pages/NDIS';
import HouseDetail from './components/homes/houseDetailScreen';
import ScrollToTop from './components/common/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      {/* <LoadingAnimation /> */}
      <Routes>   
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/homes" element={<Homes />} />
        <Route path="/process" element={<Process />} />
        <Route path="/stories" element={<Stories/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/ndis" element={<NDIS/>} />
        {/* <Route index element={<DisplayHomes />} /> */}
          <Route path="house/:id" element={<HouseDetail />} />
        <Route path="/booking" element={<Booking/>} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;