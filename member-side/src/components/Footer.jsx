import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ChurchLogo from "../assets/teleo-logo.png"; // Importing the logo

const Footer = () => {
  return (
    <footer className="py-4 border-t-4 border-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center px-10 text-center">
          <div className="mb-4 lg:mb-0 lg:mt-0 flex flex-col lg:flex-row items-center justify-center text-center">
            <img src={ChurchLogo} alt="TELEO Logo" className="mb-2 lg:mb-0 h-16 lg:h-28 mx-auto lg:mx-0" /> {/* Increased logo size and centered on all screens */}
            <div className="mb-5 lg:mt-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 text-black">TELEO</h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-800">+93-112-456-457</p>
              <p className="text-sm md:text-base lg:text-lg text-gray-800">support@teleo.com</p>
            </div>
          </div>
          <div className="mb-4 lg:mt-2 lg:mx-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 text-black">FOLLOW US!</h2>
            <div className="flex justify-center space-x-4">
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
          <div className="mb-4 lg:mt-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 text-black">INFORMATIONS</h2>
            <div className="flex flex-col lg:flex-row lg:justify-center space-y-2 lg:space-y-0 lg:space-x-4">
              <a href="#!" className="text-sm md:text-base lg:text-lg text-gray-800 hover:text-black">
                Privacy Policy
              </a>
              <a href="#!" className="text-sm md:text-base lg:text-lg text-gray-800 hover:text-black">
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
