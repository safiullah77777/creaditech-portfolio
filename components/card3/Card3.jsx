import Image from "next/image";
import React, { FC, useState } from "react";

const Card3 = ({ classes, img, name, alt }) => {
  return (
    <>
      <div
        //group
        className={` relative flex h-[40rem] w-[31.3rem] items-end  bg-cover bg-no-repeat   duration-300 ease-linear max-[400px]:h-[50rem] max-[400px]:w-[40rem]  ${classes} `}
      >
        <div className="absolute overflow-hidden top-0 z-1 left-0 w-full h-full bg-[#000000]/[0.3]">
          <Image priority={true}
            src={img}
            alt={alt}
            loader={({ src }) => {
              return src;
            }}
            className="w-full "
          />
        </div>
        <span className="Montserrat  max-[500px]:flex hidden absolute left-[2rem] top-[2rem] justify-between rounded-[2rem] bg-[#3D404E] px-[1rem] py-[.4rem] text-[1rem] font-500 leading-[120%] text-white/[.7]">
          Logo Design
        </span>
        <div className="flex h-[100%] max-h-[8rem] w-full z-[10] flex-col overflow-hidden bg-card p-[1rem] duration-300 ease-linear min-[500px]:group-hover:max-h-[100%] min-[500px]:group-hover:pb-[3rem]">
          <h2 className=" clash mx-auto group-hover:mt-[4rem] text-[2rem] text-white">
            {name}
          </h2>
          {/* hidden  */}
          <p className="order-2 hidden text-16 text-center  leading-[120%]  text-white/[.5] duration-300 ease-linear   max-[500px]:overflow-hidden  min-[500px]:group-hover:order-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            quod cupiditate eaque corporis voluptates est blanditiis reiciendis
            ullam laboriosam explicabo expedita dolorem voluptatibus accusamus
            excepturi voluptate, aut animi aperiam, doloribus possimus impedit
            vitae! Dolore dicta minima facilis itaque amet expedita.
          </p>
          {/* flex >>>> hidden */}
          <div className="order-1 hidden  items-center justify-between py-6 max-[500px]:hidden min-[500px]:group-hover:order-2">
            <span className="Montserrat justify-between rounded-[2rem] bg-[#3D404E] px-[1rem] py-[.4rem] text-[.9rem] font-500 leading-[120%] text-white/[.7]">
              Logo Design
            </span>
            <span className="Montserrat rounded-[2rem] bg-[#3D404E] px-[1rem] py-[.4rem] text-[.9rem] font-500 leading-[120%] text-white/[.7]">
              Branding Design
            </span>
            <span className="Montserrat rounded-[2rem] bg-[#3D404E] px-[1rem] py-[.4rem] text-[.9rem] font-500 leading-[120%] text-white/[.7]">
              Web Development
            </span>
          </div>
          {/* hidden >>>flex */}
          <button className="order-3 flex my-auto mx-auto  h-[4rem]  w-[17rem]  cursor-pointer items-center justify-center rounded-[4rem] border-[.3rem] border-solid border-white bg-black-0.35 text-[1.6rem] font-600 text-white  duration-300 ease-linear min-[500px]:group-hover:flex">
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default Card3;
