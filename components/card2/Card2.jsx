import React, { FC, useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const Card2 = ({ numbers, text }) => {
  const [focus, setFocus] = useState(false);
  return (
    <div className="flex h-[17rem] w-[25rem]  flex-col items-center justify-center rounded-[16px] border-[.3rem] border-solid border-[#5B5E71]">
      <h2 className="clash text-[5rem] font-500 text-[#5B5E71]">
        {/* <CountUp end={Number(numbers)} prefix="+" /> */}
        <CountUp
          end={Number(numbers)}
          duration={0.5}
          redraw={false}
          scrollSpyOnce
          suffix="+"
        >
          {({ countUpRef, start }) => (
            <VisibilitySensor
              onChange={(isVisible) => {
                if (isVisible && !focus) {
                  start();
                  setFocus(true);
                } 
              }}
              delayedCall
            >
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
      </h2>
      <p className="Montserra text-[1.6rem] font-300 text-[#5B5E71]">{text}</p>
    </div>
  );
};

export default Card2;
