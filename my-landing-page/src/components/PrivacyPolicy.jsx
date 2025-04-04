import React from 'react';
import Footer from './Footer';
import Confidentiality from './Confidentiality';
import CookieUsage from './CookieUsage';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen text-gray-900 bg-white">
      {/* Navigation Section with Orange Background */}
      <div className="bg-[#E05C2A] text-white py-4 px-6">
        <div className="mt-4 flex items-center">
          <div>
            <div className="mb-17"></div>
            <p className="ml-4 text-xl">Privacy policy</p>
            <p className="ml-4 text-xl">Meet the heroes behind our Success.</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-8 px-6">
        <Confidentiality />
        <CookieUsage />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
