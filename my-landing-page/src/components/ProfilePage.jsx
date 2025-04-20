import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Free high-quality female avatar from Unsplash
  const defaultProfileImage = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80";

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-6 relative">
        {/* Profile Image Section */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={user?.profileImage || defaultProfileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-pink-200 shadow-lg"
            />
          </div>
          
          {/* User Information */}
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {user?.firstName || 'User'} {user?.lastName || 'Name'}
            </h2>
            <p className="text-gray-600">@{user?.username || 'username'}</p>
            
            {user?.role && (
              <div className="mt-3">
                <span className={`inline-block ${
                  user.role.toLowerCase() === 'admin' 
                    ? 'bg-orange-100 text-orange-800' 
                    : 'bg-blue-100 text-blue-800'
                } text-sm px-3 py-1 rounded-full font-medium`}>
                  {user.role}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* User Details Section */}
        <div className="mt-8 space-y-4">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600 font-medium">Email</span>
            <span className="text-gray-800 font-semibold">
              {user?.email || 'user@example.com'}
            </span>
          </div>
          
          {user?.phone && (
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600 font-medium">Phone</span>
              <span className="text-gray-800 font-semibold">{user.phone}</span>
            </div>
          )}
          
          {user?.birth && (
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600 font-medium">Birth Date</span>
              <span className="text-gray-800 font-semibold">{user.birth}</span>
            </div>
          )}
          
          {user?.gender && (
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600 font-medium">Gender</span>
              <span className="text-gray-800 font-semibold capitalize">
                {user.gender}
              </span>
            </div>
          )}
        </div>

        {/* Logout Button */}
        <div className="mt-8">
          <button
            onClick={handleLogout}
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition duration-200 flex items-center justify-center font-medium shadow-md"
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