// Log environment variables for verification
console.log('Environment Variables:', {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  BASE_URL: import.meta.env.VITE_BASE_URL
});

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
  PRIVACY_POLICY: `${API_BASE_URL}/info/privacy-policy`,
  TERMS_CONDITIONS: `${API_BASE_URL}/info/terms-condition`,
  TESTIMONIALS: `${API_BASE_URL}/info/testimonials`
};

const API_URL = process.env.REACT_APP_API_URL;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const endpoints = {
  auth: {
    login: `${API_URL}/auth/login`,
    register: `${API_URL}/auth/register`,
    logout: `${API_URL}/auth/logout`,
    verify: `${API_URL}/auth/verify`,
  },
  user: {
    profile: `${API_URL}/user/profile`,
    update: `${API_URL}/user/update`,
  },
  // Add more endpoints as needed
};

export const socialAuth = {
  google: {
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    redirectUri: `${BASE_URL}/auth/google/callback`,
  },
  facebook: {
    appId: process.env.REACT_APP_FACEBOOK_APP_ID,
    redirectUri: `${BASE_URL}/auth/facebook/callback`,
  },
}; 