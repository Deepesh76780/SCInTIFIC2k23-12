import React from "react";
import "./Section1.css";
export const Section1 = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 place-content-center place-items-center " id='About'>
      <div className="w-[699px] Adjust_image1">
        <img src="./assets/section1.png" className="scale-[0.85]" alt="" />
      </div>
      <div className="lg:flex lg:flex-col justify-center items-center space-y-6  Adjust_content1">
        <div className="text-4xl font-extrabold Scintific">
          SCI<span id="eta">&#951;</span>
              <span id="prime">&#8242;</span>TFIC 2k23
              </div>
        <div className="lg:w-[400px] font-semibold text-center lg:text-[0.9rem] text-[0.87rem] FIX">
          It is a science and technology showcase and exhibition aimed at school
          students across the nation. It boosts the students’ enthusiasm to
          learn about the latest advancements and innovations in the modern
          world. It projects a positive image of technology in their minds by
          empowering them to develop strategic use cases to solve real-world
          problems.
        </div>
      </div>
      <div className="w-[699px] Adjust_image5">
        <img src="./assets/section1.png" className="scale-[0.85]" alt="" />
      </div>
    </div>
  );
};
