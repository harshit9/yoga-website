import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" bg-[#333333] text-white py-8 lg:p-8 mt-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Our Courses</h2>
            <ul className="list-none">
              <li>Pre-Postnatal Yoga & Garbhasanskar TTC Live</li>
              <li>Pre-Postnatal Yoga & Garbhasanskar TTC Self-Paced</li>
              <li>Pregnancy Nutrition Course</li>
              <li>Womens Wellness</li>
              <li>Ayurveda Anatomy and Physiology</li>
              <li>Basic Course in Ayurveda</li>
              <li>Practical Ayurveda in Daily Life</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">ABC</h2>
            <ul className="list-none">
              <li>Email: abc@abc.com</li>
              <li>Phone: +91 xxxxxxxxxx (Whatsapp only)</li>
              <li>
                Address: Ssdasdasd, asdsadasdd, sadas 8, sddd,<br/>asdacsac,
                Kurla (East), Delhi - 110095
              </li>
            </ul>
            <div className="flex mt-4">
              <a href="#" className="mx-2">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="mx-2">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="mx-2">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;