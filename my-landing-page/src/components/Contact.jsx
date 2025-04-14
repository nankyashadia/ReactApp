import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ENDPOINTS } from '../Utilities/Util';
import Footer from './Footer';

const Contact = () => {
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await axios.get(ENDPOINTS.CONTACT);
        console.log('Contact API Response:', response.data);
        
        if (response.data && Array.isArray(response.data)) {
          setOffices(response.data);
        } else {
          throw new Error('Unexpected API response format');
        }
      } catch (err) {
        console.error("Error fetching contact data:", err);
        setError("Failed to load office information. Showing default data.");
        // Fallback to your default offices if API fails
        setOffices([
          {
            id: 1,
            name: "Office 1 (Head Office)",
            address: "308, University, Above Chocolate Room, ABC Cross Roads, XYZ, XXX, - 3X00X9",
            timings: "11AM to 8PM",
            phones: ["+91-XXX6475XXX", "+91-XXX6475XXX"]
          },
          // Add other default offices if needed
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  return (
    <div className="min-h-screen text-gray-900 bg-white">
      {/* Navigation Section with Orange Background */}
      <div className="bg-[#E05C2A] text-white py-4 px-6">
        <div className="mt-4 flex items-center">
          <div>
            <div className="mb-17"></div>
            <p className="ml-4 text-xl">Contact</p>
            <p className="ml-4 text-xl">Life is either a daring adventure or nothing.</p>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="container mx-auto px-4 py-2 text-red-500">
          {error}
        </div>
      )}

      {/* Our Offices Section */}
      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-[#FFF4F1] rounded-lg shadow-lg p-6 animate-pulse">
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                </div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mt-4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {offices.map((office) => (
              <div key={office.id} className="bg-[#FFF4F1] rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2">{office.name || `Office ${office.id}`}</h3>
                <p className="text-gray-700">
                  {office.address || "Address not available"}
                </p>
                <p className="mt-2 text-orange-500">
                  <strong>Office Timings:</strong> {office.timings || "Not specified"}
                </p>
                {office.phones && office.phones.map((phone, index) => (
                  <p key={index} className="text-orange-500 mt-2">📞 {phone}</p>
                ))}
                {office.mapLink && (
                  <div className="flex justify-end mt-4">
                    <a 
                      href={office.mapLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-500 font-semibold hover:underline"
                    >
                      View On Map ↗
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Contact;