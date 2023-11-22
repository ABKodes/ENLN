import React, { useState, useEffect } from "react";
import image3 from "../assets/image-3.jpg";
import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import AnnualForum1 from "../assets/AnnualForum1.jpg";
import AnnualForum2 from "../assets/AnnualForum2.jpg";
import { GoDot } from "react-icons/go";


  const AnnualForum = () => {
  const [activeItem, setActiveItem] = useState('item1');
 

  const handleItemClick = (itemId) => {
    console.log("Item Clicked:", itemId);
    setActiveItem(itemId);
  };
    return (
      <div className="max-w-full ">
         <div
          className=" vh-screen w-full"
          style={{ fontFamily: "Playfair Display" }}
        >
          <h1 className="ml-20 font-serif text-3xl text-accent">
            ENLN Annual Forum
          </h1>
        </div>
        <div className="carousel w-full ">
          <div id="item1" className="carousel-item relative w-full ">
            <img src={image1} className="w-full " />
            <div className="absolute bottom-10 right-40 flex transform justify-center gap-2 py-2">
              <a
                href="#item1"
                className={`btn btn-circle btn-sm border-primary bg-transparent ${
                  activeItem === "item1" ? "bg-primary" : ""
                }`}
                onClick={() => handleItemClick("item1")}
              >
                <GoDot />
              
              </a>
              <a
                href="#item2"
                className={`btn btn-circle btn-sm border-primary bg-transparent ${
                  activeItem === "item2" ? "bg-primary" : ""
                }`}
                onClick={() => handleItemClick("item2")}
              >
                <GoDot />
              </a>
              <a
                href="#item3"
                className={`btn btn-circle btn-sm border-primary bg-transparent ${
                  activeItem === "item3" ? "bg-primary" : ""
                }`}
                onClick={() => handleItemClick("item3")}
              >
                <GoDot />
              </a>
            </div>
          </div>
          <div id="item2" className="carousel-item relative w-full">
            <img src={image2} className="w-full h-auto" />
            <div className="absolute bottom-10 right-40 flex  transform justify-center gap-2 py-2">
              <a
                href="#item1"
                className={`btn btn-circle btn-sm border-primary bg-transparent ${
                  activeItem === "item1" ? "bg-primary" : ""
                }`}
                onClick={() => handleItemClick("item1")}
              >
                <GoDot />
              </a>
              <a
                href="#item2"
                className={`btn btn-circle btn-sm border-primary bg-transparent ${
                  activeItem === "item2" ? "bg-primary" : ""
                }`}
                onClick={() => handleItemClick("item2")}
              >
                <GoDot />
              </a>
              <a
                href="#item3"
                className={`btn btn-circle btn-sm border-primary bg-transparent ${
                  activeItem === "item3" ? "bg-primary" : ""
                }`}
                onClick={() => handleItemClick("item3")}
              >
                <GoDot />
              </a>
            </div>
          </div>
          <div id="item3" className="carousel-item relative w-full">
            <img src={image3} className="w-full" />
            <div className="absolute bottom-10 right-40 flex  transform justify-center gap-2 py-2">
              <a
                href="#item1"
                className={`btn btn-circle btn-sm border-primary bg-transparent ${
                  activeItem === "item1" ? "bg-primary" : ""
                }`}
                onClick={() => handleItemClick("item1")}
              >
                <GoDot />
              </a>
              <a
                href="#item2"
                className={`btn btn-circle btn-sm border-primary bg-transparent ${
                  activeItem === "item2" ? "bg-primary" : ""
                }`}
                onClick={() => handleItemClick("item2")}
              >
                <GoDot />
              </a>
              <a
                href="#item3"
                className={`btn btn-circle btn-sm border-primary bg-transparent ${
                  activeItem === "item3" ? "bg-primary" : ""
                }`}
                onClick={() => handleItemClick("item3")}
              >
                <GoDot />
              </a>
            </div>
          </div>
        </div> 
       

        <div className="border-black-100 h-20 w-full bg-secondary">
          <h2 className="m-auto pl-20 pt-8 font-sans text-xl text-white">
            Annual News Letter
          </h2>
        </div>

        <div className="flex h-screen w-screen flex-col bg-secondary  md:flex-row">
          <div
            className="w-1/2 flex-grow items-center justify-center  bg-cover bg-center  bg-no-repeat md:w-1/2 "
            style={{ backgroundImage: `url(${AnnualForum1})` }}
          ></div>
          <div className="md:w- w-1/2 flex-grow items-center justify-center bg-neutral font-sans text-white">
            <p className="mb-4 pl-8 pr-24 pt-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mb-4 pl-8 pr-24 pt-20 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="flex h-screen w-screen flex-col bg-secondary md:flex-row ">
          <div
            className="w-1/3 flex-grow  items-center justify-center  bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${AnnualForum2})` }}
          ></div>
          <div className="relative mb-[120px] mt-[-120px] w-1/3 flex-grow items-center justify-center bg-neutral py-14 pl-8 pr-20 font-sans text-white">
            <div className="absolute right-0 top-0 box-border h-[120px] w-[230px] border-black  bg-secondary p-4"></div>
            <p className="relative z-10 pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="relative z-10 pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="relative z-10 pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            {/* <Lottie animationData={Scroll} /> */}
          </div>
          <div
            className="w-1/3  flex-grow items-center justify-center  bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${AnnualForum2})` }}
          ></div>
        </div>
        <div className="grid h-screen w-screen grid-cols-[70%,30%]  bg-black ">
          <div className="  items-center bg-black px-36 py-32">
            <h1 className="pl-6 font-serif text-6xl text-accent">
              {" "}
              Explore <br /> <span className="inline-block pt-5">
                {" "}
                ENLN{" "}
              </span>{" "}
            </h1>
            <p className="py-5 pr-32 font-sans text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="pr-32 font-sans text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            {/* <Lottie animationData ={scroll} /> */}
          </div>
          <div className="carousel carousel-vertical ">
            <div className="carousel-item relative h-full">
              <iframe
                title="ENLN Video"
                className="h-full w-full"
                src="https://www.youtube.com/shorts/BVHz5QiXvxk" // Replace with your actual YouTube video ID or URL
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="carousel-item h-full">
              <iframe
                title="ENLN Video"
                className="h-full w-full"
                src="https://www.youtube.com/shorts/BVHz5QiXvxk" // Replace with your actual YouTube video ID or URL
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="carousel-item h-full">
              <iframe
                title="ENLN Video"
                className="h-full w-full"
                src="https://www.youtube.com/shorts/BVHz5QiXvxk" // Replace with your actual YouTube video ID or URL
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="carousel-item h-full">
              <iframe
                title="ENLN Video"
                className="h-full w-full"
                src="https://www.youtube.com/shorts/BVHz5QiXvxk" // Replace with your actual YouTube video ID or URL
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="carousel-item h-full">
              <iframe
                title="ENLN Video"
                className="h-full w-full"
                src="https://www.youtube.com/shorts/BVHz5QiXvxk" // Replace with your actual YouTube video ID or URL
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="carousel-item h-full">
              <iframe
                title="ENLN Video"
                className="h-full w-full"
                src="https://www.youtube.com/shorts/BVHz5QiXvxk" // Replace with your actual YouTube video ID or URL
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="carousel-item h-full">
              <iframe
                title="ENLN Video"
                className="h-full w-full"
                src="https://www.youtube.com/shorts/BVHz5QiXvxk" // Replace with your actual YouTube video ID or URL
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
};
export default AnnualForum;
