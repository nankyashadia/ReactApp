import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaMountain, FaUsers, FaInfoCircle, FaPhone, FaFileAlt, FaShieldAlt } from 'react-icons/fa';

const Navigation = ({ title }) => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 text-white bg-transparent absolute top-0 left-0 right-0 z-10">
      <Link to="/" className="text-2xl font hover:text-gray-300">
        {title}
      </Link>
      <div className="flex space-x-8">
        <Link to="/" className="flex items-center space-x-2 hover:text-gray-300">
          <FaHome /> <span>Home</span>
        </Link>
        <Link to="/events" className="flex items-center space-x-2 hover:text-gray-300">
          <FaMountain /> <span>Events</span>
        </Link>
        <Link to="/teams" className="flex items-center space-x-2 hover:text-gray-300">
          <FaUsers /> <span>Team</span>
        </Link>
        <Link to="/about" className="flex items-center space-x-2 hover:text-gray-300">
          <FaInfoCircle /> <span>About</span>
        </Link>
        <Link to="/contact" className="flex items-center space-x-2 hover:text-gray-300">
          <FaPhone /> <span>Contact</span>
        </Link>
        <Link to="/details" className="flex items-center space-x-2 hover:text-gray-300">
          <FaFileAlt /> <span>Details</span>
        </Link>
        <Link to="/policy" className="flex items-center space-x-2 hover:text-gray-300">
          <FaShieldAlt /> <span>Privacy</span>
        </Link>
        <Link to="/terms" className="flex items-center space-x-2 hover:text-gray-300">
          <FaFileAlt /> <span>Terms</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;