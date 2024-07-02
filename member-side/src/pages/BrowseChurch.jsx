import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChurchLogo from "../assets/teleo-logo.png";
import NavBarMobile from "../components/NavBarMobile";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const BrowseChurch = () => {
  const [churches, setChurches] = useState([
    { id: 1, name: "Church One", address: "123 Main St" },
    { id: 2, name: "Church Two", address: "456 Elm St" },
    { id: 3, name: "Church Three", address: "789 Maple Rd" },
    { id: 4, name: "Church Four", address: "101 Pine Ln" },
    { id: 5, name: "Church Five", address: "234 Oak St" },
    { id: 6, name: "Church Six", address: "567 Cedar Ave" },
    { id: 7, name: "Church Seven", address: "890 Birch Blvd" },
    { id: 8, name: "Church Eight", address: "321 Spruce St" },
  ]);

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredChurches = churches.filter((church) => {
    return church.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="flex flex-col min-h-screen text-black">
      <NavBarMobile />
      <section className="relative h-[100vh] w-full overflow-hidden">
        <span className="absolute inset-0 h-full w-full object-cover rounded-md bg-muted" />
        <div className="absolute inset-0 bg-white flex flex-col justify-center items-center text-center px-4 md:px-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold mb-4">Title</h1>
          <p className="text-lg md:text-xl max-w-[600px] mb-8">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
          </p>
          <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded-md font-medium border border-gray-300 hover:border-gray-400 hover:bg-gray-200">
            Start Browsing
          </button>

            <Link to="/dash">
              <button className="bg-gray-600 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-500">
                Go Back to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="h-[40vh] md:py-16 bg-gradient-to-r from-gray-900 to-black relative">
        <div className="flex h-full text-white">
          <div className="w-1/2 flex items-center justify-center">
            <div className="container mx-auto px-4 md:px-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Find your Church Today!</h2>
              <div className="flex items-center justify-center shadow-md">
                <input
                  type="text"
                  value={search}
                  onChange={handleSearch}
                  placeholder="Search..."
                  className="w-full md:w-64 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-800 text-white placeholder-gray-400"
                />
                <button className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-r-md transition duration-300">
                  Search
                </button>
              </div>
              <div className="flex flex-wrap gap-2 py-3 justify-center">
                <button className="bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded-md transition duration-300">
                  Filter
                </button>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 bg-white w-px h-full opacity-50"></div>
          <div className="w-1/2 flex items-center justify-center">
            <div className="px-4 text-center">
              <p className="text-lg md:text-xl font-semibold max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Church</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredChurches.map((church) => (
              <div key={church.id} className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-300 shadow-md transition-shadow hover:shadow-xl">
                <img
                  alt={`Poster of ${church.name}`}
                  src={ChurchLogo}
                  className="rounded-md object-cover aspect-[300/450] w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-white">
                  <h3 className="text-lg font-bold mb-2">{church.name}</h3>
                  <p className="text-sm">{church.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrowseChurch;