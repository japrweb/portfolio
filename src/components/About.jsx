import React from "react";

function About() {
  return (
    <>
    <div class="w-full h-full bg-[#1a1a1a] text-gray-300 md:m-auto">
      <div class="flex flex-col justify-center items-center w-full h-full">
        <div name="about" className="h-[80px] "></div>
        <p class="text-4xl text-center font-black inline mb-[1em]">SOBRE MÍ</p>
        <div class="max-w-[1000px] w-full gap-8">
      <div class="sm:pb-8 pl-4">
        <p class="mb-2">
          Mi nombre es John, soy un desarrollador front-end especializado en crear sitios web atractivos y funcionales. Cuento con experiencia en diversas tecnologías y herramientas que me permiten ofrecer soluciones personalizadas. Te invito a explorar mis proyectos para conocer más sobre mi trabajo y habilidades.
        </p>
      </div>
    </div>
  </div>
</div>
</>
  );
}

export default About;
