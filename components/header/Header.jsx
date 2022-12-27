import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../public/assets/images/Logo.svg";
import MegaMenu from "../megaMenu/MegaMenu";

import SideNav from "../sideNav/SideNav";
const Header = () => {
  const [isHover, setHover] = useState(false);
  
  return (
    <div className=" absolute top-0 left-0 z-[54] w-[100%] py-16 min-[720px]:px-[8rem] px-[2rem] ">
      <div className="hidden justify-center max-[677px]:flex">
        <Link href="/">
          <Image unoptimized  priority={true}  loader={({ src }) => {
                return src;
              }}
            src={Logo}
            className="h-[50px] w-[101px]"
            alt=""
            width={120}
            height={120}
          />
        </Link>
      </div>
      <ul className="flex w-full justify-center  gap-[4rem] max-[677px]:hidden min-[1000px]:gap-[8rem]">
        <li className="flex w-[11rem]   items-center justify-center">
          <Link href="/blog">
            <p className="text-[1.8rem] text-white">Blogs</p>
          </Link>
        </li>
        <li className="flex  w-[11rem]  items-center justify-center">
          <Link href="/about-us">
            <p className="text-[1.8rem] text-white">About</p>
          </Link>
        </li>
        <li className="flex w-[11rem]    items-center justify-center">
          <Link href="/services">
            <p
              className="text-[1.8rem] text-white"
              onMouseEnter={() => setHover(true)}
            >
              Services
            </p>
          </Link>
        </li>
        <li className="mx-auto w-[140px] max-[1000px]:w-[100px] ">
          <Link href="/">
            <Image unoptimized  priority={true}  loader={({ src }) => {
                return src;
              }}
              src={Logo}
              className="h-full w-full "
              alt=""
              width={120}
              height={120}
            />
          </Link>
        </li>
        <li className="flex w-[11rem]   items-center justify-center">
          <Link href="/our-clients">
            <p className="text-[1.8rem] text-white">Portfolio</p>
          </Link>
        </li>
        <li className="flex  w-[11rem]   items-center justify-center">
          <Link href="/careers">
            <p className="text-[1.8rem] text-white">Careers</p>
          </Link>
        </li>
        <li className="flex  w-[11rem]  items-center justify-center">
          <Link href="/contact-us">
            <p className="text-[1.8rem] text-white">Contact</p>
          </Link>
        </li>
      </ul>
      <MegaMenu
        setHover={setHover}
        classes={
          isHover 

            ? "!opacity-100 max-h-auto !visible"
            : "max-h-0 -z-[1000]"
        }
      />
    </div>
  );
};

export default Header;
