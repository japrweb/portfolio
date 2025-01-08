import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-full bg-[#1a1a1a] text-gray-300 md:m-auto"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
            <p className="text-4xl text-center font-black inline">SOBRE MÍ</p>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              <i class="fa-solid fa-user text-4xl mr-4 text-gray-300"></i> 
              Hi. I'm John. <br />
              Please take a look around.
            </p>
          </div>
          <div>
            <p>
              In terms of my personal skills, I am characterized by:
              <br /> <br />
              <ul>
                <li>✖ My ability to communicate effectively</li>
                <li>✖ Working in a team to achieve common goals</li>
                <li>✖ Solving problems and making critical decisions</li>
                <li>✖ Easily adapting to changes and new challenges</li>
                <li>
                  ✖ Analyzing and thinking critically to improve solutions
                </li>
                <li>
                  ✖ Being in a constant learning process to stay up to date with
                  the latest trends and technologies
                </li>
              </ul>{" "}
              <br />
              My ability to negotiate and manage projects allows me to work in
              collaboration with my team to achieve the set goals and meet the
              client's expectations. I am always looking for new challenges and
              opportunities to continue growing in the field of technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
