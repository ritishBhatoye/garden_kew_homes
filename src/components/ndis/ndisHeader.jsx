import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import anime from 'animejs';
import nvid1 from '../../assets/images/NVID/nvid-1.jpg';
import nvid2 from '../../assets/images/NVID/nvid-2.jpg';
import nvid3 from '../../assets/images/NVID/nvid-3.jpg';

const NDISHeader = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const controls = useAnimation();
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      gsap.to(titleRef.current, { duration: 1, opacity: 1, y: 0, ease: 'power3.out' });
      anime({
        targets: subtitleRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        easing: 'easeOutQuad',
        delay: 500
      });
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6 md:p-8 lg:p-12 bg-white text-customGreen overflow-hidden"
    >
      <motion.div
        variants={itemVariants}
        className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left"
      >
        <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin leading-tight mb-4 tracking-wide opacity-0 transform translate-y-10">
          NDIS BUILDER
        </h1>
        <p ref={subtitleRef} className="text-base sm:text-lg md:text-xl lg:text-2xl font-thin italic opacity-0">
          Empowering lives through tailored support
        </p>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="w-full lg:w-1/2 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto lg:mx-0"
      >
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          transitionTime={1000}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          {[nvid1, nvid2, nvid3].map((img, index) => (
            <motion.div
              key={index}
              className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={img}
                alt={`NVID ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </Carousel>
      </motion.div>
    </motion.div>
  );
};

export default NDISHeader;