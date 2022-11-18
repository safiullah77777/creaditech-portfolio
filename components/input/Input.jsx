import React, { FC } from "react";

const Input = ({
  type,
  classes,
  placeholder,
}) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        className={`rounded-[5px] outline-none border-none bg-[#515151] p-[2rem] text-[1.6rem] font-300 text-[#FFFFFF]/[0.5] ${
          classes ? classes : ""
        }`}
        alt=""
      />
    </div>
  );
};

export default Input;
