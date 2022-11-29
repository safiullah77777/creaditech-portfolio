import Image from "next/image";
import React from "react";
import phone from "../../public/assets/images/phone.png";
import chat from "../../public/assets/images/chat.png";
import Button from "../button/Button";
import Link from "next/link";
const Slider = () => {
  return (
    <Link href={"/contact-us"} className="group flex border-y-[6px] border-solid border-[#5B5E71] bg-[#C6CED3] w-full  max-[850px]:border-[#3D404E]">
      <div className="relative  flex flex-1 items-center gap-[1rem] bg-white py-[2rem] px-[2rem] max-[850px]:w-full  max-[850px]:flex-col max-[850px]:gap-[5rem] max-[850px]:py-[6rem]  min-[850px]:pl-[6rem]">
        <h2 className="clash relative max-w-[30rem]  text-[5.5rem] font-600 leading-[90%] text-[#3D404E] max-[850px]:text-center  max-[850px]:text-[#3D404E] max-[640px]:text-[4rem]">
          Have a Question?
        </h2>
        <div className="flex items-center gap-4 max-[850px]:flex-col ">
          <div className="box-border  flex h-[77px] w-[77px] items-center justify-center rounded-full border-[5px] border-solid border-black bg-yellow duration-200 ease-linear group-hover:h-[80px] group-hover:w-[80px]">
            <Image  loader={({ src }) => {
                return src;
              }}
              alt=""
              className="h-[42px] w-[34px]  "
              src={phone}
              width={24}
              height={31}
            />
          </div>
          <div className="flex flex-col gap-0 max-[850px]:items-center">
            <p className="clash text-[20px] font-400 leading-[90%] text-[#1E1E1E]">
              Call us at
            </p>
            <p className="clash text-[35px] font-500 leading-[93%] text-[#1E1E1E] max-[400px]:text-[25px]">
              +1 (214) 473-4887
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 max-[850px]:flex-col ">
          <div className="box-border flex h-[77px] w-[77px] items-center justify-center rounded-full border-[5px] border-solid border-black bg-yellow duration-200 ease-linear group-hover:h-[80px] group-hover:w-[80px]">
            <Image  loader={({ src }) => {
                return src;
              }}
              alt=""
              className="h-[34px] w-[34px]  "
              src={chat}
              width={24}
              height={31}
            />
          </div>
          <div className="flex flex-col gap-0 max-[850px]:items-center">
            <p className="clash text-[20px] font-400 leading-[90%] text-[#1E1E1E]">
              24/7 Support
            </p>
            <p className="clash text-[35px] font-500 leading-[93%] text-[#1E1E1E] max-[400px]:text-[25px]">
              Live Chat
            </p>
          </div>
        </div>
        <div className="hidden max-[850px]:flex">

        <Button
          title="Start Your Project"
          classes="!font-500 !h-[60px] !text-[2.5rem] !rounded-[1.5rem] !border-black/[0.3] !px-[5rem]"
          />
          </div>
      </div>
      <div className="relative flex max-w-[33rem] items-center gap-9 overflow-hidden duration-300 ease-linear after:absolute after:top-0 after:-left-[500%] after:h-full after:w-[90rem] after:bg-[yellow] after:duration-700 after:ease-linear group-hover:after:left-0 max-[850px]:hidden">
        <h2 className="clash z-20 my-[2rem] ml-[6rem] max-w-[29rem] bg-[trasnparent] text-[4.5rem] font-400 leading-[90%] text-[#1E1E1E] max-[640px]:text-center max-[640px]:text-[4rem]">
          Start your Project
        </h2>
      </div>
    </Link>
  );
};

export default Slider;
