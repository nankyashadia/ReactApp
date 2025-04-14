import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import { ENDPOINTS } from '../Utilities/Util';

const PrivacyPolicy = () => {
  const [sections, setSections] = useState({ title: '', content: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(ENDPOINTS.PRIVACY_POLICY);
        const { title, content } = res.data;

        // Split by double newlines
        const parts = content.split('\n\n');

        const parsed = {
          title: title,
          confidentiality: '',
          cookies: '',
          others: ''
        };

        parts.forEach(section => {
          const lower = section.toLowerCase();
          if (lower.includes('confidentiality')) parsed.confidentiality = section;
          else if (lower.includes('cookie')) parsed.cookies = section;
          else parsed.others += section + '\n\n';
        });

        setSections(parsed);
      } catch (err) {
        console.error("Error fetching privacy policy:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen text-gray-900 bg-white">
      {/* Navigation Section */}
      <div className="bg-[#E05C2A] text-white py-4 px-6">
        <div className="mt-4">
          <p className="ml-4 text-xl font-semibold">Privacy Policy</p>
          <p className="ml-4 text-md">Meet the heroes behind our Success.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-8 px-6">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">{sections.title}</h2>

        {sections.confidentiality && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Confidentiality</h3>
            <p className="whitespace-pre-line">{sections.confidentiality}</p>
          </div>
        )}

        {sections.cookies && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Cookie Usage</h3>
            <p className="whitespace-pre-line">{sections.cookies}</p>
          </div>
        )}

        {sections.others && (
          <div className="mb-6">
            <p className="whitespace-pre-line">{sections.others}</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
