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
            <p className=" space-x-2 text-6xl font-bold text-white my-2">
              Ethiopia Nutrition Leaders Network
            </p>
            <p className="mb-5 font-sans text-white ">
              Create Visionary Leaders for the Journey to End Malnutrition in Ethiopia.
            </p>
            <button className="mx-auto my-6 w-[200px] rounded-md bg-primary py-3 font-sans font-medium text-white">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;