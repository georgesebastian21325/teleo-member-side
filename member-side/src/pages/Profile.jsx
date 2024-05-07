import React, { useState, useEffect } from 'react'; // Added missing imports here
import ChurchLogo from "../assets/teleo-logo.png";
import Sidebar from "../components/Sidebar";
import NavBarMobile from "../components/NavBarMobile";


const Profile = () => {
  // Add a state to control the application of transition classes
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  useEffect(() => {
    setIsProfileVisible(true);
  }, []);

  const headerStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '24px', // You can adjust the size as needed
    marginTop: '30px',
  };
  

  const profileTextStyle = {
    fontWeight: 'bold', // Make the profile text bold
    fontSize: '20px', // You can adjust the size as needed
    marginTop: '50px', // Space between "Profile" text and the logo
  };

  const logoWithNameContainerStyle = {
    display: 'flex',
    alignItems: 'center', // Align children vertically
    justifyContent: 'center', // Center children horizontally
    marginBottom: '20px', // Space between this container and the next element
  };

  const logoStyle = {
    maxWidth: '100px',
    marginRight: '20px', // Adjust space between logo and member name text
  };

  const nameStyle = {
    fontSize: '20px', // You can adjust the size as needed
    fontWeight: 'bold', // If you want the member name to be bold
  };

  const inputStyle = {
    background: 'transparent',
    borderBottom: '1px solid #000',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    padding: '10px 0',
    outline: 'none',
    width: '100%',
  };
  const transitionStyle = {
    opacity: isProfileVisible ? 1 : 0,
    transform: isProfileVisible ? 'translateX(0)' : 'translateX(-100vw)',
    transition: 'opacity 0.5s ease-out, transform 0.70s ease-out',
    width: '100%',
    maxWidth: '400px',
    margin: 'auto',
  };


  return (
    <>
      <Sidebar />
      <NavBarMobile />
      <div style={transitionStyle}> {/* This div should have the transition style */}
        <h2 style={headerStyle}>MANAGE ACCOUNT</h2>
        <div style={profileTextStyle}>Profile</div>
        <div style={logoWithNameContainerStyle}>
          <img src={ChurchLogo} alt="Logo" style={logoStyle} />
          <span style={nameStyle}>Member Name here</span>
        </div>
        <form>
        <label htmlFor="email">EMAIL</label>
        <input style={inputStyle} type="email" id="email" value="member@gmail.com" readOnly />

        <label htmlFor="mobile">Mobile</label>
        <input style={inputStyle} type="tel" id="mobile" value="123456789" readOnly />

        <label htmlFor="birthday">BIRTHDAY</label>
        <input style={inputStyle} type="text" id="birthday" value="01-02-1234" readOnly />

        <label htmlFor="building">BUILDING/HOUSE NO.</label>
        <input style={inputStyle} type="text" id="building" value="123" readOnly />

        <label htmlFor="street">STREET NAME</label>
        <input style={inputStyle} type="text" id="street" value="Main Street" readOnly />

        <label htmlFor="barangay">BARANGAY</label>
        <input style={inputStyle} type="text" id="barangay" value="San Juan" readOnly />

        <label htmlFor="province">PROVINCE</label>
        <input style={inputStyle} type="text" id="province" value="Metro Manila" readOnly />

        <label htmlFor="postal-code">POSTAL CODE</label>
        <input style={inputStyle} type="text" id="postal-code" value="1234" readOnly />
      </form>
    </div>
    </>
  );
};
export default Profile;
