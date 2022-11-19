import React from "react";
import facebook from "../../public/assets/images/icons/facebook-rounded.svg";
import insta from "../../public/assets/images/icons/insta-rounded.svg";
import twitter from "../../public/assets/images/icons/twitter-rounded.svg";
import linkedin from "../../public/assets/images/icons/linkedin-rounded.svg";
import pinterest from "../../public/assets/images/icons/pinterest-rounded.svg";
import Image from "next/image";
import logo from "../../public/assets/images/icons/@.svg";
import logo2 from "../../public/assets/images/icons/call-icon.svg";
import Tag from "../tag/Tag";
import { List } from "../../utils/consts";
const SideNav = ({ classes}) => {
  return (
    <div
      className={` fixed flex-col  overflow-y-scroll top-0 left-0 items-center pb-[8rem]  z-[102323] h-[100vh] w-[320px] bg-[#1E1E1E] px-[4rem]   shadow-megaMenu duration-500 ease-linear ${classes}`}
    >
      <div className="flex w-full flex-col justify-around gap-[5rem] pt-[5rem] pb-[4rem] z-[102323] border-solid border-b-[2px] border-[#363636]">
        {List.map((item, index) => {
          return (
            <div key={item.heading} className="flex flex-col gap-[1rem] ">
              <h2 className="clash w-[200px]  text-[2.5rem] border-solid pb-[1rem] border-b-[2px] border-[#363636] font-500 text-[#ffffff]">
                {item.heading}
              </h2>
              <ul className="flex flex-col ">
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
      <div className="flex flex-col mt-[2rem] gap-[1rem] items-center">
        <Tag logo={logo2} classes="" text="+1 2144734887" />
        <Tag logo={logo} classes="" text="info@creaditech.com" />
        <div className="item-center flex gap-4">
          <div className="rounded-icons1">
            <Image src={facebook} className="w-[29px]" alt="" />
          </div>
          <div className="rounded-icons1">
            <Image src={insta} className="w-[29px]" alt="" />
          </div>
          <div className="rounded-icons1">
            <Image src={linkedin} className="w-[29px]" alt="" />
          </div>
          <div className="rounded-icons1">
            <Image src={twitter} className="w-[29px]" alt="" />
          </div>
          <div className="rounded-icons1">
            <Image src={pinterest} className="w-[29px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
