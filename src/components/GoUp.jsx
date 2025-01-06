import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { MdKeyboardArrowUp } from "react-icons/md";

function GoUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isScrollingDown = scrollTop > 0;
      setIsVisible(isScrollingDown);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`flex fixed right-4 bottom-20 md:bottom-16 md:right-16 opacity-0 transition-opacity duration-500 ${isVisible ? "opacity-100" : ""}`}>
      <Link to="home" smooth={true} duration={500} className="flex items-center">
        <button className="text-[#ffffff] bg-[#2c2c2c] rounded-[50%] hover:bg-[#1A7F64] hover:text-[#ffffff] hover:scale-[105%] hover:shadow-md duration-700 opacity-80 group">
          <MdKeyboardArrowUp className="text-[40px]" />
        </button>
      </Link>
    </div>
  );
}

export default GoUp;
