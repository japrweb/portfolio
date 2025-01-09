import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
  name="home"
  className="relative bg-[url('https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-no-repeat h-screen w-full bg-fixed"
>
  {/* Glassmorphism Layer */}
  <div className="absolute inset-0 bg-[#1a1a1a] bg-opacity-80 backdrop-blur-sm"></div>

  {/* Container */}
  <div className="relative max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full items-center ">
    <h1 className="text-4xl sm:text-4xl font-bold text-[#1A7F64] text-center">Que bueno verte por aquí</h1>
    <h6 className="text-2xl sm:text-7xl font-bold text-[#ccd6f6] text-center">Creemos la web que necesitas</h6>
    <p className="text-gray-300 py-4 max-w-[630px] text-center">
    Me apasiona transformar ideas en realidades digitales. No solo diseño, creo experiencias que impulsan tu negocio al siguiente nivel.
    Explora, inspírate, y cuando estés listo, hablemos de cómo puedo dar vida a tu visión.
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
