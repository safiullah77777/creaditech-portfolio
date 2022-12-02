import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const BlogPost = () => {
  return (
    <>
      {/* after:w-full after:h-full after:absolute after:top-0 after:z-[1000] after:bg-gradient-bg */}
      <Header />
      <div className="flex relative min-h-[65rem]  ">
        <Image
          loader={({ src }) => {
            return src;
          }}
          width={2000}
          height={1000}
          className="w-full h-full"
          src={require("../public/assets/images/robot-1.png")}
          alt=""
        />
        <div className="absolute flex flex-col gap-[1rem] w-[107.8rem] rounded-[3.5rem] bg-[#1E1E1E] p-[3rem] -bottom-[23rem] left-[50%] -translate-x-[50%]  -translate-y-[50%]">
          <h1 className="robot-condensed text-center leading-[100%] font-600 text-[6.5rem] text-[#ffffff] uppercase">
            At this point, you might be considering why shall
          </h1>
          <p className="bg-[#2B2B2B] rounded-[2rem] px-[1rem] py-[.1rem] mx-auto">
            <span className="text-[2rem] text-[#ffffff] font-700 clash">
              Uploaded on
            </span>
            <span className="text-[2rem] text-[#ffe100] font-300 clash">
              {" "}
              25-November-2022
            </span>
          </p>
        </div>
      </div>
      <div className="flex pt-[14rem] px-[8rem]">
        <div className="flex mr-auto flex-col rounded-t-[2rem] bg-[#EEEEEE] max-w-[33rem] overflow-hidden">
          <div className="bg-[#1E1E1E] w-full py-[1rem] ">
            <h2 className="text-[#ffffff] clash font-500 text-[2.5rem] w-full text-center">
              Contents
            </h2>
          </div>

          <div className="flex flex-col py-[1rem] gap-[.3rem]">
            <Link
              href={"#"}
              className="flex px-[2rem] py-[1rem]  gap-[0.5rem] Montserrat text-[1.6rem] font-600 bg-[#ffe100] leading-[130%] text-[#000000]"
            >
              <span>1.</span>
              <span>Understand what keywords people are searching for</span>
            </Link>
            <Link
              href={"#"}
              className="px-[2rem] py-[1rem] flex gap-[0.5rem] Montserrat text-[1.6rem] font-400 leading-[130%] text-[#5B5E71]"
            >
              <span>1.</span>
              <span>Understand what keywords people are searching for</span>
            </Link>
            <Link
              href={"#"}
              className="px-[2rem] py-[1rem] flex gap-[0.5rem] Montserrat text-[1.6rem] font-400 leading-[130%] text-[#5B5E71]"
            >
              <span>1.</span>
              <span>Understand what keywords people are searching for</span>
            </Link>
            <Link
              href={"#"}
              className="px-[2rem] py-[1rem] flex gap-[0.5rem] Montserrat text-[1.6rem] font-400 leading-[130%] text-[#5B5E71]"
            >
              <span>1.</span>
              <span>Understand what keywords people are searching for</span>
            </Link>
            <Link
              href={"#"}
              className="flex px-[2rem] py-[1rem]  gap-[0.5rem] Montserrat text-[1.6rem] font-600 bg-[#ffe100] leading-[130%] text-[#000000]"
            >
              <span>1.</span>
              <span>Understand what keywords people are searching for</span>
            </Link>
          </div>
        </div>

        <div className="flex ml-auto flex-col  max-w-[33rem] ">
          <h2 className="text-[#000000] leading-[110%] clash font-500 text-[2rem] w-full text-center">
            Share this Blog
          </h2>
          <div className="flex flex-col items-center bg-[#F9F9F9] rounded-[2rem] w-[33rem] py-[3rem] px-[2rem] ">
            <div className="w-[21rem] h-[21rem]">
              <Image
                loader={({ src }) => {
                  return src;
                }}
                width={2000}
                height={1000}
                className="w-full h-full"
                src={require("../public/assets/images/profile.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
