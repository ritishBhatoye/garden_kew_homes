import React, { useState, useEffect } from 'react';
import { testimonials } from '../../constants';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    ScrollTrigger.batch('.testimonial-card', {
      onEnter: batch => gsap.to(batch, { opacity: 1, stagger: 0.15, duration: 1 }),
      onLeave: batch => gsap.to(batch, { opacity: 0.1, stagger: 0.15, duration: 1 }),
      onEnterBack: batch => gsap.to(batch, { opacity: 1, stagger: 0.15, duration: 1 }),
      onLeaveBack: batch => gsap.to(batch, { opacity: 0.1, stagger: 0.15, duration: 1 }),
      start: 'top 80%',
      end: 'bottom 20%',
    });
  }, []);

  const showMoreTestimonials = () => {
    gsap.to('.testimonial-card', {
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
    });
    setVisibleCount(prevCount => prevCount + 10);
  };

  return (
    <div className='mt-10 sm:mt-16 md:mt-20 tracking-wide px-4 sm:px-6 lg:px-8'>
      <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center my-6 sm:my-8 md:my-10 lg:my-16 xl:my-20 font-serif'>
        Trusted by Thousands of Our Happy Customers
      </h2>
      <div className='flex flex-col items-center'>
        {testimonials.slice(0, visibleCount).map((testimonial, index) => (
          <motion.div
            key={index}
            className={`testimonial-card w-full sm:w-11/12 md:w-5/6 lg:w-3/4 xl:w-1/2 px-3 sm:px-4 py-2 flex flex-col sm:flex-row items-center mb-6 sm:mb-8 ${
              index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              className='w-20 h-20 sm:w-16 sm:h-16 mb-4 sm:mb-0 sm:mr-6 md:mr-8 lg:mr-12 xl:mr-16 rounded-full border border-neutral-300'
              src={testimonial.image}
              alt={testimonial.user}
            />
            <div className='relative bg-white rounded-lg p-4 sm:p-6 text-sm sm:text-md shadow-lg border border-neutral-300 flex-1'>
              <p className='italic'>"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."</p>
              <div className='mt-3 sm:mt-4'>
                <h6 className='font-bold text-yellow-600'>{testimonial.user}</h6>
                <span className='text-xs sm:text-sm font-normal text-neutral-600'>{testimonial.location}</span>
              </div>
              <div
                className={`hidden sm:block absolute top-1/2 transform -translate-y-1/2 ${
                  index % 2 === 0 ? 'left-[-10px]' : 'right-[-10px]'
                } border-t-8 border-t-transparent ${
                  index % 2 === 0 ? 'border-r-8 border-r-white' : 'border-l-8 border-l-white'
                }`}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
      {visibleCount < testimonials.length && (
        <div className='text-center mt-8 sm:mt-10'>
          <motion.button
            onClick={showMoreTestimonials}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='px-4 py-2 bg-costumGreen text-white rounded text-sm sm:text-base'
          >
            More
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Testimonials;