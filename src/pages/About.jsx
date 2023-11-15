import react from 'react';
import meeting from '../assets/meeting.jpg'
import bigmeet from '../assets/bigmeet.jpg'
import { PiEggCrackLight } from 'react-icons/pi';
import road2 from '../assets/road2.jpg'
import meeting2 from '../assets/meeting2.jpg'
import enlnpic from '../assets/enlnpic.jpg'
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
import card4 from '../assets/card4.jpg'
import PlayfairDisplayRegular from "../fonts/PlayfairDisplay-Regular.ttf";
import '../Fonts/fonts.css';
import port from '../assets/port.jpg'
import port2 from '../assets/port2.jpg'
import port3 from '../assets/port3.jpg'

function About () {
    return (

      
<div className='w-full bg-gray-100 py-16'>


<div className=''>
<div style={{ backgroundImage: `url(${enlnpic})` }} className=' relative w-full bg-cover bg-center h-[45vh]'>
  <div  className='w-full h-full absolute bg-black/40'>
      <div className="w-[80%] mx-auto h-full flex  items-center">
      <div  >
      <h1 style={{ fontFamily: "Playfair Display" }} className=' text-white text-2xl lg:text-5xl leading-snug font-bold mb-4 sm:mb-6'>About us</h1>
      <div className=' text-xl sm:text-xl'>
        <p className='text-l text-white'>Learn who we are</p>
      </div>
      </div>
      </div>
    </div>
  
</div>

<div className='max-w-[1000px] relative mx-auto grid md:grid-colds-2 border border-gray-300 shadow-lg border-t-2 -mt-16 bg-white'>
<div className='max-w-[1200px] grid md:grid-cols-2 border border-gray-300 shadow-lg'>
   
    <div className='flex flex-col pt-12 '>
      <h1 style={{ fontFamily: "Playfair Display" }} className='md:text-4xl sm:text-3xl text-2xl font-semibold text-accent px-12 pb-4'>Our History</h1>
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
      <p className='py-4 px-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        molestiae delectus culpa hic assumenda, voluptate reprehenderit
        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
        eveniet ex deserunt fuga?
      </p>
      <p className=' px-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        molestiae delectus culpa hic assumenda, voluptate reprehenderit
        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
        eveniet ex deserunt fuga?
      </p>
    </div>
    <img className='w-[549px] mx-auto ' src={road2} alt='/' />
  </div>
  </div>

    <div className='absolute top-0 left-0 w-full h-full'>
      
    </div>
    <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
    </div>
    <p style={{ fontFamily: "Playfair Display" }}  className='text-accent font-bold px-28 pt-10 text-3xl'>What we've accomplished</p>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      
    <img className='w-[580px] mx-auto my-4 ' src={bigmeet} alt='/' />
    <div className='flex flex-col pt-6'>
      
      <h1 style={{ fontFamily: "Playfair Display" }}  className='md:text-2xl sm:text-xl text-xl font-semibold p-2 text-primary'>Our Impact</h1>
      <p className='px-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        molestiae delectus culpa hic assumenda, voluptate reprehenderit
        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
        eveniet ex deserunt fuga?
      </p>

      <div className='flex col-2  ml-8 justify-between'>
      <div className='flex flex-col py-6'>
      <PiEggCrackLight size={28} className='text-[20] text-primary scale-x-[-1] '/>
    <p className='pb-3'>Retum rutrum hedrerti</p>
    <PiEggCrackLight  size={28} className='text-[110] text-primary scale-x-[-1] '/>
    <p className='pb-3'>Retum rutrum hedrerti</p>
    <PiEggCrackLight size={28} className='text-[20] text-primary scale-x-[-1] '/>
    <p className='pb-3'>Retum rutrum hedrerti</p>
    
    </div>
    <div className='flex flex-col py-6 mx-16'>
      <PiEggCrackLight size={28} className='text-[20] text-primary scale-x-[-1] '/>
    <p className='pb-3'>Retum rutrum hedrerti</p>
    <PiEggCrackLight  size={28} className='text-[110] text-primary scale-x-[-1] '/>
    <p className='pb-3'>Retum rutrum hedrerti</p>
    <PiEggCrackLight size={28} className='text-[20] text-primary scale-x-[-1] '/>
    <p className='pb-3'>Retum rutrum hedrerti</p>
    
    </div>
    </div>
    </div>
   
  </div>
  </div>
  <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
   
    <div className='flex flex-col justify-center pb-8'>
      <h1 style={{ fontFamily: "Playfair Display" }} className='md:text-4xl sm:text-3xl text-2xl font-bold text-accent py-4'>How to become a member?</h1>
      <p className='py-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        molestiae delectus culpa hic assumenda, voluptate reprehenderit
        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
        eveniet ex deserunt fuga?
      </p>
      <p className='py-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        molestiae delectus culpa hic assumenda, voluptate reprehenderit
        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
        eveniet ex deserunt fuga?
      </p>
      <p className='py-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        molestiae delectus culpa hic assumenda, voluptate reprehenderit
        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
        eveniet ex deserunt fuga?
      </p>
      <button className='bg-primary text-white w-[400px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 pb-4'>SEND MESSAGE</button>
    </div>
    <img className='w-[500px] mx-auto my-16' src={meeting2} alt='/' />
  </div>

<div className='relative flex items-center'>
<div className='bg-primary mx-auto rounded-lg h-[450px] w-[70vw]'>
  <p className='px-8 text-white font-semibold text-2xl pt-6'>Our achivements</p>
  </div>
<div className='flex col-4 carousel carousel-center rounded-box absolute top-0 w-full pt-20'>

  <div className='px-2'>
  <div className="card w-80 bg-base-100 shadow-xl">
  <figure><img src={card4} alt="Shoes" /></figure>
  <div className="card-body">
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
</div>
</div>
<div className='px-2'>
<div className="card w-80 bg-base-100 shadow-xl ">
  <figure><img src={card1} alt="Shoes" /></figure>
  <div className="card-body">
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
</div>
</div>

<div className='px-2'>
<div className="card w-80 bg-base-100 shadow-xl">
  <figure><img src={card2} alt="Shoes" /></figure>
  <div className="card-body">
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
</div>
</div>
<div className='px-2'>
<div className="card w-80 bg-base-100 shadow-xl">
  <figure><img src={card3} alt="Shoes" /></figure>
  <div className="card-body">
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
</div>
</div>
<div className='px-4'>
<div className="card w-80 bg-base-100 shadow-xl">
  <figure><img src={card2} alt="Shoes" /></figure>
  <div className="card-body">
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
</div>
</div>


</div>

</div>

<div className='bg-gray-200'>
  <p style={{ fontFamily: "Playfair Display" }} className='text-accent flex text-center font-bold text-2xl px-60 py-6'> Organizational Structure </p>

 <div className='flex flex-col items-center '>
<div className="flex flex-col items-center ">
      <div className="w-28 h-28 rounded-full overflow-hidden">
        <img className="object-cover w-full h-full" src={port3} alt="Profile" />
      </div>
      <p className="text-center mt-4"> voluptate repreh enderit</p>
    </div>
    <div className='bg-primary h-24 w-[2px] mt-8 '>

    </div>

<div className='flex flex-col-2 justify-center items-center w-7/12 mx-auto '>
    <div className="flex flex-col items-center pl-28">
      <div className="w-28 h-28 rounded-full overflow-hidden">
        <img className="object-cover w-full h-full" src={port2} alt="Profile" />
      </div>
      <p className="text-center mt-4"> voluptate repreh enderit</p>
    </div>
    <div className="bg-primary flex-grow h-[2px] mb-8 "></div>
      
    <div className="flex flex-col items-center pr-28">
      <div className="w-28 h-28 rounded-full overflow-hidden">
        <img className="object-cover w-full h-full" src={port} alt="Profile" />
      </div>
      <p className="text-center mt-4"> voluptate repreh enderit</p>
    </div>
    </div>

    <div className='flex justify-between w-[33%]'>
    <div className='bg-primary h-24 w-[2px] mt-8 '> </div>
    <div className='bg-primary h-24 w-[2px] mt-8 '> </div>
    </div>
    


    <div className='flex flex-col-3 justify-center items-center w-10/12 mx-auto pb-8'>
    <div className="flex flex-col items-center pl-28">
      <div className="w-28 h-28 rounded-full overflow-hidden">
        <img className="object-cover w-full h-full" src={port2} alt="Profile" />
      </div>
      <p className="text-center mt-4"> voluptate repreh enderit</p>
    </div>
    <div className="bg-primary flex-grow h-[2px] mb-8 px-4"></div>

    <div className="flex flex-col items-center">
      <div className="w-28 h-28 rounded-full overflow-hidden">
        <img className="object-cover w-full h-full" src={port} alt="Profile" />
      </div>
      <p className="text-center mt-4"> voluptate repreh enderit</p>
    </div>
    <div className="bg-primary flex-grow h-[2px] mb-8 -px-10"></div>
    <div className="flex flex-col items-center mr-28">
      <div className="w-28 h-28 rounded-full overflow-hidden">
        <img className="object-cover w-full h-full" src={port2} alt="Profile" />
      </div>
      <p className="text-center mt-4"> voluptate repreh enderit</p>
    </div>
    </div>


    </div>
    </div> 
</div>

    );
  };
  
  export default About;