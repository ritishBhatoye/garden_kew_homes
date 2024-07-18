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

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-2/5 h-full flex flex-col justify-center items-center overflow-hidden ">
        <div className="relative w-full h-4/5">
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
            className="bg-white bg-opacity-50 hover:bg-opacity-100 text-black font-bold py-2 px-4 rounded-full"
            onClick={prevImage}
          >
            &larr; Back
          </button>
          <button
            className="bg-white bg-opacity-50 hover:bg-opacity-100 text-black font-bold py-2 px-4 rounded-full"
            onClick={nextImage}
          >
            Next &rarr;
          </button>
        </div>
      </div>
      <div className="w-3/5 h-full flex flex-col justify-between items-start p-8 bg-white">
        <div className="self-end text-black font-bold text-4xl">
          DEDICATED CONSTRUCTION.
        </div>
        <div className="self-end text-black font-bold text-2xl mb-4">
          Design and Build your home with Englehart.
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
