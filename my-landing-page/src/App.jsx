import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
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
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Navigation title="HiddenSafari" />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero backgroundImage={IMAGES.backgroundimage} />
              <EventsSection />
              <Footer />
            </>
          }
        />
        
        {/* Protected Routes */}
        <Route
          path="/details"
          element={
            <ProtectedRoute>
              <DetailedPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <Events />
            </ProtectedRoute>
          }
        />
        
        {/* Public Routes */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        
        {/* 404 Page */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
