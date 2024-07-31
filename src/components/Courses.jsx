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

const Courses = () => {
  return (
    <section id="courses" className="courses">
      <div className="container mx-auto p-4 pt-6 w-4/5">
        <h2 className="text-3xl font-bold leading-tight">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
          {coursesData.map((course) => (
            <div key={course.id} className="bg-white shadow-md rounded p-4">
              <img src={course.image} alt={course.name} className="w-full h-48 object-cover object-center" />
              <h3 className="text-lg pt-2 font-bold">{course.name}</h3>
              <p className="text-gray-600">{course.description}</p>
              <div className="flex flex-col pt-4 justify-center">
                <a href={`/courses/${course.id}`} className="bg-[#535353] hover:bg-[#424242] hover:text-white text-white font-bold py-2 px-4 rounded whitespace-nowrap mb-2 text-center shadow-md">
                  Know More
                </a>
                <a href="#form" className="bg-yellow-200 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded whitespace-nowrap text-center">
                  Enquire Now
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