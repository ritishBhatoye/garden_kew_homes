                  import React, { useState, useEffect, useCallback, useRef } from 'react';
                  import { motion, AnimatePresence } from 'framer-motion';
                  import { TypeAnimation } from 'react-type-animation';
                  import { FaArrowDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
                  import { Link } from 'react-router-dom';
                  import image1 from '../../assets/images/SiteImages/first.webp';
                  import image2 from '../../assets/images/SiteImages/2.webp';
                  import image3 from '../../assets/images/SiteImages/3.webp';
                  import image4 from '../../assets/images/SiteImages/4.webp';
                  import image5 from '../../assets/images/SiteImages/5.webp';
                  import image6 from '../../assets/images/SiteImages/6.webp';

                  const imageLinks = {
                    CalukeCI: {
                      image1: "https://i.imgur.com/vVUWpzG.png",
                      image2: "https://i.imgur.com/6eOsR13.jpeg",
                      image3: "https://i.imgur.com/s6k6MnG.jpeg",
                      image4: "https://i.imgur.com/s6k6MnG.jpeg",
                      image5: "https://i.imgur.com/R0rwU3P.jpeg",
                      image6: "https://i.imgur.com/DCROFtI.jpeg",
                      logoPng: "https://i.imgur.com/vVUWpzG.png",
                    }
                  };

                  const CarouselComponent = ({ 
                    autoPlayInterval = 10000, 
                    transitionDuration = 0.5,
                    overlayColor = 'from-black/30 to-black/30',
                    primaryColor = 'customGreen',
                    secondaryColor = 'white'
                  }) => {
                    const [currentIndex, setCurrentIndex] = useState(0);
                    const [isLoading, setIsLoading] = useState(true);
                    const [hasError, setHasError] = useState(false);
                    const [touchStart, setTouchStart] = useState(0);
                    const [touchEnd, setTouchEnd] = useState(0);
                    const timerRef = useRef(null);

                    const images = [
                      { url: image1, type: 'image', text: 'Building Dreams, One Home at a Time', title: 'Kew Garden Homes - Crafting Elegant Living Spaces for Modern Lifestyles' },
                      { url: image2, type: 'image', text: 'Exquisite Design, Unmatched Quality', title: 'Experience the Beauty of Perfectly Designed Homes with Garden Kew Homes' },
                      { url: image3, type: 'image', text: 'Your Vision, Our Expertise', title: 'Turning Your Dream Home into Reality with Precision and Care' },
                      { url: image4, type: 'image', text: 'Luxury and Comfort Combined', title: 'Elevate Your Living Experience with Garden Kew Homes' },
                      { url: image5, type: 'image', text: 'Attention to Detail', title: 'Meticulously Designed Homes for the Discerning Homeowner' },
                      { url: image6, type: 'image', text: 'Craftsmanship at Its Finest', title: 'Exceptional Quality and Craftsmanship in Every Home We Build' },
                    ];

                    const prevSlide = useCallback(() => {
                      setCurrentIndex((prevIndex) =>
                        prevIndex === 0 ? images.length - 1 : prevIndex - 1
                      );
                    }, [images.length]);

                    const nextSlide = useCallback(() => {
                      setCurrentIndex((prevIndex) =>
                        prevIndex === images.length - 1 ? 0 : prevIndex + 1
                      );
                    }, [images.length]);

                    const resetTimer = useCallback(() => {
                      if (timerRef.current) {
                        clearTimeout(timerRef.current);
                      }
                      timerRef.current = setTimeout(nextSlide, autoPlayInterval);
                    }, [nextSlide, autoPlayInterval]);

                    useEffect(() => {
                      resetTimer();
                      return () => {
                        if (timerRef.current) {
                          clearTimeout(timerRef.current);
                        }
                      };
                    }, [currentIndex, resetTimer]);

                    const handleKeyDown = useCallback((event) => {
                      if (event.key === 'ArrowLeft') {
                        prevSlide();
                      } else if (event.key === 'ArrowRight') {
                        nextSlide();
                      }
                    }, [prevSlide, nextSlide]);

                    useEffect(() => {
                      document.addEventListener('keydown', handleKeyDown);
                      return () => {
                        document.removeEventListener('keydown', handleKeyDown);
                      };
                    }, [handleKeyDown]);

                    const handleImageLoad = useCallback(() => {
                      setIsLoading(false);
                      setHasError(false);
                    }, []);

                    const handleImageError = useCallback(() => {
                      setIsLoading(false);
                      setHasError(true);
                    }, []);

                    // Preload next image
                    useEffect(() => {
                      const nextIndex = (currentIndex + 1) % images.length;
                      const img = new Image();
                      img.src = images[nextIndex].url;
                    }, [currentIndex, images]);

                    // Touch event handlers
                    const handleTouchStart = (e) => {
                      setTouchStart(e.targetTouches[0].clientX);
                    };

                    const handleTouchMove = (e) => {
                      setTouchEnd(e.targetTouches[0].clientX);
                    };

                    const handleTouchEnd = () => {
                      if (touchStart - touchEnd > 150) {
                        nextSlide();
                      }

                      if (touchStart - touchEnd < -150) {
                        prevSlide();
                      }
                    };

                    return (
                      <div 
                        className="relative w-full h-screen mx-auto" 
                        role="region" 
                        aria-roledescription="carousel"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                      >
                        <div className="overflow-hidden h-full">
                          <AnimatePresence initial={false}>
                            <motion.div
                              key={currentIndex}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: transitionDuration }}
                              className="absolute inset-0"
                            >
                              {isLoading && <div className="absolute inset-0 flex items-center justify-center bg-gray-200">Loading...</div>}
                              {hasError && <div className="absolute inset-0 flex items-center justify-center bg-red-200">Error loading image</div>}
                              <img
                                src={images[currentIndex].url}
                                alt={`Slide ${currentIndex + 1}`}
                                className="w-full h-full object-cover"
                                onLoad={handleImageLoad}
                                onError={handleImageError}
                              />
                              {/* Semi-transparent overlay */}
                              <div className={`absolute inset-0 bg-gradient-to-b ${overlayColor}`}></div>
                              
                              <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                                className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white p-4"
                              >
                                <div className="max-w-3xl text-center">
                                  <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-full tracking-wide px-2 sm:px-4 mb-4 text-shadow-xl">
                                    <TypeAnimation
                                      sequence={[images[currentIndex].text, 2000, '']}
                                      wrapper="span"
                                      cursor={true}
                                      repeat={Infinity}
                                      style={{ display: 'inline-block' }}
                                    />
                                  </h5>
                                  <h3 className="mt-2 sm:mt-3 md:mt-4 lg:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide px-2 sm:px-4 mb-4 text-shadow-lg font-semibold">
                                    {images[currentIndex].title}
                                    <span className={`block text-${primaryColor} font-bold`}>
                                      {" "} for Clients
                                    </span>
                                  </h3>
                                  <Link
                                    to="/booking"
                                    className={`mt-4 bg-${primaryColor} text-${secondaryColor} font-bold py-3 px-8 rounded-full hover:bg-${primaryColor}/80 transition duration-300 transform hover:scale-105 shadow-lg text-lg inline-block`}
                                  >
                                    Book Now
                                  </Link>
                                </div>
                              </motion.div>
                            </motion.div>
                          </AnimatePresence>
                        </div>
                        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {images.map((_, index) => (
                            <button
                              key={index}
                              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${index === currentIndex ? `bg-${primaryColor}` : `bg-${secondaryColor}`}`}
                              onClick={() => setCurrentIndex(index)}
                              aria-label={`Go to slide ${index + 1}`}
                              aria-current={index === currentIndex ? 'true' : 'false'}
                            />
                          ))}
                        </div>
                        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                          <FaArrowDown className={`text-${secondaryColor} text-2xl sm:text-3xl animate-bounce`} />
                        </div>
                        <button
                          onClick={prevSlide}
                          className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-${primaryColor}/30 text-${secondaryColor} p-2 rounded-full`}
                          aria-label="Previous slide"
                        >
                          <FaChevronLeft />
                        </button>
                        <button
                          onClick={nextSlide}
                          className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-${primaryColor}/30 text-${secondaryColor} p-2 rounded-full`}
                          aria-label="Next slide"
                        >
                          <FaChevronRight />
                        </button>
                      </div>
                    );
                  };

                  export default CarouselComponent;