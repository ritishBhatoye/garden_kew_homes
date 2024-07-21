import React from 'react';

const TestimonialsSection = () => {
  return (
    <div className="bg-gray-900 text-white py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center sm:text-left mb-4 sm:mb-0">
            CHECK WHAT <span className="text-amber-600">CLIENTS</span> SAY
          </h2>
          <span className="text-lg sm:text-xl text-gray-400">TESTIMONIALS</span>
        </div>
        
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <blockquote className="text-xl sm:text-2xl mb-6 relative">
              <span className="text-4xl sm:text-5xl text-amber-600 absolute -left-4 sm:-left-8 -top-4">"</span>
              Our technology is capable of displacing 2 Gigatons of CO2. That's a reduction. And that's a 45% reduction in emissions. This is our goal. Substantially decreasing commercial buildings.
            </blockquote>
            <div className="flex items-center">
              <img src="https://shorturl.at/iQm2F" alt="" className="w-12 h-12 sm:w-16 sm:h-16 object-cover mr-4" />
              <div>
                <p className="font-semibold">Sandeep Singh</p>
                <p className="text-amber-600 text-sm">CO-FOUNDER</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 opacity-30">
            <blockquote className="text-xl sm:text-2xl mb-6 relative">
              <span className="text-4xl sm:text-5xl text-gray-600 absolute -left-4 sm:-left-8 -top-4">"</span>
              Our technology is capable of displacing 2 Gigatons of CO2. That's a reduction. And that's a 45% reduction in emissions. This is our goal. Substantially decreasing commercial buildings.
            </blockquote>
            <div className="flex items-center">
              <img src="https://shorturl.at/GFGzB" alt="" className="w-12 h-12 sm:w-16 sm:h-16 object-cover mr-4" />
              <div>
                <p className="font-semibold">Harjeet Singh</p>
                <p className="text-amber-600 text-sm">CO-FOUNDER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-4 right-4">
        <button className="bg-amber-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-xl sm:text-2xl">
          ↑
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSection;