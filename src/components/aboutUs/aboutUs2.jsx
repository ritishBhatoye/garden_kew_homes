import React from 'react';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaBuilding, FaTree, FaCity } from 'react-icons/fa';

const ServiceCard = ({ Icon, title, description }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-green-900 w-full group"
			aria-label={title}
		>
			<div className="flex flex-col items-center justify-center p-6 sm:p-8">
				<motion.div
					initial={{ scale: 0, rotate: -180 }}
					whileInView={{ scale: 1, rotate: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
					className="bg-green-400 bg-opacity-20 p-4 sm:p-5 rounded-full mb-4 sm:mb-5 backdrop-blur-sm"
				>
					<Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-green-300" />
				</motion.div>
				<h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-300 mb-3">{title}</h4>
				<p className="text-green-100 text-sm sm:text-base md:text-lg text-center font-light">{description}</p>
			</div>
		</motion.div>
	);
};

const AboutUs2 = () => {
	return (
		<div className="bg-gradient-to-br from-green-900 via-green-800 to-green-950 text-green-100 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.1 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="text-center mb-8 sm:mb-12 md:mb-16"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300">SERVICES</h2>
					<h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-4 text-yellow-200 font-light">WHAT WE DO FOR YOU</h3>
				</motion.div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
					<ServiceCard
						Icon={FaPaintBrush}
						title="Interior Design"
						description="Transform your space with our expert interior design services."
					/>
					<ServiceCard
						Icon={FaBuilding}
						title="Architecture"
						description="Bring your architectural visions to life with our innovative designs."
					/>
					<ServiceCard
						Icon={FaTree}
						title="Landscape Design"
						description="Create stunning outdoor spaces that complement your lifestyle."
					/>
					<ServiceCard
						Icon={FaCity}
						title="Urban Design"
						description="Shape the future of cities with our sustainable urban design solutions."
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutUs2;