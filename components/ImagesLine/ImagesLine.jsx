import Image from "next/image";
import React from "react";
import Image1 from "../../public/assets/images/creaditech-trustpilot.png";
import Image2 from "../../public/assets/images/creaditech-clutch.png";
import Image3 from "../../public/assets/images/creaditech-top-design-firms.png";
import Image4 from "../../public/assets/images/creaditech-business-reviews.png";
const ImagesLine = () => {
	// jjafafafafafaf
  return (
    <div className="flex flex-wrap items-center justify-center gap-28  min-[400px]:px-20 py-8 px-[2rem]">
      <div className="max-[400px]:w-[159px] max-[400px]:h-[90px]  ">
        <Image  priority={true}  loader={({ src }) => {
                return src;
              }} src={Image1} className="" alt="" width={146} height={62} />
      </div>
      <div className="max-[400px]:w-[159px] max-[400px]:h-[90px]">
        <Image  priority={true}  loader={({ src }) => {
                return src;
              }} src={Image2} className="" alt="" width={146} height={62} />
      </div>
      <div className="max-[400px]:w-[159px] max-[400px]:h-[90px]">
        <Image  priority={true}  loader={({ src }) => {
                return src;
              }} src={Image3} className="" alt="" width={146} height={62} />
      </div>
      <div className="max-[400px]:w-[159px] max-[400px]:h-[90px]">
        <Image  priority={true}  loader={({ src }) => {
                return src;
              }} src={Image4} className="" alt="" width={146} height={62} />
      </div>
    </div>
  );
};

export default ImagesLine;
