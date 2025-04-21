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
      {/* Header */}
      <div className="bg-[#E05C2A] text-white pt-24 pb-4 px-6">
        <div className="mt-4 flex flex-col md:flex-row items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xl font-bold">Privacy Policy</p>
            <p className="text-lg">Your data security is our priority</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-8 px-6">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">{sections.title}</h2>

        {sections.confidentiality && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#6E2E2A] mb-2">Confidentiality</h3>
            <p className="whitespace-pre-line">{sections.confidentiality}</p>
          </div>
        )}

        {sections.cookies && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#6E2E2A] mb-2">Cookie Usage</h3>
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
