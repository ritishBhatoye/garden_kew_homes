import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import workProcess1 from '../../assets/images/workprocess/work-process-1.jpg';
import workProcess2 from '../../assets/images/workprocess/work-process-2.jpg';
import workProcess3 from '../../assets/images/workprocess/work-process-3.jpg';
import workProcess4 from '../../assets/images/workprocess/work-process-4.jpg';
import workProcess5 from '../../assets/images/workprocess/work-process-5.jpg';

const Process3 = () => {
  const workProcesses = [
    {
      image: workProcess1,
      number: '01',
      title: 'Establish Client Needs',
      description: 'Our first priority is to listen and understand, then to validate and articulate your unique, actual needs. This is not a passive process, because oftentimes a client does not know what it needs to achieve its goal. With your decide together which objectives are in your interest.'
    },
    {
      image: workProcess2,
      number: '02',
      title: 'Concept Development',
      description: 'We work collaboratively with you to develop a clear and comprehensive concept that aligns with your vision and goals.'
    },
    {
      image: workProcess3,
      number: '03',
      title: 'Design Implementation',
      description: 'Our first priority is to listen and understand, then to validate and articulate your unique, actual needs. This is not a passive process, because oftentimes a client does not know what it needs to achieve its goal. With your decide together which objectives are in your interest.'
    },
    {
      image: workProcess4,
      number: '04',
      title: 'Construction Management',
      description: 'We ensure that the construction process runs smoothly and efficiently, managing all aspects from start to finish.'
    },
    {
      image: workProcess4,
      number: '05',
      title: 'ADD RANDOM',
      description: 'We ensure that the construction process runs smoothly and efficiently, managing all aspects from start to finish.'
    },
    {
      image: workProcess5,
      number: '06',
      title: 'Final Delivery',
      description: 'We deliver the final product to you, ensuring it meets all your expectations and requirements.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 overflow-hidden">
      {workProcesses.map((process, index) => (
        <ProcessItem key={index} process={process} index={index} />
      ))}
    </div>
  );
};

const ProcessItem = ({ process, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }} // Reduced y from 50
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }} // Reduced duration from 0.8 and delay multiplier from 0.2
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 last:mb-0`}
    >
      <motion.img
        src={process.image}
        alt={process.title}
        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-lg shadow-custom mb-6 sm:mb-8 lg:mb-0"
        whileHover={{ scale: 1.03 }} // Reduced scale from 1.05
        transition={{ duration: 0.2 }} // Reduced from 0.3
      />
      <div className={`w-full sm:w-3/4 md:w-2/3 lg:w-1/2 ${isEven ? 'lg:ml-12' : 'lg:mr-12'}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }} // Reduced x from -50/50
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 }} // Reduced duration from 0.8 and delay multiplier from 0.3
          className="flex items-center mb-3 sm:mb-4"
        >
          <span className="text-4xl sm:text-5xl md:text-6xl font-thin text-customAccent mr-3 sm:mr-4">{process.number}</span>
          <h2 className="text-2xl sm:text-3xl font-light text-customGreen">{process.title}</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 }} // Reduced duration from 0.8 and delay multiplier from 0.4
          className="text-base sm:text-lg text-customGreenDark font-light leading-relaxed"
        >
          {process.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Process3;