// import { FaUserGraduate, FaUsers, FaLeaf, FaHandshake } from "react-icons/fa";

// const WhyChooseUs = () => {
//   const features = [
//     {
//       icon: <FaUserGraduate className="text-4xl text-green-600" />,
//       title: "Expert Instruction",
//       description: "For all levels of yoga practitioners.",
//     },
//     {
//       icon: <FaUsers className="text-4xl text-green-600" />,
//       title: "Small Class Sizes",
//       description: "Personalized attention for better learning.",
//     },
//     {
//       icon: <FaLeaf className="text-4xl text-green-600" />,
//       title: "Holistic Approach",
//       description: "Focusing on overall yoga and wellness.",
//     },
//     {
//       icon: <FaHandshake className="text-4xl text-green-600" />,
//       title: "Community-Driven",
//       description: "Experience a welcoming yoga environment.",
//     },
//   ];

//   return (
//     <section className="bg-green-50 py-12 mt-4">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold text-green-700 mb-8">
//           Why Choose Us
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
//             >
//               {feature.icon}
//               <h3 className="mt-4 text-xl font-semibold text-green-800">
//                 {feature.title}
//               </h3>
//               <p className="mt-2 text-gray-600 text-sm text-center">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import { FaUserGraduate, FaUsers, FaLeaf, FaHandshake } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserGraduate className="text-5xl sm:text-6xl text-green-600" />,
      title: "Expert Instruction",
      description: "For all levels of yoga practitioners.",
    },
    {
      icon: <FaUsers className="text-5xl sm:text-6xl text-green-600" />,
      title: "Small Class Sizes",
      description: "Personalized attention for better learning.",
    },
    {
      icon: <FaLeaf className="text-5xl sm:text-6xl text-green-600" />,
      title: "Holistic Approach",
      description: "Focusing on overall yoga and wellness.",
    },
    {
      icon: <FaHandshake className="text-5xl sm:text-6xl text-green-600" />,
      title: "Community-Driven",
      description: "Experience a welcoming yoga environment.",
    },
  ];

  return (
    <section className="bg-green-50 py-8 mb-6 rounded-2xl">
      <div className="max-w-screen-lg mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-green-800 mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-medium text-green-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
