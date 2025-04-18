import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/hero";
import EventsSection from "./components/Eventsection";
import Footer from "./components/Footer";
import IMAGES from "./assets/images/image";
import DetailedPage from "./components/Detailedpage";
import Events from "./components/events";
import Contact from "./components/Contact";
import Teams from "./components/Teams";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import AboutUs from "./components/AboutUs";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage"; // ✅ Added this





const App = () => {
  return (
    <Router>
      <Navigation title="HiddenSafari" />
      <Routes>
        {/* Public Routes */}
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/detailpage" element={<DetailedPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/details" element={<DetailedPage />} />

        {/* ✅ Protected Route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        {/* 404 Not Found */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
