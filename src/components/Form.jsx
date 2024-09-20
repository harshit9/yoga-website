// Form.js
import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('entry.1424210446', name);
    formData.append('entry.1747344444', email);
    formData.append('entry.2051279445', phone);
    formData.append('entry.2084774444', course);

    fetch('https://docs.google.com/forms/u/0/d/e/FORM_ID/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const courses = [
    'Hatha Yoga',
    'Vinyasa Yoga',
    'Ashtanga Yoga',
    'Restorative Yoga',
    'Yin Yoga',
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
          required
        />
      </label>
      <label className="block mb-2 text-gray-700 ">
        <span className="text-lg">Email:</span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="block w-full p-2 text-sm bg-white/100 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          required
        />
      </label>
      <label className="block mb-2 text-gray-700">
        <span className="text-lg">Phone:</span>
        <input
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="block w-full p-2  text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          required
        />
      </label>
      <label className="block mb-2 text-gray-700">
        <span className="text-lg">Course:</span>
        <select
          value={course}
          onChange={(event) => setCourse(event.target.value)}
          className="block w-full p-2  text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
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
        Enquire Now
      </button>
    </form>
  );
}

export default Form;