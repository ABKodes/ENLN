import { BiNews } from "react-icons/bi";
import { IoCalendarOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import NewsData from "../data/news.json";
import background from "../assets/meeting.jpg";
import EventData from "../data/eventData.json";
function News() {
  return (
    <>
      <h1 className="mx-5 text-3xl font-bold text-accent">News</h1>
      <h1 className="mb-4 text-4xl font-bold">Featured News</h1>
      <div className="mx-auto grid w-9/12 grid-cols-1 gap-4 md:grid-cols-2">
        {/* Background column */}
        <div
          className="flex h-screen flex-col items-end justify-end rounded-xl bg-cover bg-center p-6"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${background})`,
          }}
        >
          <div className="font-semibold text-white">
            Underneath the starry sky, a gentle breeze whispers through the tall
            trees. A mysterious path unfolds before you, leading to a hidden
            realm of dreams and possibilities. In this enchanted land, colorful
            butterflies dance in the air, carrying wishes to distant lands. The
            fragrance of blooming flowers fills the atmosphere, creating a
            symphony of scents.
          </div>
        </div>
        <div>
          {/* Event cards column */}
          {EventData.map((event) => (
            <div key={event.id} className="my-2">
              <div className=" flex-cols-1 card card-side flex rounded-3xl bg-base-100 shadow-xl">
                <div
                  className={` bg-${event.color} w-3/12 rounded-bl-xl rounded-tl-xl`}
                >
                  <span className="flex items-center justify-center p-5 text-7xl font-bold">
                    {event.date}
                  </span>
                  <span className="flex items-center justify-center space-x-2 font-semibold">
                    <IoCalendarOutline />
                    <span>{event.month}</span>
                  </span>
                </div>
                <div className="card-body">
                  <h2 className="card-title">{event.title}</h2>
                  <p>{event.paragraph}</p>
                  <div className="card-actions justify-center text-justify">
                    <span className="flex items-center space-x-2 py-2 font-light">
                      <CiClock2 />
                      <span>{event.time}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dividing Line */}
      {NewsData.map((newsItem) => (
        <div key={newsItem.id}>
          <div className="mx-auto w-10/12 border-b-2 border-gray-500"></div>
          {/* Content */}
          <div className="card card-side mx-auto w-9/12 bg-base-100">
            <div className="h-6/12 flex w-screen flex-col items-center justify-center">
              <img
                src={newsItem.image}
                className="h-full w-fit rounded-2xl p-3"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title">{newsItem.title}</h2>
              <p className="text-horizontal text-justify font-light">
                {newsItem.paragraph}
              </p>
              <div className="mx-auto my-6 w-10/12 border-b-2 border-gray-500"></div>
              <div className="card-actions justify-between">
                <button className="link-primary link flex items-center space-x-1 text-justify">
                  <span>Read News</span>
                  <span className="mt-1 flex-shrink-0 text-justify">
                    <BiNews />
                  </span>
                </button>

                <span className="flex items-center space-x-2 font-light">
                  <IoCalendarOutline />
                  <span>{newsItem.date}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default News;
