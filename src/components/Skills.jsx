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
    <div name="skills" className="w-full h-full bg-[#0e0e0e] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mt-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#6BD425]">
            <i class="fa-solid fa-screwdriver-wrench"></i> Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#6BD425] hover:bg-[#1a1a1a] duration-700 bg-slate-600 pt-4 rounded-md">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 ">Html</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#6BD425] hover:bg-[#1a1a1a] duration-700 bg-slate-600 pt-4 rounded-md">
            <img src={CSS} alt="CSS icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 ">Css</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#6BD425] hover:bg-[#1a1a1a] duration-700 bg-slate-600 pt-4 rounded-md">
            <img src={Javascript} alt="Javascript icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 ">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#6BD425] hover:bg-[#1a1a1a] duration-700 bg-slate-600 pt-4 rounded-md">
            <img src={ReactImg} alt="React icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 ">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#6BD425] hover:bg-[#1a1a1a] duration-700 bg-slate-600 pt-4 rounded-md">
            <img src={GitHub} alt="Github icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 ">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#6BD425] hover:bg-[#1a1a1a] duration-700 bg-slate-600 pt-4 rounded-md">
            <img src={Node} alt="Node icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 ">Node Js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#6BD425] hover:bg-[#1a1a1a] duration-700 bg-slate-600 pt-4 rounded-md">
            <img src={WordPress} alt="Firebase icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 ">WordPress</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#6BD425] hover:bg-[#1a1a1a] duration-700 bg-slate-600 pt-4 rounded-md">
            <img src={Tailwind} alt="Tailwind icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 ">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
