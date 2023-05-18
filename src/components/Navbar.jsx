import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/Logo_.png';
import { Link } from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[65px] flex justify-between items-center md:px-20 bg-[#0e0e0e] text-gray-300 border-b-[1px] border-[#1b1b1b] z-20">
      <div className="w-[30px] ml-6">
        <Link to="home" smooth={true} duration={500}><img src={Logo} alt="Logo Image" className="cursor-pointer"/></Link>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-[#6BD425] hover:scale-110 duration-700"><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li className="hover:text-[#6BD425] hover:scale-110 duration-700"><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li className="hover:text-[#6BD425] hover:scale-110 duration-700"><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li className="hover:text-[#6BD425] hover:scale-110 duration-700"><Link to="work" smooth={true} duration={500}>Work</Link></li>
        <li className="hover:text-[#6BD425] hover:scale-110 duration-700"><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* Hamburger Button */}
      <div onClick={handleClick} className="md:hidden mr-6 z-10 cursor-pointer hover:text-gray-500 hover:scale-110
duration-700 text-[24px]">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0e0e0e] opacity-95 flex flex-col justify-center items-center gap-y-6 text-4xl"}>
        <li className="hover:text-[#6BD425] hover:scale-110 duration-700"><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
        <li className="hover:text-[#6BD425] hover:scale-110 duration-700"><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
        <li className="hover:text-[#6BD425] hover:scale-110 duration-700"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li className="hover:text-[#6BD425] hover:scale-110 duration-700"><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
        <li className="hover:text-[#6BD425] hover:scale-110 duration-700"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* Social Icons */}
      <div className="flex fixed mx-auto bottom-0 flex-row w-full justify-center items-center md:flex md:fixed md:bottom-auto md:flex-col md:top-[35%] md:left-0">
        
        <ul className="flex w-full md:top-[35%] md:left-0 md:justify-start md:w-full justify-center mx-auto">

          <li className="flex justify-center w-1/4 self-center h-[90px] items-start pt-4 mx-auto relative bottom-[-35px] hover:bottom-0 md:absolute
          md:w-[160px] md:h-[60px] md:items-center md:ml-[-100px] md:hover:ml-[-10px] md:top-0 md:py-1 duration-700 bg-blue-600">
            <a className="hidden md:flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/japrweb/" target="_blank">Linkedin <FaLinkedin className="text-[30px]"/></a>
            {/* Mobile */}
            <a className="md:hidden text-gray-300"
            href="https://www.linkedin.com/in/japrweb/" target="_blank"><FaLinkedin className="text-[30px] mx-auto mb-2"/>Linkedin</a>
          </li>

          <li className="flex justify-center w-1/4 self-center h-[90px] items-start pt-4 mx-auto relative bottom-[-35px] hover:bottom-0 md:absolute
          md:w-[160px] md:h-[60px] md:items-center md:ml-[-100px] md:hover:ml-[-10px] md:top-[60px] md:py-1 duration-700 bg-[#333333]">
            <a className="hidden md:flex justify-between items-center w-full text-gray-300"
            href="https://github.com/japrweb" target="_blank">Github <FaGithub className="text-[30px]"/></a>
            {/* Mobile */}
            <a className="md:hidden text-gray-300"
            href="https://github.com/japrweb" target="_blank"><FaGithub className="text-[30px] mx-auto mb-2"/>Github</a>
          </li>

          <li className="flex justify-center w-1/4 self-center h-[90px] items-start pt-4 mx-auto relative bottom-[-35px] hover:bottom-0 md:absolute
          md:w-[160px] md:h-[60px] md:items-center md:ml-[-100px] md:hover:ml-[-10px] md:top-[120px] md:py-1 duration-700 bg-[#945353]">
            <a className="hidden md:flex justify-between items-center w-full text-gray-300"
            href="mailto:japr893@gmail.com" target="_blank">Email <HiOutlineMail className="text-[30px]"/></a>
            {/* Mobile */}
            <a className="md:hidden text-gray-300"
            href="mailto:japr893@gmail.com" target="_blank"><HiOutlineMail className="text-[30px] mx-auto mb-2"/>Email</a>
          </li>

          <li className="flex justify-center w-1/4 self-center h-[90px] items-start pt-4 mx-auto relative bottom-[-35px] hover:bottom-0 md:absolute
          md:w-[160px] md:h-[60px] md:items-center md:ml-[-100px] md:hover:ml-[-10px] md:top-[180px] md:py-1 duration-700 bg-[#539486]">
            <a className="hidden md:flex justify-between items-center w-full text-gray-300 ml-1.5"
            href="./assets/Resume_JohnAPerezR.pdf" download>Resume<BsFillPersonLinesFill className="text-[30px]"/></a>
            {/* Mobile */}
            <a className="md:hidden text-gray-300"
            href="./assets/Resume_JohnAPerezR.pdf" download><BsFillPersonLinesFill className="text-[30px] mx-auto mb-2"/>Resume</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
