import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import IMAGES from '../assets/images/image';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Capture the original route user was trying to access
  const from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    return formData.username.length >= 3 && formData.password.length >= 8;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await login(formData.username, formData.password);
        navigate(from, { replace: true }); // Redirect back to original route
      } catch (err) {
        console.error("Login error:", err);
        alert("Invalid login credentials");
      }
      
    }
    
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGES.Heros})` }}
    >
      <div className="max-w-md w-full mx-4 p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-left text-bold text-gray-700 mb-2">Username:</label>
            <input
              type="text"
              name="username"
              placeholder='username'
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              autoComplete="username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-left text-gray-700 mb-2">Password:</label>
            <input
              type="password"
              name="password"
              placeholder='password'
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
