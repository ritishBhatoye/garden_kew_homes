import React, { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const OwnerDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-customGreen to-customWhite py-8 px-4 sm:py-12 sm:px-6 lg:px-8 font-light">
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="mt-8 sm:mt-12 grid gap-8 md:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
        <Map />
      </div>
      <AnimatedBackground />
    </div>
  );
};

const Header = () => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center px-4 sm:px-6 lg:px-8"
  >
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-customGreen mb-4 tracking-wider">
      LET'S START A <span className="text-customAccent">NEW PROJECT</span>
    </h1>
    <p className="text-lg sm:text-xl text-customGreen max-w-2xl mx-auto font-light">
      Begin your journey, request more information, or plan a visit today!
    </p>
  </motion.div>
);

const ContactInfo = () => (
  <motion.div
    className="bg-customWhite bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-6 sm:p-8"
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-2xl sm:text-3xl font-light mb-6 text-customGreen">Contact Information</h2>
    <div className="space-y-4">
      <ContactItem icon="email" text="Info@gmail.com" />
      <ContactItem icon="phone" text="(+678) 234 43333 56" />
      <ContactItem icon="location" text="Unit 6C Boundary Industrial Estate, Millfield Road, Bolton, BL2 60Y" />
    </div>
  </motion.div>
);

const ContactItem = ({ icon, text }) => (
  <div className="flex items-center text-customGreen">
    <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-customAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {icon === 'email' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
      {icon === 'phone' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />}
      {icon === 'location' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />}
    </svg>
    <span className="text-base sm:text-lg">{text}</span>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Replace with your actual EmailJS service, template, and user IDs
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
        .then(() => {
          setSubmitStatus('Message sent successfully! We will contact you soon.');
          setFormData({ name: '', email: '', message: '' });
        }, () => {
          setSubmitStatus('Failed to send message. Please try again.');
        });
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.message) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  return (
    <motion.div
      className="bg-customWhite bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-6 sm:p-8"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl sm:text-3xl font-light mb-6 text-customGreen">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <InputField
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          textarea
        />
        <button
          type="submit"
          className="w-full bg-customGreen text-customWhite py-2 sm:py-3 px-4 rounded-md hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:scale-105 text-sm sm:text-base"
        >
          Send Message
        </button>
      </form>
      {submitStatus && (
        <p className={`mt-4 text-center ${submitStatus.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
          {submitStatus}
        </p>
      )}
    </motion.div>
  );
};

const InputField = ({ name, type = 'text', placeholder, value, onChange, error, textarea = false }) => (
  <div>
    {textarea ? (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full p-2 sm:p-3 border rounded-md bg-customWhite bg-opacity-50 text-sm sm:text-base ${error ? 'border-red-500' : 'border-customGreen border-opacity-50'}`}
        rows="3"
      />
    ) : (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full p-2 sm:p-3 border rounded-md bg-customWhite bg-opacity-50 text-sm sm:text-base ${error ? 'border-red-500' : 'border-customGreen border-opacity-50'}`}
      />
    )}
    {error && <p className="mt-1 text-red-500 text-xs sm:text-sm">{error}</p>}
  </div>
);

const Map = () => {
  const position = [53.5744, -2.4282]; // Coordinates for Bolton, UK

  return (
    <motion.div
      className="mt-8 sm:mt-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6 text-customGreen text-center">Our Location</h2>
      <div className="h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
        <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Unit 6C Boundary Industrial Estate, Millfield Road, Bolton, BL2 60Y
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </motion.div>
  );
};

const AnimatedBackground = () => (
  <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-30">
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[-2, 5, 2]} intensity={0.8} />
        <Sphere args={[1, 100, 200]} scale={2.5}>
          <MeshDistortMaterial
            color="#4DA785" // Lighter green color
            attach="material"
            distort={0.3}
            speed={1.5}
            transparent
            opacity={0.7}
          />
        </Sphere>
      </Suspense>
    </Canvas>
  </div>
);

export default OwnerDetails;