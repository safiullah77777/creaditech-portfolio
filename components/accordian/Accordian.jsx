import React, { useEffect, useRef } from "react";
// import './style.css'
const Accordian = ({ item, index }) => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref3 = useRef(null);

  return (
    <div className="main-accordian w-[100%] duration-200 ease-linear">
      <div
        ref={ref}
        onClick={() => {
          if (ref.current != null) {
            // ref.current.classList.toggle("auto-height");
        
            ref.current.style.backgroundColor = "#000";
            ref.current.style.zIndex = "11";
            ref3.current.classList.toggle("max-h-[40rem]");
            ref3.current.style.marginTop == "2rem"
              ? (ref3.current.style.marginTop = "0rem")
              : ref3.current.style.marginTop = "2rem";
              ref3.current.style.paddingTop == "2rem"
              ? (ref3.current.style.paddingTop = "0rem")
              : ref3.current.style.paddingTop = "2rem";
              ref3.current.style.borderTopWidth == "1px"
              ? (ref3.current.style.borderTopWidth = "0px")
              : ref3.current.style.borderTopWidth = "1px";

            
          }
          if (ref1.current !== null)
            ref1.current.classList.toggle("rotate-180");
        }}
        onBlur={() => {
          if (ref.current != null) {
            ref.current.classList.remove("auto-height");
            ref.current.style.backgroundColor = "#1e1e1e";
            ref.current.style.zIndex = "1";
            ref3.current.classList.remove("max-h-[40rem]");
            ref3.current.style.borderTopWidth = "0px"
            ref3.current.style.paddingTop = "0rem"
            ref3.current.style.marginTop = "0rem"
          }
          if (ref1.current !== null)
            ref1.current.classList.remove("rotate-180");
        }}
        className={`accordian-main w-[100%] items-center  duration-200 ease-linear`}
        tabIndex={0}
      >
        <div className="accordian-head  flex gap-[1rem] justify-center">
          <span className="accordian-title text-[2rem] leading-[100%] mx-auto">
            {item.q}
          </span>
          <div
            className="accordian-arrow-down duration-200 ease-linear"
            ref={ref1}
          >
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 -1.04907e-06L7 5L12 -1.74846e-07L14 1L7 8L6.11959e-07 0.999999L2 -1.04907e-06Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div
          ref={ref3}
          className="accordian-text mt-[0rem] border-solid border-[#fff]  text-[2rem] leading-[120%] text-[white]/[0.7]"
        >
          {item.a}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
