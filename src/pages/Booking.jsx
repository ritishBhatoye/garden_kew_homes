import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { TypeAnimation } from "react-type-animation";
import backgroundImage from "../assets/images/home-1.jpg";

const splashEffect = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const BookingForm = () => {
  const form = useRef();
  const controls = useAnimation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Trigger the animation after a short delay
    controls.start({
      height: "50vh",
      transition: { duration: 1 },
    });
  }, [controls]);

  const formFields = [
    { label: "Full Name", type: "text", name: "customer-name" },
    { label: "Email Address", type: "email", name: "customer-email" },
    { label: "Phone Number", type: "tel", name: "phone-number" },
    { label: "Preferred Contact Date", type: "date", name: "contact-date" },
    {
      label: "Project Type",
      type: "select",
      name: "project-type",
      options: ["New Construction", "Renovation", "Addition", "Other"],
    },
    { label: "Message", type: "textarea", name: "message" },
  ];

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const data = {
      from_name: formData.get("customer-name"),
      from_email: formData.get("customer-email"),
      phone_number: formData.get("phone-number"),
      contact_date: formData.get("contact-date"),
      project_type: formData.get("project-type"),
      message: formData.get("message"),
    };

    try {
      // Send email using emailjs
      await emailjs.send(
        "service_npavkes",
        "template_wliif7j",
        data,
        "ANlmnkhJtKMonPp4V"
      );

      // Show success popup
      setIsSubmitted(true);

      // Construct WhatsApp message
      const whatsappMessage = `
        New Booking Request:
        Name: ${data.from_name}
        Email: ${data.from_email}
        Phone: ${data.phone_number}
        Contact Date: ${data.contact_date}
        Project Type: ${data.project_type}
        Message: ${data.message}
      `.trim();

      // Replace with your WhatsApp number
      const whatsappNumber = "7087963595";
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      // Open WhatsApp
      window.open(whatsappURL, "_blank");
    } catch (error) {
      console.error(error);
      alert("Failed to send the message. Please try again.");
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
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="text-6xl mb-4"
        >
          🎉
        </motion.div>
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          Booking Submitted!
        </h2>
        <p className="text-green-700 mb-6">
          We'll contact you soon to confirm your booking.
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
        className="relative bg-cover bg-center p-4 sm:p-6 text-white w-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ height: "100vh" }}
        animate={controls}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
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
                "Building dreams, one home at a time with Kew Garden Homes",
                2000,
                "Crafting exceptional living spaces for every family",
              ]}
              wrapper="span"
              speed={50}
              className="mt-4 font-montserrat text-yellow-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
              repeat={Infinity}
            />
          </h1>
        </div>
      </motion.div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="relative content-center p-6 sm:p-8 md:p-10 lg:p-12 items-center space-y-6 sm:space-y-8 mt-8 sm:mt-12 bg-white rounded-lg shadow-lg mx-4 sm:mx-8 md:mx-16 lg:mx-32"
      >
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {formFields.map((field, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`w-full ${field.type === 'textarea' ? 'md:col-span-2' : ''}`}
            >
              <label
                htmlFor={field.name}
                className="block text-sm sm:text-md font-medium text-gray-700 mb-2"
              >
                {field.label}
              </label>
              {field.type === "select" ? (
                <select
                  name={field.name}
                  id={field.name}
                  className="mt-1 block w-full bg-green-50 border-b border-green-300 text-gray-700 focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm transition duration-300 ease-in-out"
                  required
                >
                  <option value="">Select an option</option>
                  {field.options.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
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
                  required={field.type !== "number"}
                />
              )}
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <motion.button
            type="submit"
            className="inline-flex font-montserrat items-center px-6 py-3 border border-transparent text-md font-medium rounded-md text-green-800 bg-yellow-400 shadow-md hover:bg-yellow-500 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </div>
      </form>
      <AnimatePresence>{isSubmitted && <SuccessPopup />}</AnimatePresence>
    </motion.div>
  );
};

export default BookingForm;
