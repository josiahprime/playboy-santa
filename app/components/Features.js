import React from 'react';
import SnowAnimation from './SnowAnimation';
const features = [
  {
    title: '🎅 Naughty Rewards',
    description:
      "HODL $PLAYBOYSANTA and watch your stack grow. It’s like Santa’s sack—but filled with crypto gains instead of coal.",
    image: '/images/featuresImg3.png',
  },
  {
    title: '🦌 Sleigh-Ready Liquidity',
    description:
      "Liquidity that’s smoother than Santa sliding down a chimney. No rugs, no worries, just moon-bound vibes.",
    image: '/images/featuresImg1.png',
  },
  {
    title: '❄️ Decentralized Mischief',
    description:
      "Playboy Santa’s sleigh is driven by *you*. A fully decentralized, community-powered token for the naughty list.",
    image: '/images/featuresImg2.png',
  },
  {
    title: '🎄 Memes That Slay',
    description:
      "Holiday memes on steroids. Join the meme-fueled madness and let’s make $PLAYBOYSANTA the next big thing.",
    image: '/images/featuresImg4.png',
  },
  {
    title: '🍪 Marketing Mastery',
    description:
      "Cookies aren’t the only thing Santa’s cooking. With a marketing plan as bold as the man himself, $PLAYBOYSANTA is ready to dominate.",
    image: '/images/featuresImg5.png',
  },
];

export default function Features({fontClass, fontClass1}) {
  console.log(fontClass); // Debug log
  console.log(fontClass1); // Debug log
  return (
    <section className="bg-gradient-to-b from-red-700 via-red-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Falling Snow Animation */}
      
      <SnowAnimation/>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <h2 className={`text-5xl font-bold text-center mb-12 ${fontClass}`}>🎁 Why $PLAYBOYSANTA? 🎄</h2>
        <div className="flex flex-col gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center ${
                index % 2 === 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="lg:w-1/2 flex justify-center relative">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full max-w-md rounded-lg shadow-lg object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full border-4 border-white flex items-center justify-center animate-bounce">
                  ✨
                </div>
              </div>

              {/* Text */}
              <div className="lg:w-1/2 mt-6 lg:mt-0 text-center lg:text-left">
                <h3 className={`text-3xl font-bold mb-4 text-green-400 ${fontClass}`}>{feature.title}</h3>
                <p className={`text-gray-300 ${fontClass1}`}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
