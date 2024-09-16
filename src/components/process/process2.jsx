import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import anime from 'animejs/lib/anime.es.js';

gsap.registerPlugin(ScrollTrigger);

const Process2 = () => {
  const [selectedStep, setSelectedStep] = useState(1);
  const images = [
    "https://i.imgur.com/dqZD3Sg.jpeg",
    "https://i.imgur.com/bHP6622.jpeg",
    "https://i.imgur.com/fYDBYVj.jpeg",
    "https://i.imgur.com/I0246Uo.jpeg",
    "https://i.imgur.com/OwucEfR.jpeg",
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      gsap.to('.process-title', {
        y: 0,
        opacity: 1,
        duration: 0.5, // Reduced from 1
        ease: 'power2.out', // Changed from power3.out for faster animation
        scrollTrigger: {
          trigger: '.process-title',
          start: 'top 80%',
        },
      });

      anime({
        targets: '.step-item',
        translateY: [30, 0], // Reduced from [50, 0]
        opacity: [0, 1],
        delay: anime.stagger(50), // Reduced from 150
        duration: 400, // Added duration for faster animation
        easing: 'easeOutQuad',
      });

      gsap.to('.image-container', {
        scale: 1,
        opacity: 1,
        duration: 0.5, // Reduced from 1
        ease: 'power2.out', // Changed from power3.out
        scrollTrigger: {
          trigger: '.image-container',
          start: 'top 80%',
        },
      });
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.5, // Reduced from 0.8
        ease: "easeOut",
        staggerChildren: 0.1 // Reduced from 0.3
      } 
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Reduced y from 30
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" } // Reduced from 0.6
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col lg:flex-row items-stretch py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-customWhite to-gray-100 min-h-screen px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full lg:w-1/2 p-4 md:p-6 lg:p-8 flex flex-col justify-center">
        <motion.h2 variants={itemVariants} className="process-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 text-customGreen tracking-tight">OWN YOUR HOME</motion.h2>
        <motion.h3 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4 text-customAccent">HOME BUYING PROCESS</motion.h3>
        <motion.p variants={itemVariants} className="mb-4 sm:mb-6 lg:mb-8 text-customGreenDark font-light leading-relaxed text-base sm:text-lg md:text-xl">Embark on your journey to homeownership with our streamlined process. We're here to guide you every step of the way, ensuring a smooth and enjoyable experience.</motion.p>
        
        <div className="space-y-2 sm:space-y-4">
          {[1, 2, 3, 4, 5].map((step) => (
            <motion.div
              key={step}
              variants={itemVariants}
              className={`step-item bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-3 sm:p-4 transition-all duration-300 hover:shadow-xl hover:bg-opacity-70 cursor-pointer flex items-center ${selectedStep === step ? 'border-2 border-customAccent' : ''}`}
              onClick={() => setSelectedStep(step)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${selectedStep === step ? 'bg-customGreen' : 'bg-customAccent'} rounded-full flex items-center justify-center mr-3 sm:mr-4 transition-colors duration-300`}>
                <span className="text-white font-bold text-sm sm:text-base md:text-lg">{step}</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-customGreen">{getStepTitle(step)}</h4>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-4 md:p-6 lg:p-8 flex items-center mt-6 lg:mt-0">
        <motion.div
          className="image-container relative overflow-hidden rounded-lg shadow-xl w-full h-64 sm:h-80 md:h-96 lg:h-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedStep}
              src={images[selectedStep - 1]}
              alt={`Step ${selectedStep}`}
              className="w-full h-full object-cover rounded-lg"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 sm:p-6 flex flex-col justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{getStepTitle(selectedStep)}</h3>
            <p className="text-white text-opacity-90 mb-2 sm:mb-4 font-light text-sm sm:text-base">{getStepDescription(selectedStep)}</p>
            <ul className="list-disc pl-5 space-y-1 text-white text-opacity-90 font-light text-sm sm:text-base">
              {getKeyPoints(selectedStep).map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const getStepTitle = (step) => {
  const titles = [
    "Initial Consultation",
    "Property Search & Viewings",
    "Design & Planning",
    "Construction & Progress Updates",
    "Final Inspection & Handover"
  ];
  return titles[step - 1];
};

const getStepDescription = (step) => {
  const descriptions = [
    "We start by understanding your vision and requirements for your new home.",
    "We present a selection of properties that match your criteria.",
    "Our architects and designers work with you to create a customized plan for your new home.",
    "Once the plan is finalized, construction begins. We provide regular updates on the progress.",
    "After construction is complete, we conduct a thorough inspection with you."
  ];
  return descriptions[step - 1];
};

const getKeyPoints = (step) => {
  const keyPoints = [
    [
      "Discussing the desired architectural style",
      "Understanding family needs",
      "Setting realistic expectations regarding costs and timelines"
    ],
    [
      "Utilizing our extensive network to find the best properties",
      "Providing virtual tours if in-person visits are not possible",
      "Offering detailed reports on each property"
    ],
    [
      "Incorporating sustainable and eco-friendly building practices",
      "Ensuring compliance with local building codes and regulations",
      "Providing options for smart home technology integration"
    ],
    [
      "Using high-quality materials and experienced contractors",
      "Maintaining open communication to address any concerns promptly",
      "Scheduling regular site visits for you to see the progress first-hand"
    ],
    [
      "Conducting a detailed walk-through to ensure all aspects meet your expectations",
      "Providing a comprehensive home manual with maintenance tips",
      "Offering post-move-in support to address any issues that may arise"
    ]
  ];
  return keyPoints[step - 1];
};

export default Process2;