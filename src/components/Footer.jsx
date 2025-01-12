import React from 'react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-scroll';

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className="items-center justify-center text-center bg-[#1a1a1a] w-full h-full md:pb-8 px-4 pb-20">
      <footer className="font-normal text-white text-md flex items-center justify-center">
        Copyright {currentYear} Japrweb
        <div className="w-[25px] ml-1 hover:scale-110 duration-700">
          <Link to="home" smooth={true} duration={500}><img src={Logo} alt="Logo Image" className="cursor-pointer"/></Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
