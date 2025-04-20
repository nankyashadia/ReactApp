import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaMountain,
  FaUsers,
  FaInfoCircle,
  FaPhone,
  FaFileAlt,
  FaShieldAlt,
  FaUserCircle,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const Navigation = ({ title }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-5 text-white bg-transparent absolute top-0 left-0 right-0 z-10">
      {/* Logo/Title and Mobile Menu Button */}
      <div className="flex justify-between w-full md:w-auto items-center">
        <Link to="/" className="text-2xl font-bold hover:text-gray-300" onClick={closeMenu}>
          {title}
        </Link>
        
        {/* Mobile menu button - only visible on small screens */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Main Navigation - Desktop (always visible on md+) */}
      <div className="hidden md:flex flex-wrap justify-center gap-4 md:gap-8 items-center">
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
        
        {/* Secondary Navigation */}
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

      {/* Mobile Navigation - Vertical list with icons and names */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-[#E05C2A] bg-opacity-95 mt-4 rounded-lg shadow-xl">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {/* Primary Navigation */}
            <Link to="/" className="flex items-center space-x-4 py-2 hover:text-gray-300" onClick={closeMenu}>
              <FaHome className="text-xl" />
              <span>Home</span>
            </Link>
            
            <Link to="/events" className="flex items-center space-x-4 py-2 hover:text-gray-300" onClick={closeMenu}>
              <FaMountain className="text-xl" />
              <span>Events</span>
            </Link>
            
            <Link to="/teams" className="flex items-center space-x-4 py-2 hover:text-gray-300" onClick={closeMenu}>
              <FaUsers className="text-xl" />
              <span>Team</span>
            </Link>
            
            <Link to="/about" className="flex items-center space-x-4 py-2 hover:text-gray-300" onClick={closeMenu}>
              <FaInfoCircle className="text-xl" />
              <span>About</span>
            </Link>
            
            <Link to="/contact" className="flex items-center space-x-4 py-2 hover:text-gray-300" onClick={closeMenu}>
              <FaPhone className="text-xl" />
              <span>Contact</span>
            </Link>

            {/* Secondary Navigation */}
            <Link to="/details" className="flex items-center space-x-4 py-2 hover:text-gray-300" onClick={closeMenu}>
              <FaFileAlt className="text-xl" />
              <span>Details</span>
            </Link>
            
            <Link to="/policy" className="flex items-center space-x-4 py-2 hover:text-gray-300" onClick={closeMenu}>
              <FaShieldAlt className="text-xl" />
              <span>Privacy</span>
            </Link>
            
            <Link to="/terms" className="flex items-center space-x-4 py-2 hover:text-gray-300" onClick={closeMenu}>
              <FaFileAlt className="text-xl" />
              <span>Terms</span>
            </Link>
            
            <Link 
              to="/profile" 
              state={{ from: location }}
              className="flex items-center space-x-4 py-2 hover:text-gray-300"
              onClick={closeMenu}
            >
              <FaUserCircle className="text-xl" />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;