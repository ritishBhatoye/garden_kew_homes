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
      <button
        className="absolute top-4 left-4 z-50  bg-customGreen text-customWhite hover:text-transparent duration-75 hover:text-white p-2"
        onClick={() => alert('Booking form or page')}
      >
        BOOK
      </button>
      <button
        className="absolute top-4 right-4 z-50  bg-customGreen text-customWhite  hover:text-transparent duration-75 hover:text-white p-2"
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
              className="absolute top-4 right-4 bg-customGreen p-2"
              onClick={() => setMenuOpen(false)}
            >
              CLOSE
            </button>
            <nav className="flex flex-col items-center space-y-14">
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
                    className={`relative text-lg text-[5rem] py-1 px-6 transition-all duration-400 ${
                      isActive(item.href) ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-800' : 'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-green-500 to-green-800 text-customWhite'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <motion.span
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r  from-green-500 to-green-800"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.25 }}
                      ></motion.span>
                    )}
                    {!isActive(item.href) && (
                      <span 
                        className="absolute bottom-0 left-0 right-0 h-0.5 transition-width duration-500 w-0 group-hover:w-full bg-gradient-to-r  from-green-500 to-green-800"
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
