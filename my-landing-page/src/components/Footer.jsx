import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaSearch } from "react-icons/fa";
import { PiThreadsLogoBold } from "react-icons/pi";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-title">HiddenSafari</h2>
      <nav className="footer-nav">
        <Link to="/teams">Teams</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/terms">Terms and Conditions</Link>
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