import EventData from "../data/eventData.json";
import { IoCalendarOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import background from "../assets/meeting.jpg";
import { BiNews } from "react-icons/bi";
function NewsDetail() {
  return (
    <>
      <h1 className="mx-5 text-3xl font-bold text-accent">News</h1>
      <h1 className="mb-4 text-4xl font-bold">Rutum rutum rutum rutum</h1>
      <div className="mx-auto grid w-9/12 grid-cols-1 gap-4 md:grid-cols-2">
        {/* Background column */}
        <div
          className="flex h-screen flex-col items-end justify-end rounded-xl bg-cover bg-center p-6"
          style={{
            backgroundImage: `url(${background})`,
          }}
        ></div>
        <div>
          {/* Event cards column */}
          {EventData.map((event) => (
            <div key={event.id} className="my-2">
              <div className=" flex-cols-1 card card-side flex rounded-3xl bg-base-100 shadow-xl">
                <div
                  className={` bg-${event.color} w-3/12 rounded-bl-xl rounded-tl-xl`}
                  style={{ backgroundColor: event.color }}
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
      {/* News detail */}
      <div className="mx-auto flex w-10/12">
        <div className="columns-2 gap-4 p-5">
          <p className="text-md">
            Sure, let's create a news detail content on the topic of
            "Breakthrough in Renewable Energy Technology": --- **Headline: Major
            Breakthrough Unveiled in Renewable Energy Technology** *City, Date*
            — In a landmark achievement for the field of renewable energy,
            scientists have announced a groundbreaking discovery that promises
            to reshape the future of sustainable power generation. Researchers
            at [Institution/Company] have successfully developed a revolutionary
            technology that addresses key challenges in harnessing renewable
            energy sources. This innovation not only enhances the efficiency of
            energy capture but also addresses scalability issues that have
            hindered widespread adoption. The breakthrough revolves around
            [Technical Aspect], a cutting-edge advancement that significantly
            improves the conversion efficiency of [Solar/Wind/Other] energy.
            Unlike traditional methods, this new technology overcomes previous
            limitations, making renewable energy sources a more reliable and
            viable option for meeting the world's growing energy demands. [Lead
            Scientist/Researcher] expressed enthusiasm about the potential
            impact of the discovery, stating, "This breakthrough opens up
            unprecedented possibilities for clean energy. We are optimistic that
            our findings will contribute to a more sustainable future and
            accelerate the global transition to renewable energy." The
            implications of this advancement extend beyond environmental
            benefits. With increased efficiency and scalability, renewable
            energy could become a more cost-effective solution, further
            incentivizing industries and governments to invest in clean energy
            infrastructure. Key features of the breakthrough include: 1.
            **Enhanced Efficiency:** The technology boasts a remarkable increase
            in energy conversion efficiency, surpassing previous benchmarks in
            the field. 2. **Scalability:** Unlike many renewable energy
            solutions that face challenges in scaling up for large-scale power
            generation, this breakthrough is designed to be easily scalable,
            making it applicable for diverse settings. 3. **Affordability:** The
            researchers highlight the potential for cost reductions in renewable
            energy production, making it more competitive with traditional
            energy sources. As news of this breakthrough spreads, experts are
            optimistic that it will catalyze increased research and investment
            in renewable energy technologies globally. Governments, businesses,
            and environmental advocates are closely monitoring developments,
            recognizing the potential for a significant shift in the energy
            landscape. While the technology is currently in the early stages of
            development, its promise for a greener, more sustainable future is
            generating excitement and anticipation within the scientific
            community and beyond. *Stay tuned for further updates as scientists
            work towards bringing this revolutionary technology to the forefront
            of the renewable energy revolution.*
          </p>
        </div>
        <div className="p-5">
          <div className="card mb-5 w-80 bg-base-100 shadow">
            <h2 className="card-title">Shoes!</h2>
            <figure>
              <img
                src={background}
                alt="Shoes"
                className="rounded-tl-lg rounded-tr-lg"
              />
            </figure>
            <div className="card-body text-sm">
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="link-primary link flex items-center space-x-1 text-justify">
                  <span>Read News</span>
                  <span className="mt-1 flex-shrink-0 text-justify">
                    <BiNews />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto my-6 w-10/12 border-b-2 border-gray-500"></div>
          <div className="card w-80 bg-base-100 shadow">
            <h2 className="card-title">Shoes!</h2>
            <figure>
              <img
                src={background}
                alt="Shoes"
                className="rounded-tl-lg rounded-tr-lg"
              />
            </figure>
            <div className="card-body text-sm">
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="link-primary link flex items-center space-x-1 text-justify">
                  <span>Read News</span>
                  <span className="mt-1 flex-shrink-0 text-justify">
                    <BiNews />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsDetail