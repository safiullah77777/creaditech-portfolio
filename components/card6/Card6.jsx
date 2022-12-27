import React, { useState } from "react";

const Card6 = () => {
  const [isHover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="group relative z-50 flex  h-[300px] w-[314px]  max-[400px]:w-[230px] rounded-[10px] after:absolute after:top-0  after:left-0 after:z-0 after:h-[96%] after:w-full  after:rounded-[10px] after:border-2 after:border-b-[6px] after:border-solid after:border-black after:hover:border-[rgba(209,231,50,0.43)]  after:bg-[#2A2A2A] after:hover:bg-[#ffe100]  after:duration-300 after:ease-linear  after:hover:h-[100%]"
    >
      <div className="z-[10] flex h-[96%] w-full flex-col items-center justify-center gap-[1rem] p-[20px] ">
        {/* <div className="group flex  h-[39.3rem] w-[31.3rem] flex-col items-center justify-center  gap-4 overflow-hidden   bg-[transparent] p-12 shadow-xl duration-300 ease-linear hover:border-0 hover:bg-yellow"> */}
        <div className=" group-hover:after:w relative flex h-160 w-160 items-center justify-center ease-linear after:absolute after:bottom-0 after:left-0 after:h-full after:w-full after:rounded-full after:bg-white after:duration-700 group-hover:after:bg-black   ">
          <svg
            width="4.4rem"
            height="7.1rem"
            viewBox="0 0 44 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative  z-10 duration-300 ease-linear "
          >
            <path
              d="M-0.000488281 8.3425L27.0978 35.5L-0.000488281 62.6575L8.34201 71L43.842 35.5L8.34201 0L-0.000488281 8.3425Z"
              fill={isHover ? "#ffe100" : "black"}
            />
          </svg>
        </div>
        <p className=" robot-condensed uppercase text-center text-[3rem] font-600 leading-[80%] text-white  group-hover:text-black">
          More <br /> Blogs
        </p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Card6;
