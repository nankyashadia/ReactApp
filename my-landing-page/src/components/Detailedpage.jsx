import React from 'react';
import { FaHome, FaMountain, FaUsers, FaInfoCircle, FaPhone } from 'react-icons/fa';
import Navigation from './Navigation';
import IMAGES from '../assets/images/image'; // Ensure correct path

const DetailedPage = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.GreenMountain})` }} // Use GreenMountain
      ></div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0  bg-opacity-30"></div>

      {/* Navigation Bar */}
      <Navigation title="HiddenSafari" />
      

    </div>
  );
};

export default DetailedPage;
