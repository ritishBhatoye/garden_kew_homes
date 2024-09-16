import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowDown } from 'react-icons/fa';

const imageLinks = {
  CalukeCI: {
    image1: "https://i.imgur.com/HDcYWVv.jpeg",
    image2: "https://i.imgur.com/6eOsR13.jpeg",
    image3: "https://i.imgur.com/s6k6MnG.jpeg",
    image4: "https://i.imgur.com/s6k6MnG.jpeg",
    image5: "https://i.imgur.com/R0rwU3P.jpeg",
    image6: "https://i.imgur.com/DCROFtI.jpeg",
    logoPng: "https://i.imgur.com/vVUWpzG.png",
  }
};

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(true);

  const images = [
    { url: imageLinks.CalukeCI.image1, type: 'image', text: 'Building Dreams, One Home at a Time', title: 'Kew Garden Homes - Crafting Elegant Living Spaces for Modern Lifestyles' },
    { url: imageLinks.CalukeCI.image2, type: 'image', text: 'Exquisite Design, Unmatched Quality', title: 'Experience the Beauty of Perfectly Designed Homes with Garden Kew Homes' },
    { url: imageLinks.CalukeCI.image3, type: 'image', text: 'Your Vision, Our Expertise', title: 'Turning Your Dream Home into Reality with Precision and Care' },
    { url: imageLinks.CalukeCI.image4, type: 'image', text: 'Luxury and Comfort Combined', title: 'Elevate Your Living Experience with Garden Kew Homes' },
    { url: imageLinks.CalukeCI.image5, type: 'image', text: 'Attention to Detail', title: 'Meticulously Designed Homes for the Discerning Homeowner' },
    { url: imageLinks.CalukeCI.image6, type: 'image', text: 'Craftsmanship at Its Finest', title: 'Exceptional Quality and Craftsmanship in Every Home We Build' },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setShowTitle(false);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [currentIndex])

  return (
    <div className="relative w-full h-screen mx-auto">
      <div className="overflow-hidden h-full">
        <div
          className="flex transition-transform duration-500 h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 relative h-screen">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-gradient-to-b from-black/75 via-transparent to-black/75 text-white p-4"
              >
                {index === currentIndex && (
                  <div className="max-w-3xl text-center">
                    <h5 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl w-full tracking-wide px-2 sm:px-4 mb-4 text-shadow-lg">
                      <TypeAnimation
                        sequence={[image.text, 2000, '']}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ display: 'inline-block' }}
                      />
                    </h5>
                    <h3 className="mt-2 sm:mt-4 md:mt-6 lg:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-wide px-2 sm:px-4 mb-6 text-shadow-lg">
                      {image.title}
                      <span className="block text-customGreen font-bold shadow-md">
                        {" "} <strong>for Clients</strong>
                      </span>
                    </h3>
                    <button className="mt-4 bg-customGreen text-white font-bold py-2 px-6 rounded-full hover:bg-customGreen/80 transition duration-300 transform hover:scale-105 shadow-lg">
                      Book Now
                    </button>
                  </div>
                )}
              </motion.div>
              {image.type === 'image' ? (
                <img
                  src={image.url}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={image.url}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-100'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <FaArrowDown className="text-white text-2xl sm:text-3xl animate-bounce" />
      </div>
    </div>
  );
};

export default CarouselComponent;