import Link from "next/link";
import React, { useState } from "react";
import { BottomList } from "../../utils/consts";
import SideNav from "../sideNav/SideNav";

const BottomNav = ({ index }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="fixed   bottom-0 left-0 z-[109990] hidden h-[70px]  w-full  max-[678px]:flex  ">
      <ul className="grid grid-cols-6 bg-[#C6CED3] px-[1px] mt-auto h-[60px] w-full justify-between">
        {BottomList(index).map((item, i) => {
          return (
            <Link href={item.link}>
              <li
                onClick={() => {
                  i == 3 && setOpenDrawer(true);
                }}
                className={` relative z-[1000]  flex h-[105%] cursor-pointer max-max-w-[12rem] items-center justify-center gap-[1rem]    p-[1rem] px-[3rem] ${
                  i === index
                    ? "after:absolute after:bottom-0 after:left-0 after:border-t-[white] after:bg-[#C6CED3]  after:-z-[2] after:h-[120%] after:w-full after:rounded-t-[10px]             before:absolute before:bottom-0 before:left-0  before:bg-[#1E1E1E]  before:-z-[1] before:h-[110%] before:w-full before:rounded-t-[6px]"
                    : ""
                }`}
              >
                <div className="-z-[1] flex gap-[1rem] items-center flex-col">
                  <span className="z-[100]">{item.icon}</span>
                  <span
                    className={`z-[100] text-[9px] font-600 leading-[81%] ${
                      index !== i ? "text-[#5B5E71]" : "text-[yellow]"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
      <SideNav classes={`${openDrawer ? "left-0" : "-left-[120%]"}`} />
      <div
        onClick={() => setOpenDrawer(false)}
        className={`${
          openDrawer ? "flex" : "hidden"
        } bg-[#000000]/[0.8] w-[100vw] h-[100vh] fixed top-0 left-0`}
      ></div>
    </div>
  );
};

export default BottomNav;
