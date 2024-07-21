import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from "../../constants";

const FadeVariants = {
  hide: { opacity: 0, y: -20 },
  fade: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href) => location.pathname === href;

  return (
    <>
      <div className="absolute top-2 md:top-4 left-1/2 transform -translate-x-1/2 z-50 text-center w-full px-20 md:px-24">
        <Link to='/' className="text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-6000 to-green-800 truncate" style={{ fontFamily: 'Poppins, sans-serif' }}>
          KEW GARDEN HOMES
        </Link>
      </div>

      <Link
        className="absolute top-2 left-2 md:top-4 md:left-4 z-50 bg-customGreen text-customWhite hover:text-transparent duration-75 hover:text-white p-1 md:p-2 text-sm md:text-base"
        to='/booking'
      >
        BOOK
      </Link>
      <button
        className="absolute top-2 right-2 md:top-4 md:right-4 z-50 bg-customGreen text-customWhite hover:text-transparent duration-75 hover:text-white p-1 md:p-2 text-sm md:text-base"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? 'CLOSE' : 'MENU'}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-40 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              className="absolute top-2 right-2 md:top-4 md:right-4 bg-customGreen p-1 md:p-2 text-sm md:text-base"
              onClick={() => setMenuOpen(false)}
            >
              CLOSE
            </button>
            <nav className="flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
              {navItems.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
                  whileTap={{ scale: 0.95 }}
                  variants={FadeVariants}
                  initial="hide"
                  animate="fade"
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className={`relative text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl py-1 px-2 sm:px-3 md:px-4 lg:px-5 transition-all text-customWhite duration-400 ${
                      isActive(item.href) ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-800' : 'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-green-500 to-green-800 text-customWhite'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <motion.span
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-green-800"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.25 }}
                      ></motion.span>
                    )}
                    {!isActive(item.href) && (
                      <span 
                        className="absolute bottom-0 left-0 right-0 h-0.5 transition-width duration-500 w-0 group-hover:w-full bg-gradient-to-r from-green-500 to-green-800"
                      ></span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;