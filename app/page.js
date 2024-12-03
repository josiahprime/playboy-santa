import react from "react";

import { Snowburst_One, Raleway } from 'next/font/google';
const snowburstOne = Snowburst_One({ subsets: ['latin'], weight: '400' });
const raleway = Raleway({ subsets: ['latin'], weight: ['400', '700'] });

import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Features from "./components/Features.js";
import Roadmap from './components/Roadmap.js'
import Footer from "./components/Footer.js";



export default function Home() {
  return (
    <>
      <Header fontClass={snowburstOne.className}/>
      <About fontClass={snowburstOne.className} fontClass1={raleway.className}/>
      <Features fontClass={snowburstOne.className} fontClass1={raleway.className}/>
      <Roadmap fontClass={snowburstOne.className} fontClass1={raleway.className}/>
      <Footer/>
    </>
    
  );
}


