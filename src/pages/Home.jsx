import background from '../assets/background.jpg';
import { BiNews } from "react-icons/bi";
import '../Fonts/fonts.css';
import { TbTargetArrow } from "react-icons/tb";
import book from "../assets/book.jpg";
import Member from "../assets/port.jpg"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      {/* Hero section */}
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div
          className="hero-content text-center text-neutral-content"
          style={{ fontFamily: "Playfair Display" }}
        >
          <div className="min-w-md">
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
            <button className="mx-auto my-6 w-[200px] rounded-md bg-primary py-3 font-sans font-medium text-white">
              Join Us
            </button>
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
          <a>Vision</a>
          <a>Mission</a>
          <a>Value</a>
        </div>
        <div className="grid h-10 grid-cols-2">
          <div className="flex items-center">
            <p className="p-10 text-8xl font-bold text-[#54142C]">Our Vision</p>
          </div>
          <div className="flex  items-center">
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
            </ul>
          </div>
        </div>
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
          <button className="link-primary link ml-auto flex items-center space-x-1 text-justify">
            <span>Learn More</span>
            <span className="mt-1 flex-shrink-0 text-justify">
              <BiNews />
            </span>
          </button>
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
          <button className="link-primary link ml-auto flex items-center space-x-1 text-justify">
            <span>Learn More</span>
            <span className="mt-1 flex-shrink-0 text-justify">
              <BiNews />
            </span>
          </button>
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
      </div>
    </>
  );
};

export default Hero;