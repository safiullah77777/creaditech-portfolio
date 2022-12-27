import Image from "next/image";
import React from "react";
import coma from "../../public/assets/images/icons/coma.svg";
import star from "../../public/assets/images/icons/start.svg";
const Card5 = ({item}) => {
  return (
    <div className="group relative z-50 flex   min-h-[400px] w-[314px]  after:absolute after:top-0 after:left-0 after:z-40 after:h-[96%] after:w-full after:rounded-[10px] after:border-2 after:border-b-[6px] after:border-solid  after:border-black after:duration-300 after:ease-linear after:hover:h-[100%]">
      <div className="flex h-[96%] flex-col gap-[1rem] p-[20px]">
        <Image unoptimized  priority={true}  loader={({ src }) => {
                return src;
              }} alt="coma" width={30} height={27} src={coma} />
        <p className="clash text-[22px] h-[250px] overflow-hidden font-400 leading-[100%]">
          {item?.review}
        </p>
        <div className="mt-auto flex flex-col items-end">
          <div className="flex ">
            <Image unoptimized  priority={true}  loader={({ src }) => {
                return src;
              }} alt="star1" width={18} height={18} src={star} />
            <Image  priority={true}  loader={({ src }) => {
                return src;
              }} alt="star2" width={18} height={18} src={star} />
            <Image  priority={true}  loader={({ src }) => {
                return src;
              }} alt="star3" width={18} height={18} src={star} />
            <Image  priority={true}  loader={({ src }) => {
                return src;
              }} alt="star4" width={18} height={18} src={star} />
            <Image  priority={true}  loader={({ src }) => {
                return src;
              }} alt="star4" width={18} height={18} src={star} />
          </div>
          <p className="clash flex items-center pl-[30px] text-[20px] font-600 text-[#1E1E1E] before:h-[3px] before:w-[26px] before:rounded-5 before:bg-[#9747FF] ">
            {item?.name}
          </p>
          {/* <h2 className="clash flex items-center text-[15px] gap-[1rem] font-300 text-[#C6CED3]">
            CEO,  <span className="font-500"> Avantis Solutions</span>
          </h2> */}
        </div>
      </div>
    </div>
  );
};

export default Card5;
