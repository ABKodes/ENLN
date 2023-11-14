import React from "react";
import teampic from "../assets/teampic.jpg";
import teampic2 from "../assets/teampic2.jpg";


function Register() {
  return (
    <div
      className="relative flex h-[100vh]  items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${teampic})`,
        fontFamily: "Playfair Display",
      }}
    >

      <div className=" absolute mx-10 flex h-5/6 w-9/12 rounded-md bg-white p-8">
        <div
          className="relative h-full w-2/6 flex-row items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${teampic2})` }}
        ></div>
        <div className="flex-row">
          <h1 className="ml-20 text-4xl font-bold text-accent">
            Become Member
          </h1>
          <h2 className="ml-10 mt-2 p-2 font-serif text-xl text-accent">
            Apply for membership
          </h2>
          <p className="ml-10 p-2 mb-2 font-serif text-sm">
            Join our community and create awarness
          </p>
          <form className="card-body ml-10 grid grid-cols-2 gap-7 p-1 font-serif text-sm">
            <div className="">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="border-b border-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="border-b border-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder=""
                className="border-b border-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="border-b border-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="border-b border-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="border-b border-black"
                required
              />
            </div>
          </form>

          <div>
            <button className="btn btn-primary ml-20 mt-4 w-45 rounded-md font-serif tracking-widest md:rounded-lg lg:rounded-xl xl:rounded-2xl">
              BECOME MEMBER
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Register;
