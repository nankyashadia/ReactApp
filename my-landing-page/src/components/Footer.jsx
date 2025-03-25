import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaSearch } from "react-icons/fa";
import { PiThreadsLogoBold } from "react-icons/pi"; // Import Threads logo icon
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-title">HiddenSafari</h2>
      <nav className="footer-nav">
        <a href="#">Teams</a>
        <a href="#">About</a>
        <a href="#">Events</a>
        <a href="#">Contact US</a>
        <a href="#">Terms and Condition</a>
      </nav>
      <div className="footer-subscribe">
        <input type="email" placeholder="Enter your Email" />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
      <div className="footer-socials">
        <div className="social-circle linkedin"><FaLinkedin /></div>
        <div className="social-circle facebook"><FaFacebook /></div>
        <div className="social-circle threads"><PiThreadsLogoBold /></div>
        <div className="social-circle youtube"><FaYoutube /></div>
      </div>
    </footer>
  );
};

export default Footer;
