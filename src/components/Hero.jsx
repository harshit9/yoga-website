// Hero.js
import heroImage from '../assets/Hero2.jpg';
import Form from './Form';

function Hero() {
  return (
    <div className="hero h-screen " id="form" style={{ 
      backgroundImage: `url(${heroImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '80vh' 
    }}>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-2/3 p-4">
            <h1 className="text-7xl text-white font-bold mb-4">Find Your Inner <br/> Peace.</h1>
            <p className="text-lg text-gray-50 mb-6">Join our yoga community and discover a deeper connection with your body and mind. Our expert instructors will guide you through a journey of self-discovery and transformation.</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white/50 ml-5 p-10 rounded-lg shadow-xl">
              <h2 className="text-2xl text-gray-800 text-center font-semibold mt-1">Enquire Now</h2>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;