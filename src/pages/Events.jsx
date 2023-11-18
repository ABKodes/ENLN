import background from "../assets/meeting.jpg";
import { BsBell } from "react-icons/bs";
import workshops from "../data/workShop.json"
import shortNotices from "../data/shortNotice.json"
function Events() {
  
  return (
    <div>
      <div
        className="bg-10/12 bg-[#efefef]"
        style={{ fontFamily: "Playfair Display" }}
      >
        <h1 className="p-5 font-serif text-3xl font-bold text-accent">
          Events
        </h1>
        {/* ENLN training */}
        <div className="card w-8/12 bg-base-100 font-sans shadow-xl lg:card-side ">
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
      </div>
      {/* This is the horizontal scroll bar */}
      <div className="relative flex h-screen items-center justify-center bg-primary">
        <div className="relative z-0 mx-auto h-[600px] w-[90vw] justify-center rounded-lg bg-[#efefef]">
          <h1 className="ml-5 p-5 font-serif text-3xl font-bold text-accent">
            Workshop and Training
          </h1>
        </div>
        <div className="carousel carousel-center rounded-box absolute left-0 right-0 z-10 max-w-full space-x-4 p-4 font-sans">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="carousel-item">
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={workshop.image} alt={workshop.title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{workshop.title}</h2>
                  <p>{workshop.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mentorship */}
      <div className="flex justify-end bg-[#efefef] ">
        {/* ENLN training */}
        <div className="card my-3 w-8/12 bg-base-100 shadow-xl lg:card-side">
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
          <div className="max-w-[600px]">
            <img src={background} className="mx-auto w-full" />
          </div>
        </div>
      </div>
      {/* Short Notices */}
      <div className="bg-[#efefef]">
        <h1 className="p-5 font-serif text-3xl font-bold text-accent">
          Short Notices
        </h1>
        <div className="carousel carousel-center rounded-box w-full space-x-4 p-4">
          {shortNotices.map((notice) => (
            <div key={notice.id} className="carousel-item">
              <div className="card card-compact w-72 bg-base-100 shadow-xl">
                <figure>
                  <div className="my-2 flex h-36 w-36 items-center justify-center rounded-full bg-primary">
                    <BsBell className="-rotate-45 p-2 text-9xl text-white" />
                  </div>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{notice.title}</h2>
                  <p>{notice.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto flex w-10/12 items-center">
        <div className="stats shadow mx-auto">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
      </div>

      {/* Intership opportunists */}
      <div className="bg-[#efefef] p-5">
        {/* ENLN training */}
        <div className="card w-8/12 bg-base-100 shadow-xl lg:card-side ">
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
      </div>
    </div>
  );
}

export default Events;
