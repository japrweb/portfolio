import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/Logo_.png";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[65px] flex justify-between items-center px-6 md:px-20 bg-[#0e0e0e] text-gray-300 z-10 border-b-[1px] border-[#1b1b1b]">
      <div className="w-[30px]">
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
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer hover:text-gray-500 hover:scale-110
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
      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/japrweb/" target="_blank">Linkedin <FaLinkedin className="text-[30px]"/></a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700 bg-[#333333]">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/japrweb" target="_blank">Github <FaGithub className="text-[30px]"/></a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700 bg-[#945353]">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="mailto:japr893@gmail.com" target="_blank">Email <HiOutlineMail className="text-[30px]"/></a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700 bg-[#539486]">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="src/assets/Resume_JohnAPerezR.pdf" download> Resume <BsFillPersonLinesFill className="text-[30px]"/></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
