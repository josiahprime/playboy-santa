'use client'
import { useEffect, useState } from 'react';

const SnowAnimation = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const flakes = Array.from({ length: 50 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 5,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {snowflakes.map((flake, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-white rounded-full opacity-80 animate-snow"
          style={{
            top: `${flake.top}%`,
            left: `${flake.left}%`,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default SnowAnimation;
