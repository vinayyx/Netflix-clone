import React, { useState } from 'react';
import profile from "../../assets/profile_img.png";
import search from "../../assets/search_icon.svg";
import logo from "../../assets/netflix_favicon.ico";
import { logout } from '../../../firebase';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className='w-full fixed top-0 z-50 text-white px-6 py-4 bg-gradient-to-b from-black/80 to-transparent'>
      <div className='flex justify-between items-center'>
        {/* Left - Profile Image */}
        <img
          src={profile}
          alt="Profile"
          className='w-10 h-10 hover:scale-105 transition rounded-lg duration-300'
        />

        {/* Center Menu - Desktop */}
        <ul className='hidden md:flex justify-center items-center gap-10 text-lg'>
          <img src={search} className='w-5 h-5 hover:scale-110 transition duration-300' alt="search" />
          <li className='hover:scale-110 transition duration-300 cursor-pointer'>Home</li>
          <li className='hover:scale-110 transition duration-300 cursor-pointer'>Show</li>
          <li className='hover:scale-110 transition duration-300 cursor-pointer'>Movies</li>
          <li className='hover:scale-110 transition duration-300 cursor-pointer'>My Netflix</li>
        </ul>

        {/* Hamburger for Mobile */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Right - Logo and Logout */}
        <div className='hidden md:flex flex-col justify-center items-center group relative'>
          <img
            src={logo}
            alt="Logo"
            className='w-10 h-10 hover:scale-105 transition duration-300 cursor-pointer'
          />
          <h1
            onClick={logout}
            className='absolute top-full mt-2 text-sm opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 cursor-pointer bg-gray-800 px-3 py-1 rounded shadow-md'
          >
            Logout
          </h1>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full h-1/2 bg-black text-white z-40 transition-all duration-500 ease-in-out animate-slide-down shadow-lg rounded-b-xl">
          <ul className='flex flex-col justify-center items-center h-full gap-6 text-lg font-medium'>
            <li onClick={toggleMenu} className='hover:text-red-400 cursor-pointer transition duration-200'>Home</li>
            <li onClick={toggleMenu} className='hover:text-red-400 cursor-pointer transition duration-200'>Show</li>
            <li onClick={toggleMenu} className='hover:text-red-400 cursor-pointer transition duration-200'>Movies</li>
            <li onClick={toggleMenu} className='hover:text-red-400 cursor-pointer transition duration-200'>My Netflix</li>
          </ul>
          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2'>
            <img src={logo} alt="Logo" className='w-6 h-6' />
            <h1 onClick={logout} className='cursor-pointer text-sm hover:text-red-400'>
              Logout
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
