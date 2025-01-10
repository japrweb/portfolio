import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-full bg-[#1a1a1a] text-gray-300 md:m-auto"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
              <i class="fa-solid fa-microchip text-4xl mb-[0.5em] text-[#2c2c2c]"></i>
            <p className="text-4xl text-center font-black inline">
              SOBRE MÍ
            </p>
        <div className="max-w-[1000px] w-full  gap-8">
          <div className="sm: pb-8 pl-4">

          <p className="mb-2">
          Mi nombre es John, soy un desarrollador front-end, mi enfoque es crear experiencias atractivas y funcionales. Me especializo en el diseño y desarrollo de sitios web que combinan estética y usabilidad, asegurando una navegación intuitiva para los usuarios.
  <h3>Mis habilidades incluyen:</h3>
  <ul>
    <li>Comunicación efectiva para comprender y plasmar las necesidades del cliente.</li>
    <li>Trabajo en equipo orientado a alcanzar objetivos comunes.</li>
    <li>Resolución de problemas y toma de decisiones críticas en momentos clave.</li>
    <li>Adaptabilidad a cambios y nuevos desafíos en entornos dinámicos.</li>
    <li>Análisis y pensamiento crítico para optimizar soluciones.</li>
    <li>Compromiso con el aprendizaje continuo, manteniéndome actualizado con las últimas tendencias y tecnologías.</li>
  </ul>
  <p>Mi experiencia en negociación y gestión de proyectos me permite colaborar estrechamente con equipos multidisciplinarios, garantizando el cumplimiento de metas y la satisfacción de las expectativas del cliente. Siempre estoy en busca de nuevos retos y oportunidades que me permitan crecer en el ámbito tecnológico.</p>
  <p>Si deseas conocer más sobre mi trabajo o explorar posibles colaboraciones, te invito a revisar mis proyectos y a ponerte en contacto conmigo.</p>

  </p>


          </div>

        </div>        



      </div>
    </div>
  );
}

export default About;
