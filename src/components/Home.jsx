import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
  name="home"
  className="relative bg-[url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat h-screen w-full"
>
  {/* Glassmorphism Layer */}
  <div className="absolute inset-0 bg-[#1a1a1a] bg-opacity-80 backdrop-blur-sm"></div>

  {/* Container */}
  <div className="relative max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
    <p className="text-[#10A37F]">Que bueno verte por aquí </p>
    <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
      John A. Pérez R.
    </h1>
    <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
      I'm a Front End Developer
    </h2>
    <p className="text-gray-300 py-4 max-w-[630px]">
      I'm skilled in web creation and design, including layout using tools such
      as Figma and Miro. Able to provide guidance and employ agile methodologies
      like Scrum and Kanban. Proficient in creating wireframes, site maps, and
      flowcharts to ensure optimal user experience.
    </p>
    <div>
      <Link
        to="work"
        smooth={true}
        duration={500}
        delay={300}
        className="flex items-center"
      >
        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#1A7F64] hover:border-[#1A7F64] hover:text-[#ffffff] font-medium rounded-md duration-700 z-10">
          Ver Proyectos
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3" />
          </span>
        </button>
      </Link>
    </div>
  </div>
</div>

  );
}

export default Home;
