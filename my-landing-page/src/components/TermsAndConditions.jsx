import { useEffect, useState } from "react";
import axios from "axios";
import { ENDPOINTS } from "../Utilities/Util";

import BookingConfirmation from "./BookingConfirmation";
import Payment from "./Payment";
import CancellationsRefunds from "./CancellationsRefunds";
import Footer from "./Footer";

const TermsAndConditions = () => {
  const [termsContent, setTermsContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await axios.get(ENDPOINTS.TERMS_CONDITIONS);
        setTermsContent(response.data?.content || "No content available.");
      } catch (err) {
        setError("Failed to load terms and conditions.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTerms();
  }, []);

  return (
    <div className="min-h-screen text-gray-900 bg-white">
      {/* Header */}
      <div className="bg-[#E05C2A] text-white py-4 px-6">
        <div className="mt-4 flex items-center">
          <div>
            <div className="mb-17"></div>
            <p className="ml-4 text-xl">Terms and Conditions</p>
            <p className="ml-4 text-xl">Meet the heroes behind our Success.</p>
          </div>
        </div>
      </div>

      {/* Dynamic Terms Content */}
      <div className="px-6 py-8 max-w-4xl mx-auto">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="leading-relaxed text-gray-800">
            {termsContent.split("\n").map((line, index) => {
              const trimmed = line.trim();
              const isHeading = /^\d+\.\s[A-Za-z]/.test(trimmed);

              return (
                <p
                  key={index}
                  className={`mb-4 ${isHeading ? "text-[#6E2E2A] font-bold text-lg mt-6" : ""}`}
                >
                  {trimmed}
                </p>
              );
            })}
          </div>
        )}
      </div>

      {/* Optional static sections (currently commented out) */}
      {/* <BookingConfirmation />
      <Payment />
      <CancellationsRefunds /> */}

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
