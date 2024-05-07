import React, { useState, useEffect } from 'react';
import { MdNotifications } from 'react-icons/md'; // Import the MdNotifications icon
import ChurchLogo from "../assets/teleo-logo.png";
import Sidebar from "../components/Sidebar";
import NavBarMobile from "../components/NavBarMobile";

const Notification = () => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [notificationSetting, setNotificationSetting] = useState('');

  useEffect(() => {
    setIsNotificationVisible(true);
  }, []);

  useEffect(() => {
    setNotificationSetting('email');
  }, []);

  const handleChange = (event) => {
    setNotificationSetting(event.target.value);
  };

  const headerStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '24px',
    marginTop: '30px',
  };
  

  const NotificationTextStyle = {
    fontWeight: 'bold',
    fontSize: '20px',
    marginTop: '20px',
    marginBottom: '10px',
    display: 'flex',
    
  };

  const iconStyle = {
    marginRight: '10px', // Space between icon and text
  };

  const logoWithNameContainerStyle = {
    display: 'flex',
    alignItems: 'center', // Align children vertically
    justifyContent: 'center', // Center children horizontally
    marginBottom: '20px', // Space between this container and the next element
  };


  const logoStyle = {
    maxWidth: '100px',
    marginBottom: '10px', // Space below the logo
  };

  const nameStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const transitionStyle = {
    opacity: isNotificationVisible ? 1 : 0,
    transform: isNotificationVisible ? 'translateX(0)' : 'translateX(-100vw)',
    transition: 'opacity 0.5s ease-out, transform 0.70s ease-out',
    width: '100%',
    maxWidth: '400px',
    margin: 'auto',
  };

  const radioContainerStyle = {
    display: 'flex',
    flexDirection: 'column', // Align radio buttons vertically
    gap: '10px', // Adjust the gap between radio buttons
    
  };

  const radioStyle = {
    width: '20px', // Set the width and height to make them square
    height: '20px',
  };

  const labelStyle = {
    marginLeft: '5px', // Add some spacing between radio buttons and labels
  };

  const notificationOptions = [
    { id: 'notifications', label: 'Get notifications', value: 'notifications' },
    { id: 'no-notifications', label: "Don't get notifications", value: 'none' },
    { id: 'email', label: 'Get email alerts at member@gmail.com', value: 'email' }
  ];

  return (
    <>
      <Sidebar />
      <NavBarMobile />
      <div style={transitionStyle}>
        <h2 style={headerStyle}>MANAGE ACCOUNT</h2>
        <div style={NotificationTextStyle}>Notification</div>
        <div style={logoWithNameContainerStyle}>
          <img src={ChurchLogo} alt="Logo" style={logoStyle} />
          <span style={nameStyle}>Member Name here</span>
        </div>
        <div style={NotificationTextStyle}>
          <MdNotifications size={24} style={iconStyle}/> {/* Notification Bell Icon */}
          Get alerts about unrecognized logins
        </div>
        <form style={{ maxWidth: '400px', margin: 'auto', marginTop: '20px' }}>
          <div style={radioContainerStyle}>
            {notificationOptions.map(option => (
              <div key={option.id}>
                <input
                  type="radio"
                  id={option.id}
                  name="notificationSetting"
                  value={option.value}
                  checked={notificationSetting === option.value}
                  onChange={handleChange}
                  style={radioStyle}
                />
                <label htmlFor={option.id} style={labelStyle}>{option.label}</label>
              </div>
            ))}
          </div>
        </form>
      </div>
    </>
  );
};

export default Notification;
