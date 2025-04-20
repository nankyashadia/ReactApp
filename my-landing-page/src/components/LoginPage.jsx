import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "./AuthContext";


const LoginSignupPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', username: '', password: '' });
  const [error, setError] = useState('');

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(loginData.username, loginData.password);
      navigate('/profile');
    } catch {
      setError('Invalid username or password');
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    // Here you can store to localStorage or just simulate success
    if (signupData.username && signupData.password.length >= 8 && signupData.name) {
      alert('Signup successful! Please login.');
      setIsLogin(true);
    } else {
      setError('Please fill in all fields with valid info.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? 'Login to Your Account' : 'Create an Account'}
        </h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        {isLogin ? (
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium">Username</label>
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleLoginChange}
                required
                className="w-full p-2 mt-1 border rounded"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
                className="w-full p-2 mt-1 border rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignupSubmit}>
            <div className="mb-4">
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={signupData.name}
                  onChange={handleSignupChange}
                  required
                  className="w-full p-2 mt-1 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Username</label>
                <input
                  type="text"
                  name="username"
                  value={signupData.username}
                  onChange={handleSignupChange}
                  required
                  className="w-full p-2 mt-1 border rounded"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium">Password (min 8 characters)</label>
                <input
                  type="password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  required
                  className="w-full p-2 mt-1 border rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
              >
                Sign Up
              </button>
            </form>
        )}

        <p className="mt-4 text-center text-sm">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button onClick={toggleMode} className="text-blue-500 hover:underline">
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignupPage;
