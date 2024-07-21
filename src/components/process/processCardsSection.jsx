import React from 'react';

const ProcessCardsSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-12 text-customGreen">Our Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-custom p-6">
          <img src="https://i.imgur.com/dqZD3Sg.jpeg" alt="Step 1" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-2xl font-semibold text-customGreen mb-2">Step 1: Initial Consultation</h3>
          <p className="text-customGreenDark font-light leading-relaxed">We start by understanding your vision and requirements for your new home.</p>
        </div>
        <div className="bg-white rounded-lg shadow-custom p-6">
          <img src="https://i.imgur.com/bHP6622.jpeg" alt="Step 2" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-2xl font-semibold text-customGreen mb-2">Step 2: Property Search & Viewings</h3>
          <p className="text-customGreenDark font-light leading-relaxed">We present a selection of properties that match your criteria.</p>
        </div>
        <div className="bg-white rounded-lg shadow-custom p-6">
          <img src="https://i.imgur.com/fYDBYVj.jpeg" alt="Step 3" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-2xl font-semibold text-customGreen mb-2">Step 3: Design & Planning</h3>
          <p className="text-customGreenDark font-light leading-relaxed">Our architects and designers work with you to create a customized plan for your new home.</p>
        </div>
        <div className="bg-white rounded-lg shadow-custom p-6">
          <img src="https://i.imgur.com/I0246Uo.jpeg" alt="Step 4" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-2xl font-semibold text-customGreen mb-2">Step 4: Construction & Progress Updates</h3>
          <p className="text-customGreenDark font-light leading-relaxed">Once the plan is finalized, construction begins. We provide regular updates on the progress.</p>
        </div>
        <div className="bg-white rounded-lg shadow-custom p-6">
          <img src="https://i.imgur.com/OwucEfR.jpeg" alt="Step 5" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-2xl font-semibold text-customGreen mb-2">Step 5: Final Inspection & Handover</h3>
          <p className="text-customGreenDark font-light leading-relaxed">After construction is complete, we conduct a thorough inspection with you.</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessCardsSection;
