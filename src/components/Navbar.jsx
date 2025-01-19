// Navbar.js
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/Advait_Logo_removebg_resize.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#333] text-[#fff] p-3 text-center">
      <div className="mx-auto w-10/12 p-0 lg:p-1 flex flex-col lg:flex-row justify-between items-center">

        <div className='w-full flex- flex justify-between'>
        
        <Link to="/" className="text-xl font-bold">
          <div className='flex items-center gap-1'>
            <img src={logo} className='h-12'/> 
            <div>Advait</div>
            {/* <div>अद्वैत</div> */}

          </div>
            
        </Link>

        <button
          className={`lg:hidden ${isOpen ? 'hidden' : 'block'}`}
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <button
          className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        </div>

        <ul
          className={`lg:flex lg:items-center lg:justify-between text-lg ${isOpen ? 'flex flex-col' : 'hidden'
            } lg:block `}
        >
          <li className="lg:mr-4 mb-4 lg:underline font-semibold lg:mb-0 hover:text-[#fff]">
            <NavLink to="/" >
              Home
            </NavLink>
            {isOpen && <hr />}
          </li>
          <li className="lg:mr-4 mb-4 lg:underline font-semibold lg:mb-0 hover:text-[#ccc]" >
            <NavLink to="/Pricing" >
              Pricing
            </NavLink>
            {isOpen && <hr />}
          </li>
          <li className="lg:mr-4 mb-4 lg:underline whitespace-nowrap font-semibold lg:mb-0 hover:text-[#ccc]">
            <NavLink to="/ContactUsPage" >
              Contact Us
            </NavLink>
            {isOpen && <hr />}
          </li>
          <li className="lg:mr-4 mb-4 lg:mb-0">
            <a href="/callback" className="bg-yellow-200 hover:bg-yellow-300 hover:!text-black !text-black font-bold py-2 px-4 rounded whitespace-nowrap">
              Enquire Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
