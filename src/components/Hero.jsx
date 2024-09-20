// // Hero.js
// import heroImage from '../assets/Hero2.jpg';
// import Form from './Form';

// function Hero() {
//   return (
//     <div className="hero h-screen " id="form" style={{ 
//       backgroundImage: `url(${heroImage})`, 
//       backgroundSize: 'cover', 
//       backgroundPosition: 'center', 
//       height: '80vh' 
//     }}>
//       <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
//         <div className="flex flex-wrap -mx-4">
//           <div className="w-full md:w-1/2 xl:w-2/3 p-4">
//             <h1 className="text-7xl text-white font-bold mb-4">Find Your Inner <br/> Peace.</h1>
//             <p className="text-lg text-gray-50 mb-6">Join our yoga community and discover a deeper connection with your body and mind. Our expert instructors will guide you through a journey of self-discovery and transformation.</p>
//           </div>
//           <div className="w-full md:w-1/2 xl:w-1/3 p-4">
//             <div className="bg-white/50 ml-5 p-10 rounded-lg shadow-xl">
//               <h2 className="text-2xl text-gray-800 text-center font-semibold mt-1">Enquire Now</h2>
//               <Form />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;



// Hero.js
import heroImage from '../assets/Hero2.jpg';
import Form from './Form';

function Hero() {
  return (
    <div
      className="hero relative" 
      id="form"
      style={{ 
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        minHeight: '80vh',
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay for better text contrast */}

      <div className="relative container mx-auto px-4 py-4 lg:py-16">
        <div className="flex flex-wrap items-start justify-start">
          {/* Text Section */}
          <div className="w-full md:w-1/2 xl:w-2/3 text-left p-4 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
              Find Your Inner <br /> Peace.
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6">
              Join our yoga community and discover a deeper connection with your body and mind. Our expert instructors will guide you through a journey of self-discovery and transformation.
            </p>
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 xl:w-1/3 md:mt-0 p-4 z-10">
            <div className="bg-white/70 p-6 md:p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl md:text-3xl text-gray-900 text-center font-semibold mb-4">
                Enquire Now
              </h2>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

