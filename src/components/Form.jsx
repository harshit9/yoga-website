import { useState } from "react";

function Form() {
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
    <form onSubmit={handleSubmit} className="flex flex-col px-2 py-2">
      <label className="block mb-2 text-gray-700">
        <span className="text-lg">Name:</span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="block w-full p-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Enter you name"
          required
        />
      </label>
      <label className="block mb-2 text-gray-700">
        <span className="text-lg">Phone:</span>
        <input
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="block w-full p-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          pattern="[0-9]{10}" // Restricts to 10-digit phone numbers
          placeholder="Enter your phone-number"
          required
        />
      </label>
      <label className="block mb-2 text-gray-700">
        <span className="text-lg">Course:</span>
        <select
          value={course}
          onChange={(event) => setCourse(event.target.value)}
          className="block w-full p-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          required
        >
          <option value="">Select a course</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        className="mt-2 bg-yellow-200 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded whitespace-nowrap mb-2 text-center shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
