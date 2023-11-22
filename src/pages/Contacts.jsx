import React from 'react'
import {BsTelephone} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa' 
import {FaLinkedin} from 'react-icons/fa' 
import {FaTelegram} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import {FaYoutube} from 'react-icons/fa' 
import {FaInstagram} from 'react-icons/fa'

const Contacts = () => {
  return (

    <div>
        
    <p style={{ fontFamily: "Playfair Display" }} className='text-accent flex text-center font-bold text-4xl px-60 py-6 pt-30'> Contact Us </p>

    <div className='flex flex-col-3 justify-between items-center w-10/12 mx-auto '>
    <div className="flex flex-col items-center pl-28">
      <div className="">
       <p className='font-semibold'> Address</p>
      </div>
      <p className="text-center mt-4"> XQPR+V4G Ethiopian Skylight Hotel </p>
      <p>Bole Dildey, Addis Ababa</p>
    </div>

    <div className="flex flex-col items-center pt-2">
      <div className="pb-2">
      <p className='font-semibold'>Phone number</p> 
      </div>
      <div className='py-2 px-12 flex'>
      <BsTelephone size={20} color="green" className='mr-2 '/> 
      <p className=' '>
      (+251) 911 11434
      </p>
      </div>
      <div className=' px-12 py-1 flex'>
      <BsTelephone size={20} color="green" className='mr-2 '/> 
      <p className=' '>
      (+251) 911 11434
      </p>
      </div>
    </div>
    <div className="flex flex-col items-center mr-28 pt-4">
      <div className="pb-4">
       <p className='font-semibold'> Social Media</p>
      </div>
      <div className='px-12 py-2 flex'>
      <FaFacebook size={32} color="#0866ff" className='mr-4 '/> 
      <FaLinkedin size={32} color="#0077b5" className='mr-2 '/> 
      <FaTelegram size={32} color="#229ED9" className='ml-4 mr-4'/>
      <iconify-icon icon="skill-icons:instagram" width="28"></iconify-icon>
      </div>
      <div className='px-12 flex'>
      <FaXTwitter size={32} color="black" className='ml-4 '/>
      <FaYoutube size={32} color="red" className='ml-4 mr-4'/> 
      <iconify-icon icon="logos:tiktok-icon" width="28"></iconify-icon>
      </div>
    </div>
    </div>
    <div>
    <div className='px-3 lg:pr-3 my-10 pt-10'>
      <iframe
        className='h-[70vh] w-full'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02029059627!2d38.6133287986958!3d8.963479541178152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1698257275928!5m2!1sen!2set'
        width='400'
        height='450'
        style={{ border: '0' }}
        allowFullScreen=''
        loading='lazy'
      ></iframe>
    </div>  
  </div>

<div className='flex flex-col-2'>
<div className='pl-60'>
<p style={{ fontFamily: "Playfair Display" }} className='text-accent flex text-center font-bold text-2xl py-6 pt-40'> Let's Talk </p>
<div className='flex justify-end w-[70%] pt-8'>
<p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda  </p>
</div>
</div>

<div id='contact' className='max-w[1040px] m-auto md:pl-20 p-4 py-16 pr-60'>
        <form action='' method='POST' encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>

<div class="relative z-0">
    <input type="text" id="Name" class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " />
    <label for="Name" class="absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-400 peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Name</label>
</div>
<div class="relative z-0">
    <input type="text" id="Phone" class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " />
    <label for="Phone" class="absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-400 peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone</label>
</div>
<div class="relative z-0">
    <input type="text" id="Email" class="block py-2.5 px-2 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " />
    <label for="Email" class="absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-400 peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
</div>
        </div>
        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'> Message</label>
            <textarea className='border-2 rounded-lg p-3 flex border-secondary focus:text-gray-400 ' rows={10} type='text' name='Subject'></textarea>
        </div>
        <button className='hover:text-white hover:bg-green hover:font-semibold bg-primary text-white mt-4 w-full p-4 rounded-lg'>
            Send Message
        </button>
        </form>

    </div>
</div>

    </div>
  )
}

export default Contacts