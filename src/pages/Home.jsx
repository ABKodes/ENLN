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
      <div style={{ fontFamily: "Playfair Display" }} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        <p className='text-primary font-bold p-2 text-9xl tracking-widest'>
          ENLN
        </p>
        <h1 className=' md:text-6xl sm:text-6xl text-4xl font-bold md:py-6 text-white '>
          Ethiopia Nutrition Leaders Network
        </h1>
        <p className='md:text-2xl text-xl font-bold text-white'>Become a member</p>
        <button className='bg-primary font-sans w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Join Us</button>
      </div>
    </div>
  );
};

export default Hero;