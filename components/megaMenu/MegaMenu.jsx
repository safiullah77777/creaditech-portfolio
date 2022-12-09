import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, FC, SetStateAction } from "react";
import { List } from "../../utils/consts";
import arrow from "../../public/assets/images/icons/arrow-fa2.svg";
import { Player } from "@lottiefiles/react-lottie-player";

const MegaMenu = ({ classes, setHover }) => {
  return (
    <div
      onMouseLeave={() => setHover(false)}
      className={` absolute top-0 left-0 invisible -z-[1] min-h-[50rem] w-full bg-[#1E1E1E] max-[850px]:hidden px-[4rem] pt-[14rem] opacity-0 shadow-megaMenu duration-300 ease-linear ${classes}`}
    >
      <div className="border-[rgba(255, 255, 255, 0.1)] w-full border-t-[1px] border-solid ">
        <div className="flex w-full justify-center gap-[4rem] py-[3rem]">
          {List.map((item, index) => {
            return (
              <div
                key={item.heading}
                className="flex  gap-[1rem] items-center  bg-[#313131] p-[4rem] rounded-[1.5rem]"
              >
                {/* <div className="">
                  <Image  loader={({ src }) => {
                return src;
              }} src={item.logo} alt="" />
                </div> */}
                <Player

                  src={item.lotti}
                  className="h-[20rem] w-[20rem] relative "
                  loop
                  autoplay
                  background="transparent"
                />
                <div className="flex flex-col gap-[1rem] items-center">
                  <h2 className="clash w-full  after:z-[100] -z-[0] text-[2.5rem] after:border-solid after:w-[19rem] mr-auto after:left-0 pb-[1rem] after:absolute relative after:bottom-0  after:border-b-[2px] after:border-[#FFFFFF]/[0.5] font-500 text-[#ffffff]">
                    {item.heading}
                  </h2>
                  <ul className="flex flex-col ">
                    {item.children.map((items) => {
                      return (
                        <li className="group  hover:text-[#ffe100] cursor-pointer Montserrat text-[1.6rem] font-400 text-[#ffffff]">
                            <Link key={items.title} href={items.link}>
                            <span className="flex items-center gap-[1rem]">
                              {items.title}
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 44 71"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={
                                  items.children
                                    ? "flex group-hover:rotate-90 ease-linear duration-100"
                                    : "hidden"
                                }
                              >
                                <path
                                  d="M-0.000488281 8.3425L27.0978 35.5L-0.000488281 62.6575L8.34201 71L43.842 35.5L8.34201 0L-0.000488281 8.3425Z"
                                  fill={"white"}
                                />
                              </svg>
                            </span>
                            {items?.children && (
                              <>
                                <ul className="flex overflow-hidden flex-col max-h-0 group-hover:max-h-[10rem] duration-300 ease-linear">
                                  {items.children.map((item1) => (
                                    <li
                                      className="text-center hover:text-[#ffe100] cursor-pointer Montserrat text-[1rem] font-400 text-[#ffffff]"
                                      key={item1.title}
                                    >
                                      {item1.title}
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                        </Link>
                          </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
