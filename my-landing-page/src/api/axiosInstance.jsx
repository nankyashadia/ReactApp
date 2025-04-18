// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://sample-project-api.chordifyed.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${yourToken}` // if needed
  },
  timeout: 10000, // optional
});

// Optional: Add interceptors for logging or token refresh
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
