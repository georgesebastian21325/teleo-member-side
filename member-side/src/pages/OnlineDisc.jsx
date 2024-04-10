import React from 'react';
import Sidebar from "../components/Sidebar";
import NavBarMobile from "../components/NavBarMobile";

const OnlineDisc = () => {
  return (


    <div className="flex flex-col h-screen">
    <NavBarMobile />

      {/* Possibly include Sidebar component here if needed */}
      {/* <Sidebar /> */}

      {/* Main content */}
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4">Online Discipleship</h1>
        <p className="mb-4">Glad you took an interest in online discipleship! This page serves as a quick rundown on online discipleship.</p>
        <div className="my-6">
          <img src="/path-to-seminar-image.jpg" alt="Seminar" className="w-full rounded-md shadow-lg" />
          <p className="text-center mt-2">Shane Gillis on SNL 2019</p>
        </div>
        <p className="mb-4">Start your online discipleship journey. When? It's up to you! Teleo will always be here when you need it.</p>
        <button className="mb-4 px-6 py-2 bg-blue-600 text-white rounded-md shadow-md">Back to main page</button>
        <button className="px-6 py-2 bg-green-600 text-white rounded-md shadow-md">Churches near me</button>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-white shadow-md">
        <div className="flex justify-between">
          <div>
            <p className="font-bold">TELEO</p>
            <p>+93-112-456-457</p>
            <p>support@teleo.com</p>
          </div>
          <div>
            {/* Social media icons would be linked here */}
            <a href="#!" className="mr-2">Facebook</a>
            <a href="#!" className="mr-2">Instagram</a>
            <a href="#!" className="mr-2">Other</a>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex">
            <a href="#!" className="mr-2">Privacy Policy</a>
            <a href="#!">Terms and Conditions</a>
          </div>
          <div className="flex">
            {/* App store links would go here */}
            <a href="#!" className="mr-2">Google Play</a>
            <a href="#!">App Store</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default OnlineDisc;
