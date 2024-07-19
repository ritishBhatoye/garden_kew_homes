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
    <div className='mt-20 tracking-wide'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 font-serif'>
        Trusted by Thousands of Our Happy Customers
      </h2>
      <div className='flex flex-col items-center'>
        {testimonials.slice(0, visibleCount).map((testimonial, index) => (
          <motion.div
            key={index}
            className={`testimonial-card w-full sm:w-3/4 lg:w-1/2 px-4 py-2 flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              className='w-16 h-16 mr-12 sm:mr-16 lg:mr-20 rounded-full border border-neutral-300'
              src={testimonial.image}
              alt={testimonial.user}
            />
            <div className='relative bg-white rounded-lg p-6 text-md shadow-lg border border-neutral-300 flex-1'>
              <p className='italic'>"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."</p>
              <div className='mt-4'>
                <h6 className='font-bold text-yellow-600'>{testimonial.user}</h6>
                <span className='text-sm font-normal text-neutral-600'>{testimonial.location}</span>
              </div>
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? 'left-[-10px]' : 'right-[-10px]'} border-t-8 border-t-transparent ${index % 2 === 0 ? 'border-r-8 border-r-white' : 'border-l-8 border-l-white'}`}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
      {visibleCount < testimonials.length && (
        <div className='text-center mt-10'>
          <motion.button
            onClick={showMoreTestimonials}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='px-4 py-2 bg-costumGreen text-white rounded'
          >
            More
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
