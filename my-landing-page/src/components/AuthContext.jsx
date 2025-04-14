import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const hardcodedUser = {
  username: 'nankya',
  password: 'Shady@189',
  name: 'Nankya Shadia',
  role: 'admin',
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize auth state from localStorage
  useEffect(() => {
    const auth = localStorage.getItem('auth') === 'true';
    if (auth) {
      setUser({
        username: hardcodedUser.username,
        name: hardcodedUser.name,
        role: hardcodedUser.role,
      });
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      if (username === hardcodedUser.username && password === hardcodedUser.password) {
        localStorage.setItem('auth', 'true');
        const userData = {
          username: hardcodedUser.username,
          name: hardcodedUser.name,
          role: hardcodedUser.role,
        };
        setUser(userData);
        return userData; // Return user data for confirmation
      }
      throw new Error('Invalid username or password');
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };
  
  const logout = () => {
    localStorage.removeItem('auth');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      loading,
      isAuthenticated: !!user // Helper value
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;