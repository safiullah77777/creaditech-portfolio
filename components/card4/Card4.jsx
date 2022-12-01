import Image from "next/image";
import React, { FC } from "react";

const Card4 = ({ icon, title }) => {
  return (//
    <div className="card4 flex    h-[140px] w-[20rem] min-w-[190px]  max-[640px]:h-[8rem] max-[640px]:w-[20rem] max-[640px]:rounded-tr-[20px] max-[640px]:rounded-[20px]  flex-col items-center justify-center gap-[10px] rounded-t-[20px]    to-[#2B2B2B]">
      <div className="  max-[640px]:hidden">
        {/* */}
        <Image  loader={({ src }) => {
                return src;
              }} alt="" src={icon} />
      </div>
      {/* max-[640px]:text-[#2B2B2B] max-[640px]:text-[2.4rem] */}
      <h2 className="clash text-[2rem]  font-600 text-[#C6CED3] ">{title}</h2>
    </div>
  );
};

export default Card4;
