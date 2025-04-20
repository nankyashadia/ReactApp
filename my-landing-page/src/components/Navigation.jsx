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
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-wrap justify-center gap-4 md:gap-8 items-center">
        {/* ... (keep your existing desktop navigation) ... */}
      </div>

      {/* Mobile Navigation - Vertical columns with 4-5 icons each */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-[#E05C2A] bg-opacity-95 mt-4 rounded-lg shadow-xl">
          <div className="grid grid-cols-2 gap-4 py-4 px-6">
            {/* Column 1 (5 items) */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-3 hover:text-gray-300" onClick={closeMenu}>
                <FaHome className="text-xl" />
                <span>Home</span>
              </Link>
              
              <Link to="/events" className="flex items-center space-x-3 hover:text-gray-300" onClick={closeMenu}>
                <FaMountain className="text-xl" />
                <span>Events</span>
              </Link>
              
              <Link to="/teams" className="flex items-center space-x-3 hover:text-gray-300" onClick={closeMenu}>
                <FaUsers className="text-xl" />
                <span>Team</span>
              </Link>
              
              <Link to="/about" className="flex items-center space-x-3 hover:text-gray-300" onClick={closeMenu}>
                <FaInfoCircle className="text-xl" />
                <span>About</span>
              </Link>
              
              <Link to="/contact" className="flex items-center space-x-3 hover:text-gray-300" onClick={closeMenu}>
                <FaPhone className="text-xl" />
                <span>Contact</span>
              </Link>
            </div>

            {/* Column 2 (4 items) */}
            <div className="space-y-4">
              <Link to="/details" className="flex items-center space-x-3 hover:text-gray-300" onClick={closeMenu}>
                <FaFileAlt className="text-xl" />
                <span>Details</span>
              </Link>
              
              <Link to="/policy" className="flex items-center space-x-3 hover:text-gray-300" onClick={closeMenu}>
                <FaShieldAlt className="text-xl" />
                <span>Privacy</span>
              </Link>
              
              <Link to="/terms" className="flex items-center space-x-3 hover:text-gray-300" onClick={closeMenu}>
                <FaFileAlt className="text-xl" />
                <span>Terms</span>
              </Link>
              
              <Link 
                to="/profile" 
                state={{ from: location }}
                className="flex items-center space-x-3 hover:text-gray-300"
                onClick={closeMenu}
              >
                <FaUserCircle className="text-xl" />
                <span>Profile</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;