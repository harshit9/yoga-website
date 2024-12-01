import { useState, useEffect } from 'react';
import Underline from './Underline';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialData, setTestimonialData] = useState([
    {
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      name: 'Jane Smith',
      review: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    {
      name: 'Bob Johnson',
      review: 'Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    {
      name: 'Alice Brown',
      review: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    {
      name: 'Mike Davis',
      review: 'Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    {
      name: 'Emily Taylor',
      review: 'Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % testimonialData.length);
    }, 5000); // autoscroll every 5 seconds
    return () => clearInterval(intervalId);
  }, [currentIndex, testimonialData]);

  const getInitials = (name) => {
    const nameParts = name.split(' ');
    return nameParts[0][0] + nameParts[1][0];
  };

  return (
    <div className="bg-white py-10">
      <div className="container mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-bold text-[#454545]">Testimonials</h2>
      <Underline />
        <div className="flex justify-center items-center gap-4 pt-6">
          {/* Previous button */}
          <button
            className="text-gray-400 hover:text-gray-700 transition-all transform hover:scale-110"
            onClick={() => setCurrentIndex((currentIndex - 1 + testimonialData.length) % testimonialData.length)}
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Testimonial card */}
          <div className="bg-gray-50 p-6 sm:p-8 shadow-lg rounded-lg flex flex-col sm:flex-row items-center gap-6 w-full sm:w-4/5 lg:w-3/5">
            {/* Profile icon with initials */}
            <div className="flex-shrink-0 bg-gray-300 text-gray-800 font-bold rounded-full h-16 w-16 flex items-center justify-center text-2xl">
              {getInitials(testimonialData[currentIndex].name)}
            </div>
            {/* Review content */}
            <div className="text-center sm:text-left">
              <p className="text-gray-600 text-base sm:text-lg mb-4 leading-relaxed">
                “{testimonialData[currentIndex].review}”
              </p>
              <p className="text-gray-900 font-semibold text-lg sm:text-xl">
                {testimonialData[currentIndex].name}
              </p>
            </div>
          </div>

          {/* Next button */}
          <button
            className="text-gray-400 hover:text-gray-700 transition-all transform hover:scale-110"
            onClick={() => setCurrentIndex((currentIndex + 1) % testimonialData.length)}
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
