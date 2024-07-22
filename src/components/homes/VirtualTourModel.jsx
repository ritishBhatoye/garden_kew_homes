import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { TextureLoader } from 'three';
import * as THREE from 'three'; // Import THREE
import { motion } from 'framer-motion';

const VirtualTourModal = ({ isOpen, onClose, images }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div 
        className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl h-3/4" // Increased height
        initial={{ opacity: 0, y: -50 }} // Animation initial state
        animate={{ opacity: 1, y: 0 }} // Animation final state
        transition={{ duration: 0.5 }} // Animation duration
      >
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            Close
          </button>
        </div>
        <div className="p-4 h-full"> {/* Ensure the canvas takes full height */}
          <Canvas>
            <ambientLight intensity={0.5} />
            <OrbitControls />
            <Environment preset="sunset" />
            <mesh>
              <sphereGeometry args={[5, 60, 40]} />
              <MeshWithTexture image={images[0]} />
            </mesh>
          </Canvas>
        </div>
      </motion.div>
    </div>
  );
};

const MeshWithTexture = ({ image }) => {
  const texture = useLoader(TextureLoader, image);
  return <meshStandardMaterial map={texture} side={THREE.DoubleSide} />;
};

export default VirtualTourModal;