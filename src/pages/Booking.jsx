import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import { TypeAnimation } from 'react-type-animation';
import backgroundImage from '../assets/images/home-1.jpg'; 

const splashEffect = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

const BookingForm = () => {
  const form = useRef();
  const controls = useAnimation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Trigger the animation after a short delay
    controls.start({
      height: '50vh',
      transition: { duration: 1 }
    });
  }, [controls]);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const data = {
      from_name: formData.get("customer-name"),
      from_email: formData.get("customer-email"),
      phone_number: formData.get("phone-number"),
      booking_date: formData.get("booking-date"),
    };

    try {
      // Send email using emailjs
      await emailjs.send('service_npavkes', 'template_wliif7j', data, "ANlmnkhJtKMonPp4V");
      
      // Show success popup
      setIsSubmitted(true);

      // Construct WhatsApp message
      const whatsappMessage = `
        New Booking Request:
        Name: ${data.from_name}
        Email: ${data.from_email}
        Phone: ${data.phone_number}
        Booking Date: ${data.booking_date}
      `.trim();

      // Replace with your WhatsApp number
      const whatsappNumber = '7087963595'; // Example: '1234567890'
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      // Open WhatsApp
      window.open(whatsappURL, '_blank');

    } catch (error) {
      console.error(error);
      alert('Failed to send the message. Please try again.');
    }
  };

  const SuccessPopup = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    >
      <div className="bg-customGreenLight p-8 rounded-lg shadow-lg text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="text-6xl mb-4"
        >
          🎉
        </motion.div>
        <h2 className="text-2xl font-bold text-customWhite mb-4">Booking Submitted!</h2>
        <p className="text-customWhite mb-6">We'll contact you soon to confirm your booking.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-customAccent text-customGreen px-4 py-2 rounded-md"
          onClick={() => setIsSubmitted(false)}
        >
          Close
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <motion.div 
      className="mx-auto w-full text-customWhite bg-customGreen min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div 
        className="relative bg-cover bg-center p-4 sm:p-6 text-customWhite w-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ height: '100vh' }}
        animate={controls}
      >
        <div className="absolute inset-0 bg-customGreenDark opacity-70"></div>
        <div className="relative p-4 sm:p-6 text-center h-full flex flex-col justify-center">
          <motion.h2 
            className="text-xl sm:text-2xl mb-2 font-montserrat font-thin"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
           KEW GARDEN HOMES
          </motion.h2>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 text-center tracking-wide'>
            <TypeAnimation
              sequence={[
                "Building dreams, one event at a time with Deep Catering & Events",
                2000,
                "Crafting unforgettable experiences for every occasion",
              ]}
              wrapper="span"
              speed={50}
              className='bg-gradient-to-r mt-4 font-montserrat from-customAccent to-customGreenLight text-transparent bg-clip-text'
              repeat={Infinity}
            />
          </h1>
        </div>
      </motion.div>
      
      <form ref={form} onSubmit={sendEmail} className="relative content-center p-4 sm:p-6 md:p-8 lg:p-12 items-center space-y-8 sm:space-y-12 mt-8 sm:mt-12 bg-customGreenLight rounded-lg shadow-custom mx-4 sm:mx-8 md:mx-16 lg:mx-32">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2">
          {['Customer\'s Name', 'Customer Email', 'Phone Number', 'Booking Date'].map((label, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="w-full"
            >
              <label htmlFor={label.toLowerCase().replace(' ', '-')} className="block text-sm sm:text-md font-medium text-customWhite mb-2">
                {label}
              </label>
              <input
                type={label.includes('Date') ? 'date' : label === 'Phone Number' ? 'tel' : label === 'Customer Email' ? 'email' : 'text'}
                name={label.toLowerCase().replace(' ', '-')}
                id={label.toLowerCase().replace(' ', '-')}
                className="mt-1 block w-full bg-customGreen border-b border-customWhite text-customWhite focus:border-customAccent focus:outline-none transition duration-300 ease-in-out rounded-md p-2"
                required
              />
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <motion.button
            type="submit"
            className="inline-flex font-montserrat items-center px-6 py-3 border border-transparent text-md font-medium rounded-md text-customGreen bg-customAccent shadow-md hover:bg-customGreenLight hover:text-customWhite transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customAccent focus:shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </div>
      </form>
      <AnimatePresence>
        {isSubmitted && <SuccessPopup />}
      </AnimatePresence>
    </motion.div>
  );
};

export default BookingForm;