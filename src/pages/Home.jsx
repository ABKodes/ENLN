import React from "react";
import background from '../assets/background.jpg';
import PlayfairDisplayRegular from "../fonts/PlayfairDisplay-Regular.ttf";
import '../Fonts/fonts.css';

const Hero = () => {
  return (
    <div className='text-white relative'>
      <div className='relative'>
        <img className='w-full h-screen object-cover scale-x-[-1]' src={background} alt="" />
        <div className='absolute top-0 left-0 w-full h-full'>
          <div className='w-full h-full bg-gradient-to-b from-black opacity-70'></div>
        </div>
      </div>
      <div style={{ fontFamily: "Playfair Display" }} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        <p className='text-primary font-bold p-2 text-9xl tracking-widest'>
          ENLN
        </p>
        <h1 className=' md:text-6xl sm:text-6xl text-4xl font-bold md:py-6 text-white '>
          Ethiopia Nutrition Leaders Network
        </h1>
        <p className='md:text-2xl text-xl font-bold text-white'>Become a member</p>
        <button className='bg-primary font-sans w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Join Us</button>
      </div>
    </div>
  );
};

export default Hero;