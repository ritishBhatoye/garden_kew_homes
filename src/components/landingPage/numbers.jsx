import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPaintBrush, FaBuilding, FaTree, FaCity } from 'react-icons/fa';

import home1 from '../../assets/images/home-1.jpg';


gsap.registerPlugin(ScrollTrigger);

const customGreen = '#2B704E';

const Card = ({ icon, title, subtitle, number, delay }) => {
  return (
    <motion.div
      className="relative p-4 text-white rounded-lg flex-shrink-0 bg-cover bg-center bg-black bg-opacity-50 hover:bg-customGreen transition duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
      style={{ height: '300px', width: '220px' }}
    >
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-center mb-4 text-3xl">{icon}</div>
          <span className="block text-xl">{title}</span>
          <p className="text-sm">{subtitle}</p>
        </div>
        <div className="text-right">{number}</div>
      </div>
    </motion.div>
  );
};

const Numbers = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace(/[^0-9]/g, '');
        const speed = 100; // Decreased speed for faster counting

        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          if (target >= 1000) {
            counter.innerText = `${(target / 1000).toFixed(1).replace('.0', '')}K`;
          } else {
            counter.innerText = target;
          }
        }
      };

      gsap.fromTo(counter, { opacity: 0 }, { opacity: 1, scrollTrigger: {
        trigger: counter,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onEnter: updateCount
      }});
    });

  }, []);

  return (
    <div className="w-full">
      <div className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-96 bg-cover bg-center" style={{ backgroundImage: `url(${home1})` }}>
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8 px-4 bg-black bg-opacity-50">
          <div className="flex space-x-4 overflow-x-auto p-4 sm:p-6 md:p-8 w-full no-scrollbar" style={{ maxWidth: '100%' }}>
            {[
              { icon: <FaPaintBrush />, title: 'INTERIOR DESIGN', subtitle: 'Our inspired solutions have helped shape modern acoustic design', number: '/ 5' },
              { icon: <FaBuilding />, title: 'BUSINESS DESIGN', subtitle: 'Our inspired solutions have helped shape modern acoustic design', number: '/ 6' },
              { icon: <FaTree />, title: 'LANDSCAPE DESIGN', subtitle: 'Our inspired solutions have helped shape modern acoustic design', number: '/ 7' },
              { icon: <FaCity />, title: 'URBAN DESIGN', subtitle: 'Our inspired solutions have helped shape modern acoustic design', number: '/ 8' },
              { icon: <FaCity />, title: 'URBAN DESIGN', subtitle: 'Our inspired solutions have helped shape modern acoustic design', number: '/ 8' },
              { icon: <FaCity />, title: 'URBAN DESIGN', subtitle: 'Our inspired solutions have helped shape modern acoustic design', number: '/ 8' },
              { icon: <FaCity />, title: 'URBAN DESIGN', subtitle: 'Our inspired solutions have helped shape modern acoustic design', number: '/ 8' },
              { icon: <FaCity />, title: 'URBAN DESIGN', subtitle: 'Our inspired solutions have helped shape modern acoustic design', number: '/ 8' },
              { icon: <FaCity />, title: 'URBAN DESIGN', subtitle: 'Our inspired solutions have helped shape modern acoustic design', number: '/ 8' },
              { icon: <FaCity />, title: 'URBAN DESIGN', subtitle: 'Our inspired solutions have helped shape modern acoustic design', number: '/ 8' },
              { icon: <FaCity />, title: 'URBAN DESIGN', subtitle: 'Our inspired solutions have helped shape modern acoustic design', number: '/ 8' },
            ].map((item, index) => (
              <Card
                key={index}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                number={item.number}
                delay={0.5 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
      <div ref={statsRef} className="w-full px-8 sm:w-11/12 md:w-4/5 mx-auto flex flex-wrap justify-center gap-12 sm:gap-16 md:gap-20 lg:gap-24 my-16 text-black text-center">
        {[
          { target: 21000, label: "Completed Projects" },
          { target: 31, label: "Awards Winner" },
          { target: 1000, label: "Team Members" },
          { target: 16, label: "Years of Experience" }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center hover:text-customGreen transition duration-500 p-4">
            <span className="counter text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2" data-target={item.target}>
              {item.target >= 1000 ? `${(item.target / 1000).toFixed(1).replace('.0', '')}K` : item.target}
            </span>
            <p className="text-base sm:text-lg md:text-xl">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numbers;