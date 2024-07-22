import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const DisplayHomes = () => {
  const [showMore, setShowMore] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // State for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [location, setLocation] = useState('');
  const [design, setDesign] = useState('');
  const [year, setYear] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  const projects = [
    { id: 1, title: 'CENTURY CIRCUIT', category: 'Mockup', location: 'Eveleigh', image: 'https://i.imgur.com/HDcYWVv.jpeg', bedrooms: 3, year: 2022 },
    { id: 2, title: 'ROB VILLA', category: 'Clean Architecture', location: 'Kensington', image: 'https://i.imgur.com/P7yuTRX.jpeg', bedrooms: 4, year: 2023 },
    { id: 3, title: 'ORIN ARCHITÉCTURE', category: 'Food', location: 'Campsie', image: 'https://i.imgur.com/R0rwU3P.jpeg', bedrooms: 2, year: 2021 },
    // Add 9 more dummy projects here
    { id: 4, title: 'GREEN OASIS', category: 'Eco-friendly', location: 'Surry Hills', image: 'https://i.imgur.com/example1.jpeg', bedrooms: 3, year: 2022 },
    { id: 5, title: 'URBAN RETREAT', category: 'Modern', location: 'Newtown', image: 'https://i.imgur.com/example2.jpeg', bedrooms: 2, year: 2023 },
    { id: 6, title: 'HARBOUR VIEW', category: 'Luxury', location: 'Darling Point', image: 'https://i.imgur.com/example3.jpeg', bedrooms: 4, year: 2021 },
    { id: 7, title: 'PARKSIDE LIVING', category: 'Family', location: 'Centennial Park', image: 'https://i.imgur.com/example4.jpeg', bedrooms: 5, year: 2022 },
    { id: 8, title: 'SKYLINE LOFT', category: 'Modern', location: 'Pyrmont', image: 'https://i.imgur.com/example5.jpeg', bedrooms: 2, year: 2023 },
    { id: 9, title: 'BEACHFRONT BLISS', category: 'Coastal', location: 'Bondi', image: 'https://i.imgur.com/example6.jpeg', bedrooms: 3, year: 2021 },
    { id: 10, title: 'HERITAGE CHARM', category: 'Historic', location: 'Paddington', image: 'https://i.imgur.com/example7.jpeg', bedrooms: 4, year: 2022 },
    { id: 11, title: 'RIVERSIDE SERENITY', category: 'Waterfront', location: 'Parramatta', image: 'https://i.imgur.com/example8.jpeg', bedrooms: 3, year: 2023 },
    { id: 12, title: 'GARDEN SANCTUARY', category: 'Eco-friendly', location: 'Lane Cove', image: 'https://i.imgur.com/example9.jpeg', bedrooms: 3, year: 2021 },
  ];

  const navigate = useNavigate();

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
      transition: { staggerChildren: 0.1 },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1, y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden mt-10">
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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <AnimatePresence>
            {visibleProjects.map(project => (
              <motion.div
                key={project.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                onClick={() => navigate(`/house/${project.id}`)}
                variants={projectVariants}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600">{project.category}</p>
                <p className="text-gray-600">{project.location}</p>
                <p className="text-gray-600">{project.year} - {project.bedrooms} Bedrooms</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-8">
          {filteredProjects.length > 9 && (
            <motion.button
              className="bg-customGreen text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setShowMore(!showMore)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {showMore ? 'Show Less' : 'Show More'}
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

const FilterModal = ({
  locations, designs, years, bedroomCounts,
  location, setLocation, design, setDesign,
  year, setYear, bedrooms, setBedrooms, setShowFilters
}) => (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg p-6 w-1/3">
      <h2 className="text-2xl font-semibold mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Location</label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        >
          <option value="">All</option>
          {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Design</label>
        <select
          value={design}
          onChange={(e) => setDesign(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        >
          <option value="">All</option>
          {designs.map(des => <option key={des} value={des}>{des}</option>)}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Year</label>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        >
          <option value="">All</option>
          {years.map(yr => <option key={yr} value={yr}>{yr}</option>)}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Bedrooms</label>
        <select
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        >
          <option value="">All</option>
          {bedroomCounts.map(bed => <option key={bed} value={bed}>{bed}</option>)}
        </select>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
          onClick={() => setShowFilters(false)}
        >
          Cancel
        </button>
        <button
          className="bg-customGreen text-white px-4 py-2 rounded-lg"
          onClick={() => setShowFilters(false)}
        >
          Apply
        </button>
      </div>
    </div>
  </div>
);

export default DisplayHomes;
