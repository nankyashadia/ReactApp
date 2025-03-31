import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/hero";
import './App.css';
import EventsSection from "./components/Eventsection";
import Footer from "./components/Footer"; // Import the Footer component
import IMAGES from "./assets/images/image";
import DetailedPage from "./components/Detailedpage";

const App = () => {
  // State for highlighted events
  const [highlightedEvents, setHighlightedEvents] = useState([
    { title: 'Kilimanjaro', backgroundImage: IMAGES.Kirimanjalo},
    { title: 'Madagascar', backgroundImage: IMAGES.madagascar },
    { title: 'Cape Town', backgroundImage: IMAGES.CapeTown }
  ]);

  // State for hero background image
  const [heroBackground, setHeroBackground] = useState(IMAGES.backgroundimage);

  // State for navigation title
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
      </Routes>
    </Router>
  );
};

export default App;
