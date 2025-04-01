import React from 'react';
import VisionSection from './VisionSection';
import MissionSection from './MissionSection';
import ObjectiveSection from './ObjectiveSection';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen text-gray-900 bg-white">
      {/* Navigation Section with Orange Background */}
      <div className="bg-[#E05C2A] text-white py-4 px-6">
        <div className="mt-4 flex items-center">
          <div>
            <div className="mb-17"></div>
            <p className="ml-4 text-xl">About Us</p>
            <p className="ml-4 text-xl">Our vision, mission and objectives</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-8 px-6">
        <VisionSection />
        <MissionSection />
        <ObjectiveSection />
      
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;