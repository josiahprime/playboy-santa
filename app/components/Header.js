"use client";

import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";
import Image from "next/image";
import Hero from "./Hero";
import SnowAnimation from "./SnowAnimation";

const Header = ({fontClass, fontClass1}) => {
  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(contractAddress)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => console.error("Failed to copy address: ", err));
  };

  return (
    <div className="relative flex justify-center  h-screen">
      <h1 className={`absolute ${fontClass} text-5xl md:text-7xl mt-2`}>Playboy Santa</h1>

      {/* Falling Snow Animation */}
      <SnowAnimation/>

      <Hero/>
      <Image 
      src="/images/headerProfile.png"
      alt="Logo"
      width={500} // Specify width
      height={300} // Specify height
      className="absolute w-16 left-0 mt-2 md:mt-4 ml-2 md:mr-4 md:20"
      />
      <div className="absolute mt-24">
        <h1 className={`text-2xl font-bold mb-4 ${fontClass} md:text-4xl`}>Contract Address:</h1>
        <div className="max-w-lg">
          <span className={`font-mono text-white truncate text-2xl md:text-3xl ${fontClass1}`}>
            {contractAddress}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center justify-center p-2 bg-gray-200 rounded hover:bg-gray-300 ml-2"
            title="Copy contract address"
          >
            <FiCopy className="text-gray-600" />
          </button>
          {copied && (
            <span className="text-green-600 text-sm ml-2">Copied!</span>
          )}
        </div>
      </div>
      
      <Image
        src="/images/heroImg.png"
        alt="Logo"
        width={500} // Specify width
        height={300} // Specify height
        className="absolute bottom-0 -right-[60px]  animate-scale-grow w-[400px] md:w-[500px]" // Image will be above the snow animation
      />
    </div>
  );
};

export default Header;
