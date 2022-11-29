import React from "react";
import Button from "../button/Button";
import Button2 from "../button2/Button2";
import loti from "../../public/assets/videos/new.json";
import { Player } from "@lottiefiles/react-lottie-player";
const Banner = () => {
  return (
    <div
      className=" bg-banner-grey relative flex w-full bg-[#2B2B2B] bg-cover bg-center bg-no-repeat  pl-28 bg-blend-overlay max-[850px]:h-auto max-[850px]:flex-col max-[850px]:p-0 
    max-[850px]:pt-[8rem] "
    >
      <div className="my-auto mt-auto max-[850px]:items-center flex h-full max-w-[57rem] flex-col justify-center font-semibold max-[1400px]:mt-[16rem] max-[850px]:mx-auto max-[850px]:max-w-full max-[850px]:px-8  max-[850px]:pl-12  ">
        <div className="flex flex-wrap  gap-x-[15px] robot-condensed text-65 uppercase leading-85 text-white max-[850px]:justify-center max-[850px]:text-center max-[850px]:text-[5rem]">
          {/* <p> Best</p> <p className="flex flex-wrap text-yellow">Software</p>{" "}
          <p className="flex flex-wrap text-yellow">development</p>
          <p> and</p>
          <p>marketing</p>
          <p> agency</p> */}
          <p>Best Web Development Company In The USA</p>
        </div>
        <p className="mt-4 max-w-[484px] text-16 font-light leading-130 text-white max-[850px]:text-center max-[850px]:text-[2.5rem]">
          Creaditech is one of the best web development company in the USA. We
          design and develop websites and web applications that will bring value
          to your customers.
        </p>
        <div className="my-8 flex gap-8 max-[850px]:mx-auto  max-[400px]:flex-col">
          <Button classes="" title={"Get a Quote"} />
          <Button2 title={"View Our Work"} />
        </div>
      </div>
      <div className="relative top-[6rem] right-0 flex h-full flex-1">
        {/* <video autoPlay muted className="h-full w-full">
          <source type="video/mp4" media="" src={"assets/videos/banner.mp4"} />
        </video> */}
        <Player
          src={loti}
          className="h-[90%] w-full relative "
          loop
          autoplay
          background="transparent"
        />
      </div>
    </div>
  );
};

export default Banner;
