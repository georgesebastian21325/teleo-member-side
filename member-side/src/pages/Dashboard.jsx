import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import NavBarMobile from "../components/NavBarMobile";

const App = () => {
  // State to track the selected date
  const [selectedDate, setSelectedDate] = useState(27);

  const dates = [26, 27, 28]; // Example dates for display

  return (
    <div>
      <Sidebar />
      <NavBarMobile />
      <div className="bg-gray-100 p-4">
        {/* Header */}
        <div className="text-left">
          <h1 className="text-xl font-bold">OVERVIEW</h1>
        </div>

        {/* Content Blocks */}
<div className="my-3 p-10 bg-black rounded-xl">
  <h2 className="text-white text-2xl font-bold mb-2">LOREN IPSUM DOLOR SIT AMET CONSECTETUR</h2>
  <hr className="border-gray-500" />
  <p className="text-white text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>



        {/* Calendar and Image side by side */}
        <div className="flex justify-between items-center my-4">
          {/* Calendar Component inside a rounded container */}
          <div className="bg-white p-3 shadow-lg rounded-xl flex-1 mr-4">
            <div className="flex justify-between items-center p-2">
              <div>
                <h2 className="text-gray-800 font-semibold">LOREN IPSUM DOLOR SIT AMET CONSECTETUR</h2>
                <p className="text-gray-500 text-sm">FEBRUARY 28, 2024</p>
              </div>
              <div className="text-yellow-500 bg-yellow-100 rounded-full p-2">
                <span className="text-xl font-bold">{selectedDate}</span>
              </div>
            </div>
            <div className="grid grid-cols-3 text-center bg-gray-200 p-2 rounded-md">
              {['Mon', 'Tue', 'Wed'].map(day => (
                <div key={day} className="py-1">{day}</div>
              ))}
              {dates.map(date => (
                <div key={date} className={`py-2 cursor-pointer ${selectedDate === date ? 'bg-red-500 text-white' : 'bg-white'} rounded-full`} onClick={() => setSelectedDate(date)}>
                  {date}
                </div>
              ))}
            </div>
          </div>

          {/* Placeholder Image */}
          <div className="flex-1 h-40 bg-gray-300 rounded-lg flex items-center justify-center text-gray-700 text-sm">
            picture here
          </div>
        </div>

       {/* Events Section */}
<div className="bg-white p-3 shadow rounded-lg mt-4">
  <h2 className="font-bold text-lg mb-2 text-center">EVENTS FOR YOU</h2>
  <div className="flex divide-x divide-gray-400">
    <div className="flex-1 p-4 text-gray-600 text-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <div className="flex-1 p-4 text-gray-600 text-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>

        {/* Another Placeholder Image */}
        <div className="h-40 bg-gray-300 rounded-lg flex items-center justify-center text-gray-700 text-sm mt-4">
          picture here
        </div>
      </div>
    </div>
  );
};

export default App;
