import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUs1 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-12 lg:py-24 bg-customWhite text-customGreen">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center"
      >
        {/* Left side - Images */}
        <motion.div
          className="w-full lg:w-1/2 relative mb-8 lg:mb-0"
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src="https://i.imgur.com/VmDO7lx.jpeg" 
            alt="Interior design" 
            className="w-full rounded-lg shadow-2xl"
          />
          <motion.img 
            src="https://i.imgur.com/R0rwU3P.jpeg" 
            alt="Architectural detail" 
            className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-10 -right-4 sm:-right-6 md:-right-8 lg:-right-10 w-2/3 rounded-lg shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          className="w-full lg:w-1/2 lg:pl-8 xl:pl-16"
          initial={{ x: 50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 leading-tight">
            FINE <span className="text-customAccent">ARCHITECT</span> TO BUILD<br />
            VISION & PASSION
          </h2>
          
          <p className="text-customGreen mb-4 sm:mb-6 text-base sm:text-lg font-light">
            Our inspired solutions have helped shape modern acoustic design. 
            Alluring spaces, internationally recognised for their architectural 
            elegance and exceptional sound management live here.
          </p>
          
          <p className="text-customGreen mb-6 sm:mb-10 text-base sm:text-lg font-light">
            The glory of gardening: hands in the dirt, head in the sun, heart 
            with nature. To nurture a garden.
          </p>

          {/* Skills bars */}
          <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-10">
            <SkillBar skill="Architecture" percentage={70} />
            <SkillBar skill="Interior Design" percentage={90} />
            <SkillBar skill="Construction" percentage={90} />
          </div>

          <div className="flex flex-col sm:flex-row items-center">
            <motion.button
              className="w-full sm:w-auto bg-customGreen text-customWhite px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-light mb-4 sm:mb-0 sm:mr-6 lg:mr-8 hover:bg-customAccent hover:text-customGreen transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About us
            </motion.button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center sm:text-left"
            >
              <img src="/path-to-signature.png" alt="Signature" className="h-12 sm:h-16 mb-2 mx-auto sm:mx-0" />
              <p className="font-light text-base sm:text-lg">Richad Linkon</p>
              <p className="text-xs sm:text-sm text-customGreen font-light">Founder & CEO of Adsett</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const SkillBar = ({ skill, percentage }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ width: 0 }}
      animate={inView ? { width: '100%' } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="flex justify-between mb-1 sm:mb-2">
        <span className="text-base sm:text-lg font-light">{skill}</span>
        <span className="text-base sm:text-lg font-light">{percentage}%</span>
      </div>
      <div className="w-full bg-customGreen bg-opacity-20 rounded-full h-2 sm:h-3">
        <motion.div 
          className="bg-customAccent h-2 sm:h-3 rounded-full" 
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs1;