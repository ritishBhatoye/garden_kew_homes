import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DisplayHomes = () => {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    { title: 'CENTURY CIRCUIT', category: 'Mockup', location: 'Eveleigh', image: 'https://i.imgur.com/HDcYWVv.jpeg' },
    { title: 'ROB VILLA', category: 'Clean Architecture', location: 'Kensington', image: 'https://i.imgur.com/P7yuTRX.jpeg' },
    { title: 'ORIN ARCHITÉCTURE', category: 'Food', location: 'Campsie', image: 'https://i.imgur.com/R0rwU3P.jpeg' },
    { title: 'Project 4', category: 'Design', location: 'Location 4', image: 'https://i.imgur.com/6J4ibA1.jpeg' },
    { title: 'Project 5', category: 'Architecture', location: 'Location 5', image: 'https://i.imgur.com/V26a9ZN.jpeg' },
    { title: 'Project 6', category: 'Interior', location: 'Location 6', image: 'https://i.imgur.com/NJpop60.jpeg' },
    { title: 'Project 7', category: 'Landscape', location: 'Location 7', image: 'https://i.imgur.com/ZsmQpwJ.jpeg' },
    { title: 'Project 8', category: 'Urban', location: 'Location 8', image: 'https://i.imgur.com/8jm9c2m.jpeg' },
    { title: 'Project 9', category: 'Sustainable', location: 'Location 9', image: 'https://i.imgur.com/R0rwU3P.jpeg' },
    { title: 'Project 4', category: 'Design', location: 'Location 4', image: 'https://i.imgur.com/6J4ibA1.jpeg' },
    { title: 'Project 5', category: 'Architecture', location: 'Location 5', image: 'https://i.imgur.com/V26a9ZN.jpeg' },
    { title: 'Project 6', category: 'Interior', location: 'Location 6', image: 'https://i.imgur.com/NJpop60.jpeg' },
    { title: 'Project 7', category: 'Landscape', location: 'Location 7', image: 'https://i.imgur.com/ZsmQpwJ.jpeg' },
    { title: 'Project 8', category: 'Urban', location: 'Location 8', image: 'https://i.imgur.com/8jm9c2m.jpeg' },
    { title: 'Project 9', category: 'Sustainable', location: 'Location 9', image: 'https://i.imgur.com/R0rwU3P.jpeg' },
    { title: 'Project 4', category: 'Design', location: 'Location 4', image: 'https://i.imgur.com/6J4ibA1.jpeg' },
    { title: 'Project 5', category: 'Architecture', location: 'Location 5', image: 'https://i.imgur.com/V26a9ZN.jpeg' },
    { title: 'Project 6', category: 'Interior', location: 'Location 6', image: 'https://i.imgur.com/NJpop60.jpeg' },
    { title: 'Project 7', category: 'Landscape', location: 'Location 7', image: 'https://i.imgur.com/ZsmQpwJ.jpeg' },
    { title: 'Project 8', category: 'Urban', location: 'Location 8', image: 'https://i.imgur.com/8jm9c2m.jpeg' },
    { title: 'Project 9', category: 'Sustainable', location: 'Location 9', image: 'https://i.imgur.com/R0rwU3P.jpeg' },
    { title: 'Project 4', category: 'Design', location: 'Location 4', image: 'https://i.imgur.com/6J4ibA1.jpeg' },
    { title: 'Project 5', category: 'Architecture', location: 'Location 5', image: 'https://i.imgur.com/V26a9ZN.jpeg' },
    { title: 'Project 6', category: 'Interior', location: 'Location 6', image: 'https://i.imgur.com/NJpop60.jpeg' },
    { title: 'Project 7', category: 'Landscape', location: 'Location 7', image: 'https://i.imgur.com/ZsmQpwJ.jpeg' },
    { title: 'Project 8', category: 'Urban', location: 'Location 8', image: 'https://i.imgur.com/8jm9c2m.jpeg' },
    { title: 'Project 9', category: 'Sustainable', location: 'Location 9', image: 'https://i.imgur.com/R0rwU3P.jpeg' },
  ];

  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold mb-2 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        PROJECT GRID <span className="text-amber-600">STYLE</span>
      </motion.h1>
      <p className="text-center mb-12 text-gray-600">
        Start your application, request additional information, or schedule a campus visit today!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{project.category}</span>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {!showMore && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowMore(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default DisplayHomes;