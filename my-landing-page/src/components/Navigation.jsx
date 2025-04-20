import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaMountain,
  FaUsers,
  FaInfoCircle,
  FaPhone,
  FaFileAlt,
  FaShieldAlt,
  FaUserCircle
} from 'react-icons/fa';

const Navigation = ({ title }) => {
  const location = useLocation();

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-5 text-white bg-transparent absolute top-0 left-0 right-0 z-10">
      {/* Logo/Title - Always visible */}
      <Link to="/" className="text-2xl font-bold mb-4 md:mb-0 hover:text-gray-300">
        {title}
      </Link>
      
      {/* Main Navigation - Improved for mobile */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center">
        <Link to="/" className="flex items-center space-x-2 hover:text-gray-300 min-w-[80px]">
          <FaHome className="text-lg" /> <span className="text-sm md:text-base">Home</span>
        </Link>
        
        <Link to="/events" className="flex items-center space-x-2 hover:text-gray-300 min-w-[80px]">
          <FaMountain className="text-lg" /> <span className="text-sm md:text-base">Events</span>
        </Link>
        
        <Link to="/teams" className="flex items-center space-x-2 hover:text-gray-300 min-w-[80px]">
          <FaUsers className="text-lg" /> <span className="text-sm md:text-base">Team</span>
        </Link>
        
        <Link to="/about" className="flex items-center space-x-2 hover:text-gray-300 min-w-[80px]">
          <FaInfoCircle className="text-lg" /> <span className="text-sm md:text-base">About</span>
        </Link>
        
        <Link to="/contact" className="flex items-center space-x-2 hover:text-gray-300 min-w-[80px]">
          <FaPhone className="text-lg" /> <span className="text-sm md:text-base">Contact</span>
        </Link>
        
        {/* Secondary Navigation - More compact */}
        <div className="flex gap-4 md:gap-6">
          <Link to="/details" className="flex items-center space-x-1 hover:text-gray-300">
            <FaFileAlt className="text-sm" /> <span className="text-xs md:text-sm">Details</span>
          </Link>
          
          <Link to="/policy" className="flex items-center space-x-1 hover:text-gray-300">
            <FaShieldAlt className="text-sm" /> <span className="text-xs md:text-sm">Privacy</span>
          </Link>
          
          <Link to="/terms" className="flex items-center space-x-1 hover:text-gray-300">
            <FaFileAlt className="text-sm" /> <span className="text-xs md:text-sm">Terms</span>
          </Link>
          
          <Link 
            to="/profile" 
            state={{ from: location }}
            className="flex items-center space-x-1 hover:text-gray-300"
          >
            <FaUserCircle className="text-sm" /> <span className="text-xs md:text-sm">Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;