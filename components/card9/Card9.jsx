import React, { FC, useState } from "react";

const Card9 = ({ title, job, experience, salary, keySkills, setShowModal }) => {
  return (
    <div
      onClick={() => setShowModal(true)}
      className="flex min-w-[425px] max-[450px]:min-w-[303px]  max-[400px]:w-[303px]  max-[500px]:max-w-[333px] cursor-pointer  flex-col rounded-[20px] border-[2px] border-solid border-[#1E1E1E] bg-[#F2F2F2] px-[3rem] py-[2rem] duration-300 ease-linear hover:shadow-cardShadow"
    >
      <h2 className="clash text-[35px] max-[500px]:text-[28px] font-500 leading-[100%] text-[#1E1E1E]">
        {title}
      </h2>
      <h4 className="clash mb-[3rem] text-[20px] max-[500px]:text-[16px] font-400 leading-[100%] text-[#303030]/[0.5]">
        {job}
      </h4>
      <div className="flex items-center gap-2">
        <p className="clash text-[20px] max-[500px]:text-[16px] font-500 text-[#1E1E1E]">
          Experience:{" "}
        </p>
        <p className="clash text-[20px] max-[500px]:text-[16px] font-400 text-[#1E1E1E]/[0.5]">
          {experience}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p className="clash text-[20px] max-[500px]:text-[16px] font-500 text-[#1E1E1E]">Salary: </p>
        <p className="clash text-[20px] max-[500px]:text-[16px] font-400 text-[#1E1E1E]/[0.5]">
          {salary}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p className="clash text-[20px] max-[500px]:text-[16px] font-500 text-[#1E1E1E]">
          Key Skills:{" "}
        </p>
        <p className="clash text-[20px] max-[500px]:text-[16px] font-400 text-[#1E1E1E]/[0.5]">
          {keySkills}
        </p>
      </div>

      <p className="mt-[2rem] cursor-pointer text-[14px] font-400 text-[#0377BC]">
        See complete Job description &#8594;
      </p>
    </div>
  );
};

export default Card9;
