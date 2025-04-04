import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Start as null to prevent flickering

  useEffect(() => {
    // Read authentication status from localStorage
    const authStatus = localStorage.getItem("auth") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Prevents initial flickering
  }

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
