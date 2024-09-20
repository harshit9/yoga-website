import { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Tailwind CSS?",
      answer: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs."
    },
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
    },
    {
      question: "How do I use this FAQ component?",
      answer: "Just copy the code and integrate it into your React project, then modify the questions and answers as needed."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-left mb-6">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">{faq.question}</span>
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
          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
              activeIndex === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <p className="p-4 bg-gray-50 rounded-lg">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
