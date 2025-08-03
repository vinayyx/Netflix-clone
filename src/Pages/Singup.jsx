import React from 'react';
import Hero from '../Components/SIngup/Hero';
import Footer from "../Components/Login/Footer";

function Singup() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Video Background Section */}
      <div className="relative w-full h-[100vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://occ-0-4344-3647.1.nflxso.net/so/soa5/804/1890136457758111489.mp4?v=1&e=1751315466&t=K2Ww2tCJWk6nNhK7bishS6N2HNQ"
          autoPlay
          loop
          playsInline
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

        {/* Hero Section on top of video */}
        <div className="relative z-20 flex items-center justify-center h-full px-4">
          <Hero />
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Singup;
