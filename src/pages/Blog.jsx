import { useNavigate } from "react-router-dom";
import meeting2 from "../assets/meeting2.jpg";
import logo from "../assets/logo.png";
import { MdOutlineNavigateNext } from "react-icons/md";
import mula from "../assets/mula.jpg";
import sketch from "../assets/sketch.jpg";
import banner2 from "../assets/banner2.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { TbPlayerTrackNext } from "react-icons/tb";
import { LiaFastBackwardSolid } from "react-icons/lia";
import blogbg2 from "../assets/blogbg2.jpg";
import PlayfairDisplayRegular from "../fonts/PlayfairDisplay-Regular.ttf";
import "../Fonts/fonts.css";
import { GoSearch } from "react-icons/go";
import blogData from "../data/blogData.json"

function Blog({ posts }) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${blogbg2})` }}
        className=" relative h-[45vh] w-full bg-cover bg-center"
      >
        <div className="absolute h-full w-full bg-black/50">
          <div className="mx-auto flex h-full w-[80%]  items-center">
            <div style={{ fontFamily: "Playfair Display" }}>
              <h1 className=" mb-4 text-3xl font-bold leading-snug text-white sm:mb-6 lg:text-5xl">
                Blog
              </h1>
              <div className=" text-xl sm:text-xl">
                {/* <p className='text-l text-white'>Start your blog today and join a reprehenderit dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga? </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between pl-12 pt-16">
        <p
          style={{ fontFamily: "Playfair Display" }}
          className="flex justify-start px-28 text-4xl font-semibold text-accent "
        >
          {" "}
          Featured Blogs
        </p>
        <div className="relative pr-36">
          <input
            type="text"
            id="search"
            className=" peer block  w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 pt-4 text-sm text-gray-200 focus:border-gray-400 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-400"
            placeholder=" "
          />
          <label
            htmlFor="search"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-400 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-400"
          >
            {" "}
            search
          </label>
        </div>
      </div>

      <div className="md:px-15 mt-10 grid grid-cols-1 rounded-lg border bg-gray-100 px-10 md:grid-cols-2 lg:grid-cols-3 lg:px-32">
        {blogData.map((blog) => (
  <div
    key={blog.id}
    className="m-4 cursor-pointer rounded-lg bg-white shadow-sm p-5"
    onClick={() => navigate(`blog-detail/${blog.id}`)}
  >
    <p className="mt-3">{blog.title}</p>
    <img
      src={blog.image}
      className="h-[200px] w-full object-cover"
      alt="Blog Image"
    />
    <p className="mt-3 line-clamp-3 text-sm text-gray-400">{blog.detail}</p>
    <div className="mt-5 flex items-center justify-between">
      <div className="flex items-center px-4 py-4">
        <img src={logo} className="w-[35px] rounded-full" alt="Logo" />
        <div className="ml-2">
          <p className="text-[12px] font-bold">ENLN</p>
          <p className="text-[10px] text-gray-800">{blog.date}</p>
        </div>
      </div>
      <a
        className="flex items-center text-justify text-sm no-underline hover:underline"
        href=""
      >
        <span className="mr-2 font-semibold text-secondary">
          Read More
        </span>{" "}
        <MdOutlineNavigateNext />
      </a>
    </div>
  </div>
))}

      </div>
      <div className="flex justify-between bg-gray-100 px-36">
        <div className="flex items-center">
          <TbPlayerTrackNext
            className="scale-x-[-1] text-primary"
            style={{ width: "20px", height: "20px" }}
          />
          <button className="px-2">Previous </button>
        </div>
        <div className="flex items-center">
          <button className="px-2">Next </button>
          <TbPlayerTrackNext
            className="text-primary"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
