import Image from "next/image";
import React, { Dispatch, FC, SetStateAction } from "react";
import { List } from "../../utils/consts";

const MegaMenu = ({ classes, setHover }) => {
 
  return (
    <div
      onMouseLeave={() => setHover(false)}
      className={` absolute top-0 left-0 invisible -z-[1] min-h-[50rem] w-full bg-[#1E1E1E] px-[4rem] pt-[14rem] opacity-0 shadow-megaMenu duration-300 ease-linear ${classes}`}
    >
      <div className="border-[rgba(255, 255, 255, 0.1)] w-full border-t-[1px] border-solid ">
        <div className="flex w-full justify-around py-[3rem]">
          {List.map((item, index) => {
            return (
              <div
                key={item.heading}
                className="flex flex-col gap-[1rem] items-center w-[25%]"
              >
                <div className="">
                  <Image src={item.logo} />
                </div>
                <h2 className="clash w-full text-center text-[2.5rem] border-solid pb-[1rem] border-b-[2px] border-[#ffffff] font-500 text-[#ffffff]">
                  {item.heading}
                </h2>
                <ul className="flex flex-col items-center">
                  {item.children.map((item) => {
                    return (
                      <li
                        key={item.title}
                        className="cursor-pointer Montserrat text-[1.6rem] font-400 text-[#ffffff]"
                      >
                        {item.title}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
