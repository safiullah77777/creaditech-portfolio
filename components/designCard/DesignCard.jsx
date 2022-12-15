import Image from "next/image";
import React, { FC } from "react";
const DesignCard= ({ title1, title2, para, image, bg }) => {
  return (
    <div
      className={`bg-pos group flex w-[35rem] flex-col items-center  gap-[1rem] rounded-[10px] bg-[#D9D9D9]/[0.1]  bg-no-repeat p-[1rem]  pb-[3rem] ${bg}`}
    >
      <div className="design-icon relative before:duration-300 before:ease-linear group-hover:before:h-[110%] group-hover:before:w-[140%]">
        <Image  loader={({ src }) => {
                return src;
              }} src={image} alt="" className=" mt-[2rem] h-[9rem] w-[8.4rem]" />
      </div>
      <h2 className=" robot-condensed max-w-[18rem] mt-[1rem] text-center text-[3rem] font-700 leading-[100%] text-[#5B5E71]">
        {title1} {" "}
        {title2}
      </h2>
      <p className="Montserrat text-center text-[1.6rem] font-300 leading-[100%] text-[#000000]/[0.8]">
        {para}
      </p>
    </div>
  );
};

export default DesignCard;
