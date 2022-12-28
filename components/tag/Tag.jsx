import Image from "next/image";
import React, { FC } from "react";

const Tag = ({ text, logo, classes, alt }) => {
  return (
    <div
      className={`flex items-center justify-center gap-4 rounded-10 bg-black px-8 py-4 ${classes}`}
    >
      <Image unoptimized
        
        loader={({ src }) => {
          return src;
        }}
        alt={alt}
        className="h-25 w-25  max-[400px]:h-[25px] max-[400px]:w-[25px]"
        src={logo}
      />
      <p className="text-[2rem] max-[400px]:text-[20px] text-white">{text}</p>
    </div>
  );
};

export default Tag;
