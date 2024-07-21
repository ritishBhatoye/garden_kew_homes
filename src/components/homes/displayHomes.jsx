import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DisplayHomes = () => {
  const [showMore, setShowMore] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // State for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [location, setLocation] = useState('');
  const [design, setDesign] = useState('');
  const [year, setYear] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  const projects = [
    { title: 'CENTURY CIRCUIT', category: 'Mockup', location: 'Eveleigh', image: 'https://i.imgur.com/HDcYWVv.jpeg', bedrooms: 3, year: 2022 },
    { title: 'ROB VILLA', category: 'Clean Architecture', location: 'Kensington', image: 'https://i.imgur.com/P7yuTRX.jpeg', bedrooms: 4, year: 2023 },
    { title: 'ORIN ARCHITÉCTURE', category: 'Food', location: 'Campsie', image: 'https://i.imgur.com/R0rwU3P.jpeg', bedrooms: 2, year: 2021 },
    // Add 9 more dummy projects here
    { title: 'GREEN OASIS', category: 'Eco-friendly', location: 'Surry Hills', image: 'https://i.imgur.com/example1.jpeg', bedrooms: 3, year: 2022 },
    { title: 'URBAN RETREAT', category: 'Modern', location: 'Newtown', image: 'https://i.imgur.com/example2.jpeg', bedrooms: 2, year: 2023 },
    { title: 'HARBOUR VIEW', category: 'Luxury', location: 'Darling Point', image: 'https://i.imgur.com/example3.jpeg', bedrooms: 4, year: 2021 },
    { title: 'PARKSIDE LIVING', category: 'Family', location: 'Centennial Park', image: 'https://i.imgur.com/example4.jpeg', bedrooms: 5, year: 2022 },
    { title: 'SKYLINE LOFT', category: 'Modern', location: 'Pyrmont', image: 'https://i.imgur.com/example5.jpeg', bedrooms: 2, year: 2023 },
    { title: 'BEACHFRONT BLISS', category: 'Coastal', location: 'Bondi', image: 'https://i.imgur.com/example6.jpeg', bedrooms: 3, year: 2021 },
    { title: 'HERITAGE CHARM', category: 'Historic', location: 'Paddington', image: 'https://i.imgur.com/example7.jpeg', bedrooms: 4, year: 2022 },
    { title: 'RIVERSIDE SERENITY', category: 'Waterfront', location: 'Parramatta', image: 'https://i.imgur.com/example8.jpeg', bedrooms: 3, year: 2023 },
    { title: 'GARDEN SANCTUARY', category: 'Eco-friendly', location: 'Lane Cove', image: 'https://i.imgur.com/example9.jpeg', bedrooms: 3, year: 2021 },
  ];

  // Extract unique values for each filter
  const locations = [...new Set(projects.map(project => project.location))];
  const designs = [...new Set(projects.map(project => project.category))];
  const years = [...new Set(projects.map(project => project.year))];
  const bedroomCounts = [...new Set(projects.map(project => project.bedrooms))];

  // Memoize the filtered projects to avoid unnecessary recalculations
  const filteredProjects = useMemo(() => 
    projects.filter(project => 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (location === '' || project.location.toLowerCase() === location.toLowerCase()) &&
      (design === '' || project.category.toLowerCase() === design.toLowerCase()) &&
      (year === '' || project.year.toString() === year) &&
      (bedrooms === '' || project.bedrooms.toString() === bedrooms)
    ),
    [searchQuery, location, design, year, bedrooms]
  );

  // Memoize the visible projects
  const visibleProjects = useMemo(() => 
    showMore ? filteredProjects : filteredProjects.slice(0, 9),
    [showMore, filteredProjects]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 mx-auto px-24 py-16">
        <motion.h1
          className="text-5xl font-bold mb-12 text-center text-customGreen"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          Find Your Dream Home
        </motion.h1>

        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <input
            type="text"
            placeholder="Search for your dream home..."
            className="w-full px-8 py-5 rounded-full border-none bg-white focus:outline-none focus:ring-4 focus:ring-green-300 text-lg shadow-xl transition-all duration-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={() => setShowFilters(true)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 px-6 py-3 bg-gradient-to-r from-customGreen to-green-700 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Filters
          </button>
        </motion.div>

        {showFilters && (
          <FilterModal
            locations={locations}
            designs={designs}
            years={years}
            bedroomCounts={bedroomCounts}
            location={location}
            setLocation={setLocation}
            design={design}
            setDesign={setDesign}
            year={year}
            setYear={setYear}
            bedrooms={bedrooms}
            setBedrooms={setBedrooms}
            setShowFilters={setShowFilters}
          />
        )}

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                variants={projectVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-customGreen">{project.title}</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-customGreen to-green-700 mb-4"></div>
                  <div className="flex flex-wrap justify-between text-sm text-gray-600 mb-2">
                    <span className="bg-customWhite px-4 py-2 rounded-full mb-2 font-semibold">{project.category}</span>
                    <span className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-customGreen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 111-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 font-semibold">
                    <span>{project.bedrooms} Bedrooms</span>
                    <span>Built {project.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {!showMore && filteredProjects.length > 9 && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={() => setShowMore(true)}
              className="px-10 py-4 bg-gradient-to-r from-customGreen to-green-700 text-white rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Show More Homes
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// Create a separate component for the filter modal
const FilterModal = ({ 
  locations, designs, years, bedroomCounts, 
  location, setLocation, design, setDesign, 
  year, setYear, bedrooms, setBedrooms, setShowFilters 
}) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-8 rounded-3xl w-96 shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-customGreen">Filters</h2>
        <div className="space-y-4">
          {[
            { label: "Location", value: location, setter: setLocation, options: locations },
            { label: "Design", value: design, setter: setDesign, options: designs },
            { label: "Year", value: year, setter: setYear, options: years.sort((a, b) => b - a) },
            { label: "Bedrooms", value: bedrooms, setter: setBedrooms, options: bedroomCounts.sort((a, b) => a - b) },
          ].map((filter, index) => (
            <div key={index} className="relative">
              <label className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600">
                {filter.label}
              </label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white"
                value={filter.value}
                onChange={(e) => filter.setter(e.target.value)}
              >
                <option value="">All {filter.label}s</option>
                {filter.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>
                    {filter.label === "Bedrooms" ? `${option} Bedrooms` : option}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowFilters(false)}
          className="w-full px-4 py-3 bg-gradient-to-r from-customGreen to-green-700 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mt-8"
        >
          Apply Filters
        </button>
      </motion.div>
    </motion.div>
  );
};

export default DisplayHomes;