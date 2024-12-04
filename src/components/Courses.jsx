import Underline from "./Underline";

const coursesData = [
  {
    id: 1,
    name: 'Prenatal Yoga',
    description: "Experience the transformative power of yoga during pregnancy. Our expert instructors guide you through gentle, safe, and nourishing practices...",
    image: '/assets/course1.jpg',
  },
  {
    id: 2,
    name: 'Postnatal Yoga',
    description: 'Empower Your Postpartum Journey Reclaim your physical and emotional well-being with our postnatal yoga program. Our supportive community and...',
    image: '/assets/course2.jpg',
  },
  // Add more courses if needed
];

const Courses = () => {
  const truncateDescription = (description) => {
    if (description.length > 75) {
      return description.slice(0, 75) + '...';
    }
    return description;
  };

  return (
    <section id="courses" className="courses">
      <div className="container mx-auto p-4 pt-6 w-4/5">
        <h2 className="text-center text-4xl font-bold text-[#454545]">Our Courses</h2>
        <Underline />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
          {coursesData.map((course) => (
            <div key={course.id} className="bg-white shadow-md rounded-2xl p-6">
              <a href={`/courses/${course.id}`}>
                <img src={course.image} alt={course.name} className="w-full h-48 object-cover object-center rounded-xl" />
                <h3 className="text-lg pt-4 font-bold">{course.name}</h3>
                <p className="text-gray-600">{truncateDescription(course.description)}</p>
              </a>
              <div className="flex flex-col pt-4 justify-center">
                <a 
                  href={`/courses/${course.id}`} 
                  className="bg-[#333] hover:bg-[#424242] text-white font-bold py-2 px-4 rounded-full text-center shadow-md transition-all ease-in-out"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
