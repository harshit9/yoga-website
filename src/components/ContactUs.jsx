import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-white  text-white min-h-[77vh] flex items-center py-10 px-5 md:px-20">
      <div className="max-w-7xl lg:p-8 p-4 rounded-xl bg-[#333] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center space-x-3">
              <MdEmail className="text-xl" />
              <span>advait766@gmail.com</span>
            </div>
            {/* Phone */}
            <div className="flex items-center space-x-3">
              <MdPhone className="text-xl" />
              <span>+91 9810809619</span>
            </div>
            {/* Address */}
            <div className="flex items-start space-x-3">
              <MdLocationOn className="text-xl" />
              <span>
                Kailash Hills, East of Kailash, <br />
                Delhi
              </span>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-white hover:text-gray-400">
              <FaFacebookF className="text-2xl" />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaYoutube className="text-2xl" />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaLinkedinIn className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0949147626795!2d79.07865837504183!3d21.145825488734695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c08f8491dfd1%3A0xabcd1234567890ef!2sHABuild%20-%20Online%20Yoga%20Everyday!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
