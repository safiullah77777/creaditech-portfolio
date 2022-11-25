import Image from "next/image";
import React, { FC } from "react";

const Card4 = ({ icon, title }) => {
  return (
    <div className="card4 flex  max-[640px]:h-[8rem]  h-[140px] w-[20rem] min-w-[190px]  max-[640px]:w-[20rem] flex-col items-center justify-center gap-[10px] rounded-t-[20px] max-[640px]:rounded-tr-[0rem]  max-[640px]:rounded-l-[20px] to-[#2B2B2B]">
      <div className=" max-[640px]:hidden">
        <Image  loader={({ src }) => {
                return src;
              }} alt="" src={icon} />
      </div>
      <h2 className="clash text-[2rem] max-[640px]:text-[2.4rem] font-600 text-[#C6CED3] max-[640px]:text-[#2B2B2B]">{title}</h2>
    </div>
  );
};

export default Card4;
