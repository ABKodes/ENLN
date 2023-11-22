import React from 'react';
import { useNavigate } from 'react-router-dom';
import meeting2 from '../assets/meeting2.jpg';
import logo from '../assets/logo.png';
import { MdOutlineNavigateNext } from 'react-icons/md'
import mula from '../assets/mula.jpg'
import sketch from '../assets/sketch.jpg'
import banner2 from '../assets/banner2.jpg'
import {AiOutlineSearch} from 'react-icons/ai'
import {TbPlayerTrackNext} from 'react-icons/tb'
import {LiaFastBackwardSolid} from 'react-icons/lia'
import blogbg2 from '../assets/blogbg2.jpg'
import PlayfairDisplayRegular from "../fonts/PlayfairDisplay-Regular.ttf";
import '../Fonts/fonts.css';
import { GoSearch } from "react-icons/go";



function Blog({ posts }) {
  const navigate = useNavigate();
  return (
    <div>
   
   <div style={{ backgroundImage: `url(${blogbg2})` }} className=' relative w-full bg-cover bg-center h-[45vh]'>
  <div  className='w-full h-full absolute bg-black/50'>
      <div className="w-[80%] mx-auto h-full flex  items-center">
      <div style={{ fontFamily: "Playfair Display" }} >
      <h1 className=' text-white text-3xl lg:text-5xl leading-snug font-bold mb-4 sm:mb-6'>Blog</h1>
      <div className=' text-xl sm:text-xl'>
      {/* <p className='text-l text-white'>Start your blog today and join a reprehenderit dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga? </p> */}
      </div>
      </div>
      </div>
    </div>
  
</div>
<div className='flex justify-between pt-16 pl-12'>
    
        <p style={{ fontFamily: "Playfair Display" }} className='px-28 font-semibold text-accent text-4xl flex justify-start '>  Featured Blogs</p>
<div className="relative pr-36">

    <input type="text" id="search" className=" pt-4 block  px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " /> 
     <label for="search"className="absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-400 peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">    search</label> 
</div>
</div>

      


    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32 border bg-gray-100 rounded-lg">
    <div className="m-4 cursor-pointer shadow-sm bg-white  rounded-lg" onClick={() => navigate('blog-detail/')}>
      <p className='py-4 px-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <img src={mula} className="w-full object-cover h-[200px]" alt="Blog Image" />
      <p className="text-red-500 mt-3"></p>
      <p className="font-bold mt-3"></p>
      <p className="line-clamp-3 text-gray-400 mt-3"></p>
      <p className="text-gray-500 text-sm px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
        voluptate reprehenderit dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet ex deserunt
        fuga?
      </p>
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center py-4 px-4">
          <img src={logo} className="w-[35px] rounded-full" alt="Logo" />
          <div className="ml-2">
            <p className="font-bold text-[12px]">ENLN</p>
            <p className="text-gray-500 text-[10px]">10 Nov 2024</p>
          </div>
        </div>
        <a className="text-sm text-justify flex items-center no-underline hover:underline" href="">
          <span className="mr-2 font-semibold text-secondary">Read More</span> <MdOutlineNavigateNext />
        </a>
      </div>
    </div>
  
    <div className="m-4 cursor-pointer shadow-sm bg-white rounded-lg" onClick={() => navigate('blog-detail/')}>
      <p className='py-4 px-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <img src={meeting2} className="w-full object-cover h-[200px]" alt="Blog Image" />
      <p className="text-red-500 mt-3"></p>
      <p className="font-bold mt-3"></p>
      <p className="line-clamp-3 text-gray-400 mt-3"></p>
      <p className="text-gray-500 text-sm px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
        voluptate reprehenderit dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet ex deserunt
        fuga?
      </p>
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center py-4 px-4">
          <img src={logo} className="w-[35px] rounded-full" alt="Logo" />
          <div className="ml-2">
            <p className="font-bold text-[12px]">ENLN</p>
            <p className="text-gray-500 text-[10px]">10 Nov 2024</p>
          </div>
        </div>
        <a className="text-sm text-justify flex items-center no-underline hover:underline" href="">
          <span className="mr-2 font-semibold text-secondary">Read More</span> <MdOutlineNavigateNext />
        </a>
      </div>
    </div>
  
    <div className="m-4 cursor-pointer shadow-sm bg-white rounded-lg" onClick={() => navigate('blog-detail/')}>
      <p className='py-4 px-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <img src={sketch} className="w-full  object-cover h-[200px]" alt="Blog Image" />
      <p className="text-red-500 mt-3"></p>
      <p className="font-bold mt-3"></p>
      <p className="line-clamp-3 text-gray-400 mt-3"></p>
      <p className="text-gray-500 text-sm  px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
        voluptate reprehenderit dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet ex deserunt
        fuga?
      </p>
      <div className="flex justify-between items-center mt-5 py-4 px-4">
        <div className="flex items-center">
          <img src={logo} className="w-[35px] rounded-full"></img>
          <div className="ml-2">
            <p className="font-bold text-[12px] ">ENLN</p>
            <p className="text-gray-500 text-[10px]">10 Nov 2024</p>
          </div>
        </div>
        <a className="text-sm text-justify flex items-center no-underline hover:underline" href="">
          <span className="mr-2 font-semibold text-secondary">Read More</span> <MdOutlineNavigateNext />
        </a>
      </div>

      
          
         
          </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32 border bg-gray-100 rounded-lg">
    <div className="m-4 cursor-pointer shadow-sm bg-white  rounded-lg" onClick={() => navigate('blog-detail/')}>
      <p className='py-4 px-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <img src={mula} className="w-full object-cover h-[200px]" alt="Blog Image" />
      <p className="text-red-500 mt-3"></p>
      <p className="font-bold mt-3"></p>
      <p className="line-clamp-3 text-gray-400 mt-3"></p>
      <p className="text-gray-500 text-sm px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
        voluptate reprehenderit dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet ex deserunt
        fuga?
      </p>
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center py-4 px-4">
          <img src={logo} className="w-[35px] rounded-full" alt="Logo" />
          <div className="ml-2">
            <p className="font-bold text-[12px]">ENLN</p>
            <p className="text-gray-500 text-[10px]">10 Nov 2024</p>
          </div>
        </div>
        <a className="text-sm text-justify flex items-center no-underline hover:underline" href="">
          <span className="mr-2 font-semibold text-secondary">Read More</span> <MdOutlineNavigateNext />
        </a>
      </div>
    </div>
  
    <div className="m-4 cursor-pointer shadow-sm bg-white rounded-lg" onClick={() => navigate('blog-detail/')}>
      <p className='py-4 px-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <img src={meeting2} className="w-full object-cover h-[200px]" alt="Blog Image" />
      <p className="text-red-500 mt-3"></p>
      <p className="font-bold mt-3"></p>
      <p className="line-clamp-3 text-gray-400 mt-3"></p>
      <p className="text-gray-500 text-sm px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
        voluptate reprehenderit dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet ex deserunt
        fuga?
      </p>
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center py-4 px-4">
          <img src={logo} className="w-[35px] rounded-full" alt="Logo" />
          <div className="ml-2">
            <p className="font-bold text-[12px]">ENLN</p>
            <p className="text-gray-500 text-[10px]">10 Nov 2024</p>
          </div>
        </div>
        <a className="text-sm text-justify flex items-center no-underline hover:underline" href="">
          <span className="mr-2 font-semibold text-secondary">Read More</span> <MdOutlineNavigateNext />
        </a>
      </div>
    </div>
  
    <div className="m-4 cursor-pointer shadow-sm bg-white rounded-lg" onClick={() => navigate('blog-detail/')}>
      <p className='py-4 px-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <img src={sketch} className="w-full  object-cover h-[200px]" alt="Blog Image" />
      <p className="text-red-500 mt-3"></p>
      <p className="font-bold mt-3"></p>
      <p className="line-clamp-3 text-gray-400 mt-3"></p>
      <p className="text-gray-500 text-sm  px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
        voluptate reprehenderit dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet ex deserunt
        fuga?
      </p>
      <div className="flex justify-between items-center mt-5 py-4 px-4">
        <div className="flex items-center">
          <img src={logo} className="w-[35px] rounded-full"></img>
          <div className="ml-2">
            <p className="font-bold text-[12px] ">ENLN</p>
            <p className="text-gray-500 text-[10px]">10 Nov 2024</p>
          </div>
        </div>
        <a className="text-sm text-justify flex items-center no-underline hover:underline" href="">
          <span className="mr-2 font-semibold text-secondary">Read More</span> <MdOutlineNavigateNext />
        </a>
      </div>
          </div>
         
          </div>
  <div className='flex justify-between px-36 bg-gray-100'>
  <div className='flex items-center'>
    
    <TbPlayerTrackNext className='scale-x-[-1] text-primary' style={{ width: "20px", height: "20px" }}/> 
    <button className='px-2'>Previous </button>
    </div>
    <div className='flex items-center'>
    <button className='px-2'>Next </button>
    <TbPlayerTrackNext className='text-primary' style={{ width: "20px", height: "20px" }}/> 
    
    </div>
    </div>
          </div>
  );
}

export default Blog;