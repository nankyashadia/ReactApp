// src/Utilities/Util.js

export const API_BASE_URL = "https://sample-project-api.chordifyed.com/api/v1";

export const ENDPOINTS = {
  TEAM: `${API_BASE_URL}/team`,
  CONTACT: `${API_BASE_URL}/contact`,
  HIGHLIGHTED_EVENTS: `${API_BASE_URL}/events/highlighted-events`,
  SUMMER_EVENTS: `${API_BASE_URL}/events/summer-events`,
  SNOW_TREKS: `${API_BASE_URL}/events/snow-treks-events`,
  EPIC_ADVENTURES: `${API_BASE_URL}/events/epic-adventure-events`,
  SPECIAL_EVENTS: `${API_BASE_URL}/events/special-events`,
  ALL_EVENTS: `${API_BASE_URL}/events/all-events`,
  ABOUT_US: `${API_BASE_URL}/info/about-us`,
  PRIVACY_POLICY: `${API_BASE_URL}/info/privacy-policy`, // ✅ New line added
  TERMS_CONDITIONS: `${API_BASE_URL}/info/terms-condition`, // ✅ New line added for Terms and Conditions
  TESTIMONIALS: `${API_BASE_URL}/info/testimonials` // ✅ Fixed the endpoint here
};
