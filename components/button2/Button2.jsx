import React from "react";

const Button2 = ({ title }) => {
  return (
    <div className="cursor-pointer  clash box-border max-[850px]:px-[4rem] flex h-[5.5rem] max-[850px]:h-[55px] items-center justify-center rounded-96 border-2 border-solid border-yellow max-[850px]:text-[18px]  bg-button hover:bg-[#000000]/[0.8] text-[12px] font-500 leading-[60%] text-yellow px-12 max-sm:text-[18px] max-sm:leading-[100%] ">
      {title}
    </div>
  );
};

export default Button2;
