import React from 'react';
import Card from '../API/Card';
import Card_2 from '../API/Card_2';
import Card_3 from '../API/Card_3';
import Card_4 from '../API/Card_4';

function Hero() {
  return (
    <div className="w-full bg-black flex flex-col items-center px-4 md:px-10">
      {/* Hero Video Section */}
      <div className="relative h-[70vh] md:h-[90vh] w-full group rounded-xl overflow-hidden">
        <video
          className="h-full w-full object-cover opacity-60"
          autoPlay
          loop
          playsInline
          src="https://occ-0-4344-3646.1.nflxso.net/so/soa6/812/1684650804276759809.mp4?v=1&e=1751314973&t=keMrUV9rhAwghiV0M-7jJLTsh18"
        />
        {/* Overlay Content */}
        <div className="absolute left-4 bottom-4 md:left-10 md:bottom-10 text-white z-10 max-w-[90%] md:max-w-[60%]">
          <img
            className="w-[60vw] md:w-[30vw] mb-4"
            src="https://www.pngall.com/wp-content/uploads/13/One-Piece-Logo-PNG-Images.png"
            alt="One Piece"
          />
          <p className="text-sm md:text-lg leading-relaxed">
            One Piece on Netflix is a live-action adaptation of the legendary anime,
            following Monkey D. Luffy and his pirate crew as they search for the
            world’s greatest treasure.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full flex flex-col gap-8 mt-8">
        <Card />
        <Card_2 />
        <Card_3 />
        <Card_4 />
      </div>
    </div>
  );
}

export default Hero;
