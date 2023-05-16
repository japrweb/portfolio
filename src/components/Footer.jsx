import React from "react";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className="items-center justify-center text-center bg-[#0e0e0e] w-full h-full p-4">
      <footer className="font-normal text-white text-md">
        Copyright {currentYear} Japrweb.
      </footer>
    </div>
  );
};

export default Footer;
