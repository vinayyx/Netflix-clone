import React from 'react';
import Navbar from '../Components/Home/Navbar';
import Hero from '../Components/Home/Hero';
import Footer from '../Components/Login/Footer';

function Home() {
  return (
    <div className=' min-h-screen flex flex-col text-white'>

      {/* Navbar stays at top */}
      <Navbar />

      {/* Hero fills remaining space */}
      <main className='flex-grow'>
        <Hero />
      </main>

      {/* Footer at bottom */}
      <Footer />

    </div>
  );
}

export default Home;
