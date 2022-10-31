import React from "react";
import "./Section5.css";

export const Section5 = () => {
  return (
    <div
      className="lg:flex lg:flex-col justify-center items-center relative Adjust_div "
      id="participate"
    >
      <div className="-z-10 IMAGE">
        <img src="./assets/howtoparticipate.png" alt="" />
      </div>
      <div className="lg:absolute lg:z-10 lg:grid lg:grid-cols-2 w-full ">
        <div className="lg:flex lg:flex-col items-start justify-center lg:px-40 mt-20 FixContent">
          <div className=" lg:flex lg:flex-col text-6xl font-extrabold drop-shadow-lg border-none pb-20 Heading_content text-[#4776E6]">
            <div>How to</div>
            <div>Participate?</div>
          </div>
          <div className="hidden lg:flex text-lg text-[#5172E7] text-opacity-80 font-semibold cursor-pointer flex flex-col justify-center items-center pt-8">
            <div>SEE THEMES</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-8/12 font-semibold Adjust_Content">
          <ol style={{ listStyleType: "decimal" }}>
            <li className="py-1.5">
              {" "}
              Make a team (maximum 3 people allowed in a team).
            </li>
            <li className="py-1.5">
              Any student from class 1st to 12th can be your team member.
            </li>
            <li className="py-1.5">
              Think about any innovative solution to the problems listed under
              the SCI<span id="eta">&#951;</span>
              <span id="prime">&#8242;</span>TFIC 2k23 themes. Take help from
              your teachers/mentors/parents.
            </li>
            <li className="py-1.5">
              {" "}
              Collect details about your proposed solution and write about its
              Objective, Abstract, and Outcomes. Use these writings to fIll the
              online form available under "Submit Your Idea" tab.
            </li>
            <li className="py-1.5">
              {" "}
              During the event, you can demonstrate your idea (hybrid mode)
              through a working model/prototype or you can also present a
              complete practical implementation details of your idea, if you
              could not make a working model out of it.
            </li>
            {/* <li className='py-1.5'>To encourage school students for higher education in science and technology.</li> */}
          </ol>
        </div>
        <div className="text-lg text-[#5172E7] text-opacity-80 font-semibold cursor-pointer flex flex-col justify-center items-center pt-8 lg:hidden">
          <div>SEE THEMES</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
