import background from '../assets/background.jpg';
import '../Fonts/fonts.css';

const Hero = () => {
  return (
    <>
      {/* Hero section */}
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div
          className="hero-content text-center text-neutral-content"
          style={{ fontFamily: "Playfair Display" }}
        >
          <div className="min-w-md">
            <h1 className="p-2 text-9xl font-bold tracking-widest text-primary">
              ENLN
            </h1>
            <p className=" my-2 space-x-2 text-6xl font-bold text-white">
              Ethiopia Nutrition Leaders Network
            </p>
            <p className="mb-5 font-sans text-white ">
              Create Visionary Leaders for the Journey to End Malnutrition in
              Ethiopia.
            </p>
            <button className="mx-auto my-6 w-[200px] rounded-md bg-primary py-3 font-sans font-medium text-white">
              Join Us
            </button>
          </div>
        </div>
      </div>
      {/* Coming Soon */}
      <div className="mb-5 h-screen w-full bg-[#efefef]">
        <div className=" h-3/12 mx-auto mt-5 w-6/12 bg-white p-8">
          <h1 className="p-5 text-center">Coming Soon</h1>
          <p className="p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="card  mx-auto my-4 w-11/12 font-sans lg:card-side">
          <div className="card-body flex items-center justify-center p-6">
            <h2 className="card-title">New album is released!</h2>
            <p className="">
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
      {/* What we stand for */}
    </>
  );
};

export default Hero;