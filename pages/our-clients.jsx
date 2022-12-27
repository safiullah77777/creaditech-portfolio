import Image from "next/image";
import React, { useState } from "react";
import Button from "../components/button/Button";
import Button2 from "../components/button2/Button2";
import Header from "../components/header/Header";
import client1 from "../public/assets/images/client1.png";
import client2 from "../public/assets/images/client2.png";
import client3 from "../public/assets/images/client3.png";
import client4 from "../public/assets/images/client4.png";
import client5 from "../public/assets/images/client5.png";
import client6 from "../public/assets/images/client6.png";
import client7 from "../public/assets/images/client7.png";
import Card3 from "../components/card3/Card3";
import Pagination from "../components/pagination/Pagination";
import Slider from "../components/slider/Slider";
import Footer from "../components/footer/Footer";
import BottomNav from "../components/bottomNav/BottomNav";
import MetaHead from "../components/metaHead/MetaHead";
import { portfolioCards } from "../utils/card";
import Link from "next/link";

// import client1 from '../public/assets/images/client1.png'

const OurClients = () => {
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [cat, setCat] = useState("all");

  return (
    <>
      <MetaHead
        title={"Our Portfolio - Creaditech"}
        description="View our delivered projects"
        link={"our-clients"}
      />

      <Header />
      <div
        className="banner3  bg-[url('/assets/images/backgrounds/banner3.png')]  relative flex h-[100vh] w-full  bg-cover bg-center bg-no-repeat bg-blend-overlay max-[850px]:h-[90rem] max-[850px]:flex-col max-[850px]:p-0 
    max-[850px]:pt-80"
      >
        <div className="m-auto flex h-full flex-col items-center justify-center font-semibold max-[850px]:mx-auto max-[850px]:max-w-full  max-[850px]:px-8 max-[850px]:pl-12 ">
          <h1 className="max-w-[71rem]  justify-center gap-[1.5rem] text-center robot-condensed text-[6.5rem] uppercase leading-[81%] text-white max-[850px]:text-center max-[850px]:text-[5rem]">
            Every <span className="text-yellow">Great </span>
            <span className="text-yellow">Brand</span> is Like a
            <span className="text-yellow"> Great Story</span>
            {/* {"Every "} <span className="text-yellow"> Great brands {" "}</span> is like a{" "}
            <span className="text-yellow"> grand story</span> */}
          </h1>
          {/* <p className="mt-4 text-center max-w-[53rem] text-[1.6rem] font-light leading-[130%] text-white max-[850px]:text-center max-[850px]:text-[2.5rem]">
            We help companies grow by providing them the best software
            development and marketing services in the USA. Get in touch with our
            experts now and make your business reach your targeted audience.
          </p> */}
          <div className="my-8 flex gap-8 max-[850px]:mx-auto  max-[400px]:flex-col">
            <Link href={"/contact-us"}>
              <Button classes="text-[2rem]" title={"Contact Us"} />
            </Link>
            {/* <Button2 classes="!text-[2rem]"  title={"Custom Quote"} /> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 py-[8rem]">
        <h2 className="clash mx-auto text-[6rem] font-600 leading-[90%] text-[#2A2A2A] max-[640px]:text-center max-[640px]:text-[4rem]">
          Our Clients
        </h2>

        <div className="marquee">
          <div className="marquee--inner">
            <div className="flex h-full">
              <Image
                priority={true}
                loader={({ src }) => {
                  return src;
                }}
                className="h-full"
                src={client1}
                alt="fushius"
                width={204}
                height={204}
              />
              <Image
                priority={true}
                loader={({ src }) => {
                  return src;
                }}
                className="h-full"
                src={client2}
                alt="animaxers"
                width={204}
                height={204}
              />
              <Image
                priority={true}
                loader={({ src }) => {
                  return src;
                }}
                className="h-full"
                src={client3}
                alt="mr pillar"
                width={204}
                height={204}
              />
              <Image
                priority={true}
                loader={({ src }) => {
                  return src;
                }}
                className="h-full"
                src={client4}
                alt="fulfil"
                width={204}
                height={204}
              />
              <Image
                priority={true}
                loader={({ src }) => {
                  return src;
                }}
                className="h-full"
                src={client5}
                alt="laviana"
                width={204}
                height={204}
              />
              <Image
                priority={true}
                loader={({ src }) => {
                  return src;
                }}
                className="h-full"
                src={client6}
                alt="cake king"
                width={204}
                height={204}
              />
              {/* <Image unoptimized  priority={true}
                loader={({ src }) => {
                  return src;
                }}
                className="h-full"
                src={client7}
                alt=""
                width={204}
                height={204}
              /> */}
            </div>
            <div className="flex h-full">
              <Image
                priority={true}
                loader={({ src }) => {
                  return src;
                }}
                className="h-full"
                src={client1}
                alt="fushius"
                width={204}
                height={204}
              />
              <Image
                priority={true}
                loader={({ src }) => {
                  return src;
                }}
                className="h-full"
                src={client2}
                alt="animaxers"
                width={204}
                height={204}
              />
              <Image
                priority={true}
                loader={({ src }) => {
                  return src;
                }}
                className="h-full"
                src={client3}
                alt="mr pillar"
                width={204}
                height={204}
              />
              <Image
                priority={true}
                loader={({ src }) => {
                  return src;
                }}
                className="h-full"
                src={client4}
                alt="fulfil"
                width={204}
                height={204}
              />
              <Image
                priority={true}
                loader={({ src }) => {
                  return src;
                }}
                className="h-full"
                src={client5}
                alt="laviana"
                width={204}
                height={204}
              />
              <Image
                priority={true}
                loader={({ src }) => {
                  return src;
                }}
                className="h-full"
                src={client6}
                alt="cake king"
                width={204}
                height={204}
              />
              {/* <Image unoptimized  priority={true}  loader={({ src }) => {
                return src;
              }}
								className="h-full"
								src={client7}
								alt=""
								width={204}
								height={204}
							/> */}
            </div>
          </div>
        </div>

        {/* <marquee direction="left">
          <div className="flex">
            <Image unoptimized  priority={true}
              loader={({ src }) => {
                return src;
              }}
              className="h-full"
              src={client1}
              alt=""
              width={204}
              height={204}
            />
            <Image unoptimized  priority={true}
              loader={({ src }) => {
                return src;
              }}
              className="h-full"
              src={client2}
              alt=""
              width={204}
              height={204}
            />
            <Image unoptimized  priority={true}
              loader={({ src }) => {
                return src;
              }}
              className="h-full"
              src={client3}
              alt=""
              width={204}
              height={204}
            />
            <Image unoptimized  priority={true}
              loader={({ src }) => {
                return src;
              }}
              className="h-full"
              src={client4}
              alt=""
              width={204}
              height={204}
            />
            <Image unoptimized  priority={true}
              loader={({ src }) => {
                return src;
              }}
              className="h-full"
              src={client5}
              alt=""
              width={204}
              height={204}
            />
            <Image unoptimized  priority={true}
              loader={({ src }) => {
                return src;
              }}
              className="h-full"
              src={client6}
              alt=""
              width={204}
              height={204}
            />
            <Image unoptimized  priority={true}
              loader={({ src }) => {
                return src;
              }}
              className="h-full"
              src={client7}
              alt=""
              width={204}
              height={204}
            />
            <Image unoptimized  priority={true}
              loader={({ src }) => {
                return src;
              }}
              className="h-full"
              src={client1}
              alt=""
              width={204}
              height={204}
            />
            <Image unoptimized  priority={true}
              loader={({ src }) => {
                return src;
              }}
              className="h-full"
              src={client2}
              alt=""
              width={204}
              height={204}
            />
            <Image unoptimized  priority={true}
              loader={({ src }) => {
                return src;
              }}
              className="h-full"
              src={client3}
              alt=""
              width={204}
              height={204}
            />
            <Image unoptimized  priority={true}
              loader={({ src }) => {
                return src;
              }}
              className="h-full"
              src={client4}
              alt=""
              width={204}
              height={204}
            />
            <Image unoptimized  priority={true}
              loader={({ src }) => {
                return src;
              }}
              className="h-full"
              src={client5}
              alt=""
              width={204}
              height={204}
            />
            <Image unoptimized  priority={true}
              loader={({ src }) => {
                return src;
              }}
              className="h-full"
              src={client6}
              alt=""
              width={204}
              height={204}
            />
            <Image unoptimized  priority={true}
              loader={({ src }) => {
                return src;
              }}
              className="h-full"
              src={client7}
              alt=""
              width={204}
              height={204}
            />
          </div>
        </marquee> */}
        {/* <div className="flex">
          <Image unoptimized  priority={true}  loader={({ src }) => {
                return src;
              }} src={client1} alt="" width={204} height={204} />
          <Image unoptimized  priority={true}  loader={({ src }) => {
                return src;
              }} src={client2} alt="" width={204} height={204} />
          <Image unoptimized  priority={true}  loader={({ src }) => {
                return src;
              }} src={client3} alt="" width={204} height={204} />
          <Image unoptimized  priority={true}  loader={({ src }) => {
                return src;
              }} src={client4} alt="" width={204} height={204} />
          <Image unoptimized  priority={true}  loader={({ src }) => {
                return src;
              }} src={client5} alt="" width={204} height={204} />
          <Image unoptimized  priority={true}  loader={({ src }) => {
                return src;
              }} src={client6} alt="" width={204} height={204} />
          <Image unoptimized  priority={true}  loader={({ src }) => {
                return src;
              }} src={client7} alt="" width={204} height={204} />
        </div> */}
        <div className="mt-[6rem] mb-[4rem] flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setCat("all")}
            className={`clash rounded-[10px]  ${
              cat == "all"
                ? "bg-[#000] text-white"
                : " border-[#000] border-solid border-[1px] bg-[white] text-[#000] hover:bg-[#000] hover:text-white"
            }  px-[2rem] py-[1.5rem] text-[20px] font-500 `}
          >
            All
          </button>
          <button
            onClick={() => setCat("web")}
            className={`clash rounded-[10px]  ${
              cat == "web"
                ? "bg-[#000] text-white"
                : " border-[#000] border-solid border-[1px] bg-[white] text-[#000] hover:bg-[#000] hover:text-white"
            }  px-[2rem] py-[1.5rem] text-[20px] font-500 `}
          >
            Web Developemnt
          </button>
          <button
            onClick={() => setCat("app")}
            className={`clash rounded-[10px]  ${
              cat == "app"
                ? "bg-[#000] text-white"
                : " border-[#000] border-solid border-[1px] bg-[white] text-[#000] hover:bg-[#000] hover:text-white"
            }  px-[2rem] py-[1.5rem] text-[20px] font-500 `}
          >
            App Developemnt
          </button>
          <button
            onClick={() => setCat("ui")}
            className={`clash rounded-[10px]  ${
              cat == "ui"
                ? "bg-[#000] text-white"
                : " border-[#000] border-solid border-[1px] bg-[white] text-[#000] hover:bg-[#000] hover:text-white"
            }  px-[2rem] py-[1.5rem] text-[20px] font-500 `}
          >
            UI / UX Design
          </button>
          <button
            onClick={() => setCat("design")}
            className={`clash rounded-[10px]  ${
              cat == "design"
                ? "bg-[#000] text-white"
                : " border-[#000] border-solid border-[1px] bg-[white] text-[#000] hover:bg-[#000] hover:text-white"
            }  px-[2rem] py-[1.5rem] text-[20px] font-500 `}
          >
            Graphic Design
          </button>
          <button
            onClick={() => setCat("content")}
            className={`clash rounded-[10px]  ${
              cat == "content"
                ? "bg-[#000] text-white"
                : " border-[#000] border-solid border-[1px] bg-[white] text-[#000] hover:bg-[#000] hover:text-white"
            }  px-[2rem] py-[1.5rem] text-[20px] font-500 `}
          >
            Content Writing
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-[1rem]">
          {cat == "all" ? (
            <>
              {portfolioCards.map((item, index) => {
                return (
                  <Card3
                    alt={item.alt}
                    key={index}
                    classes=""
                    name={item.name}
                    img={item.img}
                  />
                );
              })}
            </>
          ) : (
            <>
              {portfolioCards.slice(2, 4).map((item, index) => {
                return (
                  <Card3
                    alt={item.alt}
                    key={index}
                    classes=""
                    name={item.name}
                    img={item.img}
                  />
                );
              })}
            </>
          )}
        </div>
        {/* <Pagination /> */}
      </div>
      <Slider />
      <BottomNav />

      <Footer />
    </>
  );
};

export default OurClients;
