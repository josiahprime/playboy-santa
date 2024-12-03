'use client';
import React, { useEffect } from 'react';
import SnowAnimation from './SnowAnimation';

const roadmapData = [
  {
    title: 'Phase 1: Launch',
    description: 'Launch $PLAYBOYSANTA token, set up socials, and deploy the website.',
    date: 'December 2024',
  },
  {
    title: 'Phase 2: Community Growth',
    description: 'Organize holiday meme competitions and grow the community.',
    date: 'January 2025',
  },
  {
    title: 'Phase 3: Partnerships',
    description: 'Partner with meme creators and influencers to spread the word.',
    date: 'February 2025',
  },
  {
    title: 'Phase 4: Santa’s Moonshot',
    description: 'Execute marketing campaigns and prepare for the moon.',
    date: 'March 2025',
  },
  {
    title: 'Phase 5: Expansion',
    description: 'Introduce $PLAYBOYSANTA merchandise and explore other utilities.',
    date: 'April 2025',
  },
];

export default function Roadmap({fontClass, fontClass1}) {
  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll('.fade-in');
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          item.classList.add('opacity-100', 'translate-y-0');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-gradient-to-b from-red-700 via-red-800 to-gray-900 text-white py-16 relative">
      <SnowAnimation/>
      

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <h2 className={`text-4xl font-bold text-center mb-12 ${fontClass}`}>
          🎄 Roadmap 🎁
        </h2>
        <div className="relative">
          {/* Vertical Line with Candy Cane Effect */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 via-white to-red-500"></div>
          {roadmapData.map((milestone, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row justify-between items-center mb-12 fade-in opacity-0 translate-y-12 transition-all duration-700 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Connector Dot with Christmas Lights Effect */}
              <div className="relative z-10 w-8 h-8 bg-yellow-400 rounded-full border-4 border-gray-900 mx-auto md:mx-0 animate-pulse"></div>

              {/* Content Box with Festive Colors */}
              <div
                className={`w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg mt-4 md:mt-0 ${
                  index % 2 === 0 ? 'md:ml-auto md:text-right' : 'md:mr-auto md:text-left'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 text-red-400 ${fontClass}`}>{milestone.title}</h3>
                <p className={`text-gray-300 mb-4 ${fontClass1}`}>{milestone.description}</p>
                <span className={`text-sm text-green-400 ${fontClass1}`}>{milestone.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
