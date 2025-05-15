import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo--bg.png";
import { NavLink } from 'react-router-dom'; 
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeMenu = () => {
    setNav(false);
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
      className="max-w-[1600px] h-32 mx-auto flex justify-between items-center text-2xl pl-6 text-gray-200"
    >
      <a href="/"><img src={logo} alt="Logo" className="w-24 pt-2"/></a>

      <ul className="hidden md:flex">
        <li className="p-8 hover:text-orange-500 hover:underline underline-offset-8 transition duration-500">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500 underline underline-offset-8" : ""}>
            Home
          </NavLink>
        </li>
        <li className="p-8 hover:text-orange-500 hover:underline underline-offset-8 transition duration-500">
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-orange-500 underline underline-offset-8" : ""}>
            About me
          </NavLink>
        </li>
        <li className="p-8 hover:text-orange-500 hover:underline underline-offset-8 transition duration-500">
          <NavLink to="/skills" className={({ isActive }) => isActive ? "text-orange-500 underline underline-offset-8" : ""}>
            Skills
          </NavLink>
        </li>
        <li className="p-8 hover:text-orange-500 hover:underline underline-offset-8 transition duration-500">
          <NavLink to="/work" className={({ isActive }) => isActive ? "text-orange-500 underline underline-offset-8" : ""}>
            Work
          </NavLink>
        </li>
        <li className="p-8 hover:text-orange-500 hover:underline underline-offset-8 transition duration-500">
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-orange-500 underline underline-offset-8" : ""}>
            Contact
          </NavLink>
        </li>
      </ul>

      <div onClick={handleNav} className="cursor-pointer block md:hidden z-40 p-8">
        {nav ? <AiOutlineClose size={36} /> : <AiOutlineMenu size={36} />}
      </div>

      <div
        className={`fixed left-0 top-0 h-full w-[75%] border-r border-gray-900 bg-[#171717] transform transition-transform duration-500 ease-out z-40 ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h1 className="text-5xl font-bold m-10">Sinclair's</h1>
        <ul className="p-10 text-3xl">
          <li className="p-8 hover:text-orange-500 hover:underline underline-offset-8 transition duration-500">
            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "text-orange-500 underline underline-offset-8" : ""}>
              Home
            </NavLink>
          </li>
          <li className="p-8 hover:text-orange-500 hover:underline underline-offset-8 transition duration-500">
            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "text-orange-500 underline underline-offset-8" : ""}>
              About me
            </NavLink>
          </li>
          <li className="p-8 hover:text-orange-500 hover:underline underline-offset-8 transition duration-500">
            <NavLink to="/skills" onClick={closeMenu} className={({ isActive }) => isActive ? "text-orange-500 underline underline-offset-8" : ""}>
              Skills
            </NavLink>
          </li>
          <li className="p-8 hover:text-orange-500 hover:underline underline-offset-8 transition duration-500">
            <NavLink to="/work" onClick={closeMenu} className={({ isActive }) => isActive ? "text-orange-500 underline underline-offset-8" : ""}>
              Work
            </NavLink>
          </li>
          <li className="p-8 hover:text-orange-500 hover:underline underline-offset-8 transition duration-500">
            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "text-orange-500 underline underline-offset-8" : ""}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;