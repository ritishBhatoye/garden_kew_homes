import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ image, icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-customWhite w-full"
    >
      <img src={image} alt={title} className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300 hover:scale-105"/>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-customGreen/60 to-customGreen/80"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
          className="bg-customAccent bg-opacity-20 p-3 sm:p-4 rounded-full mb-3 sm:mb-4 backdrop-blur-sm"
        >
          <img src={icon} alt={`${title} Icon`} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"/>
        </motion.div>
        <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-customWhite mb-2">{title}</h4>
        <p className="text-customWhite text-xs sm:text-sm md:text-base text-center font-light">{description}</p>
      </div>
    </motion.div>
  );
};

const AboutUs2 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-gradient-to-br from-customGreen via-customGreen to-customGreen/90 text-customWhite py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-customWhite via-customAccent to-customWhite">SERVICES</h2>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-2 sm:mt-4 text-customWhite font-light">WHAT WE DO FOR YOU</h3>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <ServiceCard
            image="https://i.imgur.com/ZsmQpwJ.jpeg"
            icon="/path/to/icon1.png"
            title="INTERIOR DESIGN"
            description="Transform your space with our expert interior design services."
          />
          <ServiceCard
            image="https://i.imgur.com/YN6aSFD.jpeg"
            icon="/path/to/icon2.png"
            title="ARCHITECTURE"
            description="Bring your architectural visions to life with our innovative designs."
          />
          <ServiceCard
            image="https://i.imgur.com/HPfpCTK.jpeg"
            icon="/path/to/icon3.png"
            title="LANDSCAPE DESIGN"
            description="Create stunning outdoor spaces that complement your lifestyle."
          />
          <ServiceCard
            image="https://i.imgur.com/StiERdE.jpeg"
            icon="/path/to/icon4.png"
            title="URBAN DESIGN"
            description="Shape the future of cities with our sustainable urban design solutions."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs2;