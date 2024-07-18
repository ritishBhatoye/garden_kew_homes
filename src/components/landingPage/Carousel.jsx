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
    { url: imageLinks.CalukeCI.image1, type: 'image', text: 'Building Dreams, One Home at a Time', title: 'Garden Kew Homes - Crafting Elegant Living Spaces for Modern Lifestyles' },
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
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen mx-auto">
      <AnimatePresence>
        {showTitle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center z-10 bg-gradient-to-r from-green-500 to-green-800"
          >
            <h1 className="text-5xl font-bold text-white">
              <TypeAnimation
                sequence={['Garden Kew Homes', 2000]}
                wrapper="span"
                cursor={true}
                repeat={1}
                style={{ display: 'inline-block' }}
                onFinished={() => setShowTitle(false)}
              />
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute top-4 md:top-10 left-1/2 transform -translate-x-1/2 z-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
          KEW GARDEN HOMES
        </h1>
      </div>
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
                  <>
                    <h5 className="text-2xl sm:text-3xl lg:text-4xl w-full text-center tracking-wide">
                      <TypeAnimation
                        sequence={[image.text, 2000, '']}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ display: 'inline-block' }}
                      />
                    </h5>
                    <h3 className="mt-4 sm:mt-8 text-lg sm:text-2xl lg:text-3xl text-center tracking-wide">
                      {image.title}
                      <span className="block bg-gradient-to-r from-customGreen to-customWhite bg-clip-text text-transparent">
                        {" "} for Clients
                      </span>
                    </h3>
                  </>
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
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-100'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <FaArrowDown className="text-white text-3xl animate-bounce" />
      </div>
    </div>
  );
};

export default CarouselComponent;
