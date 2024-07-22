import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { TowerSt } from '../../constants';
import VirtualTourModal from './VirtualTourModel';

const HouseDetail = () => {
  const { id } = useParams();

  // Dummy data for a single house
  const house = {
    id: id,
    title: 'CENTURY CIRCUIT',
    category: 'Mockup',
    location: 'Eveleigh',
    image: 'https://i.imgur.com/HDcYWVv.jpeg',
    bedrooms: 3,
    year: 2022,
    description: 'This is a detailed description of the house with all the features and amenities.',
  };

  // Dummy data for related images
  const relatedImages = [
    'https://i.imgur.com/P7yuTRX.jpeg',
    'https://i.imgur.com/R0rwU3P.jpeg',
    'https://i.imgur.com/example1.jpeg',
    'https://i.imgur.com/example2.jpeg',
    'https://i.imgur.com/example3.jpeg',
  ];

  // Dummy data for related homes (using projects from displayHomes.jsx)
  const relatedHomes = [
    { id: 2, title: 'ROB VILLA', category: 'Clean Architecture', location: 'Kensington', image: 'https://i.imgur.com/P7yuTRX.jpeg', bedrooms: 4, year: 2023 },
    { id: 4, title: 'GREEN OASIS', category: 'Eco-friendly', location: 'Surry Hills', image: 'https://i.imgur.com/example1.jpeg', bedrooms: 3, year: 2022 },
    { id: 6, title: 'HARBOUR VIEW', category: 'Luxury', location: 'Darling Point', image: 'https://i.imgur.com/example3.jpeg', bedrooms: 4, year: 2021 },
    { id: 8, title: 'SKYLINE LOFT', category: 'Modern', location: 'Pyrmont', image: 'https://i.imgur.com/example5.jpeg', bedrooms: 2, year: 2023 },
  ];

  // State to manage the currently displayed image
  const [currentImage, setCurrentImage] = useState(house.image);

  // State to manage the virtual tour modal
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);

  return (
    <div className="mx-auto py-16 px-4 md:px-24 bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        <motion.div
          className="w-full md:w-4/5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={currentImage}
            alt={house.title}
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">{house.title}</h1>
            <p className="text-gray-600 mb-4">{house.category} - {house.location}</p>
            <p className="text-gray-600 mb-4">{house.year} - {house.bedrooms} Bedrooms</p>
            <p className="text-gray-700">{house.description}</p>
          </div>
                 
        {/* <div className="flex justify-center mt-8">
          <motion.button
            type="submit"
            className="inline-flex font-montserrat items-start px-6 py-3 border border-transparent text-md font-medium rounded-md text-customGreen bg-customAccent shadow-md hover:bg-customGreenLight hover:text-customWhite transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customAccent focus:shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsVirtualTourOpen(true)}
          >
           Virtual Tour
          </motion.button>
        </div> */}
        </motion.div>
        
        <motion.div
          className="w-full md:w-1/5 p-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Related Images</h2>
          <div className="grid grid-cols-1 gap-4">
            {relatedImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Related ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => setCurrentImage(image)}
              />
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        className="bg-white rounded-lg shadow-lg overflow-hidden mt-8 p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Location</h2>
        <MapContainer center={[30.7333, 76.7794]} zoom={13} className="h-96 w-full rounded-lg">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[30.7333, 76.7794]}>
            <Popup>Advertising Hoarding Board</Popup>
          </Marker>
        </MapContainer>
      </motion.div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8 p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Similar Homes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedHomes.map((home) => (
            <div key={home.id} className="bg-gray-100 rounded-lg p-4 shadow-md">
              <img src={home.image} alt={home.title} className="w-full h-32 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{home.title}</h3>
              <p className="text-lg text-gray-600">{home.location}</p>
              <p className="text-md text-gray-500">{home.bedrooms} Bedrooms • Built {home.year}</p>
              <button className="mt-4 bg-customGreen text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8 p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Home Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="list-none">
            <li className="flex items-center mb-2">
              <span className="text-green-500 mr-2">✔</span> Open-concept living area
            </li>
            <li className="flex items-center mb-2">
              <span className="text-green-500 mr-2">✔</span> Gourmet kitchen with island
            </li>
            <li className="flex items-center mb-2">
              <span className="text-green-500 mr-2">✔</span> Master suite with walk-in closet
            </li>
            <li className="flex items-center mb-2">
              <span className="text-green-500 mr-2">✔</span> Energy-efficient appliances
            </li>
            <li className="flex items-center mb-2">
              <span className="text-green-500 mr-2"></span> Hardwood flooring throughout
            </li>
          </ul>
          <ul className="list-none">
            <li className="flex items-center mb-2">
              <span className="text-green-500 mr-2">✔</span> Smart home technology
            </li>
            <li className="flex items-center mb-2">
              <span className="text-green-500 mr-2">✔</span> Spacious outdoor living area
            </li>
            <li className="flex items-center mb-2">
              <span className="text-green-500 mr-2">✔</span> Double car garage
            </li>
            <li className="flex items-center mb-2">
              <span className="text-green-500 mr-2">✔</span> High-quality insulation
            </li>
            <li className="flex items-center mb-2">
              <span className="text-green-500 mr-2">✔</span> Custom built-in storage solutions
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8 p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Customer Reviews</h2>
        <div>
          <p className="text-blue-600 font-semibold">John Doe</p>
          <p className="text-gray-700 mb-4">We couldn't be happier with our new home. The attention to detail and quality of construction is outstanding!</p>
          <p className="text-blue-600 font-semibold">Jane Smith</p>
          <p className="text-gray-700">The team was professional and responsive throughout the entire building process. Our dream home became a reality!</p>
        </div>
      </div>
      <VirtualTourModal isOpen={isVirtualTourOpen} onClose={() => setIsVirtualTourOpen(false)} images={relatedImages} />
    </div>
  );
};

export default HouseDetail;