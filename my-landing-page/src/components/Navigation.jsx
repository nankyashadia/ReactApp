import React from 'react';
import { FaHome, FaMountain, FaUsers, FaInfoCircle, FaPhone } from 'react-icons/fa';

const Navigation = ({ title }) => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 text-white bg-transparent absolute top-0 left-0 right-0 z-10">
      <p className="text-2xl font">{title}</p>
      <div className="flex space-x-8">
        <a href="#home" className="flex items-center space-x-2 hover:text-gray-300">
          <FaHome /> Home
        </a>
        <a href="#events" className="flex items-center space-x-2 hover:text-gray-300">
          <FaMountain /> Events
        </a>
        <a href="#team" className="flex items-center space-x-2 hover:text-gray-300">
          <FaUsers /> Team
        </a>
        <a href="#about" className="flex items-center space-x-2 hover:text-gray-300">
          <FaInfoCircle /> About
        </a>
        <a href="#contact" className="flex items-center space-x-2 hover:text-gray-300">
          <FaPhone /> Contact
        </a>
      </div>
    </nav>
  );
};

export default Navigation;