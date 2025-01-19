// import { FaSmile, FaBalanceScale, FaBrain, FaHeart, FaDove } from "react-icons/fa";

// const BenefitsOfYoga = () => {
//   const benefits = [
//     {
//       icon: <FaSmile className="text-4xl text-green-600" />,
//       title: "Reduces Stress",
//       description: "Helps alleviate stress and anxiety for a calmer mind.",
//     },
//     {
//       icon: <FaBalanceScale className="text-4xl text-green-600" />,
//       title: "Improves Flexibility",
//       description: "Enhances balance, flexibility, and physical strength.",
//     },
//     {
//       icon: <FaBrain className="text-4xl text-green-600" />,
//       title: "Enhances Mental Clarity",
//       description: "Boosts focus and cognitive function.",
//     },
//     {
//       icon: <FaHeart className="text-4xl text-green-600" />,
//       title: "Supports Well-Being",
//       description: "Promotes both physical and emotional wellness.",
//     },
//     {
//       icon: <FaDove className="text-4xl text-green-600" />,
//       title: "Fosters Inner Peace",
//       description: "Encourages self-awareness and mindfulness.",
//     },
//   ];

//   return (
//     <section className="bg-green-50 py-12 mt-8">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold text-green-700 mb-8">
//           Benefits of Yoga
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {benefits.map((benefit, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
//             >
//               {benefit.icon}
//               <h3 className="mt-4 text-xl font-semibold text-green-800">
//                 {benefit.title}
//               </h3>
//               <p className="mt-2 text-gray-600 text-sm text-center">
//                 {benefit.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BenefitsOfYoga;

import { FaSmile, FaBalanceScale, FaBrain, FaHeart, FaDove } from "react-icons/fa";


const BenefitsOfYoga = () => {
  const benefits = [
    {
      icon: <FaSmile className="text-5xl sm:text-6xl text-green-600" />,
      title: "Reduces Stress",
      description: "Helps alleviate stress and anxiety for a calmer mind.",
    },
    {
      icon: <FaBalanceScale className="text-5xl sm:text-6xl text-green-600" />,
      title: "Improves Flexibility",
      description: "Enhances balance, flexibility, and physical strength.",
    },
    {
      icon: <FaBrain className="text-5xl sm:text-6xl text-green-600" />,
      title: "Enhances Mental Clarity",
      description: "Boosts focus and cognitive function.",
    },
    {
      icon: <FaHeart className="text-5xl sm:text-6xl text-green-600" />,
      title: "Supports Well-Being",
      description: "Promotes both physical and emotional wellness.",
    },
    {
      icon: <FaDove className="text-5xl sm:text-6xl text-green-600" />,
      title: "Fosters Inner Peace",
      description: "Encourages self-awareness and mindfulness.",
    },
  ];

  return (
    <section className="bg-green-50 py-8 rounded-2xl">
      <div className="max-w-screen-lg mx-auto px-6 text-center ">
        <h2 className="text-3xl sm:text-4xl font-semibold text-green-800 mb-8">
          Benefits of Yoga
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-medium text-green-700 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfYoga;


