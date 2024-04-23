import { useState } from "react";

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  // Toggle the mobile menu
  const toggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div>
      <nav>
        <div className="w-11/12 mt-3 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center py-4 justify-between">
            <div className="text-initial text-3xl font-bold flex-grow">
              TELEO
            </div>
            <div className="hidden sm:block"> {/* Hide on small screens */}
              <button onClick={toggle} className="text-2xl"></button>
              <button className="rounded-full border border-gray-500 bg-black px-6 py-2 mt-3 text-white hover:text-white focus:outline-none focus:border-gray-700 text-center">Log In</button>
            </div>
          </div>
        </div>
        <hr className="w-11/12 h-1 mx-auto my-1 bg-gray-700 rounded md:my-2 dark:bg-gray-700" />
      </nav>
    </div>
  );
}
