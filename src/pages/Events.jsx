import background from "../assets/meeting.jpg";
import { BsBell } from "react-icons/bs";
import workshops from "../data/workShop.json"
import shortNotices from "../data/shortNotice.json"
function Events() {
  return (
    <div>
      <div
        className="bg-[#efefef] p-5"
        style={{ fontFamily: "Playfair Display" }}
      >
        <h1 className="font-serif text-3xl text-accent">Events</h1>
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
          <h1>Workshop and Training</h1>
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
      <div className="flex justify-end bg-[#efefef] p-5 ">
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
        <h1>Short Notices</h1>
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
        <div className="stats mx-auto shadow">
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Downloads</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
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
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
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
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
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
