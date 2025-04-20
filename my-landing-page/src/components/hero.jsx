import React from 'react';
import { FaHiking, FaUserFriends, FaRoad, FaRegClock } from 'react-icons/fa';

const Hero = ({ backgroundImage }) => {
  return (
    <div
      className="relative w-full h-screen flex items-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Hero Content */}
      <div className="relative z-5 ml-5 mt-30">
        <h2 className="text-5xl font-semibold mb-0">Experience</h2>
        <h2 className="text-5xl font-semibold mt-0">Nature</h2>
        <p className="text-lg mt-40">India's Largest Trekking Organization</p>

        {/* Stats Section */}
        <div className="mt-3 mb-10 text-lg">
          <div className="flex space-x-10">
            <div className="flex items-center space-x-2">
              <FaHiking className="text-2xl" />
              <div>
                <p className="font-bold">2,11,500+</p>
                <p>Participants</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaUserFriends className="text-2xl" />
              <div>
                <p className="font-bold">2750+</p>
                <p>Volunteers</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaRoad className="text-2xl" />
              <div>
                <p className="font-bold">68+</p>
                <p>Events</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaRegClock className="text-2xl" />
              <div>
                <p className="font-bold">11</p>
                <p>Years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex space-x-2 mt-5">
          <div className="w-1 h-1 bg-white rounded-full opacity-50"></div>
          <div className="w-1 h-1 bg-white rounded-full opacity-100"></div>
          <div className="w-1 h-1 bg-white rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
