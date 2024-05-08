import React, { useState, useEffect } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Ensure you have react-icons installed
import ChurchLogo from "../assets/teleo-logo.png";
import Sidebar from "../components/Sidebar";
import NavBarMobile from "../components/NavBarMobile";

const Security = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  useEffect(() => {
    setIsProfileVisible(true);
  }, []);

  useEffect(() => {
    setIsCurrentPasswordVisible(false);
    setIsNewPasswordVisible(false);
    setIsConfirmPasswordVisible(false);
  }, []);

  const formContainerStyle = {
    width: '100%',
    maxWidth: '400px',
    margin: '20px auto 50px',
    display: 'flex',
    flexDirection: 'column',
  };

  const inputContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginRight: '10px',
    width: '150px',
  };

  const inputStyle = {
    fontSize: '16px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    flex: '1',
  };

  const toggleVisibilityStyle = {
    marginLeft: '10px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  };

  const strengthIndicatorStyle = {
    marginLeft: '10px',
    color:
      passwordStrength === 'Strong' ? 'green' : passwordStrength === 'Medium' ? 'orange' : 'red',
  };

  const buttonStyle = {
    padding: '1px 11px', // Smaller padding
    fontSize: '12px', // Smaller font size
    color: '#000', // Text color
    backgroundColor: '#fff', // Button background color
    border: '1px solid #000', // Border color
    borderRadius: '15px', // Smaller border-radius
    cursor: 'pointer',
    outline: 'none',
    boxShadow: '0px 2px 3px #00000022', // Slightly lighter box-shadow
    width: 'fit-content',
    marginTop: '20px', // Space above the button
    marginLeft: 'auto', // Push the button to the right
    marginRight: '0', // Align the button to the right
  };

  const headerStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '24px',
    marginTop: '30px',
  };

  const securityTextStyle = {
    fontWeight: 'bold',
    fontSize: '20px',
    marginTop: '50px',
  };

  const logoWithNameContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  };

  const logoStyle = {
    maxWidth: '100px',
    marginRight: '20px',
    marginTop: '20px',
  };

  const nameStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '20px',
  };

  const transitionStyle = {
    opacity: isProfileVisible ? 1 : 0,
    transform: isProfileVisible ? 'translateX(0)' : 'translateX(-100vw)',
    transition: 'opacity 0.5s ease-out, transform 0.70s ease-out',
    width: '100%',
    maxWidth: '400px',
    margin: 'auto',
  };

  // Handlers
  const handleToggleVisibility = (field) => {
    switch (field) {
      case 'current':
        setIsCurrentPasswordVisible(!isCurrentPasswordVisible);
        break;
      case 'new':
        setIsNewPasswordVisible(!isNewPasswordVisible);
        break;
      case 'confirm':
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
        break;
      default:
        break;
    }
  };

  const handlePasswordStrength = (password) => {
    const capitalLetterRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const isCapitalLetter = capitalLetterRegex.test(password);
    const isNumber = numberRegex.test(password);

    if (password.length >= 8 && (isCapitalLetter || isNumber)) {
      setPasswordStrength('Strong');
    } else if ((isCapitalLetter && !isNumber) || (!isCapitalLetter && isNumber)) {
      setPasswordStrength('Medium');
    } else {
      setPasswordStrength('Weak');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <Sidebar />
      <NavBarMobile />
      <div style={transitionStyle}>
        <h2 style={headerStyle}>MANAGE ACCOUNT</h2>
        <div style={securityTextStyle}>Security</div>
        <div style={logoWithNameContainerStyle}>
          <img src={ChurchLogo} alt="Logo" style={logoStyle} />
          <span style={nameStyle}>Change your Password</span>
        </div>
        <form onSubmit={handleSubmit} style={formContainerStyle}>
          <div style={inputContainerStyle}>
            <label style={labelStyle}>Current password:</label>
            <input
              type={isCurrentPasswordVisible ? 'text' : 'password'}
              placeholder="Enter current password"
              style={inputStyle}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <button
              type="button"
              style={toggleVisibilityStyle}
              onClick={() => handleToggleVisibility('current')}
            >
              {isCurrentPasswordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          <div style={inputContainerStyle}>
            <label style={labelStyle}>New password:</label>
            <input
              type={isNewPasswordVisible ? 'text' : 'password'}
              placeholder="Enter new password"
              style={inputStyle}
              value={newPassword}
              onChange={(e) => { setNewPassword(e.target.value); handlePasswordStrength(e.target.value); }}
            />
            <button
              type="button"
              style={toggleVisibilityStyle}
              onClick={() => handleToggleVisibility('new')}
            >
              {isNewPasswordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          <div style={inputContainerStyle}>
            <label style={labelStyle}>Confirm password:</label>
            <input
              type={isConfirmPasswordVisible ? 'text' : 'password'}
              placeholder="Confirm new password"
              style={inputStyle}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              style={toggleVisibilityStyle}
              onClick={() => handleToggleVisibility('confirm')}
            >
              {isConfirmPasswordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          {newPassword && (
            <div style={{ ...inputContainerStyle, justifyContent: 'flex-end' }}>
              <span style={strengthIndicatorStyle}>
                {passwordStrength === 'Weak' && 'Password is weak'}
                {passwordStrength === 'Medium' && 'Password is okay'}
                {passwordStrength === 'Strong' && 'Password is strong'}
              </span>
            </div>
          )}
          {newPassword && passwordStrength !== 'Strong' && (
            <div style={{ ...inputContainerStyle, justifyContent: 'flex-end', color: 'orange' }}>
              Password must be at least 8 characters with at least one capital letter or one number.
            </div>
          )}
          <div style={inputContainerStyle}>
            <label style={labelStyle}>Email Address:</label>
            <input
              type="email"
              placeholder="Enter email address"
              style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" style={buttonStyle}>Save Changes</button>
        </form>
      </div>
    </>
  );
};

export default Security;
