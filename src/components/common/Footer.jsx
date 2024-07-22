import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { FaInstagram, FaFacebook, FaLinkedin, FaPinterest, FaYoutube, FaBook } from 'react-icons/fa';

const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    { icon: FaInstagram, label: 'Instagram' },
    { icon: FaFacebook, label: 'Facebook' },
    { icon: FaLinkedin, label: 'LinkedIn' },
    { icon: FaPinterest, label: 'Pinterest' },
    { icon: FaYoutube, label: 'YouTube' },
    { icon: FaBook, label: 'Little Red Book' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <footer ref={ref} className="bg-gradient-to-b from-dark to-primary text-light py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center sm:text-left">
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 mx-auto sm:mx-0 max-w-xs sm:max-w-none">
            <h2 className="text-2xl sm:text-3xl font-light mb-2 sm:mb-4 text-accent">KEW GARDEN HOMES</h2>
            <p className="text-xs sm:text-sm font-light">Bringing your vision to life, together.</p>
            <form className="space-y-3 sm:space-y-4">
              <input type="email" placeholder="Enter your email" className="w-full bg-transparent border-b border-light/30 py-1 sm:py-2 text-xs sm:text-sm focus:outline-none focus:border-accent transition-colors" />
              <button type="submit" className="bg-accent text-dark px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-opacity-90 transition-colors">Subscribe</button>
            </form>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-light mb-2 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm font-light">
              <li><Link to="/about-us" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/homes" className="hover:text-accent transition-colors">Homes</Link></li>
              <li><Link to="/process" className="hover:text-accent transition-colors">Process</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/ndis" className="hover:text-accent transition-colors">NDIS</Link></li>
            
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-light mb-2 sm:mb-4">Contact Us</h3>
            <p className="text-xs sm:text-sm font-light">25 BURWOOD ROAD,<br />HAWTHORN VIC 3122</p>
            <p className="text-xs sm:text-sm font-light">(03) 9810 2800</p>
            <p className="text-xs sm:text-sm font-light">hello@Kew Garden Homes.com.au</p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-light mb-2 sm:mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
              {socialLinks.map((link, index) => (
                <a key={index} href="#" className="text-light hover:text-accent transition-colors">
                  <link.icon className="text-xl sm:text-2xl" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-light/10 text-center">
          <p className="text-xs sm:text-sm font-light">&copy; 2024 Kew Garden Homes. All rights reserved. | <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-accent transition-colors">Terms of Service</a></p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;