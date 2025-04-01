import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/hero";
import './App.css';
import EventsSection from "./components/Eventsection";
import Footer from "./components/Footer";
import IMAGES from "./assets/images/image";
import DetailedPage from "./components/Detailedpage";
import Events from "./components/events";
import Contact from "./components/contact";
import Teams from "./components/Teams";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import AboutUs from "./components/AboutUs";

const App = () => {
  const [highlightedEvents, setHighlightedEvents] = useState([
    { title: 'Kilimanjaro', backgroundImage: IMAGES.Kirimanjalo },
    { title: 'Madagascar', backgroundImage: IMAGES.madagascar },
    { title: 'Cape Town', backgroundImage: IMAGES.CapeTown }
  ]);

  const [heroBackground, setHeroBackground] = useState(IMAGES.backgroundimage);
  const [navTitle, setNavTitle] = useState('HiddenSafari');

  return (
    <Router>
      <Navigation title={navTitle} />
      <Routes>
        {/* Home Page with Hero, Events, and Footer */}
        <Route
          path="/"
          element={
            <>
              <Hero backgroundImage={heroBackground} />
              <EventsSection highlightedEvents={highlightedEvents} />
              <Footer />
            </>
          }
        />
        
        {/* Other Pages */}
        <Route path="/details" element={<DetailedPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        
        {/* You can add a 404 page for unmatched routes */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;