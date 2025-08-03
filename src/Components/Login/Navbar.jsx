import React from 'react'
import { useNavigate } from "react-router-dom"
import { FaGlobe } from "react-icons/fa"
import { HiOutlineMenuAlt3 } from "react-icons/hi"

function Navbar() {
  const navigate = useNavigate()

  const handleRedirect = (e) => {
    e.preventDefault()
    navigate("/login")
  }

  return (
    <nav className="relative z-10 flex justify-between items-center px-[6vw] py-4 w-full bg-transparent">
      {/* Logo */}
      <div className="flex items-center">
        <img
          className="h-10 sm:h-14 object-contain"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
      </div>

      {/* Menu Buttons */}
      <div className="flex items-center gap-4">
        {/* Language Selector */}
        <button className="flex items-center gap-2 border border-white text-white px-4 py-1 rounded-md text-sm hover:scale-105 transition duration-300">
          <FaGlobe className="text-sm" />
          English
        </button>

        {/* Sign In */}
        <button
          onClick={handleRedirect}
          className="bg-[#E50914] text-white px-4 py-1 rounded-md text-sm hover:bg-red-800 hover:scale-105 transition duration-300"
        >
          Sign In
        </button>

        {/* Mobile menu icon (optional if you add a sidebar later) */}
        <button className="text-white md:hidden">
          <HiOutlineMenuAlt3 size={24} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
