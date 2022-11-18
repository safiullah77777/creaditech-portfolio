import React, { useState } from "react";

const Pagination = () => {
    const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  return (
    <div className="my-[3rem] flex">
      <div className="mx-auto flex gap-3 rounded-[80px] bg-[#D9D9D9] py-[15px] px-[20px]">
        <span
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
          className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-white text-[18px] font-500 text-[#5B5E71] hover:bg-[#5B5E71] hover:text-white"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 14 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5075 27.4168C11.2211 27.4178 10.9382 27.3546 10.6795 27.2318C10.4208 27.1091 10.1929 26.93 10.0125 26.7076L0.754988 15.2076C0.473082 14.8647 0.31897 14.4345 0.31897 13.9905C0.31897 13.5466 0.473082 13.1164 0.754988 12.7735L10.3383 1.27346C10.6637 0.88204 11.1312 0.635893 11.638 0.589165C12.1448 0.542437 12.6494 0.698956 13.0408 1.02429C13.4322 1.34962 13.6784 1.81712 13.7251 2.32393C13.7718 2.83075 13.6153 3.33537 13.29 3.72679L4.72249 14.0001L13.0025 24.2735C13.2369 24.5548 13.3857 24.8974 13.4315 25.2607C13.4773 25.624 13.418 25.9928 13.2608 26.3235C13.1035 26.6542 12.8548 26.9329 12.5441 27.1266C12.2333 27.3204 11.8736 27.4211 11.5075 27.4168Z"
              fill={hover1 ? "white" : "#5B5E71"}
            />
          </svg>
        </span>
        <span className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-[#5B5E71] text-[18px] font-500 text-white">
          1
        </span>
        <span className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-white text-[18px] font-500 text-[#5B5E71] hover:bg-[#5B5E71] hover:text-white">
          2
        </span>
        <span className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-white text-[18px] font-500 text-[#5B5E71] hover:bg-[#5B5E71] hover:text-white">
          3
        </span>
        <span className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-white text-[18px] font-500 text-[#5B5E71] hover:bg-[#5B5E71] hover:text-white">
          4
        </span>
        <span className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-white text-[18px] font-500 text-[#5B5E71] hover:bg-[#5B5E71] hover:text-white">
          5
        </span>
        <span
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-white text-[18px] font-500 text-[#5B5E71] hover:bg-[#5B5E71] hover:text-white"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 44 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-0.000488281 8.3425L27.0978 35.5L-0.000488281 62.6575L8.34201 71L43.842 35.5L8.34201 0L-0.000488281 8.3425Z"
              fill={hover ? "white" : "#5B5E71"}
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Pagination;
