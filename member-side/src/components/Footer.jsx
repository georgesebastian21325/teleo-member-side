import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ChurchLogo from "../assets/teleo-logo.png"; // Importing the logo

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 mt-4 py-4 lg:py-8">
      <div className="container mx-auto px-4 lg:w-3/4"> {/* Adjusted container size for lg screens */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between text-center lg:text-left">
          <div className="mb-4 lg:mb-0 lg:mr-12 flex flex-col lg:flex-row items-center justify-center lg:justify-start">
            <img src={ChurchLogo} alt="TELEO Logo" className="h-16 lg:h-28 mb-2 lg:mb-0 mx-auto lg:mx-0" />
            <div className="text-center lg:text-left">
              <h2 className="text-2xl lg:text-4xl font-semibold mb-2 text-black">TELEO</h2>
              <p className="text-sm lg:text-lg text-gray-800 mb-2">+93-112-456-457</p>
              <p className="text-sm lg:text-lg text-gray-800">support@teleo.com</p>
            </div>
          </div>
          <div className="mb-4 lg:mb-9">
            <h2 className="text-2xl lg:text-4xl font-semibold mb-2 text-black">FOLLOW US!</h2>
            <div className="flex justify-center lg:justify-center space-x-4">
              <a href="#!" className="text-gray-800 hover:text-black">
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
              <a href="#!" className="text-gray-800 hover:text-black">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="#!" className="text-gray-800 hover:text-black">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </div>
          <div className="mb-4 lg:mb-9">
            <h2 className="text-2xl lg:text-4xl font-semibold mb-2 text-black">INFORMATION</h2>
            <div className="flex flex-col lg:flex-row lg:justify-start space-y-2 lg:space-y-0 lg:space-x-4">
              <a href="#!" className="text-sm lg:text-lg text-gray-800 hover:text-black">
                Privacy Policy
              </a>
              <a href="#!" className="text-sm lg:text-lg text-gray-800 hover:text-black">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
