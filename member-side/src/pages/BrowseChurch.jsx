import React from 'react';
import NavBarMobile from "../components/NavBarMobile";
import { motion } from "framer-motion";

const Button = ({ children, className, ...rest }) => {
  return (
    <motion.button
      className={`bg-white text-gray-800 text-sm font-semibold py-2 px-4 border border-none rounded-lg shadow transition-colors duration-600 ${className}`}
      whileHover={{ backgroundColor: "#e6f0ff" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

const ButtonGroup = ({ children }) => {
  return (
    <div className="mt-4">
      <motion.div
        layout
        className="grid grid-cols-3 gap-5 sm:grid-cols-3 sm:gap-5 sm:space-x-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const ButtonSearch = () => {
  return (
    <div className="p-3 transition duration-500 ease-in-out text-white bg-blue-800 hover:bg-gray-600 rounded-r-lg focus:outline-none focus:ring-3 focus:ring-blue-500 focus:ring-opacity-50 ml-auto">
      <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white-300">
        Search
      </div>
    </div>
  );
};

const ChurchCard = ({ name, location, serviceTimes }) => {
  return (
    <motion.div
      className="flex mt-8 items-center bg-white rounded-2xl shadow-lg p-4"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 0.8, transition: { duration: 0.2, type: "spring" } }}
    >
      <img src="/path-to-your-logo.png" alt="Church Logo" className="w-24 h-24 mr-4" />
      <div>
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-700">{location}</p>
        <p className="text-gray-700">{serviceTimes}</p>
      </div>
    </motion.div>
  );
};

const BrowseChurch = () => {
  const churches = [
    { name: "First Church", location: "City, Country", serviceTimes: "Sundays at 9:00 AM" },
    { name: "Second Church", location: "City, Country", serviceTimes: "Sundays at 10:30 AM" },
    { name: "Third Church", location: "City, Country", serviceTimes: "Saturdays at 5:00 PM" },
    { name: "Fourth Church", location: "City, Country", serviceTimes: "Sundays at 11:00 AM" },
    { name: "Fifth Church", location: "City, Country", serviceTimes: "Sundays at 12:00 PM" },
    { name: "Sixth Church", location: "City, Country", serviceTimes: "Sundays at 1:00 PM" },
    { name: "Seventh Church", location: "City, Country", serviceTimes: "Monday at 12:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <NavBarMobile />
      <motion.div
        className="flex items-center bg-white rounded-lg border-2 shadow mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.input
          className="flex-grow p-2 rounded-l-md focus:border-blue-500 focus:outline-none"
          id="search"
          type="text"
          placeholder="What are you searching for?"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        />
        <ButtonSearch />
      </motion.div>

      <ButtonGroup>
        <Button>Seminar</Button>
        <Button>Discipleship</Button>
        <Button>Retreat</Button>
      </ButtonGroup>

      {churches.map((church, index) => (
        <ChurchCard key={index} name={church.name} location={church.location} serviceTimes={church.serviceTimes} />
      ))}
    </div>
  );
};

export default BrowseChurch;