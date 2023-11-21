import Lottie from "lottie-react";
import Scroll from "../lottiescroll.json";
import { Link } from "react-router-dom";
import react from "react";
import meeting from "../assets/meeting.jpg";
import bigmeet from "../assets/bigmeet.jpg";
import { PiEggCrackLight } from "react-icons/pi";
import road2 from "../assets/road2.jpg";
import meeting2 from "../assets/meeting2.jpg";
import enlnpic from "../assets/enlnpic.jpg";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.jpg";
import PlayfairDisplayRegular from "../fonts/PlayfairDisplay-Regular.ttf";
import "../Fonts/fonts.css";
import port from "../assets/port.jpg";
import port2 from "../assets/port2.jpg";
import port3 from "../assets/port3.jpg";

function About() {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="">
        <div
          style={{ backgroundImage: `url(${enlnpic})` }}
          className=" relative h-[45vh] w-full bg-cover bg-center"
        >
          <div className="absolute h-full w-full bg-black/40">
            <div className="mx-auto flex h-full w-[80%]  items-center">
              <div>
                <h1
                  style={{ fontFamily: "Playfair Display" }}
                  className=" mb-4 text-2xl font-bold leading-snug text-white sm:mb-6 lg:text-5xl"
                >
                  About us
                </h1>
                <div className=" text-xl sm:text-xl">
                  <p className="text-l text-white">Learn who we are</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:grid-colds-2 relative mx-auto -mt-16 grid max-w-[1000px] border border-t-2 border-gray-300 bg-white shadow-lg">
          <div className="grid max-w-[1200px] border border-gray-300 shadow-lg md:grid-cols-2">
            <div className="flex flex-col pt-12 ">
              <h1
                style={{ fontFamily: "Playfair Display" }}
                className="px-12 pb-4 text-2xl font-semibold text-accent sm:text-3xl md:text-4xl"
              >
                Our History
              </h1>
              <p className="px-12 py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum molestiae delectus culpa hic assumenda, voluptate
                reprehenderit dolore autem cum ullam sed odit perspiciatis.
                Doloribus quos velit, eveniet ex deserunt fuga?
              </p>
              <p className="px-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum molestiae delectus culpa hic assumenda, voluptate
                reprehenderit dolore autem cum ullam sed odit perspiciatis.
                Doloribus quos velit, eveniet ex deserunt fuga?
              </p>
              <p className="px-12 py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum molestiae delectus culpa hic assumenda, voluptate
                reprehenderit dolore autem cum ullam sed odit perspiciatis.
                Doloribus quos velit, eveniet ex deserunt fuga?
              </p>
              <p className=" px-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum molestiae delectus culpa hic assumenda, voluptate
                reprehenderit dolore autem cum ullam sed odit perspiciatis.
                Doloribus quos velit, eveniet ex deserunt fuga?
              </p>
            </div>
            <img className="mx-auto w-[549px] " src={road2} alt="/" />
          </div>
        </div>

        <div className="absolute left-0 top-0 h-full w-full"></div>
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center"></div>
        <p
          style={{ fontFamily: "Playfair Display" }}
          className="px-28 pt-10 text-3xl font-bold text-accent"
        >
          What we've accomplished
        </p>
        <div className="mx-auto grid max-w-[1240px] md:grid-cols-2">
          <img className="mx-auto my-4 w-[580px] " src={bigmeet} alt="/" />
          <div className="flex flex-col pt-6">
            <h1
              style={{ fontFamily: "Playfair Display" }}
              className="p-2 text-xl font-semibold text-primary sm:text-xl md:text-2xl"
            >
              Our Impact
            </h1>
            <p className="px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum molestiae delectus culpa hic assumenda, voluptate
              reprehenderit dolore autem cum ullam sed odit perspiciatis.
              Doloribus quos velit, eveniet ex deserunt fuga?
            </p>

            <div className="col-2 ml-8  flex justify-between">
              <div className="flex flex-col py-6">
                <PiEggCrackLight
                  size={28}
                  className="scale-x-[-1] text-[20] text-primary "
                />
                <p className="pb-3">Retum rutrum hedrerti</p>
                <PiEggCrackLight
                  size={28}
                  className="scale-x-[-1] text-[110] text-primary "
                />
                <p className="pb-3">Retum rutrum hedrerti</p>
                <PiEggCrackLight
                  size={28}
                  className="scale-x-[-1] text-[20] text-primary "
                />
                <p className="pb-3">Retum rutrum hedrerti</p>
              </div>
              <div className="mx-16 flex flex-col py-6">
                <PiEggCrackLight
                  size={28}
                  className="scale-x-[-1] text-[20] text-primary "
                />
                <p className="pb-3">Retum rutrum hedrerti</p>
                <PiEggCrackLight
                  size={28}
                  className="scale-x-[-1] text-[110] text-primary "
                />
                <p className="pb-3">Retum rutrum hedrerti</p>
                <PiEggCrackLight
                  size={28}
                  className="scale-x-[-1] text-[20] text-primary "
                />
                <p className="pb-3">Retum rutrum hedrerti</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1240px] md:grid-cols-2">
        <div className="flex flex-col justify-center pb-8">
          <h1
            style={{ fontFamily: "Playfair Display" }}
            className="py-4 text-2xl font-bold text-accent sm:text-3xl md:text-4xl"
          >
            How to become a member?
          </h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <Link to = "/membership">
          <button className="mx-auto my-6 w-[400px] rounded-md bg-primary py-3 pb-4 font-medium text-white md:mx-0">
            SEND MESSAGE
          </button>
          </Link>
        </div>
        <img className="mx-auto my-16 w-[500px]" src={meeting2} alt="/" />
      </div>

      <div className="relative flex items-center">
        <div className="mx-auto flex h-[450px] w-[70vw] justify-between rounded-lg bg-primary relative">
          <p className="px-8 pt-6 text-2xl font-semibold text-white">
            Our achievements
          </p>
          <Lottie animationData={Scroll} className="w-1/6 -rotate-90 absolute right-96 top-96 mx-auto text-white" />
        </div>
        <div className="col-4 carousel carousel-center rounded-box absolute top-0 flex w-full pt-20">
          <div className="px-2">
            <div className="card w-80 bg-base-100 shadow-xl">
              <figure>
                <img src={card4} alt="Shoes" />
              </figure>
              <div className="card-body">
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="card w-80 bg-base-100 shadow-xl ">
              <figure>
                <img src={card1} alt="Shoes" />
              </figure>
              <div className="card-body">
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </div>

          <div className="px-2">
            <div className="card w-80 bg-base-100 shadow-xl">
              <figure>
                <img src={card2} alt="Shoes" />
              </figure>
              <div className="card-body">
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="card w-80 bg-base-100 shadow-xl">
              <figure>
                <img src={card3} alt="Shoes" />
              </figure>
              <div className="card-body">
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="card w-80 bg-base-100 shadow-xl">
              <figure>
                <img src={card2} alt="Shoes" />
              </figure>
              <div className="card-body">
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
