import React from 'react';
import Footer from './Footer';

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
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Guarantee of confidentiality</h2>
          <h2 className="text-gray-700 ">
            We are committed to protecting your privacy online. Our privacy policy is designed to give you peace of mind and confidence. We may change this policy from time to time by updating this page and you should check this page to ensure that you are happy with any changes. This policy is effective from 1st of December 2021 onwards.
          </h2>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Cookie usage</h2>
          <h2 className="text-gray-700">
            We use cookies on our website for a variety of reasons. Cookies help us identify the device you are using and how you use our website, but not you personally. Cookies record anonymous information about visits and clicks on each webpage. Cookies are small files which are stored on your computer when you visit a website. However, they cannot be used to identify you personally and they are not harmful to your computer. They are essential for several features of our website to work, they help us to identify which pages are being used, and to analyse data and improve our site. We use this information for statistical analysis purposes only and they in no way give us any information about you. If you choose, you can opt out by turning off cookies in the preferences settings in your web browser.
          </h2>
        </section>
      </div>
         {/* Footer Section */}
         <Footer />
    </div>
  );
};

export default PrivacyPolicy;