import React, { useState, useEffect } from "react";
import image3 from "../assets/image-3.jpg";
import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
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
            <img src={image1} className="w-full" />
            {/* <div className="absolute bottom-0 right-3 flex transform justify-center gap-2 py-2">
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
            </div> */}
            <div className="absolute bottom-0 right-3 flex transform justify-center gap-2 py-2">
              <input
                type="radio"
                id="item1"
                name="carousel-radio"
                checked={activeItem === "item1"}
                onChange={() => handleItemClick("item1")}
              />
              <label
                htmlFor="item1"
                className={`btn-xl btn btn-circle border-primary bg-transparent ${
                  activeItem === "item1" ? "bg-primary" : ""
                }`}
              ></label>

              <input
                type="radio"
                id="item2"
                name="carousel-radio"
                checked={activeItem === "item2"}
                onChange={() => handleItemClick("item2")}
              />
              <label
                htmlFor="item2"
                className={`btn-xl btn btn-circle border-primary bg-transparent ${
                  activeItem === "item2" ? "bg-primary" : ""
                }`}
              ></label>

              <input
                type="radio"
                id="item3"
                name="carousel-radio"
                checked={activeItem === "item3"}
                onChange={() => handleItemClick("item3")}
              />
              <label
                htmlFor="item3"
                className={`btn-xl btn btn-circle border-primary bg-transparent ${
                  activeItem === "item3" ? "bg-primary" : ""
                }`}
              ></label>
            </div>
          </div>
          <div id="item2" className="carousel-item relative w-full">
            <img src={image2} className="w-full" />
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
            <img src={image3} className="w-full" />
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
