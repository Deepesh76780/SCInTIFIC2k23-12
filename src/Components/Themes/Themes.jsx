import React from "react";

export const Themes = () => {
  return (
    <div className="flex flex-col justify-center items-center Bag" id='themes'>
      <div className=" text-5xl font-extrabold">Themes</div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="text-transparent text-3xl font-bold bg-clip-text bg-gradient-to-r from-[#FF8008] to-[#FFC837] my-10">
            Classes 1 to 4
          </div>
          <div className="flex flex-col justify-center items-start  text-transparent text-[1.5rem] bg-clip-text bg-gradient-to-r from-[#272727] to-[#272727CC] TEXTSIZE">
            <div>
              1. Disaster management
            </div>
            <div>
              2. Healthcare and Sanitation
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-transparent text-3xl font-bold bg-clip-text bg-gradient-to-r from-[#FF8008] to-[#FFC837] my-10">
            Classes 5 - 8
          </div>
          <div className="flex flex-col justify-center items-start  text-transparent text-[1.5rem] bg-clip-text bg-gradient-to-r from-[#272727] to-[#272727CC] TEXTSIZE">
            <div>
              1. Disaster management
            </div>
            <div>
              2. Smart education
            </div>
            <div>
              3. Healthcare and Sanitation
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-transparent text-3xl font-bold bg-clip-text bg-gradient-to-r from-[#FF8008] to-[#FFC837] my-10">
          Classes 9 - 12
          </div>
          <div className="flex flex-col justify-center items-start  text-transparent text-[1.5rem] bg-clip-text bg-gradient-to-r from-[#272727] to-[#272727CC] TEXTSIZE">
            <div>
              1. Security and safety management
            </div>
            <div>
              2. Women safety
            </div>
            <div>
              3. Smart Phone and Smart Living
            </div>
            <div>
              4. Smart Education
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-[200px]"></div> */}
    </div>
  );
};




