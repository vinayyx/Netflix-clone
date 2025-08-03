import React from 'react';
import { FaTv, FaGamepad, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';

const cards = [
  {
    icon: <FaTv size={30} />,
    title: 'Enjoy on your TV',
    description: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more',
    gradient: 'from-[#1e1e2f] via-[#2c2c54]',
  },
  {
    icon: <FaGamepad size={30} />,
    title: 'Stream Games',
    description: 'Now play exclusive games directly through Netflix’s interactive media',
    gradient: 'from-[#111] via-[#b82869] to-[#e50914]',
  },
  {
    icon: <FaTabletAlt size={30} />,
    title: 'Download & Watch',
    description: 'Save your favorites and enjoy offline viewing anywhere',
    gradient: 'from-[#141414] via-[#2c1d34] to-[#1b1b1b]',
  },
  {
    icon: <FaMobileAlt size={30} />,
    title: 'Watch Anywhere',
    description: 'Enjoy on your phone, tablet, laptop, and TV without paying more',
    gradient: 'from-[#1a1a1a] via-[#2b2b2b] to-[#b91c1c]',
  },
];

function Hero2() {
  return (
    <div className="relative z-10 w-full px-[9vw] py-16  text-white flex flex-col items-start">
      <h1 className="text-3xl md:text-4xl font-bold mb-10">More reasons to join</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`h-full min-h-[240px] flex flex-col justify-start items-start rounded-xl bg-gradient-to-br ${card.gradient} hover:scale-105 transition duration-300 p-6`}
          >
            <div className="mb-4 text-white">{card.icon}</div>
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-sm leading-6">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero2;
