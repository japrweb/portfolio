import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import WordPress from "../assets/wordpress.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

function Skills() {
  return (
    <div name="skills" className="w-full h-full bg-[#1a1a1a] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-black inline">
            HABILIDADES
          </p>
          <p className="py-4">
          A lo largo de mi carrera, he adquirido experiencia en diversas tecnologías clave para el desarrollo web moderno. A continuación, se presentan las herramientas y lenguajes que utilizo para crear soluciones digitales eficientes y atractivas.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
          <div className="pt-4 rounded-md bg-[#1A7F64]">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 font-semibold">Html</p>
          </div>
          <div className="pt-4 rounded-md bg-[#2c2c2c]">
            <img src={CSS} alt="CSS icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 font-semibold">Css</p>
          </div>
          <div className="pt-4 rounded-md bg-[#2c2c2c]">
            <img src={Javascript} alt="Javascript icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 font-semibold">Javascript</p>
          </div>
          <div className="pt-4 rounded-md bg-[#1A7F64]">
            <img src={ReactImg} alt="React icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 font-semibold">React</p>
          </div>
          <div className="pt-4 rounded-md bg-[#1A7F64]">
            <img src={GitHub} alt="Github icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 font-semibold">GitHub</p>
          </div>
          <div className="pt-4 rounded-md bg-[#2c2c2c]">
            <img src={Node} alt="Node icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 font-semibold">Node Js</p>
          </div>
          <div className="pt-4 rounded-md bg-[#2c2c2c]">
            <img src={WordPress} alt="Firebase icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 font-semibold">WordPress</p>
          </div>
          <div className="pt-4 rounded-md bg-[#1A7F64]">
            <img src={Tailwind} alt="Tailwind icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 font-semibold">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
