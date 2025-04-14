import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import { ENDPOINTS } from '../Utilities/Util';

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(ENDPOINTS.ABOUT_US)
      .then(response => {
        setAboutData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching About Us data:', error);
        setLoading(false);
      });
  }, []);

  const parseSections = (text) => {
    const sections = {
      vision: '',
      mission: '',
      objectives: ''
    };

    const visionSplit = text.split('Mission');
    if (visionSplit.length >= 2) {
      sections.vision = visionSplit[0].replace('Vision', '').trim();
      const missionSplit = visionSplit[1].split('Objectives');
      if (missionSplit.length >= 2) {
        sections.mission = missionSplit[0].trim();
        sections.objectives = missionSplit[1].trim();
      }
    }

    return sections;
  };

  const sections = aboutData ? parseSections(aboutData.content) : {};

  return (
    <div className="min-h-screen text-gray-900 bg-white">
      {/* Header */}
      <div className="bg-[#E05C2A] text-white py-4 px-6">
        <div className="mt-4">
          <p className="ml-4 text-xl font-semibold">About Us</p>
          <p className="ml-4 text-md">Our vision, mission and objectives</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-8 px-6">
        {loading ? (
          <div className="text-center mt-10">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-orange-500 h-12 w-12 mx-auto mb-4 animate-spin"></div>
            <p>Loading About Us information...</p>
          </div>
        ) : (
          <>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-600 mb-2">Vision</h2>
              <p className="text-gray-700">{sections.vision}</p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-600 mb-2">Mission</h2>
              <p className="text-gray-700">{sections.mission}</p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-600 mb-2">Objectives</h2>
              <p className="text-gray-700">{sections.objectives}</p>
            </section>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
