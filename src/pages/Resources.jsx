import React from 'react'
import book from '../assets/book.jpg'
import { PiDownloadSimpleBold } from "react-icons/pi";
import {TbPlayerTrackNext} from 'react-icons/tb'
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
import card4 from '../assets/card4.jpg'

const Resources = () => {
  return (
    <div> 
        <div className='flex justify-between pt-16 pl-16'>
        <p style={{ fontFamily: "Playfair Display" }} className='px-28 font-semibold text-accent text-4xl flex justify-start '>Resources</p>
<div class="relative pr-36">
    <input type="text" id="search" class=" pt-4 block  px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " />
    <label for="search" class="absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-400 peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">...looking for</label>
</div>
</div>

    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 pt-10'>
    <img className='w-[280px] mx-auto my-16' src={book} alt='/' />
   <div className='flex flex-col justify-center pb-8'>
     <h1  className='md:text-2xl sm:text-3xl text-xl '>Rutrum rutrum hendrerit a nisl elementum accumsan scelerisque </h1>
     <p className='py-4'>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
       molestiae delectus culpa hic assumenda, voluptate reprehenderit
       dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
       eveniet ex deserunt fuga?
     </p>
     <div className='flex'>
         <button className='bg-primary text-white w-[250px] rounded-2xl my-6 mx-auto md:mx-0 py-6 pr-2 pb-6 flex justify-center text-lg'> <PiDownloadSimpleBold size={20}  className='mr-3 mt-1'/> Download E-Book</button>
      </div>
   </div>
 </div>

 <div className='w-[60%]  mx-auto flex flex-col'>
 <p style={{ fontFamily: "Playfair Display" }} className='pl-6 font-semibold text-accent text-3xl  '>Publications</p>
 <p className='py-6 pl-6'>
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
       molestiae delectus culpa hic assumenda, voluptate reprehenderit dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
       eveniet ex deserunt.
 </p> 
 <div className='relative flex items-center'>
<div className='flex col-4 rounded-box  top-0 w-full'>
<div className='px-2'>
<div className="book  bg-base-100">
  <figure><img src={book} alt="Shoes" /></figure>
  <div className="book-body font-semibold grid grid-cols-4 place-content-center">
   <p className='col-span-3 text-sm'>Rutrum rutrum hendrerit  Rutrum rutrum</p> 
    <div>  <PiDownloadSimpleBold size={24}  className='mr-16 mt-4'></PiDownloadSimpleBold></div> 
    
  </div>
</div>
</div>

<div className='px-2'>
<div className="book  bg-base-100">
  <figure><img src={book} alt="Shoes" /></figure>
  <div className="book-body font-semibold grid grid-cols-4 place-content-center">
   <p className='col-span-3 text-sm'>Rutrum rutrum hendrerit  Rutrum rutrum</p> 
    <div>  <PiDownloadSimpleBold size={24}  className='mr-16 mt-4'></PiDownloadSimpleBold></div> 
    
  </div>
</div>
</div>
<div className='px-2'>
<div className="book  bg-base-100">
  <figure><img src={book} alt="Shoes" /></figure>
  <div className="book-body font-semibold grid grid-cols-4 place-content-center">
   <p className='col-span-3 text-sm'>Rutrum rutrum hendrerit  Rutrum rutrum</p> 
    <div>  <PiDownloadSimpleBold size={24}  className='mr-16 mt-4'></PiDownloadSimpleBold></div> 
    
  </div>
</div>
</div>

<div className='px-2'>
<div className="book  bg-base-100">
  <figure><img src={book} alt="Shoes" /></figure>
  <div className="book-body font-semibold grid grid-cols-4 place-content-center">
   <p className='col-span-3 text-sm'>Rutrum rutrum hendrerit  Rutrum rutrum</p> 
    <div>  <PiDownloadSimpleBold size={24}  className='mr-16 mt-4'></PiDownloadSimpleBold></div> 
    
  </div>
</div>
</div>


</div>

</div>
<div className='relative flex items-center'>
<div className='flex col-4 rounded-box  top-0 w-full'>
<div className='px-2'>
<div className="book  bg-base-100">
  <figure><img src={book} alt="Shoes" /></figure>
  <div className="book-body font-semibold grid grid-cols-4 place-content-center">
   <p className='col-span-3 text-sm'>Rutrum rutrum hendrerit  Rutrum rutrum</p> 
    <div>  <PiDownloadSimpleBold size={24}  className='mr-16 mt-4'></PiDownloadSimpleBold></div> 
    
  </div>
</div>
</div>

<div className='px-2'>
<div className="book  bg-base-100">
  <figure><img src={book} alt="Shoes" /></figure>
  <div className="book-body font-semibold grid grid-cols-4 place-content-center">
   <p className='col-span-3 text-sm'>Rutrum rutrum hendrerit  Rutrum rutrum</p> 
    <div>  <PiDownloadSimpleBold size={24}  className='mr-16 mt-4'></PiDownloadSimpleBold></div> 
    
  </div>
</div>
</div>
<div className='px-2'>
<div className="book  bg-base-100">
  <figure><img src={book} alt="Shoes" /></figure>
  <div className="book-body font-semibold grid grid-cols-4 place-content-center">
   <p className='col-span-3 text-sm'>Rutrum rutrum hendrerit  Rutrum rutrum</p> 
    <div>  <PiDownloadSimpleBold size={24}  className='mr-16 mt-4'></PiDownloadSimpleBold></div> 
    
  </div>
</div>
</div>

<div className='px-2'>
<div className="book  bg-base-100">
  <figure><img src={book} alt="Shoes" /></figure>
  <div className="book-body font-semibold grid grid-cols-4 place-content-center">
   <p className='col-span-3 text-sm'>Rutrum rutrum hendrerit  Rutrum rutrum</p> 
    <div>  <PiDownloadSimpleBold size={24}  className='mr-16 mt-4'></PiDownloadSimpleBold></div> 
    
  </div>
</div>
</div>


</div>

</div>
<div className='flex justify-between pt-4 bg-white'>
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

 <div className='relative flex items-center pt-12'>
<div className='bg-gray-100 mx-auto h-[450px] w-full pl-64 '>
  <p style={{ fontFamily: "Playfair Display" }} className='px-16 text-accent font-semibold text-2xl pt-6'>Training Materials & Videos</p>
  </div>
<div className='flex col-4 carousel carousel-center rounded-box absolute top-0 w-full pt-32'>

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






 <div className='w-[60%]  mx-auto flex flex-col py-12'>
 <p style={{ fontFamily: "Playfair Display" }} className='pl-6 font-semibold text-accent text-3xl  '>Leadership-related reading materials</p>
 <p className='py-6 pl-6'>
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
       molestiae delectus culpa hic assumenda, voluptate reprehenderit dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
       eveniet ex deserunt.
 </p> 
 <div className='relative flex items-center'>
<div className='flex col-4 rounded-box  top-0 w-full'>
<div className='px-2'>
<div className="book  bg-base-100">
  <figure><img src={book} alt="Shoes" /></figure>
  <div className="book-body font-semibold grid grid-cols-4 place-content-center">
   <p className='col-span-3 text-sm'>Rutrum rutrum hendrerit  Rutrum rutrum</p> 
    <div>  <PiDownloadSimpleBold size={24}  className='mr-16 mt-4'></PiDownloadSimpleBold></div> 
    
  </div>
</div>
</div>

<div className='px-2'>
<div className="book  bg-base-100">
  <figure><img src={book} alt="Shoes" /></figure>
  <div className="book-body font-semibold grid grid-cols-4 place-content-center">
   <p className='col-span-3 text-sm'>Rutrum rutrum hendrerit  Rutrum rutrum</p> 
    <div>  <PiDownloadSimpleBold size={24}  className='mr-16 mt-4'></PiDownloadSimpleBold></div> 
    
  </div>
</div>
</div>
<div className='px-2'>
<div className="book  bg-base-100">
  <figure><img src={book} alt="Shoes" /></figure>
  <div className="book-body font-semibold grid grid-cols-4 place-content-center">
   <p className='col-span-3 text-sm'>Rutrum rutrum hendrerit  Rutrum rutrum</p> 
    <div>  <PiDownloadSimpleBold size={24}  className='mr-16 mt-4'></PiDownloadSimpleBold></div> 
    
  </div>
</div>
</div>

<div className='px-2'>
<div className="book  bg-base-100">
  <figure><img src={book} alt="Shoes" /></figure>
  <div className="book-body font-semibold grid grid-cols-4 place-content-center">
   <p className='col-span-3 text-sm'>Rutrum rutrum hendrerit  Rutrum rutrum</p> 
    <div>  <PiDownloadSimpleBold size={24}  className='mr-16 mt-4'></PiDownloadSimpleBold></div> 
    
  </div>
</div>
</div>


</div>
</div>
</div>



  </div>
    
  )
}

export default Resources