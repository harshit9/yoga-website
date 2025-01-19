import { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Advait?",
      answer: "Advait is a platform offering live online yoga courses, bringing expert instruction and a holistic approach to yoga and wellness right to your home."
    },
    {
      question: "Who can join Advait's courses?",
      answer: "Our courses are designed for individuals of all skill levels, whether you're a beginner looking to start your yoga journey or an experienced practitioner seeking to deepen your practice."
    },
    {
      question: "What equipment do I need for the classes?",
      answer: "All you need is a yoga mat, a stable internet connection, and a device to stream the classes. Optional props like blocks or straps can enhance your practice but are not required."
    },
    {
      question: "Are the instructors certified?",
      answer: "Yes, all our instructors are highly trained and certified yoga professionals with years of teaching experience."
    },
    {
      question: "Can I access recorded sessions if I miss a live class?",
      answer: "Absolutely! We provide access to recorded sessions so you can practice at your convenience."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='bg-green-50'>
    <div className="w-full md:w-4/5 mx-auto py-10 p-6 sm:p-6 lg:p-8 bg-green-50">
      <h2 className="text-center text-3xl font-bold text-[#454545] mb-6">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-3 focus:ring-green-500"
          >
            <div className="flex justify-between items-center">
              <span className="text-lg text-gray-600 font-medium">{faq.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <hr className=' w-11/12 mx-auto'/>
          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
              activeIndex === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <p className="p-4 text-gray-800 bg-gray-100 rounded-lg">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Faq;


// import { useState } from 'react';
// import Underline from './Underline';

// const Faq = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const faqs = [
//     {
//       question: "What is Advait?",
//       answer: "Advait is a platform offering live online yoga courses, bringing expert instruction and a holistic approach to yoga and wellness right to your home."
//     },
//     {
//       question: "Who can join Advait's courses?",
//       answer: "Our courses are designed for individuals of all skill levels, whether you're a beginner looking to start your yoga journey or an experienced practitioner seeking to deepen your practice."
//     },
//     {
//       question: "What equipment do I need for the classes?",
//       answer: "All you need is a yoga mat, a stable internet connection, and a device to stream the classes. Optional props like blocks or straps can enhance your practice but are not required."
//     },
//     {
//       question: "Are the instructors certified?",
//       answer: "Yes, all our instructors are highly trained and certified yoga professionals with years of teaching experience."
//     },
//     {
//       question: "Can I access recorded sessions if I miss a live class?",
//       answer: "Absolutely! We provide access to recorded sessions so you can practice at your convenience."
//     }
//   ];

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className='bg-green-50'>
//     <div className="container w-full md:w-4/5 mx-auto py-10 p-6 sm:p-6 lg:p-8 ">
//       <h2 className="text-center text-3xl font-bold text-[#454545]">Frequently Asked Questions</h2>
//       <Underline />
//       {faqs.map((faq, index) => (
//         <div key={index} className="mb-2 shadow-sm">
//           <button
//             onClick={() => toggleFAQ(index)}
//             className="w-full text-left px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//           >
//             <div className="flex justify-between items-center">
//               <span className="text-lg text-gray-600 font-medium">{faq.question}</span>
//               <svg
//                 className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//               </svg>
//             </div>
//           </button>
//           <hr className='w-11/12 mx-auto'/>
//           <div
//             className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
//               activeIndex === index ? "max-h-40" : "max-h-0"
//             }`}
//           >
//             <p className="p-4 text-gray-800 bg-white rounded-lg">{faq.answer}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default Faq;

