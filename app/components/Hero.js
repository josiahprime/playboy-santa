import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <Image
        src="/images/bgImageMain.jpg"
        alt="Logo"
        width={500} // Specify width
        height={300} // Specify height
        className="w-full"
      />     
  );
};

export default Hero;
