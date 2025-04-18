// src/components/Responsiveness/index.jsx
import { useState, useEffect } from 'react';
//import PropTypes from 'prop-types';

// Custom hook in separate file (optional)
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    let timeoutId;
    
    function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 100);
    }
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

export default function Responsiveness({
  mobile,
  tablet,
  desktop,
  breakpoints = {
    mobile: 768,
    tablet: 1024
  }
}) {
  const { width } = useWindowSize();
  
  if (width < breakpoints.mobile) {
    return mobile;
  }
  if (width < breakpoints.tablet) {
    return tablet || desktop; // Fallback to desktop if tablet not provided
  }
  return desktop;
}

Responsiveness.propTypes = {
  mobile: PropTypes.node.isRequired,
  desktop: PropTypes.node.isRequired,
  tablet: PropTypes.node,
  breakpoints: PropTypes.shape({
    mobile: PropTypes.number,
    tablet: PropTypes.number
  })
};