import React from "react";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";
import IMAGES from "../assets/images/image";
import Footer from './Footer';

const Events = () => {
  return (
    <div className="min-h-screen text-gray-900 bg-white">
      {/* Navigation Section with Orange Background */}
      <div className="bg-[#E05C2A] text-white py-4 px-6">
        {/* Bottom Section: Title, Subtitle, and Search Bar */}
        <div className="mt-4 flex items-center">
          <div>
            <div className="mb-17"> {/* Added margin-bottom here */}
            </div>
            <p className="ml-4 text-xl">Events</p>
            <p className="ml-4 text-xl">Life is either a daring adventure or nothing.</p>
          </div>
          </div>

          {/* Search Bar Positioned to the Right */}
          <div className="flex items-center bg-white rounded-full p-2 shadow-md max-w-md w-full ml-auto">
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

      {/* Tours Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tour Cards */}
          {[
            { img: IMAGES.Zebra, title: "Whole Of South Africa", price: "$3,560", duration: "10 Days/9 Nights" },
            { img: IMAGES.image3, title: "South Africa with Mauritius", price: "$4,060", duration: "13 Days/14 Nights" },
            { img: IMAGES.image16, title: "Splendid South Africa", price: "$2,560", duration: "9 Days/10 Nights" },
            { img: IMAGES.image4, title: "African Jambo", price: "$3,560", duration: "10 Days/9 Nights" },
            { img: IMAGES.image5, title: "Glimpse of South Africa with Kruger", price: "$4,060", duration: "13 Days/14 Nights" },
            { img: IMAGES.image7, title: "Splendid South Africa", price: "$2,560", duration: "9 Days/10 Nights" },
          ].map((tour, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={tour.img} alt={tour.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-gray-800 ">
                <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-orange-600 font-semibold">From {tour.price}</p>
                  <div className="flex items-center text-gray-500">
                    <FaCalendarAlt className="mr-1" />
                    <span>{tour.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
           {/* LOAD MORE text - styled as plain text */}
           <div className="text-center ml-100">
          <p className="text-orange-500 font-medium uppercase tracking-wider">
            load more
          </p>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};


export default Events;