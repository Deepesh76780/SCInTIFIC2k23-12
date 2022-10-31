import React from "react";
import "./Section4.css";

export const Section4 = () => {
  return (
    <div className="lg:flex lg:flex-col justify-center items-center py-4 BOX">
      <div className="text-5xl font-extrabold Adjust_title text-[#4776E6]">Why Ideathon?</div>
      <div className="text-lg font-light pt-6 text-left lg:w-[950px]">
        <ol style={{ listStyleType: "initial" }} className="Adjust_content">
          <li className="py-1.5">
            To promote the culture of innovation among school students.
          </li>
          <li className="py-1.5"> Compete with top schools across india.</li>
          <li className="py-1.5">
            {" "}
            Present the idea at IIIT-NR Faculties and Scholars & get evaluated
            by domain experts.
          </li>
          {/* <li className='py-1.5'>To encourage school students for higher education in science and technology.</li> */}
        </ol>
      </div>
    </div>
  );
};
