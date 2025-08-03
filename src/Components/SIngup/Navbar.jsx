import React from 'react';
import { FiUser } from 'react-icons/fi'; // Example icon
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-full px-[5vw] py-4 flex justify-between items-center bg-transparent z-20 relative">
      
      {/* Logo */}
      <img
        className="h-10 md:h-14 object-contain"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />

      {/* Right-side icons */}
      <div className="flex items-center gap-4">
        {/* Profile Icon */}
        <Link to="/profile" className="text-white text-xl hover:text-[#E50914] transition duration-300">
          <FiUser />
        </Link>

        {/* More icons can be added here */}
      </div>
    </nav>
  );
}

export default Navbar;
