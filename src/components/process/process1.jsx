import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Process1 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced from 0.3
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Reduced y from 30
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200, // Increased from 100
        damping: 15, // Added damping for faster settling
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="flex flex-col lg:flex-row bg-customWhite min-h-screen"
      transition={{ duration: 0.5 }} // Added transition for faster initial animation
    >
      <div className="w-full lg:w-1/2 relative overflow-hidden h-[50vh] lg:h-auto">
        <motion.img
          src="https://i.imgur.com/YN6aSFD.jpeg"
          alt="Living Room"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }} // Reduced from 1.2
        />
        <motion.div
          className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black bg-opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }} // Reduced delay from 0.5 and duration from 0.8
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin text-customWhite tracking-wider text-center px-4">
            REAL ESTATE
          </h1>
        </motion.div>
      </div>
      <div className="w-full lg:w-1/2 bg-customGreen p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center">
        <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 text-customWhite">SIMPLE STEPS</motion.h2>
        <motion.p variants={itemVariants} className="text-base sm:text-lg mb-8 sm:mb-12 text-customWhite font-light leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
        {[
          { title: "VIEW REAL ESTATE", number: "01" },
          { title: "REQUEST A VISIT", number: "02" },
          { title: "TAKE THE KEYS", number: "03" },
        ].map((step, index) => (
          <motion.div key={index} variants={itemVariants} className="flex items-start mb-6 sm:mb-8 last:mb-0 group">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-customAccent rounded-full transition-all duration-300 group-hover:scale-110">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-customGreen" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM7.05 6.05a7.002 7.002 0 011.414 1.414L5.318 10l3.146 3.146A7.002 7.002 0 1110 2a7 7 0 00-2.95.55zM13 8h4v2h-4V8zM7 8v2H3V8h4z"></path>
              </svg>
            </div>
            <div className="ml-4 sm:ml-6 flex-grow">
              <h3 className="text-lg sm:text-xl font-semibold text-customWhite mb-1 sm:mb-2 transition-all duration-300 group-hover:text-customAccent">{step.title}</h3>
              <p className="text-sm sm:text-base text-customWhite font-light leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </div>
            <div className="ml-auto text-customAccent text-2xl sm:text-3xl md:text-4xl font-thin opacity-50 transition-all duration-300 group-hover:opacity-100">{step.number}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Process1;