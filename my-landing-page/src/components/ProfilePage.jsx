import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaLock, FaSignOutAlt } from 'react-icons/fa';

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    username: user?.username || '',
    email: user?.email || '',
    phone: user?.phone || '',
    birth: user?.birth || '',
    gender: user?.gender || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-6 relative">
        {/* Profile Image & Back Button */}
        <div className="relative flex justify-center">
          <img
            src=""
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
          />
          <div className="absolute bottom-2 right-[35%] bg-blue-500 p-2 rounded-full cursor-pointer hover:bg-blue-600">
            <FaEdit className="text-white text-sm" />
          </div>
        </div>

        {/* Profile Form */}
        <h2 className="text-center text-xl font-semibold mt-4 mb-6">Edit Profile</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full border rounded-md px-4 py-2"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full border rounded-md px-4 py-2"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full border rounded-md px-4 py-2"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border rounded-md px-4 py-2"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full border rounded-md px-4 py-2"
            value={formData.phone}
            onChange={handleChange}
          />
          <select
            name="birth"
            className="w-full border rounded-md px-4 py-2 text-gray-500"
            value={formData.birth}
            onChange={handleChange}
          >
            <option value="">Birth</option>
            {/* You can dynamically populate options */}
            <option value="2000-01-01">2000-01-01</option>
          </select>
          <select
            name="gender"
            className="w-full border rounded-md px-4 py-2 text-gray-500"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>

          <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md flex items-center justify-center hover:bg-blue-700">
            <FaLock className="mr-2" />
            Change Password
          </button>

          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-2 rounded-md flex items-center justify-center mt-2 hover:bg-red-600"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
