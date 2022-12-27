import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

const Card = ({ image, heading1, heading2, styles,alt }) => {
  return (
    <div className="cursor-pointer border-[rgba(198, 206, 211, 1)] group flex h-[30rem] w-[30rem] max-[500px]:w-[40rem] max-[500px]:h-[40rem] flex-col items-center  justify-center gap-[3rem] overflow-hidden rounded-25 border-2 border-solid bg-[#F0F0F0] p-12 duration-300 ease-linear hover:border-0 hover:bg-black ">
      <div className={` group-hover:after:wi relative flex h-160 w-160 max-[500px]:h-[20rem] max-[500px]:w-[20rem] items-center justify-center group-hover:after:w-[40rem] max-[500px]:group-hover:after:w-[50rem] max-[500px]:group-hover:after:h-[50rem] group-hover:after:h-[40rem] max-[500px]:group-hover:after:left-[-75%] group-hover:after:left-[-73%] after:rounded-full after:duration-700 ease-linear after:absolute after:-bottom-[5%] after:-left-[5%] after:h-[110%] after:w-[110%] after:bg-[#E4E4E4]`}>
        <Image unoptimized priority={true} loader={({ src }) => {
          return src;
        }} alt={alt} className={`z-50 w-full h-full p-8 `} src={image} />
      </div>
      <h2 className=" Montserrat upp  max-[500px]:text-[25px] text-center uppercase text-[2.3rem] font-700 leading-[92%] text-[#1E1E1E] group-hover:text-white">
        {heading1} <br /> {heading2}
      </h2>
    </div>
  );
};

export default Card;
