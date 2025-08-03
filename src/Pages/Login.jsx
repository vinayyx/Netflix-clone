import React from 'react';
import Navbar from '../Components/Login/Navbar';
import Hero from '../Components/Login/Hero';
import Hero2 from '../Components/Login/Hero2';
import Footer from '../Components/Login/Footer';

function Login() {
  return (
    <div className='relative text-white'>

      {/* Background Image with Overlay */}
      <div
        className='bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg")]
        bg-cover bg-center w-full min-h-screen relative'>
        
        {/* Dark overlay */}
        <div className='absolute inset-0 bg-black bg-opacity-70 z-0'></div>

        {/* Page content over the overlay */}
        <div className='relative z-10 flex flex-col min-h-screen'>
          <Navbar />
          <Hero />
          <Hero2 />
          <Footer />
        </div>

      </div>
      
    </div>
  );
}

export default Login;
