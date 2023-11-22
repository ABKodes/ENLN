import background from "../assets/background.jpg";
import { Link } from "react-router-dom";
import { BiNews } from "react-icons/bi";
import "../Fonts/fonts.css";
import { TbTargetArrow } from "react-icons/tb";
import book from "../assets/book.jpg";
import Member from "../assets/port.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
const Hero = () => {
  const [activeButton, setActiveButton] = useState('radio1');

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  const [activeTab, setActiveTab] = useState("vision");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      {/* Hero section */}
       <div
        className="hero  vh-screen"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div
          className="hero-content text-center text-neutral-content"
          style={{ fontFamily: "Playfair Display" }}
        >
          <div className="min-w-md pt-32">
            <h1 className="p-2 text-9xl font-bold tracking-widest text-primary">
              ENLN
            </h1>
            <p className=" my-2 space-x-2 text-6xl font-bold text-white">
              Ethiopia Nutrition Leaders Network
            </p>
            <p className="mb-5 font-sans text-white ">
              Create Visionary Leaders for the Journey to End Malnutrition in
              Ethiopia.
            </p>
            <Link to="/membership">
              <button className="mx-auto my-6 w-[200px] rounded-md bg-primary py-3 font-sans font-medium text-white">
                Join Us
              </button>
            </Link>
            <p className="mb-2 pt-32 space-x-40 text-3xl font-bold text-white">
              <span> Government</span>
              <span>Community</span>
              <span>CSO Charity</span>
              <span>Institution</span>
            </p>
          </div>
        </div>
      </div>  
      

      {/* Coming Soon */}
      <div className="mb-5 h-screen w-full bg-[#efefef]">
        <div className=" h-3/12 mx-auto mt-5 w-6/12 bg-white p-8">
          <h1 className="p-5 text-center">Coming Soon</h1>
          <p className="p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        {/* Who are we */}
        <div className="card my-4 ml-auto flex w-11/12 justify-end  font-sans lg:card-side">
          <div className="card-body  flex items-center justify-center border-black bg-slate-300 p-6">
            <h2 className="card-title">New album is released!</h2>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula
              ullamcorper malesuada proin libero. Vulputate ut pharetra sit amet
              aliquam id diam maecenas. Aliquet nec ullamcorper sit amet risus
              nullam. Hac habitasse platea dictumst vestibulum rhoncus. Pretium
              lectus quam id leo in vitae turpis. Nisi quis eleifend quam
              adipiscing vitae proin sagittis. Lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className="max-w-[600px]">
            <img src={background} className="mx-auto w-full" />
          </div>
        </div>
      </div>
      {/* What we stand for */}
      <div className="mx-auto my-10 h-96 w-10/12">
        <h1 className="mb-5 text-left font-serif text-3xl font-bold text-accent">
          What we stand for
        </h1>
        <div className="flex justify-evenly">
          <a
            onClick={() => handleTabClick("vision")}
            className={`${
              activeTab === "vision" ? "font-bold text-[#0EAC55] underline" : ""
            } cursor-pointer font-serif font-bold`}
          >
            01 Vision
          </a>
          <a
            onClick={() => handleTabClick("mission")}
            className={`${
              activeTab === "mission"
                ? "font-bold text-[#0EAC55] underline"
                : ""
            } cursor-pointer font-serif font-bold`}
          >
            02 Mission
          </a>
          <a
            onClick={() => handleTabClick("value")}
            className={`${
              activeTab === "value" ? "font-bold text-[#0EAC55] underline" : ""
            } cursor-pointer font-serif font-bold`}
          >
            03 Value
          </a>
        </div>
        {activeTab === "vision" && (
          <div className="grid h-10 grid-cols-2">
            <div className="flex items-center">
              <p className="p-10 text-8xl font-bold text-[#54142C]">
                Our Vision
              </p>
            </div>
            <div className="flex justify-evenly p-5">
              <ul className="list-inside columns-2">
                <li className="mt-1 flex flex-shrink-0 text-justify">
                  <TbTargetArrow className="mr-2 space-x-2 text-justify text-5xl" />
                  <p className=" ">
                    Congratulations to the sales team for achieving
                    record-breaking sales numbers last month. Keep up the
                    excellent work!
                  </p>
                </li>
                <li className="mt-1 flex flex-shrink-0 text-justify">
                  <TbTargetArrow className="mr-2 space-x-2 text-justify text-5xl" />
                  <p className=" ">
                    Congratulations to the sales team for achieving
                    record-breaking sales numbers last month. Keep up the
                    excellent work!
                  </p>
                </li>
                <li className="mt-1 flex flex-shrink-0 text-justify">
                  <TbTargetArrow className="mr-2 space-x-2 text-justify text-5xl" />
                  <p className=" ">
                    Congratulations to the sales team for achieving
                    record-breaking sales numbers last month. Keep up the
                    excellent work!
                  </p>
                </li>
                <li className="mt-1 flex flex-shrink-0 text-justify">
                  <TbTargetArrow className="mr-2 space-x-2 text-justify text-5xl" />
                  <p className=" ">
                    Congratulations to the sales team for achieving
                    record-breaking sales numbers last month. Keep up the
                    excellent work!
                  </p>
                </li>
                <li className="mt-1 flex flex-shrink-0 text-justify">
                  <TbTargetArrow className="mr-2 space-x-2 text-justify text-5xl" />
                  <p className=" ">
                    Congratulations to the sales team for achieving
                    record-breaking sales numbers last month. Keep up the
                    excellent work!
                  </p>
                </li>
                <li className="mt-1 flex flex-shrink-0 text-justify">
                  <TbTargetArrow className="mr-2 space-x-2 text-justify text-5xl" />
                  <p className=" ">
                    Congratulations to the sales team for achieving
                    record-breaking sales numbers last month. Keep up the
                    excellent work!
                  </p>
                </li>
                {/* Add other vision items here */}
              </ul>
            </div>
          </div>
        )}
        {activeTab === "mission" && (
          <div>
            <div className="grid h-10 grid-cols-2">
              <div className="flex items-center">
                <p className="p-10 text-8xl font-bold text-[#54142C]">
                  Our Mission
                </p>
              </div>
              <div className="flex justify-evenly p-5">
                <ul className="list-inside columns-2">
                  <li className="mt-1 flex flex-shrink-0 text-justify">
                    <TbTargetArrow className="mr-2 space-x-2 text-justify text-5xl" />
                    <p className=" ">
                      Congratulations to the sales team for achieving
                      record-breaking sales numbers last month. Keep up the
                      excellent work!
                    </p>
                  </li>
                  <li className="mt-1 flex flex-shrink-0 text-justify">
                    <TbTargetArrow className="mr-2 space-x-2 text-justify text-5xl" />
                    <p className=" ">
                      Congratulations to the sales team for achieving
                      record-breaking sales numbers last month. Keep up the
                      excellent work!
                    </p>
                  </li>
                  <li className="mt-1 flex flex-shrink-0 text-justify">
                    <TbTargetArrow className="mr-2 space-x-2 text-justify text-5xl" />
                    <p className=" ">
                      Congratulations to the sales team for achieving
                      record-breaking sales numbers last month. Keep up the
                      excellent work!
                    </p>
                  </li>
                  <li className="mt-1 flex flex-shrink-0 text-justify">
                    <TbTargetArrow className="mr-2 space-x-2 text-justify text-5xl" />
                    <p className=" ">
                      Congratulations to the sales team for achieving
                      record-breaking sales numbers last month. Keep up the
                      excellent work!
                    </p>
                  </li>
                  <li className="mt-1 flex flex-shrink-0 text-justify">
                    <TbTargetArrow className="mr-2 space-x-2 text-justify text-5xl" />
                    <p className=" ">
                      Congratulations to the sales team for achieving
                      record-breaking sales numbers last month. Keep up the
                      excellent work!
                    </p>
                  </li>
                  <li className="mt-1 flex flex-shrink-0 text-justify">
                    <TbTargetArrow className="mr-2 space-x-2 text-justify text-5xl" />
                    <p className=" ">
                      Congratulations to the sales team for achieving
                      record-breaking sales numbers last month. Keep up the
                      excellent work!
                    </p>
                  </li>
                  {/* Add other vision items here */}
                </ul>
              </div>
            </div>
          </div>
        )}
        {activeTab === "value" && (
          <div>
            <div className="grid h-10 grid-cols-2">
              <div className="flex items-center">
                <p className="p-10 text-8xl font-bold text-[#54142C]">
                  Our Value
                </p>
              </div>
              <div className="flex justify-evenly p-5">
                <ul className="list-inside columns-2">
                  <li className="mt-1 flex flex-shrink-0 text-justify">
                    <TbTargetArrow className="mr-2 space-x-2 text-justify text-5xl" />
                    <p className=" ">
                      Congratulations to the sales team for achieving
                      record-breaking sales numbers last month. Keep up the
                      excellent work!
                    </p>
                  </li>
                  <li className="mt-1 flex flex-shrink-0 text-justify">
                    <TbTargetArrow className="mr-2 space-x-2 text-justify text-5xl" />
                    <p className=" ">
                      Congratulations to the sales team for achieving
                      record-breaking sales numbers last month. Keep up the
                      excellent work!
                    </p>
                  </li>
                  <li className="mt-1 flex flex-shrink-0 text-justify">
                    <TbTargetArrow className="mr-2 space-x-2 text-justify text-5xl" />
                    <p className=" ">
                      Congratulations to the sales team for achieving
                      record-breaking sales numbers last month. Keep up the
                      excellent work!
                    </p>
                  </li>
                  <li className="mt-1 flex flex-shrink-0 text-justify">
                    <TbTargetArrow className="mr-2 space-x-2 text-justify text-5xl" />
                    <p className=" ">
                      Congratulations to the sales team for achieving
                      record-breaking sales numbers last month. Keep up the
                      excellent work!
                    </p>
                  </li>
                  <li className="mt-1 flex flex-shrink-0 text-justify">
                    <TbTargetArrow className="mr-2 space-x-2 text-justify text-5xl" />
                    <p className=" ">
                      Congratulations to the sales team for achieving
                      record-breaking sales numbers last month. Keep up the
                      excellent work!
                    </p>
                  </li>
                  <li className="mt-1 flex flex-shrink-0 text-justify">
                    <TbTargetArrow className="mr-2 space-x-2 text-justify text-5xl" />
                    <p className=" ">
                      Congratulations to the sales team for achieving
                      record-breaking sales numbers last month. Keep up the
                      excellent work!
                    </p>
                  </li>
                  {/* Add other vision items here */}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* What is new */}
      <div className="mx-auto w-10/12">
        <h1 className="text-left font-serif text-3xl font-bold text-accent">
          What is new
        </h1>
        <div className="flex h-full w-full shrink">
          <div className="h-full w-full">
            <img
              src={background}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="m-3">
            <div className="card mb-3 w-80 bg-base-100 shadow">
              <figure>
                <img
                  src={background}
                  alt="Shoes"
                  className="rounded-tl-lg rounded-tr-lg"
                />
              </figure>
              <div className="card-body text-sm">
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
            <div className="card w-80 bg-base-100 shadow">
              <figure>
                <img
                  src={background}
                  alt="Shoes"
                  className="rounded-tl-lg rounded-tr-lg"
                />
              </figure>
              <div className="card-body text-sm">
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Link to="/news-and-events/news">
            <button className="link-primary link ml-auto flex items-center space-x-1 text-justify">
              <span>Learn More</span>
              <span className="mt-1 flex-shrink-0 text-justify">
                <BiNews />
              </span>
            </button>
          </Link>
        </div>
      </div>
      {/* Use full resources */}
      <div className="mx-auto w-10/12 ">
        <p
          style={{ fontFamily: "Playfair Display" }}
          className="pl-6 text-3xl font-semibold text-accent"
        >
          Use Full Resources
        </p>
        <p className="py-6 pl-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          molestiae delectus culpa hic assumenda, voluptate reprehenderit dolore
          autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet
          ex deserunt.
        </p>
        <div className="flex justify-evenly p-10">
          <div className="relative flex flex-row items-center">
            <div className="col-4 rounded-box top-0 flex w-full">
              <div className="px-2">
                <div className="book bg-base-100">
                  <figure>
                    <img src={book} alt="Shoes" />
                  </figure>
                  <div className="book-body grid grid-cols-4 place-content-center font-semibold"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center">
            <div className="col-4 rounded-box top-0 flex w-full">
              <div className="px-2">
                <div className="book bg-base-100">
                  <figure>
                    <img src={book} alt="Shoes" />
                  </figure>
                  <div className="book-body grid grid-cols-4 place-content-center font-semibold"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center">
            <div className="col-4 rounded-box top-0 flex w-full">
              <div className="px-2">
                <div className="book bg-base-100">
                  <figure>
                    <img src={book} alt="Shoes" />
                  </figure>
                  <div className="book-body grid grid-cols-4 place-content-center font-semibold"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center">
            <div className="col-4 rounded-box top-0 flex w-full">
              <div className="px-2">
                <div className="book bg-base-100">
                  <figure>
                    <img src={book} alt="Shoes" />
                  </figure>
                  <div className="book-body grid grid-cols-4 place-content-center font-semibold"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Link to="/resources">
            <button className="link-primary link ml-auto flex items-center space-x-1 text-justify">
              <span>Learn More</span>
              <span className="mt-1 flex-shrink-0 text-justify">
                <BiNews />
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Meet our Teams */}
      <div className="mx-auto w-10/12 p-6">
        <h1 className="text-left font-serif text-3xl font-bold text-accent">
          Meet our Teams
        </h1>
        <div className="mx-auto flex w-10/12 justify-evenly">
          <div className="text-center">
            <img src={Member} className="w-40 rounded-full" />
            <h1>Israel Hailu</h1>
            <p>CEO in ENLN</p>
            <span className="mt-3 flex justify-evenly text-xl">
              <FaFacebook />
              <FaLinkedin />
              <FaXTwitter />
              <FaInstagram />
            </span>
          </div>
          <div className="text-center">
            <img src={Member} className="w-40 rounded-full" />
            <h1>Israel Hailu</h1>
            <p>CEO in ENLN</p>
            <span className="mt-3 flex justify-evenly text-xl">
              <FaFacebook />
              <FaLinkedin />
              <FaXTwitter />
              <FaInstagram />
            </span>
          </div>
          <div className="text-center">
            <img src={Member} className="w-40 rounded-full" />
            <h1>Israel Hailu</h1>
            <p>CEO in ENLN</p>
            <span className="mt-3 flex justify-evenly text-xl">
              <FaFacebook />
              <FaLinkedin />
              <FaXTwitter />
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>
      {/* Our Partners */}
      <div className="h-[50vh]">
        <h1>Our Partners</h1>
        <div className="h-96 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27452.867073625097!2d38.7832139177516!3d8.890480607919972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b82a22c0ae779%3A0x681021ee0adfde87!2sKilinto%20Prison%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1700552241948!5m2!1sen!2set"
            className="h-full w-full"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
      <div className="flex-col-2 flex">
        <div className="pl-60">
          <p
            style={{ fontFamily: "Playfair Display" }}
            className="flex py-6 pt-40 text-center text-2xl font-bold text-accent"
          >
            {" "}
            Let's Talk{" "}
          </p>
          <div className="flex w-[70%] justify-end pt-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum molestiae delectus culpa hic assumenda{" "}
            </p>
          </div>
        </div>

        <div
          id="contact"
          className="max-w[1040px] m-auto p-4 py-16 pr-60 md:pl-20"
        >
          <form action="" method="POST" encType="multipart/form-data">
            <div className="grid w-full gap-4 py-2 md:grid-cols-2">
              <div className="relative z-0">
                <input
                  type="text"
                  id="Name"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-200 focus:border-gray-400 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-400"
                  placeholder=" "
                />
                <label
                  for="Name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-400 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-400"
                >
                  Name
                </label>
              </div>
              <div className="relative z-0">
                <input
                  type="text"
                  id="Phone"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-200 focus:border-gray-400 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-400"
                  placeholder=" "
                />
                <label
                  for="Phone"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-400 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-400"
                >
                  Phone
                </label>
              </div>
              <div className="relative z-0">
                <input
                  type="text"
                  id="Email"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-2 py-2.5 text-sm text-gray-200 focus:border-gray-400 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-400"
                  placeholder=" "
                />
                <label
                  for="Email"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-400 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-400"
                >
                  Email
                </label>
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label className="py-2 text-sm uppercase"> Message</label>
              <textarea
                className="flex rounded-lg border-2 border-secondary p-3 focus:text-gray-400 "
                rows={10}
                type="text"
                name="Subject"
              ></textarea>
            </div>
            <button className="hover:bg-green mt-4 w-full rounded-lg bg-primary p-4 text-white hover:font-semibold hover:text-white">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="relative mx-auto  flex w-10/12 border">
        <div className="relative flex-1 bg-white">
          <p className=" absolute left-20 top-32 -rotate-45 text-9xl font-bold tracking-wider text-[#dfc4c4]">
            ??
          </p>
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform pl-48 text-center font-serif text-8xl text-accent ">
            FAQ
          </h1>
        </div>

        <div className="bg-white-500 flex-1 pt-14 text-justify text-xl">
          <div className="collapse rounded-none bg-transparent ">
            <input
              type="radio"
              name="my-accordion-3"
              id="radio1"
              checked={activeButton === "radio1"}
              onChange={() => handleButtonClick("radio1")}
              className="hidden"
            />
            <label
              htmlFor="radio1"
              className={`collapse-title relative cursor-pointer text-xl font-medium`}
            >
              <div
                className={`flex items-center ${
                  activeButton === "radio1" ? "text-black" : ""
                }`}
              >
                <input
                  type="radio"
                  name="radio-1"
                  className={`radio-primary radio h-6 w-6 rounded-full border-2  ${
                    activeButton === "radio1"
                      ? "rounded-full border-primary bg-primary"
                      : ""
                  }`}
                  checked={activeButton === "radio1"}
                  onChange={() => handleButtonClick("radio1")}
                />
                <span className="ml-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                </span>
              </div>
            </label>
            <div className="collapse-content">
              <p className="m-3 border-l-2 border-primary  px-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                aliquam, urna ut ullamcorper tristique, sapien velit convallis
                tellus, ut tempor tortor felis in turpis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed aliquam, urna ut
                ullamcorper tristique, sapien velit convallis tellus, ut tempor
                tortor felis in turpis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed aliquam, urna ut ullamcorper tristique,
                sapien velit convallis tellus, ut tempor tortor felis in turpis.
              </p>
            </div>
          </div>

          {/* Repeat similar structure for other radio buttons */}

          <div className="collapse rounded-none bg-transparent ">
            <input
              type="radio"
              name="my-accordion-3"
              id="radio2"
              checked={activeButton === "radio2"}
              onChange={() => handleButtonClick("radio2")}
              className="sr-only"
            />
            <label
              htmlFor="radio2"
              className={`collapse-title relative cursor-pointer text-xl font-medium`}
            >
              <div
                className={`flex items-center ${
                  activeButton === "radio2" ? "text-black" : ""
                }`}
              >
                {/* Replace the custom-styled radio button with daisyUI radio button */}
                <input
                  type="radio"
                  name="radio-2"
                  className={`radio-primary radio h-6 w-6 rounded-full border-2 pr-5 ${
                    activeButton === "radio2" ? "border-primary bg-primary" : ""
                  }`}
                  checked={activeButton === "radio2"}
                  onChange={() => handleButtonClick("radio2")}
                />
                <span className="ml-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                </span>
              </div>
            </label>
            <div className="collapse-content">
              <p className="m-3 border-l-2 border-primary  px-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                aliquam, urna ut ullamcorper tristique, sapien velit convallis
                tellus, ut tempor tortor felis in turpis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed aliquam, urna ut
                ullamcorper tristique, sapien velit convallis tellus, ut tempor
                tortor felis in turpis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed aliquam, urna ut ullamcorper tristique,
                sapien velit convallis tellus, ut tempor tortor felis in turpis.
              </p>
            </div>
          </div>

          <div className="collapse rounded-none bg-transparent ">
            <input
              type="radio"
              name="my-accordion-3"
              id="radio3"
              checked={activeButton === "radio3"}
              onChange={() => handleButtonClick("radio3")}
              className="sr-only"
            />
            <label
              htmlFor="radio3"
              className={`collapse-title relative cursor-pointer text-xl font-medium`}
            >
              <div
                className={`flex items-center ${
                  activeButton === "radio3" ? "text-black" : ""
                }`}
              >
                {/* Replace the custom-styled radio button with daisyUI radio button */}
                <input
                  type="radio"
                  name="radio-3"
                  className={`radio-primary radio h-6 w-6 rounded-full border-2 pr-5 ${
                    activeButton === "radio3" ? "border-primary bg-primary" : ""
                  }`}
                  checked={activeButton === "radio3"}
                  onChange={() => handleButtonClick("radio3")}
                />
                <span className="ml-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                </span>
              </div>
            </label>
            <div className="collapse-content">
              <p className="m-3 border-l-2 border-primary  px-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                aliquam, urna ut ullamcorper tristique, sapien velit convallis
                tellus, ut tempor tortor felis in turpis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed aliquam, urna ut
                ullamcorper tristique, sapien velit convallis tellus, ut tempor
                tortor felis in turpis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed aliquam, urna ut ullamcorper tristique,
                sapien velit convallis tellus, ut tempor tortor felis in turpis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
