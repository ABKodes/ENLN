import React, { useState, useEffect } from "react";
import teampic from "../assets/image-3.jpg";
import meeting from "../assets/image-1.jpg";
import meeting2 from "../assets/image-2.jpg";
import { GoDot } from "react-icons/go";



  const AnnalForum = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const handleItemClick = (itemId) => {
    console.log("Item Clicked:", itemId);
    setActiveItem(itemId);
  };
    return (
      <>
        <div className="m-8 h-3/5 w-full">
          <h1
            className="ml-20 text-3xl text-accent"
            style={{ fontFamily: "Playfair Display" }}
          >
            ENLN Annal Forum
          </h1>
        </div>

        <div className="carousel w-full">
          <div id="item1" className="carousel-item relative w-full">
            <img src={image-1} className="w-full" />
            <div className="absolute bottom-0 right-3 flex transform justify-center gap-2 py-2">
              <a
                href="#item1"
                className={`btn-xl btn btn-circle border-primary bg-transparent ${
                  activeItem === "item1" ? "bg-primary" : ""
                }`}
                onClick={() => handleItemClick("item1")}
              >
                <GoDot />
              </a>
              <a
                href="#item2"
                className={`btn-xl btn btn-circle border-primary bg-transparent ${
                  activeItem === "item2" ? "bg-primary" : ""
                }`}
                onClick={() => handleItemClick("item2")}
              >
                <GoDot />
              </a>
              <a
                href="#item3"
                className={`btn-xl btn btn-circle border-primary bg-transparent ${
                  activeItem === "item3" ? "bg-primary" : ""
                }`}
                onClick={() => handleItemClick("item3")}
              >
                <GoDot />
              </a>
            </div>
          </div>
          <div id="item2" className="carousel-item relative w-full">
            <img src={image-2} className="w-full" />
            <div className="absolute bottom-0 right-3 flex  transform justify-center gap-2 py-2">
              <a
                href="#item1"
                className={`btn-xl btn btn-circle border-primary bg-transparent ${
                  activeItem === "item1" ? "bg-primary" : ""
                }`}
                onClick={() => handleItemClick("item1")}
              >
                <GoDot />
              </a>
              <a
                href="#item2"
                className={`btn-xl btn btn-circle border-primary bg-transparent ${
                  activeItem === "item2" ? "bg-primary" : ""
                }`}
                onClick={() => handleItemClick("item2")}
              >
                <GoDot />
              </a>
              <a
                href="#item3"
                className={`btn-xl btn btn-circle border-primary bg-transparent ${
                  activeItem === "item3" ? "bg-primary" : ""
                }`}
                onClick={() => handleItemClick("item3")}
              >
                <GoDot />
              </a>
            </div>
          </div>
          <div id="item3" className="carousel-item relative w-full">
            <img src={image-3} className="w-full" />
            <div className="absolute bottom-0 right-3 flex  transform justify-center gap-2 py-2">
              <a
                href="#item1"
                className={`btn-xl btn btn-circle border-primary bg-transparent ${
                  activeItem === "item1" ? "bg-primary" : ""
                }`}
                onClick={() => handleItemClick("item1")}
              >
                <GoDot />
              </a>
              <a
                href="#item2"
                className={`btn-xl btn btn-circle border-primary bg-transparent ${
                  activeItem === "item2" ? "bg-primary" : ""
                }`}
                onClick={() => handleItemClick("item2")}
              >
                <GoDot />
              </a>
              <a
                href="#item3"
                className={`btn-xl btn btn-circle border-primary bg-transparent ${
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
          <h2
            className="m-auto pl-20 pt-8 text-xl text-white"
            style={{ fontFamily: "Playfair Display" }}
          >
            Annal News Letter
          </h2>
        </div>
        <div></div>
      </>
    );
};
export default AnnalForum;
