

const coursesData = {
  prenatalPostnatal: [
    {
      id: 1,
      name: "Prenatal Yoga",
      description: "Gentle yoga practices designed to support physical and emotional well-being during pregnancy.",
      image: "/assets/course1.jpg",
      overview: "Prenatal Yoga is tailored to support expecting mothers during each stage of pregnancy. This course focuses on gentle poses and breathing techniques to ease pregnancy discomforts, improve sleep, and enhance flexibility in preparation for childbirth.",
      activities: [
        "Gentle yoga poses for each trimester",
        "Breathing techniques for labor preparation",
        "Guided relaxation and meditation",
        "Pelvic floor exercises",
      ],
      schedule: [
        "Monday: 9:00 AM - 10:30 AM",
        "Wednesday: 9:00 AM - 10:30 AM",
        "Saturday: 10:00 AM - 11:30 AM",
      ],
      information: "No prior yoga experience is required. Please consult with your healthcare provider before enrolling. Bring comfortable clothing and a yoga mat.",
      datesAndPrices: "Starts every 1st Monday of the month | $150 for 8 sessions",
      refundPolicy: "Full refund if canceled within 3 days of enrollment. No refunds after the course begins.",
    },
    {
      id: 2,
      name: "Postnatal Yoga",
      description: "Reclaim your physical and emotional health post-pregnancy with supportive yoga practices.",
      image: "/assets/course2.jpg",
      overview: "Postnatal Yoga is designed to help new mothers recover and reconnect with their bodies after childbirth. This course emphasizes strengthening the core, improving posture, and providing emotional relief.",
      activities: [
        "Core-strengthening poses",
        "Relaxation techniques for stress relief",
        "Mother and baby bonding exercises",
        "Breathing exercises to enhance energy",
      ],
      schedule: [
        "Tuesday: 10:00 AM - 11:30 AM",
        "Thursday: 10:00 AM - 11:30 AM",
        "Saturday: 11:30 AM - 1:00 PM",
      ],
      information: "Babies under 12 months are welcome to join. Bring a yoga mat, towel, and any baby essentials.",
      datesAndPrices: "Starts every 15th of the month | $120 for 6 sessions",
      refundPolicy: "Full refund if canceled 5 days before the start date. 50% refund after the first session.",
    },
  ],
  generalYoga: [
    {
      id: 3,
      name: "Beginner Yoga",
      description: "Perfect for newcomers to yoga, focusing on foundational poses and techniques.",
      image: "/assets/course3.jpg",
      overview: "Beginner Yoga introduces the fundamentals of yoga, including basic postures, alignment, and breathing techniques. It is an excellent starting point for anyone new to yoga.",
      activities: [
        "Introduction to basic yoga poses",
        "Breathing exercises for relaxation",
        "Guided stretching routines",
        "Beginner-level meditation techniques",
      ],
      schedule: [
        "Monday: 7:00 PM - 8:30 PM",
        "Thursday: 7:00 PM - 8:30 PM",
        "Saturday: 8:00 AM - 9:30 AM",
      ],
      information: "This course is open to all age groups and fitness levels. Bring a yoga mat and a water bottle.",
      datesAndPrices: "Starts every Monday | $100 for 8 sessions",
      refundPolicy: "Full refund if canceled 48 hours before the start date. No refunds after the first session.",
    },
    {
      id: 4,
      name: "Regular Practice Yoga",
      description: "Build consistency and deepen your practice with our regular yoga classes.",
      image: "/assets/course4.jpg",
      overview: "Regular Practice Yoga is for those looking to establish a routine and deepen their practice. This course builds on basic yoga knowledge and explores intermediate poses.",
      activities: [
        "Intermediate-level yoga poses",
        "Strength and flexibility training",
        "Group meditation sessions",
        "Breathing exercises for enhanced focus",
      ],
      schedule: [
        "Tuesday: 6:00 AM - 7:30 AM",
        "Thursday: 6:00 AM - 7:30 AM",
        "Saturday: 6:00 AM - 7:30 AM",
      ],
      information: "Previous yoga experience is recommended but not required. Bring your yoga mat and any personal props.",
      datesAndPrices: "Starts every 1st and 15th of the month | $120 per month",
      refundPolicy: "Refunds are available only for cancellations made within the first week of the course.",
    },
    {
      id: 5,
      name: "Old Age Yoga",
      description: "Specially designed for seniors, focusing on gentle stretches and balance.",
      image: "/assets/course5.jpg",
      overview: "Old Age Yoga is tailored for seniors, with gentle movements to enhance mobility, balance, and overall well-being.",
      activities: [
        "Chair yoga for ease and safety",
        "Breathing exercises to improve lung capacity",
        "Gentle stretches for joint mobility",
        "Mindfulness meditation for relaxation",
      ],
      schedule: [
        "Monday: 8:00 AM - 9:00 AM",
        "Wednesday: 8:00 AM - 9:00 AM",
        "Friday: 8:00 AM - 9:00 AM",
      ],
      information: "Open to individuals aged 60 and above. Modifications available for participants with limited mobility.",
      datesAndPrices: "Ongoing enrollment | $50 per month",
      refundPolicy: "Full refund for cancellations made within the first two sessions.",
    },
    {
      id: 6,
      name: "Medical-Specific Yoga",
      description: "Tailored yoga practices to address specific medical conditions.",
      image: "/assets/course6.jpg",
      overview: "Medical-Specific Yoga is customized to address specific health concerns such as back pain, arthritis, or hypertension through targeted poses and techniques.",
      activities: [
        "Targeted stretches for pain relief",
        "Breathing techniques for stress management",
        "Gentle poses for improved circulation",
        "Relaxation techniques for better sleep",
      ],
      schedule: [
        "Monday: 5:00 PM - 6:30 PM",
        "Wednesday: 5:00 PM - 6:30 PM",
        "Friday: 5:00 PM - 6:30 PM",
      ],
      information: "Medical clearance may be required for certain conditions. Bring your medical history and a yoga mat.",
      datesAndPrices: "Starts every Monday | $200 for 10 sessions",
      refundPolicy: "50% refund if canceled before the second session.",
    },
  ],
  meditation: [
    {
      id: 7,
      name: "Pranayama",
      description: "Master the art of breath control to enhance your vitality and focus.",
      image: "/assets/course5.jpg",
      overview: "Pranayama focuses on mastering the science of breath control to harmonize your mind and body. This course enhances lung capacity, balances energy levels, and fosters mental clarity.",
      activities: [
        "Basic and advanced breathing techniques",
        "Energy-balancing exercises",
        "Meditation combined with controlled breathing",
        "Relaxation sessions for stress relief",
      ],
      schedule: [
        "Monday: 6:30 AM - 7:30 AM",
        "Wednesday: 6:30 AM - 7:30 AM",
        "Friday: 6:30 AM - 7:30 AM",
      ],
      information: "Open to all levels of experience. Participants are advised to practice on an empty stomach.",
      datesAndPrices: "Starts every 1st of the month | $80 for 8 sessions",
      refundPolicy: "Full refund if canceled within 7 days of enrollment. No refunds after the course starts.",
    },
    {
      id: 8,
      name: "Chanting",
      description: "Experience the calming effects of sound vibrations through guided chanting.",
      image: "/assets/course4.jpg",
      overview: "Chanting involves rhythmic recitation of sacred sounds and mantras to promote mental clarity and emotional balance. It is a powerful meditative practice that fosters inner peace.",
      activities: [
        "Guided chanting sessions",
        "Exploration of ancient mantras",
        "Group chanting for enhanced energy",
        "Mindfulness exercises to complement chanting",
      ],
      schedule: [
        "Tuesday: 5:30 PM - 6:30 PM",
        "Thursday: 5:30 PM - 6:30 PM",
        "Saturday: 4:00 PM - 5:00 PM",
      ],
      information: "No prior experience is required. Comfortable seating arrangements are provided.",
      datesAndPrices: "Starts every Tuesday | $50 per month",
      refundPolicy: "Refunds are available only for cancellations before the first chanting session.",
    },
    {
      id: 9,
      name: "Meditation",
      description: "Achieve mindfulness and inner peace through guided meditation sessions.",
      image: "/assets/course3.jpg",
      overview: "Meditation aims to quiet the mind and cultivate mindfulness. This course includes various meditation techniques to improve focus, reduce anxiety, and foster a sense of inner tranquility.",
      activities: [
        "Guided mindfulness meditation",
        "Breathing exercises for deeper focus",
        "Visualization techniques",
        "Silent and group meditation sessions",
      ],
      schedule: [
        "Monday: 7:00 PM - 8:00 PM",
        "Wednesday: 7:00 PM - 8:00 PM",
        "Friday: 7:00 PM - 8:00 PM",
      ],
      information: "Bring a meditation cushion or use the provided seating arrangements. Suitable for all experience levels.",
      datesAndPrices: "Starts every Monday | $70 for 6 sessions",
      refundPolicy: "Full refund if canceled before the second session.",
    },
  ],
  satvikFoods: [
    {
      id: 10,
      name: "Satvik Diet Workshop",
      description: "Learn about nutritious and wholesome satvik foods to nourish your body and mind.",
      image: "/assets/course1.jpg",
      overview: "The Satvik Diet Workshop teaches the principles of satvik eating, emphasizing fresh, organic, and minimally processed foods. This course blends nutrition with yogic philosophy to promote holistic well-being.",
      activities: [
        "Cooking demonstrations of satvik meals",
        "Guided grocery planning and ingredient selection",
        "Discussion on the health benefits of satvik foods",
        "Interactive meal preparation workshops",
      ],
      schedule: [
        "Saturday: 10:00 AM - 1:00 PM",
        "Sunday: 10:00 AM - 1:00 PM",
      ],
      information: "Participants are encouraged to bring a notepad for recipe notes. Ingredients for cooking sessions are provided.",
      datesAndPrices: "Runs every weekend | $90 per weekend session",
      refundPolicy: "Full refund if canceled 3 days before the scheduled session. No refunds for cancellations made less than 3 days prior.",
    },
  ],
};

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const CoursePage = () => {
  const { id } = useParams();
  const courseId = parseInt(id);
  const course = Object.values(coursesData).flat().find((c) => c.id === courseId);

  if (!course) {
    return <div className="text-center mt-12 text-lg text-gray-600">Course not found.</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="relative h-56 md:h-72 lg:h-80 overflow-hidden">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold">{course.name}</h1>
        </div>
      </header>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Overview */}
        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Overview
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">{course.overview}</p>
        </section>
        <hr className="border-gray-300 my-4" />

        {/* Activities */}
        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Activities
          </h2>
          <ul className="list-disc pl-5 text-gray-600 text-base space-y-1">
            {course.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </section>
        <hr className="border-gray-300 my-4" />

        {/* Schedule */}
        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Schedule
          </h2>
          <ul className="text-gray-600 space-y-1 text-base">
            {course.schedule.map((time, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-green-500 font-bold">•</span>
                <span>{time}</span>
              </li>
            ))}
          </ul>
        </section>
        <hr className="border-gray-300 my-4" />

        {/* Information */}
        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Information
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">{course.information}</p>
        </section>
        <hr className="border-gray-300 my-4" />

        {/* Dates & Prices */}
        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Dates & Prices
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">{course.datesAndPrices}</p>
        </section>
        <hr className="border-gray-300 my-4" />

        {/* Refund Policy */}
        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Refund Policy
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">{course.refundPolicy}</p>
        </section>

         {/* Enquire Now Button */}
        {/* Enquire Now Button */}
        {/* Enquire Now Button */}
        <div className="text-center mt-12 my-6">
          <Link
            to="/callback" // Link to the CallbackForm page
            className="bg-yellow-300 hover:bg-yellow-400 text-black text-xl md:text-2xl font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Request a Callback
          </Link>
        </div>



      </div>
    </div>
  );
};

export default CoursePage;
