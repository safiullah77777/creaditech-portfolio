import React, { Dispatch, FC, SetStateAction } from "react";

const MegaMenu= ({ classes ,setHover}) => {
  return (
    <div
    onMouseLeave={()=>setHover(false)}
      className={`absolute top-0 left-0 invisible -z-[1] min-h-[50rem] w-full bg-[#1E1E1E] px-[4rem] pt-[14rem] opacity-0 shadow-megaMenu duration-300 ease-linear ${classes}`}
    >
      <div className="border-[rgba(255, 255, 255, 0.1)] w-full border-t-[1px] border-solid"></div>
    </div>
  );
};

export default MegaMenu;
