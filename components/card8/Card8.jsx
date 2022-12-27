import Image from "next/image";
import React from "react";
import robot from "../../public/assets/images/card8.png";

const Card8 = ({title,img}) => {
  return (
    <div className="group  relative z-10 flex h-[388px]  min-[501px]:max-w-[423px] rounded-[10px] border-2  border-b-[6px] border-solid border-[#5B5E71] bg-[#F3F3F3] max-[500px]:h-[50rem]  max-[500px]:max-w-[40rem] ">
      <div className="z-50  flex max-[500px]:w-full h-full flex-col gap-[1rem] p-[20px] max-[500px]:p-[10px]">
        <div className="relative flex h-[272px]  overflow-hidden duration-100 ease-linear  group-hover:h-[230px] max-[500px]:h-[160px] max-[500px]:w-full">
          <h2 className="clash absolute max-[500px]:rounded-[10px] left-[50%] top-[50%] z-[10000] hidden -translate-x-1/2 text-[24px] font-600 text-white group-hover:flex">
            Read More
          </h2>
          <Image unoptimized  priority={true}   loader={({ src }) => {
                return src;
              }}
            src={img}
            alt=""
            className="z-50 h-full w-full grayscale-0 group-hover:grayscale max-[500px]:h-full max-[500px]:w-full"
          />
        </div>
        <h2 className="clash text-[25px] max-[500px]:text-[15px] max-[500px]:leading-[100%] font-500 leading-[25px] text-[#1E1E1E]">
          {title}
        </h2>
        <p className="Montserrat mb-[4rem] min-[501px]:hidden text-[15px] font-[300] leading-[100%] text-[#1E1E1E]  group-hover:flex">
          At this point, you might be considering why shall I choose Creaditech
          to get my software/ app developed or ask them to promote my business.
        </p>
      </div>
    </div>
  );
};

export default Card8;
