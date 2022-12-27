import Image from "next/image";
import React from "react";

const Card10 = ({ src, heading, para }) => {
  return (
    <div className="relative group h-[30rem]">
      <div className="w-full h-full">
        <Image unoptimized  priority={true}
          
          loader={({ src }) => {
            return src;
          }}
          src={src}
          className="w-full h-full "
        />
      </div>
      <div className="flex flex-col justify-end p-[2rem] absolute top-0 left-0 w-full ease-linear duration-300 h-full bg-transparent group group-hover:bg-[#000000]/[0.4]">
          <p className="relative -top-[.1rem] ease-linear duration-75 group-hover:top-0 robot-condensed capitalize text-[#fff] text-[3rem]  font-600 leading-[100%]" >{heading}</p>
          <p className="leading-[130%] Montserrat text-[1.6rem] text-[#ffffff] font-300 ">{para}</p>
      </div>
    </div>
  );
};

export default Card10;
