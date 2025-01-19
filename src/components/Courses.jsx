// import Underline from "./Underline";

// const coursesData = [
//   {
//     id: 1,
//     name: 'Prenatal Yoga',
//     description: "Experience the transformative power of yoga during pregnancy. Our expert instructors guide you through gentle, safe, and nourishing practices...",
//     image: '/assets/course1.jpg',
//   },
//   {
//     id: 2,
//     name: 'Postnatal Yoga',
//     description: 'Empower Your Postpartum Journey Reclaim your physical and emotional well-being with our postnatal yoga program. Our supportive community and...',
//     image: '/assets/course2.jpg',
//   },
//   // Add more courses if needed
// ];

// const Courses = () => {
//   const truncateDescription = (description) => {
//     if (description.length > 75) {
//       return description.slice(0, 75) + '...';
//     }
//     return description;
//   };

//   return (
//     <section id="courses" className="courses bg-green-50 pb-4">
//       <div className="container mx-auto p-4 pt-6 w-11/12 lg:w-4/5 ">
//         <h2 className="text-center text-4xl font-bold text-[#454545]">Our Courses</h2>
//         <Underline />
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
//           {coursesData.map((course) => (
//             <div key={course.id} className="bg-white shadow-md rounded-2xl p-6">
//               <a href={`/courses/${course.id}`}>
//                 <img src={course.image} alt={course.name} className="w-full h-48 object-cover object-center rounded-xl" />
//                 <h3 className="text-lg pt-4 font-bold">{course.name}</h3>
//                 <p className="text-gray-600">{truncateDescription(course.description)}</p>
//               </a>
//               <div className="flex flex-col pt-4 justify-center">
//                 <a 
//                   href={`/courses/${course.id}`} 
//                   className="bg-[#333] hover:bg-[#424242] text-white font-bold py-2 px-4 rounded-full text-center shadow-md transition-all ease-in-out"
//                 >
//                   View Details
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Courses;


import Underline from "./Underline";

const coursesData = {
  prenatalPostnatal: [
    {
      id: 1,
      name: "Prenatal Yoga",
      description: "Gentle yoga practices designed to support physical and emotional well-being during pregnancy.",
      image: "/assets/course1.jpg",
    },
    {
      id: 2,
      name: "Postnatal Yoga",
      description: "Reclaim your physical and emotional health post-pregnancy with supportive yoga practices.",
      image: "/assets/course2.jpg",
    },
  ],
  generalYoga: [
    {
      id: 3,
      name: "Beginner Yoga",
      description: "Perfect for newcomers to yoga, focusing on foundational poses and techniques.",
      image: "/assets/course3.jpg",
    },
    {
      id: 4,
      name: "Regular Practice Yoga",
      description: "Build consistency and deepen your practice with our regular yoga classes.",
      image: "/assets/course4.jpg",
    },
    {
      id: 5,
      name: "Old Age Yoga",
      description: "Specially designed for seniors, focusing on gentle stretches and balance.",
      image: "/assets/course5.jpg",
    },
    {
      id: 6,
      name: "Medical-Specific Yoga",
      description: "Tailored yoga practices to address specific medical conditions.",
      image: "/assets/course2.jpg",
    },
  ],
  meditation: [
    {
      id: 7,
      name: "Pranayama",
      description: "Master the art of breath control to enhance your vitality and focus.",
      image: "/assets/course5.jpg",
    },
    {
      id: 8,
      name: "Chanting",
      description: "Experience the calming effects of sound vibrations through guided chanting.",
      image: "/assets/course4.jpg",
    },
    {
      id: 9,
      name: "Meditation",
      description: "Achieve mindfulness and inner peace through guided meditation sessions.",
      image: "/assets/course3.jpg",
    },
  ],
  satvikFoods: [
    {
      id: 10,
      name: "Satvik Diet Workshop",
      description: "Learn about nutritious and wholesome satvik foods to nourish your body and mind.",
      image: "/assets/course1.jpg",
    },
  ],
};

const Courses = () => {
  const truncateDescription = (description) => {
    return description.length > 75 ? description.slice(0, 75) + "..." : description;
  };

  const renderCategory = (title, courses) => (
    <div className="category mb-12">
      <h3 className="text-2xl font-extrabold text-[#2E2E2E] text-center mb-6 relative">
        <span className="before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-[2px] before:bg-[#43A047]">
          {title}
        </span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <a href={`/courses/${course.id}`}>
              <div className="relative w-full h-44 bg-cover bg-center" style={{ backgroundImage: `url(${course.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-t-2xl"></div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-[#333]">{course.name}</h4>
                <p className="text-gray-600 mt-1">{truncateDescription(course.description)}</p>
              </div>
            </a>
            <div className="px-4 pb-4">
              <a
                href={`/courses/${course.id}`}
                className="block bg-[#535353] hover:bg-[#424242] hover:text-white text-white font-semibold py-2 px-4 rounded-full text-center shadow-md transition-all ease-in-out"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="courses" className="courses bg-green-50 pt-8 pb-2">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center text-4xl font-extrabold text-[#2E2E2E] mb-6">
          Explore Our <span className="text-green-700">Courses</span>
        </h2>
        <Underline />
        <div className="pt-8">
          {renderCategory("Prenatal & Postnatal Yoga", coursesData.prenatalPostnatal)}
          {renderCategory("General Yoga", coursesData.generalYoga)}
          {renderCategory("Meditation & Chanting", coursesData.meditation)}
          {renderCategory("Satvik Foods", coursesData.satvikFoods)}
        </div>
      </div>
    </section>
  );
};

export default Courses;
