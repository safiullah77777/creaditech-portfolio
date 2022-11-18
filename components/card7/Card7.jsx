import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import robot from "../../public/assets/images/robot.png";



const Card7 = ({image}) => {
  return (
    <div className="group  after:bg-[#2A2A2A] relative z-10 flex h-[420px] w-[314px]  after:absolute after:top-0 after:left-0 after:z-40 after:h-[96%] after:w-full after:rounded-[10px] after:border-2 after:border-b-[6px] after:border-solid  after:border-black after:duration-300 after:ease-linear after:hover:h-[100%]">
      <div className="flex  h-[96%] flex-col z-50 gap-[1rem] p-[20px]">
        <Image src={image || robot} alt="" className="z-50" width={272} height={272} />
        <h2 className="clash text-white font-500 text-[25px] leading-[25px]">AI is awesome for this ara blaah blaah..</h2>
      </div>
    </div>
  );
};

export default Card7;
