import React from 'react';
import Sidebar from "../components/Sidebar";
import NavBarMobile from "../components/NavBarMobile";
import Footer from "../components/Footer";

const OnlineDisc = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBarMobile />

      {/* Main content */}
      <main className="flex-grow p-4 text-center">
        {/* Title with increased size and centered */}
        <h1 className="text-4xl font-bold mb-4 inline-block">Online Discipleship</h1>

        {/* Horizontal line */}
        <hr className="my-4 border-t border-gray-300" />

        <p className="mb-4">Glad you took an interest in online discipleship! This page serves as a quick rundown on online discipleship.</p>
        <p className="mb-4">Online discipleship leverages digital platforms to nurture spiritual growth, connecting individuals with mentors, facilitating Bible studies, and fostering supportive communities regardless of physical distance, enabling flexible and accessible avenues for deepening faith.</p>

        {/* Adjusted image size */}
        <div className="my-6 flex justify-center">
          <img src="/event.jpeg" alt="Seminar" className="w-3/4 rounded-md shadow-lg" />
        </div>
        <p className="mb-6">Start your online discipleship journey. When? It's up to you! Teleo will always be here when you need it.</p>
        
        <div className="flex flex-col items-center space-y-4">
          <button className="px-8 py-2 bg-black text-white uppercase rounded-full shadow hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
            Back to main page
          </button>
          <p className="mb-6">You wanna start now? Sure! You can find churches near you right below.</p>
          <button className="px-8 py-2 bg-black text-white uppercase rounded-full shadow hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
            Churches near me
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default OnlineDisc;

