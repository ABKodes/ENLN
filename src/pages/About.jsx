//import teampic from '../assets/teampic';
import meeting from '../assets/meeting.jpg'


function About () {
    return (
<div className='w-full bg-gray-200 py-16 px-4'>
  <div className='relative'>
    {/* <img className='w-full h-screen object-cover' src={teampic} alt="" /> */}
    <div className='absolute top-0 left-0 w-full h-full'>
      <div className='w-full h-full bg-gradient-to-b from-black opacity-70'></div>
    </div>
    <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold text-white'>About Us</h1>
    </div>
  </div>
  <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className='w-[500px] mx-auto my-4' src={meeting} alt='/' />
    <div className='flex flex-col justify-center'>
      <p className='text-accent font-bold'>What we've accomplished</p>
      <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Our Impact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        molestiae delectus culpa hic assumenda, voluptate reprehenderit
        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
        eveniet ex deserunt fuga?
      </p>
      <button className='bg-primary text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Learn More</button>
    </div>
  </div>
</div>

    );
  }
  
  export default About;