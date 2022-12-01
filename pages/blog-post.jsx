import Image from "next/image";
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
            <span className="text-[2rem] text-[#ffe100] font-300 clash"> {" "}25-November-2022</span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
