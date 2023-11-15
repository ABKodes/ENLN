import Member from "../assets/member.jpg"
import background from "../assets/meeting.jpg";
import { GoInfinity } from "react-icons/go";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { VscKey } from "react-icons/vsc";
import { PiHandshake } from "react-icons/pi";
function Membership() {
  return (
    <>
      <div className="h-[110vh] w-full bg-secondary">
        <div className="grid grid-cols-2">
          <div className="">
            <h1 className="p-6 text-5xl text-accent">Membership</h1>
            <p className="p-10 text-justify text-sm text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="relative">
              <img src={Member} className="z-20 mx-auto" alt="Membership" />
              <div className="absolute left-[480px] top-80 z-10 h-16 w-16 bg-red-500"></div>
            </div>
          </div>
          {/* second column */}
          <div className="p-10">
            <div className="relative p-5">
              <img src={Member} className="z-20 mx-auto" alt="Membership" />
              <div className="absolute right-[440px] top-80 z-10 h-16 w-16 bg-red-500"></div>
            </div>

            <div className="relative p-5">
              <img src={Member} className="z-20 mx-5" alt="Membership" />
              <div className="absolute left-[260px] top-[340px] z-10 h-16 w-16 bg-red-500"></div>
            </div>
          </div>
        </div>
      </div>
      {/* How to become a member */}
      <div className="card z-10 mx-auto w-8/12 border border-black bg-base-100 p-5 font-sans shadow-xl lg:card-side">
        <div className="max-w-[600px]">
          <img src={background} className="mx-auto w-full" />
        </div>
        <div className="card-body ">
          <h2 className="card-title">New album is released!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula
            ullamcorper malesuada proin libero. Vulputate ut pharetra sit amet
            aliquam id diam maecenas. Aliquet nec ullamcorper sit amet risus
            nullam. Hac habitasse platea dictumst vestibulum rhoncus. Pretium
            lectus quam id leo in vitae turpis. Nisi quis eleifend quam
            adipiscing vitae proin sagittis. Lacus vel facilisis volutpat est.
          </p>
        </div>
      </div>
      {/* Members Benefit */}
      <div className="p-5">
        <h1>Members Benefit</h1>
        <div className="flex items-center justify-evenly">
          <div className="flex flex-col items-center justify-center text-justify">
            <GoInfinity className="flex items-center justify-center  text-9xl" />
            <p className="ml-2">This and that</p>
          </div>
          <div className="flex flex-col items-center justify-center text-justify">
            <LiaChalkboardTeacherSolid className="flex items-center justify-center  text-9xl" />
            <p className="ml-2">This and that</p>
          </div>
          <div className="flex flex-col items-center justify-center text-justify">
            <VscKey className="flex items-center justify-center  text-9xl" />
            <p className="ml-2">This and that</p>
          </div>
          <div className="flex flex-col items-center justify-center text-justify">
            <PiHandshake className="flex items-center justify-center  text-9xl" />
            <p className="ml-2">This and that</p>
          </div>
        </div>
        <div className="flex items-center justify-evenly">
          <div className="flex flex-col items-center justify-center text-justify">
            <GoInfinity className="flex items-center justify-center  text-9xl" />
            <p className="ml-2">This and that</p>
          </div>
          <div className="flex flex-col items-center justify-center text-justify">
            <LiaChalkboardTeacherSolid className="flex items-center justify-center  text-9xl" />
            <p className="ml-2">This and that</p>
          </div>
          <div className="flex flex-col items-center justify-center text-justify">
            <VscKey className="flex items-center justify-center  text-9xl" />
            <p className="ml-2">This and that</p>
          </div>
          <div className="flex flex-col items-center justify-center text-justify">
            <PiHandshake className="flex items-center justify-center  text-9xl" />
            <p className="ml-2">This and that</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Membership