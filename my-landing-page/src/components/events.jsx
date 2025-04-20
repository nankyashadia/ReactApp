import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";
import Footer from './Footer';
import { ENDPOINTS } from "../Utilities/Util";

const EVENTS_PER_PAGE = 3;

const Events = () => {
  const [eventCategories, setEventCategories] = useState({});
  const [visibleCounts, setVisibleCounts] = useState({});

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(ENDPOINTS.ALL_EVENTS);
        setEventCategories(response.data);

        const initialCounts = {};
        Object.keys(response.data).forEach((key) => {
          initialCounts[key] = EVENTS_PER_PAGE;
        });
        setVisibleCounts(initialCounts);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const formatTitle = (categoryKey) => {
    return categoryKey
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .trim();
  };

  const loadMore = (category) => {
    setVisibleCounts(prevCounts => ({
      ...prevCounts,
      [category]: prevCounts[category] + EVENTS_PER_PAGE
    }));
  };

  return (
    <div className="min-h-screen text-gray-900 bg-white">
      {/* Header with the exact code you requested */}
      <div className="bg-[#E05C2A] text-white pt-24 pb-4 px-6">
        <div className="mt-4 flex flex-col md:flex-row items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xl font-bold">Events</p>
            <p className="text-lg">Life is either a daring adventure or nothing.</p>
          </div>
          <div className="flex items-center bg-white rounded-full p-2 shadow-md max-w-md w-full md:ml-auto">
            <input
              type="text"
              placeholder="Search Here"
              className="outline-none px-4 py-2 text-black rounded-l-full w-full"
            />
            <button className="bg-orange-500 text-white p-3 rounded-r-full hover:bg-orange-600 transition-colors -ml-2 -mt-1">
              <FaSearch className="text-sm" />
            </button>
          </div>
        </div>
      </div>

      {/* Rest of your original Events page code remains unchanged */}
      <div className="container mx-auto px-4 py-8">
        {Object.entries(eventCategories).map(([categoryName, events]) => {
          const visibleCount = visibleCounts[categoryName] || EVENTS_PER_PAGE;
          const visibleEvents = events.slice(0, visibleCount);

          return (
            <div key={categoryName} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[#E05C2A]">
                {formatTitle(categoryName)}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleEvents.map((event, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <img src={event.bannerImages1} alt={event.heading} className="w-full h-48 object-cover" />
                    <div className="p-6 text-gray-800">
                      <h3 className="text-xl font-bold mb-2">{event.heading}</h3>
                      <p className="text-gray-600 mb-2">{event.calendarDates}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-orange-600 font-semibold">Duration: {event.numberOfDays} Days</p>
                        <div className="flex items-center text-gray-500">
                          <FaCalendarAlt className="mr-1" />
                          <span>{event.calendarDates}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {visibleCount < events.length && (
                <div className="flex justify-center mt-6">
                  <button
                    className="bg-[#E05C2A] text-white py-2 px-6 rounded-full hover:bg-orange-600 transition"
                    onClick={() => loadMore(categoryName)}
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Events;