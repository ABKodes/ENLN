import React from 'react'
import progbg from "../assets/progbg.jpg"
import prog2 from "../assets/prog2.jpg"
import PlayfairDisplayRegular from "../fonts/PlayfairDisplay-Regular.ttf";
import '../Fonts/fonts.css';
import {VscPerson} from "react-icons/vsc"
import {BsLaptop} from "react-icons/bs"
import {AiOutlineBook} from "react-icons/ai" 
import {PiPresentationChartLight} from "react-icons/pi" 
import {RiPresentationFill} from "react-icons/ri" 
import {TbWorld} from "react-icons/tb" 

const Programs = () => {
  return (
    <div className='w-full bg-gray-100 pb-16'>

     <div style={{ backgroundImage: `url(${progbg})` }} className=' relative w-full bg-cover bg-center h-[45vh]'>
        <div  className='w-full h-full absolute bg-black/50'>
        <div className="w-[80%] mx-auto h-full flex  items-center">
     <div>
        <h1 style={{ fontFamily: "Playfair Display" }} className=' text-white text-2xl lg:text-5xl leading-snug font-bold mb-4 sm:mb-6'>Programs</h1>
        <p className='text-2xl text-white'>ENLN Units</p>
        <div className=' text-xl sm:text-xl'></div>
    </div>
        </div>
        </div>
    </div>

    <div className='max-w-[1200px] relative  mx-auto grid md:grid-colds-2 border border-gray-300 shadow-lg border-t-2 mt-20 bg-white'>
<div className='max-w-[1200px] grid md:grid-cols-2 border border-gray-300 shadow-lg'>
   
    <div className='flex flex-col pt-12 w-[90%] mx-auto'>
      <h1 style={{ fontFamily: "Playfair Display" }} className='md:text-3xl sm:text-2xl text-xl font-semibold text-accent px-12 pb-4'>Capacity exchange</h1>
      <p className='py-4 px-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        molestiae delectus culpa hic assumenda, voluptate reprehenderit
        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
        eveniet ex deserunt fuga?
      </p>
      <p className='px-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        molestiae delectus culpa hic assumenda, voluptate reprehenderit
        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
        eveniet ex deserunt fuga?
      </p>
    </div>

    <img className='w-[1000px] mx-auto ' src={prog2} alt='/' />
  </div>
  </div>

  <div className='max-w-[1200px] relative  mx-auto grid md:grid-colds-2 border border-gray-300 shadow-lg border-t-2 mt-20 bg-white'>
<div className='max-w-[1200px] grid md:grid-cols-2 border border-gray-300 shadow-lg'>
    <img className='w-[1000px] mx-auto ' src={prog2} alt='/' />
    <div className='flex flex-col pt-12 w-[90%] mx-auto '>
      <h1 style={{ fontFamily: "Playfair Display" }} className='md:text-3xl sm:text-2xl text-xl font-semibold text-accent px-12 '>Nutrition Leadership Courses & Seminars</h1>
      <div className='py-4 px-11 flex '>
        <VscPerson size={28} color="green" className='mr-2 ' /> 
        <p> In person nutrition leadership training </p>
      </div>
      <div className='py-4 px-12 flex'>
      <RiPresentationFill size={26} color="green" className='mr-2 '/> 
      <p className=''>
      Blended nutrition leadership training
      </p>
      </div>
      <div className='py-4 px-12 flex'>
      <PiPresentationChartLight size={26} color="green" className='mr-2 '/> 
      <p className=' '>
        Webinars & Seminars 
      </p>
      </div>
      <div className='py-4 px-12 flex'>
      <AiOutlineBook size={20} color="green" className='mr-2 '/> 
      <p className=' '>
      Tailor-made courses 
      </p>
      </div>
      <div className='py-4 px-12 flex'>
      <BsLaptop size={20} color="green" className='mr-2 '/> 
      <p className=' '>
      E-learning 
      </p>
      </div>
      <div className='flex justify-center'>
         <button className='bg-primary text-white w-[200px] rounded-2xl font-medium my-6 mx-auto md:mx-0 py-4 pr-2 pb-4 flex justify-center text-lg'> <TbWorld size={26}  className='mr-2 '/> Visit Site</button>
      </div>
    </div>

    
  </div>
  </div>

  <div className='max-w-[1200px] relative  mx-auto grid md:grid-colds-2 border border-gray-300 shadow-lg border-t-2 mt-20 bg-white'>
<div className='max-w-[1200px] grid md:grid-cols-2 border border-gray-300 shadow-lg'>
   
    <div className='flex flex-col pt-12 w-[90%] mx-auto'>
      <h1 style={{ fontFamily: "Playfair Display" }} className='md:text-3xl sm:text-2xl text-xl font-semibold text-accent px-12 pb-4'>Evidence & Policy</h1>
      <p className='py-4 px-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        molestiae delectus culpa hic assumenda, voluptate reprehenderit
        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
        eveniet ex deserunt fuga?
      </p>
      <p className='px-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        molestiae delectus culpa hic assumenda, voluptate reprehenderit
        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
        eveniet ex deserunt fuga?
      </p>
    </div>

    <img className='w-[1000px] mx-auto ' src={prog2} alt='/' />
  </div>
  </div>

  <div className='max-w-[1200px] relative  mx-auto grid md:grid-colds-2 border border-gray-300 shadow-lg border-t-2 mt-20 bg-white'>
<div className='max-w-[1200px] grid md:grid-cols-2 border border-gray-300 shadow-lg'>
   
<img className='w-[1200px] h-full mx-auto ' src={prog2} alt='/' />
    <div className='flex flex-col pt-12 w-[90%] mx-auto'>
      <h1 style={{ fontFamily: "Playfair Display" }} className='md:text-3xl sm:text-2xl text-xl font-semibold text-accent px-12 pb-4'>Woman Leaders for Nutrition</h1>
      <p className='py-4 px-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        molestiae delectus culpa hic assumenda, voluptate reprehenderit
        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
        eveniet ex deserunt fuga?
      </p>
      <p className=' py-4 px-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        molestiae delectus culpa hic assumenda, voluptate reprehenderit
        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
        eveniet ex deserunt fuga?
      </p>
      <p className='px-12 py-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        molestiae delectus culpa hic assumenda, voluptate reprehenderit
        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
        eveniet ex deserunt fuga?
      </p>
    </div>

  </div>
  </div>

  <div className='max-w-[1200px] relative  mx-auto grid md:grid-colds-2 border border-gray-300 shadow-lg border-t-2 mt-20 bg-white'>
<div className='max-w-[1200px] grid md:grid-cols-2 border border-gray-300 shadow-lg'>
   
    <div className='flex flex-col pt-12 w-[90%] mx-auto '>
      <h1 style={{ fontFamily: "Playfair Display" }} className='md:text-3xl sm:text-2xl text-xl font-semibold text-accent px-12 pb-4'>Youth Leaders for Nutrition</h1>
      <p className='py-4 px-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        molestiae delectus culpa hic assumenda, voluptate reprehenderit
        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
        eveniet ex deserunt fuga?
      </p>
      <p className='px-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        molestiae delectus culpa hic assumenda, voluptate reprehenderit
        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
        eveniet ex deserunt fuga?
      </p>
    </div>

    <img className='w-[1000px] mx-auto ' src={prog2} alt='/' />
  </div>
  </div>



    </div>
  )
}

export default Programs