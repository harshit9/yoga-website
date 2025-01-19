import { useState } from "react";

const CallbackForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("entry.2005620554", name); // Name field ID
    formData.append("entry.1166974658", phone); // Phone field ID
    formData.append("entry.839337160", course); // Course field ID

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSfYrcus1J8MxuSMTY7E4hetJLWpIHsIJ3WBy-84MNybilsfWQ/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    )
      .then(() => alert("Your response has been recorded!"))
      .catch((error) => console.error("Error:", error));
  };

  const courses = [
    "Prenatal Yoga",
    "Postnatal Yoga",
    "Beginner Yoga",
    "Regular Practice Yoga",
    "Old Age Yoga",
    "Medical-Specific Yoga",
    "Pranayama",
    "Chanting",
    "Meditation",
    "Satvik Diet Workshop",
  ];

  return (
    <div className=" min-h-fit py-16 px-4 flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Enquire Now
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#333] focus:border-[#333]"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
            Phone:
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              pattern="[0-9]{10}" // Restricts to 10-digit phone numbers
              placeholder="Enter your phone-number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#333] focus:border-[#333]"
              title="Enter a valid 10-digit phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="course"
              className="block text-sm font-medium text-gray-700"
            >
              Course:
            </label>
            <select
              id="course"
              name="course"
              value={course}
              onChange={(event) => setCourse(event.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#333] focus:border-[#333]"
              required
            >
              <option value="">Select a course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-4 rounded-md shadow-md transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallbackForm;
