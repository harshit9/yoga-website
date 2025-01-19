// import { useState, useEffect } from 'react';
// import Underline from './Underline';

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [testimonialData] = useState([
//     {
//       name: 'John Doe',
//       age: 30,
//       city: 'New York',
//       review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
//     },
//     {
//       name: 'Jane Smith',
//       age: 25,
//       city: 'Los Angeles',
//       review: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
//     },
//     {
//       name: 'Bob Johnson',
//       age: 35,
//       city: 'Chicago',
//       review: 'Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
//     },
//     {
//       name: 'Alice Brown',
//       age: 28,
//       city: 'San Francisco',
//       review: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
//     },
//     {
//       name: 'Mike Davis',
//       age: 40,
//       city: 'Miami',
//       review: 'Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
//     },
//     {
//       name: 'Emily Taylor',
//       age: 32,
//       city: 'Austin',
//       review: 'Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
//     },
//   ]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((currentIndex + 1) % testimonialData.length);
//     }, 5000); // autoscroll every 5 seconds
//     return () => clearInterval(intervalId);
//   }, [currentIndex, testimonialData]);

//   const getInitials = (name) => {
//     const nameParts = name.split(' ');
//     return nameParts[0][0] + nameParts[1][0];
//   };

//   return (
//     <div className="bg-white py-10 flex flex-col items-center">
//       <div className="container w-4/5 sm:px-6 lg:px-8">
//         <h2 className="text-center text-3xl font-bold text-[#454545]">Testimonials</h2>
//         <Underline />
//         <div className="flex justify-center items-center gap-4 pt-6">
//           {/* Previous button */}
//           <button
//             className="text-gray-400 hover:text-gray-700 transition-all transform hover:scale-110"
//             onClick={() => setCurrentIndex((currentIndex - 1 + testimonialData.length) % testimonialData.length)}
//           >
//             <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>

//           {/* Testimonial card */}
//           <div className="bg-gray-50 p-6 sm:p-8 shadow-lg rounded-lg flex flex-col sm:flex-row items-center gap-6 min-w-[90%] md:min-w-[60%]">
//             {/* Profile icon with initials */}
//             <div className="flex-shrink-0 bg-gray-300 text-gray-800 font-bold rounded-full h-16 w-16 flex items-center justify-center text-2xl">
//               {getInitials(testimonialData[currentIndex].name)}
//             </div>
//             {/* Review content */}
//             <div className="text-center sm:text-left">
//               <p className="text-gray-600 text-base sm:text-lg mb-4 leading-relaxed">
//                 “{testimonialData[currentIndex].review}”
//               </p>
//               <p className="text-gray-900 font-semibold text-lg sm:text-xl">
//                 {testimonialData[currentIndex].name}
//               </p>
//               <p className="text-gray-500 text-sm sm:text-base">{testimonialData[currentIndex].age} years old, {testimonialData[currentIndex].city}</p>
//             </div>
//           </div>

//           {/* Next button */}
//           <button
//             className="text-gray-400 hover:text-gray-700 transition-all transform hover:scale-110"
//             onClick={() => setCurrentIndex((currentIndex + 1) % testimonialData.length)}
//           >
//             <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaUserCircle } from "react-icons/fa";
import Underline from "./Underline";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialData] = useState([
    {
      name: "Rahul Sharma",
      age: 28,
      city: "Delhi",
      review:
        "The yoga sessions here have been a transformative experience for me. The instructors are incredibly knowledgeable and provide personalized guidance that has helped me achieve both mental clarity and physical strength. I feel calmer, more balanced, and truly connected to my inner self.",
      rating: 5,
    },
    {
      name: "Priya Mehta",
      age: 32,
      city: "Mumbai",
      review:
        "This is by far the best yoga center I’ve ever attended. The community is warm and welcoming, making every session a joy. Their holistic approach to yoga has improved my flexibility, focus, and overall well-being. I highly recommend it to anyone seeking peace and wellness.",
      rating: 4.5,
    },
    {
      name: "Arjun Singh",
      age: 40,
      city: "Bangalore",
      review:
        "Joining this yoga studio was one of the best decisions I’ve made for my health. The peaceful environment and skilled instructors make every session impactful. My stress levels have significantly decreased, and I feel more energized every day.",
      rating: 5,
    },
    {
      name: "Anjali Patel",
      age: 25,
      city: "Ahmedabad",
      review:
        "I absolutely love the yoga sessions here! The guidance provided by the instructors is phenomenal. It has not only improved my physical flexibility but also given me tools to manage stress effectively. It’s been an amazing journey of self-discovery.",
      rating: 4.5,
    },
    {
      name: "Vikram Das",
      age: 35,
      city: "Kolkata",
      review:
        "The yoga classes are a perfect blend of traditional practices and modern techniques. The sessions are engaging and leave me feeling revitalized every time. This has truly been a life-changing experience for me, both physically and mentally.",
      rating: 5,
    },
    {
      name: "Sneha Iyer",
      age: 30,
      city: "Chennai",
      review:
        "This yoga studio has completely exceeded my expectations. The instructors’ expertise, the peaceful environment, and the sense of community have made a huge difference in my life. I feel stronger, more focused, and in harmony with myself.",
      rating: 5,
    },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % testimonialData.length);
    }, 7000); // autoscroll every 7 seconds
    return () => clearInterval(intervalId);
  }, [currentIndex, testimonialData]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex justify-center sm:justify-start text-green-600">
        {Array.from({ length: fullStars }).map((_, i) => (
          <FaStar key={i} />
        ))}
        {hasHalfStar && <FaStarHalfAlt />}
      </div>
    );
  };

  return (
    <div className="bg-white py-10 flex flex-col items-center">
      <div className="container w-4/5 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-green-900">Testimonials</h2>
        <Underline />
        <div className="flex justify-center items-center gap-4 pt-6">
          {/* Previous button */}
          <button
            className="text-gray-800 hover:text-gray-900 transition-all transform hover:scale-110"
            onClick={() =>
              setCurrentIndex(
                (currentIndex - 1 + testimonialData.length) % testimonialData.length
              )
            }
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Testimonial card */}
          <div className="bg-green-50 p-6 sm:p-8 shadow-lg rounded-lg flex flex-col sm:flex-row items-center gap-3 min-w-[90%] md:min-w-[60%]">
            {/* Profile icon */}
            <div className="flex-shrink-0 text-grey-700 rounded-full h-20 w-20 flex items-center justify-center text-6xl">
              <FaUserCircle />
            </div>
            {/* Review content */}
            <div className="text-center sm:text-left">
              <p className="text-gray-600 text-base sm:text-lg mb-4 leading-relaxed">
                “{testimonialData[currentIndex].review}”
              </p>
              <div>{renderStars(testimonialData[currentIndex].rating)}</div>
              <p className="text-green-800 font-semibold text-lg sm:text-xl mt-2">
                {testimonialData[currentIndex].name}
              </p>
              <p className="text-gray-500 text-sm sm:text-base">
                {testimonialData[currentIndex].age} years old, {testimonialData[currentIndex].city}
              </p>
            </div>
          </div>

          {/* Next button */}
          <button
            className="text-gray-800 hover:text-gray-900 transition-all transform hover:scale-110"
            onClick={() =>
              setCurrentIndex((currentIndex + 1) % testimonialData.length)
            }
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;


