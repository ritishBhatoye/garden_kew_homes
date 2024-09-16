import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPaintBrush, FaBuilding, FaTree, FaCity } from 'react-icons/fa';
import PropTypes from 'prop-types';

gsap.registerPlugin(ScrollTrigger);

const Card = ({ icon, title, subtitle, number, delay }) => {
  return (
    <motion.div
      className="relative p-6 text-white rounded-xl bg-black/80 hover:bg-gray-900 transition-all duration-300 shadow-lg h-full min-h-[300px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
      role="article"
      aria-labelledby={`title-${number}`}
    >
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-center mb-4 text-4xl text-emerald-400" aria-hidden="true">{icon}</div>
          <h3 id={`title-${number}`} className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-300">{subtitle}</p>
        </div>
        <div className="text-right text-2xl font-bold text-emerald-400 mt-4" aria-label={`Number ${number}`}>{number}</div>
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired
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

      gsap.fromTo(counter, 
        { opacity: 0 }, 
        { 
          opacity: 1, 
          duration: 1,
          scrollTrigger: {
            trigger: counter,
            start: 'top bottom-=100', // Adjust this to trigger earlier
            end: 'bottom center',
            toggleActions: 'play none none reverse',
            onEnter: updateCount
          }
        }
      );
    });

  }, []);

  return (
    <div className="w-full bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {[
            { icon: <FaPaintBrush />, title: 'Interior Design', subtitle: 'Shaping modern acoustic spaces', number: '01' },
            { icon: <FaBuilding />, title: 'Business Design', subtitle: 'Optimizing workplace efficiency', number: '02' },
            { icon: <FaTree />, title: 'Landscape Design', subtitle: 'Creating sustainable outdoor areas', number: '03' },
            { icon: <FaCity />, title: 'Urban Design', subtitle: 'Reimagining city landscapes', number: '04' },
            { icon: <FaCity />, title: 'Architectural Design', subtitle: 'Crafting iconic structures', number: '05' },
          ].map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              number={item.number}
              delay={0.3 + index * 0.1}
            />
          ))}
        </div>
      </div>
      <div ref={statsRef} className="container mx-auto px-4 py-20" aria-label="Company Statistics">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { target: 21000, label: "Completed Projects" },
            { target: 31, label: "Awards Won" },
            { target: 1000, label: "Team Members" },
            { target: 16, label: "Years of Experience" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <span 
                className="counter text-5xl font-bold text-emerald-600 mb-2 block" 
                data-target={item.target}
                aria-live="polite"
              >
                0
              </span>
              <p className="text-lg text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Numbers;