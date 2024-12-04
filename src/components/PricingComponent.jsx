import { useState } from "react";

const PricingComponent = () => {
  const [selectedPlan, setSelectedPlan] = useState("12"); // Default to 12 months

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#333]">Membership Plans</h1>
      <p className="text-base md:text-lg text-center mb-8 text-[#333]">Choose your Membership Plan</p>

      {/* Cards */}
      <div className="overflow-x-auto py-4 flex lg:justify-center">
        <div className="flex gap-4 md:gap-6 px-4 md:px-0">
          {[
            { duration: "12", price: "3999", discount: "67%", original: "12000", label: "Best Seller" },
            { duration: "6", price: "2999", discount: "50%", original: "6000" },
            { duration: "3", price: "1999", discount: "33%", original: "3000" },
          ].map((plan) => (
            <div
              key={plan.duration}
              onClick={() => handlePlanSelection(plan.duration)}
              className={`flex-shrink-0 w-64 p-4 border rounded-lg text-center cursor-pointer transition-all duration-300 ${
                selectedPlan === plan.duration
                  ? "bg-teal-100 border-teal-500 scale-105 shadow-lg"
                  : "bg-white hover:shadow-md border-gray-300"
              }`}
            >
              {plan.label && (
                <span className="bg-yellow-300 text-black text-xs font-bold px-2 py-1 rounded-full mb-2 inline-block">
                  {plan.label}
                </span>
              )}
              <h2 className="text-base md:text-lg font-bold text-[#333]">{plan.duration} Months</h2>
              <p className="line-through text-xs md:text-sm text-gray-500">INR {plan.original}/-</p>
              <p className="text-lg md:text-2xl font-bold text-[#333]">INR {plan.price}</p>
              <p className="text-xs md:text-sm text-red-500">{plan.discount} OFF</p>
              <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded text-xs md:text-sm">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Features Table */}
      <div className="overflow-x-auto px-4">
        <table className="table-auto w-full text-left border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-2 md:px-4 py-2 border border-gray-300 text-[#333] text-sm md:text-base">Features</th>
              {["12", "6", "3"].map((duration) => (
                <th
                  key={duration}
                  className={`px-2 md:px-4 py-2 border border-gray-300 text-center text-sm md:text-base ${
                    selectedPlan === duration ? "bg-teal-100 text-[#333]" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {duration} Months
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              "Yoga Everyday with Saurabh Bothra",
              "Dance & Strength with Trishala Bothra",
              "Flexible Batch Timings",
              "Habit Tracking",
              "Self-Healing Marma",
              "Hand Mudras",
              "Mindful Journaling",
              "Juice Fast",
              "Physiotherapy Consultation",
              "Water Reminders",
              "Community Sessions",
            ].map((feature, index) => (
              <tr key={index}>
                <td className="px-2 md:px-4 py-2 border border-gray-300 text-[#333] text-sm md:text-base">
                  {feature}
                </td>
                {["12", "6", "3"].map((duration) => (
                  <td
                    key={duration}
                    className={`px-2 md:px-4 py-2 border border-gray-300 text-center ${
                      selectedPlan === duration ? "bg-teal-100" : ""
                    }`}
                  >
                    {index < (duration === "12" ? 11 : duration === "6" ? 9 : 7) ? (
                      <span className="text-green-500 font-bold">✔</span>
                    ) : (
                      <span className="text-red-500 font-bold">✘</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingComponent;
