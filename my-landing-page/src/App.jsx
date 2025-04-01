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
import Teams from "./components/Teams";  // Changed from Contact to Teams
import PrivacyPolicy from "./components/PrivacyPolicy"; 

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
        <Route path="/details" element={<DetailedPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/teams" element={<Teams />} />  {/* Changed path to /teams */}
        <Route path="/policy" element={<PrivacyPolicy />} />  
      </Routes>
    </Router>
  );
};

export default App;