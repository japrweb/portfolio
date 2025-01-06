import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/Logo3.png";
import { Link } from "react-scroll";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full h-[65px] flex justify-between items-center md:px-20 ${
        isScrolled ? "bg-[#1a1a1a]" : "bg-transparent"
      } text-white z-20 transition-colors duration-300`}
    >
      <div className="w-[40px] ml-[24px] md:ml-[24px]">
        <Link to="home" smooth={true} duration={500}>
          <img
            src={Logo}
            alt="Logo Image"
            className="cursor-pointer  hover:scale-110 duration-700 ml-[0px]"
          />
        </Link>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex md:mr-0">
        <li className="hover:text-[#1A7F64] hover:scale-110 hover:font-bold duration-700">
          <Link to="home" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li className="hover:text-[#6BD425] hover:scale-110 duration-700">
          <Link to="about" smooth={true} duration={500}>
            ¿Quien Soy?
          </Link>
        </li>
        <li className="hover:text-[#6BD425] hover:scale-110 duration-700">
          <Link to="skills" smooth={true} duration={500}>
            Habilidades
          </Link>
        </li>
        <li className="hover:text-[#6BD425] hover:scale-110 duration-700">
          <Link to="work" smooth={true} duration={500}>
            Portafolio
          </Link>
        </li>
        <li className="hover:text-[#6BD425] hover:scale-110 duration-700">
          <Link to="contact" smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>

      {/* Hamburger Button */}
      <div
        onClick={handleClick}
        className="md:hidden mr-6 z-10 cursor-pointer hover:scale-110 duration-500 ml-[8px] text-[26px] font-thin text-[#ffffff] hover:text-[#ffffff]"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0e0e0e] opacity-95 flex flex-col justify-center items-center gap-y-6 text-4xl"
        }
      >
        <li className="hover:text-[#6BD425] hover:scale-110 duration-700">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li className="hover:text-[#6BD425] hover:scale-110 duration-700">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            ¿Quien Soy?
          </Link>
        </li>
        <li className="hover:text-[#6BD425] hover:scale-110 duration-700">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Habilidades
          </Link>
        </li>
        <li className="hover:text-[#6BD425] hover:scale-110 duration-700">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Portafolio
          </Link>
        </li>
        <li className="hover:text-[#6BD425] hover:scale-110 duration-700">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="flex fixed mx-auto bottom-0 flex-row w-full justify-center items-center md:flex md:fixed md:bottom-auto md:flex-col md:top-[35%] md:left-0">
        <ul className="flex w-full md:top-[35%] md:left-0 md:justify-start md:w-full justify-center mx-auto">
          {/* LinkedIn */}
          <li className="flex justify-center w-1/4 self-center h-[90px] items-start pt-4 mx-auto relative bottom-[-35px] hover:bottom-0 md:absolute md:w-[160px] md:h-[60px] md:items-center md:ml-[-100px] md:hover:ml-[-10px] md:top-0 md:py-1 duration-700 bg-blue-600">
            <a
              className="hidden md:flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/japrweb/"
              target="_blank"
            >
              Linkedin <FaLinkedin className="text-[30px]" />
            </a>
            <a
              className="md:hidden text-gray-300"
              href="https://www.linkedin.com/in/japrweb/"
              target="_blank"
            >
              <FaLinkedin className="text-[30px] mx-auto mb-2" />
              Linkedin
            </a>
          </li>
          {/* GitHub */}
          <li className="flex justify-center w-1/4 self-center h-[90px] items-start pt-4 mx-auto relative bottom-[-35px] hover:bottom-0 md:absolute md:w-[160px] md:h-[60px] md:items-center md:ml-[-100px] md:hover:ml-[-10px] md:top-[60px] md:py-1 duration-700 bg-[#333333]">
            <a
              className="hidden md:flex justify-between items-center w-full text-gray-300"
              href="https://github.com/japrweb"
              target="_blank"
            >
              Github <FaGithub className="text-[30px]" />
            </a>
            <a
              className="md:hidden text-gray-300"
              href="https://github.com/japrweb"
              target="_blank"
            >
              <FaGithub className="text-[30px] mx-auto mb-2" />
              Github
            </a>
          </li>
          {/* Email */}
          <li className="flex justify-center w-1/4 self-center h-[90px] items-start pt-4 mx-auto relative bottom-[-35px] hover:bottom-0 md:absolute md:w-[160px] md:h-[60px] md:items-center md:ml-[-100px] md:hover:ml-[-10px] md:top-[120px] md:py-1 duration-700 bg-[#945353]">
            <a
              className="hidden md:flex justify-between items-center w-full text-gray-300"
              href="mailto:japr893@gmail.com"
              target="_blank"
            >
              Email <HiOutlineMail className="text-[30px]" />
            </a>
            <a
              className="md:hidden text-gray-300"
              href="mailto:japr893@gmail.com"
              target="_blank"
            >
              <HiOutlineMail className="text-[30px] mx-auto mb-2" />
              Email
            </a>
          </li>
          {/* Resume */}
          <li className="flex justify-center w-1/4 self-center h-[90px] items-start pt-4 mx-auto relative bottom-[-35px] hover:bottom-0 md:absolute md:w-[160px] md:h-[60px] md:items-center md:ml-[-100px] md:hover:ml-[-10px] md:top-[180px] md:py-1 duration-700 bg-[#539486]">
            <a
              className="hidden md:flex justify-between items-center w-full text-gray-300 ml-1.5"
              href="./assets/Resume_JohnAPerezR.pdf"
              download
            >
              Resume
              
              <BsFillPersonLinesFill className="text-[30px]" />
            </a>
            <a
              className="md:hidden text-gray-300"
              href="./assets/Resume_JohnAPerezR.pdf"
              download
            >
              <FaInstagram className="text-[30px] mx-auto mb-2" />
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;