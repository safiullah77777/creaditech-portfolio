import React, { useEffect, useRef } from "react";
// import './style.css'
const Accordian= ({ index }) => {
  const ref = useRef(null);
  const ref1 = useRef(null);
 
  return (
    <div>
      <div className="main-accordian  duration-200 ease-linear">
        <div
          ref={ref}
          onClick={() => {
            if (ref.current != null) {
              ref.current.classList.toggle("auto-height");
              ref.current.style.backgroundColor = "#515151";
              ref.current.style.zIndex = "11";
            }
            if (ref1.current !== null)
              ref1.current.classList.toggle("rotate-180");
          }}
          onBlur={() => {
            if (ref.current != null) {
              ref.current.classList.remove("auto-height");
              ref.current.style.backgroundColor = "#1e1e1e";
              ref.current.style.zIndex = "1";
            }
            if (ref1.current !== null)
              ref1.current.classList.remove("rotate-180");
          }}
          className={`accordian-main  duration-200 ease-linear`}
          tabIndex={0}
        >
          <div className="accordian-head">
            <span className="accordian-title text-[20px] ">What is Solix</span>
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
          <div className="accordian-text text-[15px] leading-[120%] text-[white]/[0.7]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            omnis assumenda? Reiciendis corrupti atque at ipsum consequatur
            quaerat iste pariatur maxime assumenda nemo id, ab odit cum
            voluptate a laudantium perspiciatis dignissimos magnam! Fuga
            dolorum, quisquam sequi, optio nobis corrupti cupiditate rerum
            eligendi eaque ipsum quaerat quod omnis eum labore!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
