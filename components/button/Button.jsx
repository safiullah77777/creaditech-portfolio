import React from "react";

const Button = ({ title, classes, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`clash  border-button box-border h-[5.5rem] rounded-96 bg-[#FFE100] px-12 max-sm:px-11 text-18 font-500  active:scale-[1.007] max-[850px]:h-[55px] max-[850px]:px-[5rem]  max-[850px]:text-[18px] max-[400px]:h-[55px] max-[400px]:text-[18px] ${classes}`}
    >
      {title}
    </button>
  );
};

export default Button;
