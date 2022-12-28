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
import Link from "next/link";
const SideNav = ({ classes }) => {
  return (
    <div
      className={` fixed flex-col  overflow-y-scroll top-0 left-0 items-center pb-[8rem]  z-[102323] h-[100vh] w-[300px] bg-[#1E1E1E] px-[4rem]   shadow-megaMenu duration-500 ease-linear ${classes}`}
    >
      <div className="flex w-full flex-col justify-around gap-[5rem] pt-[5rem] pb-[4rem] z-[102323] border-solid border-b-[2px] border-[#363636]">
        {List.map((item, index) => {
          return (
            <div key={item.heading} className="flex flex-col gap-[1rem] ">
              <p className="clash w-[200px]  text-[2.5rem] border-solid pb-[1rem] border-b-[2px] border-[#363636] font-500 text-[#ffffff]">
                {item.heading}
              </p>
              <ul className="flex flex-col ">
                {item.children.map((item) => {
                  return (
                    <Link href={item.link} key={item.title}>
                      <li className="cursor-pointer Montserrat text-[1.6rem] font-400 text-[#ffffff]">
                        {item.title}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col mt-[2rem] gap-[1rem] items-center">
        <Tag alt="phone no" logo={logo2} classes="" text="+1 2144734887" />
        <Tag alt="email" logo={logo} classes="" text="info@creaditech.com" />
        <div className="item-center flex gap-4">
          <div className="rounded-icons1">
            <Link href={"https://www.facebook.com/creaditech"} target="_blank">
              <Image unoptimized 
                
                loader={({ src }) => {
                  return src;
                }}
                src={facebook}
                className="w-[29px]"
                alt="creaditech facebook"
              />
            </Link>
          </div>
          <div className="rounded-icons1">
            <Link href={"https://www.instagram.com/creaditech"} target="_blank">
              <Image unoptimized 
                
                loader={({ src }) => {
                  return src;
                }}
                src={insta}
                className="w-[29px]"
                alt="creaditech instagram"
              />
            </Link>
          </div>
          <div className="rounded-icons1">
            <Link
              href={"https://www.linkedin.com/company/creaditechus"}
              target="_blank"
            >
              <Image unoptimized 
                
                loader={({ src }) => {
                  return src;
                }}
                src={linkedin}
                className="w-[29px]"
                alt="creaditech linkedin"
              />
            </Link>
          </div>
          <div className="rounded-icons1">
            <Link href={"https://twitter.com/Creaditech"} target="_blank">
              <Image unoptimized 
                
                loader={({ src }) => {
                  return src;
                }}
                src={twitter}
                className="w-[29px]"
                alt="creaditech twitter"
              />
            </Link>
          </div>
          <div className="rounded-icons1">
            <Link
              href={"https://www.pinterest.com/Creaditech/"}
              target="_blank"
            >
              <Image unoptimized 
                
                loader={({ src }) => {
                  return src;
                }}
                src={pinterest}
                className="w-[29px]"
                alt="creaditech pinterest"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
