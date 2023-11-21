import background from "../assets/meeting.jpg";
import { MdOutlineNavigateNext } from "react-icons/md";
import logo from "../assets/logo.png";
import mula from "../assets/mula.jpg";
function BlogDetail() {
  return (
    <div className="grid grid-cols-2 gap-1">
      <div className="col-span-1 m-0 p-5">
        <h1 className="mb-5 text-left font-serif text-3xl font-bold text-accent">
          Blog
        </h1>
        <h1 className="mb-4 text-lg font-bold">Rutum rutum rutum rutum </h1>
        <div className="">
          {/* Background column */}
          <div
            className="h-screen w-full flex-col items-end justify-end rounded-xl bg-cover bg-center"
            style={{
              backgroundImage: `url(${background})`,
            }}
          ></div>
        </div>
        {/* News detail */}
        <div className="columns-2 p-5">
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
            of the renewable energy revolution.* recognizing the potential for a
            significant shift in the energy landscape. While the technology is
            currently in the early stages of development, its promise for a
            greener, more sustainable future is generating excitement and
            anticipation within the scientific community and beyond. *Stay tuned
            for further updates as scientists work towards bringing this
            revolutionary technology to the forefront of the renewable energy
            revolution.*
          </p>
        </div>
      </div>
      <div className="col-span-1 m-0 p-5">
        <div className="m-4 mx-auto w-10/12 cursor-pointer rounded-lg border bg-white p-5  shadow-sm">
          <p className="px-4 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
          <img
            src={mula}
            className="h-[200px] w-full object-cover"
            alt="Blog Image"
          />
          <p className="mt-3 text-red-500"></p>
          <p className="mt-3 font-bold"></p>
          <p className="mt-3 line-clamp-3 text-gray-400"></p>
          <p className="px-4 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center px-4 py-4">
              <img src={logo} className="w-[35px] rounded-full" alt="Logo" />
              <div className="ml-2">
                <p className="text-[12px] font-bold">ENLN</p>
                <p className="text-[10px] text-gray-500">10 Nov 2024</p>
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
        <div className="m-4 mx-auto w-10/12 cursor-pointer rounded-lg border bg-white p-5  shadow-sm">
          <p className="px-4 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
          <img
            src={mula}
            className="h-[200px] w-full object-cover"
            alt="Blog Image"
          />
          <p className="mt-3 text-red-500"></p>
          <p className="mt-3 font-bold"></p>
          <p className="mt-3 line-clamp-3 text-gray-400"></p>
          <p className="px-4 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center px-4 py-4">
              <img src={logo} className="w-[35px] rounded-full" alt="Logo" />
              <div className="ml-2">
                <p className="text-[12px] font-bold">ENLN</p>
                <p className="text-[10px] text-gray-500">10 Nov 2024</p>
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
        <div className="m-4 mx-auto w-10/12 cursor-pointer rounded-lg border bg-white p-5  shadow-sm">
          <p className="px-4 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
          <img
            src={mula}
            className="h-[200px] w-full object-cover"
            alt="Blog Image"
          />
          <p className="mt-3 text-red-500"></p>
          <p className="mt-3 font-bold"></p>
          <p className="mt-3 line-clamp-3 text-gray-400"></p>
          <p className="px-4 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center px-4 py-4">
              <img src={logo} className="w-[35px] rounded-full" alt="Logo" />
              <div className="ml-2">
                <p className="text-[12px] font-bold">ENLN</p>
                <p className="text-[10px] text-gray-500">10 Nov 2024</p>
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
        <div className="m-4 mx-auto w-10/12 cursor-pointer rounded-lg border bg-white p-5  shadow-sm">
          <p className="px-4 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
          <img
            src={mula}
            className="h-[200px] w-full object-cover"
            alt="Blog Image"
          />
          <p className="mt-3 text-red-500"></p>
          <p className="mt-3 font-bold"></p>
          <p className="mt-3 line-clamp-3 text-gray-400"></p>
          <p className="px-4 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center px-4 py-4">
              <img src={logo} className="w-[35px] rounded-full" alt="Logo" />
              <div className="ml-2">
                <p className="text-[12px] font-bold">ENLN</p>
                <p className="text-[10px] text-gray-500">10 Nov 2024</p>
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
      </div>
    </div>
  );
}

export default BlogDetail;
