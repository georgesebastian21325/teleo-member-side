import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import NavBarMobile from "../components/NavBarMobile";
import {useNavigate} from 'react-router-dom'
import Profile from '../pages/Profile';
import Security from '../pages/Security'

const ManageAccount = () => {
  const navigate = useNavigate();
  // State to control which component to display
  const [activeComponent, setActiveComponent] = useState(null);

  // Function to handle button click
  const showProfile = () => {
    // setActiveComponent(<Profile />);
    navigate('/profile')
  };
  const showSecurity = () => {
    // setActiveComponent(<Profile />);
    navigate('/security')
  };
  const showNotification= () => {
    // setActiveComponent(<Profile />);
    navigate('/notif')
  };
  return (
    <>
      <Sidebar />
      <NavBarMobile />
      <div
        className="flex flex-col items-center justify-center p-10 transition-opacity duration-700"
        style={{
          animation: 'descend 0.8s ease-out forwards',
          opacity: 0 // Start with the div hidden
        }}
      >
        <style>
          {`
            @keyframes descend {
              from {
                transform: translateY(-20vh); // Start 20% above the view height
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }
          `}
        </style>
        <h1 className="text-2xl font-semibold mb-10">MANAGE ACCOUNT</h1>
        <div className="w-full max-w-xs">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2 text-left"
              htmlFor="profile"
              style={{ paddingLeft: '0.125rem' }}
            >
              Profile Settings
            </label>
            <div className="relative">
              <button
                id="profile"
                className="bg-gray-100 text-gray-700 py-2 px-4 w-full rounded text-left focus:outline-none text-sm transition-all duration-200 hover:scale-110 hover:text-lg hover:font-bold"
                type="button"
                onClick={() => showProfile()} // Call showProfile when the Profile button is clicked
              >
                Profile
              </button>
            </div>
          </div>
          <div className="mb-4">
            <button
              className="bg-gray-100 text-gray-700 py-2 px-4 w-full rounded text-left focus:outline-none text-sm transition-all duration-200 hover:scale-110 hover:text-lg hover:font-bold"
              type="button"
              onClick={() => showNotification()} // Call showProfile when the Profile button is clicked
            >
              Notifications
            </button>
          </div>
          <div className="mb-4">
            <button
              className="bg-gray-100 text-gray-700 py-2 px-4 w-full rounded text-left focus:outline-none text-sm transition-all duration-200 hover:scale-110 hover:text-lg hover:font-bold"
              type="button"
              onClick={() => showSecurity()} // Call showProfile when the Profile button is clicked
            >
              Security
            </button>
          </div>
          <div className="mb-4">
            <button
              className="bg-gray-100 text-gray-700 py-2 px-4 w-full rounded text-left focus:outline-none text-sm transition-all duration-200 hover:scale-110 hover:text-lg hover:font-bold"
              type="button"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageAccount;
