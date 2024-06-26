import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdOutlineDashboard, MdOutlineManageAccounts } from "react-icons/md";
import { PiChurch } from "react-icons/pi";
import { TbBible } from "react-icons/tb";
import { GoSignOut } from "react-icons/go";
import { CgBrowse } from "react-icons/cg";
import { motion } from "framer-motion";
import ChurchLogo from "../assets/teleo-logo.png";

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  // Toggle the mobile menu
  const toggle = () => {
    setToggleMenu(!toggleMenu);
  };

  // Define menu items
  const menuItems = [
    { href: "/dash", icon: <MdOutlineDashboard />, text: "Dashboard" },
    { href: "/church", icon: <PiChurch />, text: "Browse Church" },
    { href: "/browse", icon: <CgBrowse />, text: "Browse Events" },
    { href: "/disc", icon: <TbBible />, text: "Online Discipleship" },
    { href: "/manage", icon: <MdOutlineManageAccounts />, text: "Manage Account" },
    { href: "/", icon: <GoSignOut />, text: "Sign Out" }
  ];

  return (
    <div>
      <nav className="shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4 justify-between">
            {/* Logo on the left */}
            <div className="flex items-center">
              <a href="/dash" className="flex items-center">
                <img src={ChurchLogo} alt="Church Logo" className="h-9 w-auto" />
              </a>
            </div>
            {/* Middle text "TELEO" */}
            <div className="text-center text-2xl font-bold flex-grow">
              TELEO
            </div>
            {/* Hamburger Menu Button on the right */}
            <button onClick={toggle} className="text-2xl">
              <HiMenu />
            </button>
          </div>
        </div>
        {/* Collapsible Navigation Menu (hamburger style, for all sizes) */}
        {toggleMenu && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute z-40 w-full bg-gray-100 px-4 sm:px-6 lg:px-8 pb-4 pt-2"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="block py-2 text-lg font-semibold text-black hover:text-blue-500"
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </nav>
    </div>
  );
}
