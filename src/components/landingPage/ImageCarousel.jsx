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
    <div className="flex flex-col md:flex-row w-full h-screen px-4 md:px-12">
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center overflow-hidden">
        <div className="relative w-full h-full md:h-4/5">
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
            className="bg-white bg-opacity-50 hover:bg-opacity-100 text-black py-2 px-4 rounded-full"
            onClick={prevImage}
          >
            <span className="font-thin">&larr;</span> Back
          </button>
          <button
            className="bg-white bg-opacity-50 hover:bg-opacity-100 text-black py-2 px-4 rounded-full"
            onClick={nextImage}
          >
            Next <span className="font-thin">&rarr;</span>
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-between items-start p-4 md:p-24 bg-white">
        <div className="self-start text-black text-3xl md:text-5xl">
          PERSONALISED DESIGN, DEDICATED CONSTRUCTION.
        </div>
        <div className="self-start font-thin text-black text-xl md:text-4xl mt-4">
          Design and Build your home with Kew Garden Homes. We are dedicated to creating beautiful, customized homes that reflect your unique style and needs. Our expert team ensures quality construction and attention to detail from start to finish.
        </div>
        <button
          className="mt-12 py-4 px-8 border border-transparent text-black rounded-full"
          style={{ color: customGreen }}
        >
          OUR PROCESS &rarr;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
