import React from "react";
import teampic from "../assets/teampic.jpg";


function Register() {
  return (
    <div
      className="relative flex h-[100vh] w-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${teampic})`,
        fontFamily: "Playfair Display",
      }}
    >
      <div className=" absolute mx-10 flex h-5/6 w-11/12 justify-center rounded-md bg-transparent p-10">
        <div
          className="relative h-full w-2/6 flex-row items-center border-[40px] border-white bg-transparent justify-center bg-cover bg-center "
          
        ></div>
        <div className="flex-row bg-white p-11">
          <h1 className="ml-10 text-4xl font-bold font-serif text-accent">
            Become Member
          </h1>
          <h2 className="ml-10 mt-1 p-1 font-sans text-xl text-accent">
            Apply for membership
          </h2>
          <p className="mb-2 ml-10 p-1 font-sans text-sm">
            Join our community and create awarness
          </p>
          <form
            action=""
            className=" y ml-10 grid grid-cols-2 gap-3 font-sans"
          >
            <div className="relative z-0">
              <input
                type="text"
                id="first-name"
                className="peer block w-full appearance-none border-0 border-b-2 border-secondary bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-gray-400 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-500"
                placeholder=" "
              />
              <label
                for="first-name"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-700 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-700 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-500 peer-focus:dark:text-gray-700"
              >
                First Name
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                id="last-name"
                className="border-secodary peer block w-full appearance-none border-0 border-b-2 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-gray-400 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-500"
                placeholder=" "
              />
              <label
                for="last-name"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-500"
              >
                Last Name
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                id="email"
                className="peer block w-full appearance-none border-0 border-b-2 border-secondary bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-500"
                placeholder=" "
              />
              <label
                for="email"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-500"
              >
                Email
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                id="phone"
                className="peer block w-full appearance-none border-0 border-b-2 border-secondary bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-gray-400 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-500"
                placeholder=" "
              />
              <label
                for="phone"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-500"
              >
                Phone
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                id="location"
                className="peer block w-full appearance-none border-0 border-b-2 border-secondary bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-blue-500"
                placeholder=" "
              />
              <label
                for="location"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-500"
              >
                Location
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                id="address"
                className="peer block w-full appearance-none border-0 border-b-2 border-secondary bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-500"
                placeholder=" "
              />
              <label
                for="address"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-500"
              >
                Address
              </label>
            </div>
          </form>

          <div>
            <button
              className="w-45 btn btn-primary ml-20 px-10 mt-10 rounded-md tracking-widest md:rounded-lg lg:rounded-xl xl:rounded-2xl font-sans "
              
            >
              BECOME MEMBER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
