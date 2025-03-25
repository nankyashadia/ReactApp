import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/hero";
import './App.css';
import EventsSection from "./components/Eventsection";
import Footer from "./components/footer"; // Import the Footer component
import IMAGES from "./assets/images/image";

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
    <>
      <Navigation title={navTitle} />
      <Hero backgroundImage={heroBackground} />
      <EventsSection highlightedEvents={highlightedEvents} />
      <Footer /> {/* Added Footer component here */}
    </>
  );
};

export default App;