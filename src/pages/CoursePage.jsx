import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Form from '../components/Form'; // Assuming you've created a form component

const coursesData = [
  {
    id: 1,
    name: 'Prenatal postnatal yoga',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    image: '/assets/course1.jpg',
  },
  {
    id: 2,
    name: 'Yoga retreats',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    image: '/assets/course2.jpg',
  },
  {
    id: 3,
    name: 'Hatha yoga',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    image: '/assets/course3.jpg',
  },
  {
    id: 4,
    name: 'Slow yoga',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    image: '/assets/course4.jpg',
  },
  {
    id: 5,
    name: 'Meditation / Pranayama / Chants',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    image: '/assets/course5.jpg',
  },
];

const CoursePage = () => {
  const { id } = useParams(); // Assuming route is like '/courses/:id'
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const selectedCourse = coursesData.find(course => course.id === parseInt(id));
    setCourse(selectedCourse);
  }, [id]);

  if (!course) {
    return <p>Loading course details...</p>;
  }

  return (
    <div></div>
    // <div className="bg-gray-50 pt-8">
    //   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    //     {/* Course Banner */}
    //     <div className="relative bg-white rounded-lg shadow-lg overflow-hidden mb-8">
    //       <img
    //         src={course.image}
    //         alt={course.name}
    //         className="w-full h-64 sm:h-96 object-cover object-center"
    //         style={{ objectPosition: 'top' }} // Focuses on the top of the image
    //       />
    //       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4">
    //         <h1 className="text-4xl font-bold">{course.name}</h1>
    //       </div>
    //     </div>

    //     {/* Course Content */}
    //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    //       {/* Course Description */}
    //       <div className="col-span-2">
    //         <h2 className="text-2xl font-semibold mb-4">Course Overview</h2>
    //         <p className="text-lg text-gray-700 leading-relaxed mb-6">
    //           {course.description}
    //         </p>
            
    //         <h3 className="text-xl font-semibold mb-2">What you will learn:</h3>
    //         <ul className="list-disc pl-5 text-gray-700">
    //           <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    //           <li>Vestibulum magna sed, convallis ex at vestibulum nulla.</li>
    //           <li>Curabitur commodo, magna sed auctor ullamcorper.</li>
    //           <li>Ut porta facilisis, velit neque interdum lectus.</li>
    //         </ul>

    //         {/* Course Details */}
    //         <div className="mt-6">
    //           <h3 className="text-xl font-semibold mb-2">Course Details</h3>
    //           <p><strong>Duration:</strong> 6 weeks</p>
    //           <p><strong>Level:</strong> Beginner</p>
    //           <p><strong>Instructor:</strong> John Doe</p>
    //         </div>
    //       </div>

    //       {/* Enquire Form */}
    //       <div className="bg-white p-3 border-2 shadow-inner-sm rounded-lg">
    //         <h3 className="text-xl font-semibold text-center mb-4">Enquire Now</h3>
    //         <Form />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CoursePage;
