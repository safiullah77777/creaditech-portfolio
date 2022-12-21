import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Button from "../button/Button";
import Button2 from "../button2/Button2";
// import video from "../../public/assets/videos/globe.mp4";
const Banner3 = () => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef?.current?.play();
  }, []);
  return (
    <div className="w-full relative min-h-[80rem] max-[600px]:min-h-[100rem]">
      {/* <video controls width={'auto'} height="auto" autoPlay   className="w-full h-full">
        <source src={video} type="video/mp4" />
      </video> */}
      <video
        // poster="/assets/images/backgrounds/banner.png"

        autoPlay
        loop
        muted
        className="min-h-[80rem]  max-[600px]:min-h-[100rem]"
        src={"/assets/videos/globe.mp4"}
        type="video/mp4"
      />
      {/* <video
        ref={videoRef}
        loop
        muted
        autoPlay
        // poster="https://user-images.githubusercontent.com/28612032/172026551-e5a96748-d724-4a08-b6b3-f44655d4ef39.png"
        width="auto"
        className="w-full h-full"
      >
        <source src={video} />
      </video> */}
      <div className="flex bg-[#000000]/[0.2] px-[3rem] flex-col items-center w-full h-full justify-center absolute top-0 left-0 ">
        <div className="flex flex-wrap font-600 max-w-[70rem]  text-center gap-x-[15px] robot-condensed text-65 uppercase leading-85 text-white max-[850px]:justify-center max-[850px]:text-center max-[850px]:text-[5rem]">
          <h2>Transforming businesses through digital empowerment</h2>
        </div>
        <div className="my-8 flex items-center gap-8 max-[850px]:mx-auto  max-[400px]:flex-col">
          <Link href={"/contact-us"}>
            <Button classes="" title={"Get a Quote"} />
          </Link>
          <Link href={"/portfolio"}>
            <Button2 title={"View Our Work"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
