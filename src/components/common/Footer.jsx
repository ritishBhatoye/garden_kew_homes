import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import { Instagram, Facebook, Linkedin, Pinterest, Youtube } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.from(footerRef.current, {
      opacity: 10,
      y: 20,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div ref={footerRef} className="bg-gray-900 text-gray-200 py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:order-2 md:ml-auto md:w-full">
            <h2 className="text-2xl font-bold mb-4">START THE JOURNEY</h2>
            <p className="mb-4">Contact us today to discover how we can bring your vision to life, together.</p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="firstName" className="block text-sm mb-2">FIRST NAME*</label>
                <input type="text" id="firstName" className="w-full border-b border-white bg-gray-800 text-white px-2 py-1" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="lastName" className="block text-sm mb-2">LAST NAME*</label>
                <input type="text" id="lastName" className="w-full border-b border-white bg-gray-800 text-white px-2 py-1" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="phone" className="block text-sm mb-2">PHONE*</label>
                <input type="text" id="phone" className="w-full border-b border-white bg-gray-800 text-white px-2 py-1" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="email" className="block text-sm mb-2">EMAIL*</label>
                <input type="email" id="email" className="w-full border-b border-white bg-gray-800 text-white px-2 py-1" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="buildPostcode" className="block text-sm mb-2">BUILD POSTCODE*</label>
                <input type="text" id="buildPostcode" className="w-full border-b border-white bg-gray-800 text-white px-2 py-1" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="enquiry" className="block text-sm mb-2">ENQUIRY</label>
                <select id="enquiry" className="w-full border-b border-white bg-gray-800 text-white px-2 py-1">
                  <option value="">Select</option>
                  {/* Add more options here */}
                </select>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="budget" className="block text-sm mb-2">BUDGET</label>
                <select id="budget" className="w-full border-b border-white bg-gray-800 text-white px-2 py-1">
                  <option value="">Select</option>
                  {/* Add more options here */}
                </select>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="buildTime" className="block text-sm mb-2">WHEN WOULD YOU LIKE TO BUILD?*</label>
                <select id="buildTime" className="w-full border-b border-white bg-gray-800 text-white px-2 py-1">
                  <option value="">Select</option>
                  {/* Add more options here */}
                </select>
              </div>
              <div className="col-span-2">
                <label htmlFor="message" className="block text-sm mb-2">MESSAGE</label>
                <textarea id="message" className="w-full border-b border-white bg-gray-800 text-white px-2 py-1" rows="2"></textarea>
              </div>
              <div className="col-span-2">
                <button type="submit" className="w-full border border-white bg-gray-800 text-white px-4 py-2">SUBMIT</button>
              </div>
            </form>
          </div>
          <div className="md:order-1 md:w-full">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Visit our Head Office</h2>
              <p>25 BURWOOD ROAD, HAWTHORN VIC 3122</p>
              <a href="https://www.google.com/maps" className="text-blue-500 hover:underline">VIEW ON GOOGLE MAPS</a>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Enquire</h2>
              <p>(03) 9810 2800</p>
              <p>hello@englehart.com.au</p>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Connect</h2>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="flex items-center text-gray-200 hover:text-gray-400 transition">
                  {/* <Instagram className="mr-2" /> */}
                  Instagram
                </a>
                <a href="#" className="flex items-center text-gray-200 hover:text-gray-400 transition">
                  {/* <Facebook className="mr-2" /> */}
                  Facebook
                </a>
                <a href="#" className="flex items-center text-gray-200 hover:text-gray-400 transition">
                  {/* <Linkedin className="mr-2" /> */}
                  LinkedIn
                </a>
                <a href="#" className="flex items-center text-gray-200 hover:text-gray-400 transition">
                  {/* <Pinterest className="mr-2" /> */}
                  Pinterest
                </a>
                <a href="#" className="flex items-center text-gray-200 hover:text-gray-400 transition">
                  {/* <Youtube className="mr-2" /> */}
                  YouTube
                </a>
                <a href="#" className="flex items-center text-gray-200 hover:text-gray-400 transition">
                  {/* <Book className="mr-2" /> */}
                  Little Red Book
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-600 text-center">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <p>&copy; Englehart 2024 | Privacy | Disclaimer</p>
            </div>
            <div className="text-center md:text-right">
              <p>Designed by Studio Perspective</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
