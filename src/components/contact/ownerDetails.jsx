import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import { TypeAnimation } from 'react-type-animation';

const OwnerDetails = () => {
  const form = useRef();
  const controls = useAnimation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    controls.start({
      height: '50vh',
      transition: { duration: 1 },
    });
  }, [controls]);

  const formFields = [
    { label: 'Full Name', type: 'text', name: 'customer-name' },
    { label: 'Email Address', type: 'email', name: 'customer-email' },
    { label: 'Phone Number', type: 'tel', name: 'phone-number' },
    { label: 'Message', type: 'textarea', name: 'message' },
  ];

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const data = {
      from_name: formData.get('customer-name'),
      from_email: formData.get('customer-email'),
      phone_number: formData.get('phone-number'),
      message: formData.get('message'),
    };

    try {
      await emailjs.send(
        'service_npavkes',
        'template_wliif7j',
        data,
        'ANlmnkhJtKMonPp4V'
      );

      setIsSubmitted(true);

      // Construct WhatsApp message
      const whatsappMessage = `
        New Contact Request:
        Name: ${data.from_name}
        Email: ${data.from_email}
        Phone: ${data.phone_number}
        Message: ${data.message}
      `.trim();

      const whatsappNumber = '7087963595';
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

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
      <div className="bg-green-100 p-8 rounded-lg shadow-lg text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="text-6xl mb-4"
        >
          🎉
        </motion.div>
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          Message Sent!
        </h2>
        <p className="text-green-700 mb-6">
          We'll get back to you as soon as possible.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 text-green-800 px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
          onClick={() => setIsSubmitted(false)}
        >
          Close
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      className="mx-auto w-full text-gray-800 bg-green-50 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="relative p-4 sm:p-6 text-white w-full bg-gradient-to-r from-green-600 to-green-800"
        initial={{ height: '100vh' }}
        animate={controls}
      >
        <div className="relative p-4 sm:p-6 text-center h-full flex flex-col justify-center">
          <motion.h2
            className="text-xl sm:text-2xl mb-2 font-montserrat font-thin"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            KEW GARDEN HOMES
          </motion.h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 text-center tracking-wide">
            <TypeAnimation
              sequence={[
                'Get in Touch with Kew Garden Homes',
                2000,
                'We\'re Here to Answer Your Questions',
              ]}
              wrapper="span"
              speed={50}
              className="mt-4 font-montserrat text-yellow-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
              repeat={Infinity}
            />
          </h1>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8 md:p-10 lg:p-12 mt-8 sm:mt-12 bg-white rounded-lg shadow-lg mx-4 sm:mx-8 md:mx-16 lg:mx-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-green-800">Contact Information</h2>
          <div className="space-y-4">
            <ContactItem icon="email" text="info@kewgardenhomes.com.au" />
            <ContactItem icon="phone" text="(03) 9261 8600" />
            <ContactItem icon="location" text="22-24 Gellibrand Street, Kew VIC 3101, Australia" />
          </div>
        </motion.div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 sm:space-y-8"
        >
          {formFields.map((field, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full"
            >
              <label
                htmlFor={field.name}
                className="block text-sm sm:text-md font-medium text-gray-700 mb-2"
              >
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  id={field.name}
                  rows="4"
                  className="mt-1 block w-full bg-green-50 border-b border-green-300 text-gray-700 focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm transition duration-300 ease-in-out"
                  required
                ></textarea>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  className="mt-1 block w-full bg-green-50 border-b border-green-300 text-gray-700 focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm transition duration-300 ease-in-out"
                  required
                />
              )}
            </motion.div>
          ))}

          <div className="flex justify-center mt-8">
            <motion.button
              type="submit"
              className="inline-flex font-montserrat items-center px-6 py-3 border border-transparent text-md font-medium rounded-md text-green-800 bg-yellow-400 shadow-md hover:bg-yellow-500 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </div>

      <Map />

      <AnimatePresence>{isSubmitted && <SuccessPopup />}</AnimatePresence>
    </motion.div>
  );
};

const ContactItem = ({ icon, text }) => (
  <div className="flex items-center text-gray-700">
    <span className="w-6 h-6 mr-3 text-yellow-500">
      {icon === 'email' && <EmailIcon />}
      {icon === 'phone' && <PhoneIcon />}
      {icon === 'location' && <LocationIcon />}
    </span>
    <span>{text}</span>
  </div>
);

const EmailIcon = () => (
  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = () => (
  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Map = () => {
  return (
    <motion.div
      className="mt-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-semibold mb-6 text-green-800 text-center">Our Location</h2>
      <div className="h-96 rounded-xl overflow-hidden shadow-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d145.03262621531904!3d-37.80979497975255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4273%3A0xd6a0ea9e6d8dc2e!2sKEW%20Garden%20Homes!5e0!3m2!1sen!2sus!4v1638146000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default OwnerDetails;