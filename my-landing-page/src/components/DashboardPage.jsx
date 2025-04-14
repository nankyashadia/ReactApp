// import React, { useContext } from 'react';
// import { AuthContext } from '../components/AuthContext';
// import { useNavigate, Outlet } from 'react-router-dom';

// const DashboardPage = () => {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   if (!user) {
//     return <div>Loading or not authenticated...</div>;
//   }
//   const handleLogout = () => {
//     logout();
//     navigate('/'); 
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md min-h-screen">
//       <h2 className="text-2xl font-bold mb-6 text-center">Welcome, {user?.username}!</h2>
//       <p className="text-center mb-6">This is your dashboard. Navigate to the following pages:</p>
//       <div className="flex justify-center space-x-4 mb-6">
//         <button
//           onClick={() => navigate('/events')}
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//         >
//           Events
//         </button>
//         <button
//           onClick={() => navigate('/teams')}
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//         >
//           Teams
//         </button>
//         <button
//           onClick={() => navigate('/dashboard/privacypolicy')}
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//         >
//           Policy
//         </button>
//         <button
//           onClick={() => navigate('/dashboard/termsandconditions')}
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//         >
//           Terms
//         </button>
//         <button
//           onClick={() => navigate('/dashboard/detailpage')}
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//         >
//           Detail Page
//         </button>
//         <button
          //onClick={handleLogout}
//           className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
//         >
//           Logout
//         </button>
//       </div>
//       {/* Outlet renders nested routes */}
//       <div className="mt-6">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;