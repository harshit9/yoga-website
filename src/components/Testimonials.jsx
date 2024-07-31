
import { useState, useEffect } from 'react';

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

  return (
    <div className="bg-white py-20">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
        <div className="flex justify-between mb-4">
          <button
            className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
            onClick={() => setCurrentIndex((currentIndex - 1 + testimonialData.length) % testimonialData.length)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
            onClick={() => setCurrentIndex((currentIndex + 1) % testimonialData.length)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="bg-white p-4 shadow-md rounded">
          <p className="text-gray-600">{testimonialData[currentIndex].review}</p>
          <p className="text-gray-900 font-bold">{testimonialData[currentIndex].name}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;