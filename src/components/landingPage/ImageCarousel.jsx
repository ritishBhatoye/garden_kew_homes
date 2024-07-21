import React, { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://i.imgur.com/P7yuTRX.jpeg",
  "https://i.imgur.com/VmDO7lx.jpeg",
  "https://i.imgur.com/R0rwU3P.jpeg",
  "https://i.imgur.com/697BkPC.jpeg",
  "https://i.imgur.com/6JYl9pp.jpeg",
  "https://i.imgur.com/6J4ibA1.jpeg",
  "https://i.imgur.com/JwynARp.jpeg",
  "https://i.imgur.com/dTmenM5.jpeg",
  "https://i.imgur.com/V26a9ZN.jpeg",
  "https://i.imgur.com/eoknYjg.jpeg"
];

const customGreen = '#2B704E';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen px-4 sm:px-8 md:px-12">
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="relative w-full h-full lg:h-4/5">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`ImageCarousel image ${index + 1}`}
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
          ))}
        </div>
        <div className="flex space-x-4 mt-4">
          <button
            className="bg-white bg-opacity-50 hover:bg-opacity-100 text-black py-2 px-4 rounded-full text-sm sm:text-base"
            onClick={prevImage}
          >
            <span className="font-thin">&larr;</span> Back
          </button>
          <button
            className="bg-white bg-opacity-50 hover:bg-opacity-100 text-black py-2 px-4 rounded-full text-sm sm:text-base"
            onClick={nextImage}
          >
            Next <span className="font-thin">&rarr;</span>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-auto lg:h-screen flex flex-col justify-between items-start p-4 sm:p-8 md:p-12 lg:p-24 bg-white">
        <div className="self-start text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          PERSONALISED DESIGN, DEDICATED CONSTRUCTION.
        </div>
        <div className="self-start font-thin text-black text-lg sm:text-xl md:text-2xl lg:text-4xl mt-4">
          Design and Build your home with Kew Garden Homes. We are dedicated to creating beautiful, customized homes that reflect your unique style and needs. Our expert team ensures quality construction and attention to detail from start to finish.
        </div>
        <button
          className="mt-8 lg:mt-12 py-3 px-6 lg:py-4 lg:px-8 border border-transparent text-black rounded-full text-sm sm:text-base"
          style={{ color: customGreen }}
        >
          OUR PROCESS &rarr;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;