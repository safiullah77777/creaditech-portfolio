import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import ImagesLine from "../components/ImagesLine/ImagesLine";
import Footer from "../components/footer/Footer";
import Image1 from "../public/assets/images/creaditech-development.png";
import Image2 from "../public/assets/images/creaditech-mobile.png";
import Image3 from "../public/assets/images/creaditech-designing.png";
import Image4 from "../public/assets/images/creaditech-seo.png";
import Image5 from "../public/assets/images/creaditech-database.png";
import imageChoose from "../public/assets/images/why-choose.png";
// import Image2 from "../public/assets/";
import Card from "../components/card/Card";
import Card2 from "../components/card2/Card2";
import Card3 from "../components/card3/Card3";
import Card4 from "../components/card4/Card4";
import icon1 from "../public/assets/images/icons/cap.svg";
import icon2 from "../public/assets/images/icons/finance.svg";
import icon3 from "../public/assets/images/icons/e-commerce.svg";
import icon4 from "../public/assets/images/icons/sports.svg";
import icon5 from "../public/assets/images/icons/travel.svg";
import icon6 from "../public/assets/images/icons/resturant.svg";
import icon7 from "../public/assets/images/icons/health.svg";
import icon8 from "../public/assets/images/icons/fashion.svg";
import icon9 from "../public/assets/images/icons/video.svg";
import arrow from "../public/assets/images/icons/arrow-fa2.svg";
import React from "react";
import Carousel, { consts } from "react-elastic-carousel";
import Card5 from "../components/card5/Card5";
import Button from "../components/button/Button";
import Card7 from "../components/card7/Card7";
import Card6 from "../components/card6/Card6";
import BottomNav from "../components/bottomNav/BottomNav";
import robot from "../public/assets/images/robot.png";
import robot1 from "../public/assets/images/robot1.png";
import robot2 from "../public/assets/images/robot2.png";
import MetaHead from "../components/metaHead/MetaHead";
import { serviceCards } from "../utils/card";
import VisibilitySensor from "react-visibility-sensor";
const Home = () => {
  const carouselRef = React.useRef(null);
  const carouselRef1 = React.useRef(null);
  const [isHover, setHover] = useState(false);
  const [show, setShow] = useState(false);
  let resetTimeout;
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1850, itemsToShow: 6 },
  ];
  const industriesCards = [
    { title: "Education", icon: icon1 },
    { title: "Finance", icon: icon2 },
    { title: "E-commerce", icon: icon3 },
    { title: "Sports", icon: icon4 },
    { title: "Travel", icon: icon5 },
    { title: "Resturant", icon: icon6 },
    { title: "Health", icon: icon7 },
    { title: "Fashion", icon: icon8 },
    { title: "Video", icon: icon9 },
  ];
  //  const serviceCards = [
  //     { title: "website", title1: "Development", icon: Image1, styles: "" },
  //     {
  //       title: "Mobile App ",
  //       title1: "Development",
  //       icon: Image2,
  //       styles: "h-[120px] w-[120px]",
  //     },
  //     {
  //       title: "Graphic",
  //       title1: "Deigning",
  //       icon: Image3,
  //       styles: "h-[96px] w-[96px]",
  //     },
  //     {
  //       title: "Search Engine",
  //       title1: "Optimization",
  //       icon: Image4,
  //       styles: "h-[98px] w-[107px]",
  //     },
  //     {
  //       title: "Database",
  //       title1: "Solution",
  //       icon: Image5,
  //       styles: "h-[85px] w-[85px]",
  //     },
  //   ];
  const para = `Creaditech is one of the most reputable and trusted software development company and marketing agency in the USA. Since 2015, we have worked with several B2B and B2C
  companies and have developed custom softwares and websites for them.
  Apart from that, we have a team of expert, certified and highly
  educated digital marketers who work day and night to make your
  business recognized among your customers.`;
  function myArrow({ type, onClick, isEdge }) {
    const pointer =
      type === consts.PREV ? (
        <svg
          width="14"
          height="28"
          viewBox="0 0 14 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5075 27.4168C11.2211 27.4178 10.9382 27.3546 10.6795 27.2318C10.4208 27.1091 10.1929 26.93 10.0125 26.7076L0.754988 15.2076C0.473082 14.8647 0.31897 14.4345 0.31897 13.9905C0.31897 13.5466 0.473082 13.1164 0.754988 12.7735L10.3383 1.27346C10.6637 0.88204 11.1312 0.635893 11.638 0.589165C12.1448 0.542437 12.6494 0.698956 13.0408 1.02429C13.4322 1.34962 13.6784 1.81712 13.7251 2.32393C13.7718 2.83075 13.6153 3.33537 13.29 3.72679L4.72249 14.0001L13.0025 24.2735C13.2369 24.5548 13.3857 24.8974 13.4315 25.2607C13.4773 25.624 13.418 25.9928 13.2608 26.3235C13.1035 26.6542 12.8548 26.9329 12.5441 27.1266C12.2333 27.3204 11.8736 27.4211 11.5075 27.4168Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          width="14"
          height="28"
          viewBox="0 0 44 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-0.000488281 8.3425L27.0978 35.5L-0.000488281 62.6575L8.34201 71L43.842 35.5L8.34201 0L-0.000488281 8.3425Z"
            fill="white"
          />
        </svg>
      );
    return (
      <button
        className={`${
          consts.PREV ? "rounded-r-[5px]" : "rounded-l-[5px]"
        } flex h-[14rem] w-[4.5rem] items-center justify-center self-center bg-black disabled:cursor-not-allowed`}
        onClick={onClick}
        // disabled={isEdge}
      >
        {pointer}
      </button>
    );
  }
  return (
    <div className="flex min-h-screen flex-col">
      <MetaHead />
      <Header />
      <Banner />
      <ImagesLine />
      <div className="max-[850px]:bg-none flex h-450 flex-col bg-[#2B2B2B] min-[850px]:bg-[url('/assets/images/backgrounds/service-bg.png')] bg-cover bg-center bg-no-repeat p-20  max-[850px]:h-auto  max-[850px]:p-0">
        <h2 className="robot-condensed  text-30  font-700 text-yellow  max-[850px]:p-12  max-[850px]:text-[4rem] max-[850px]:leading-[100%] max-[850px]:text-white">
          We Design Custom Softwares & Provide Marketing Services
        </h2>
        <div className="flex max-w-[761px] flex-wrap gap-x-[.4rem] max-[850px]:p-12">
          <p className="Montserrat flex flex-wrap text-[1.6rem] font-500 text-white/[0.7] max-[850px]:text-[16px]">
            “If your business is not on the Internet, then your business will be
            out of business”. This quote from Bill Gates proves the value of
            getting your business online. However, getting your business
            software or website getting developed and then doing it’s marketing
            is not a piece of cake. You need to take help from an expert
            software development and marketing agency like Creaditech.
          </p>
          {para.split(" ").map((item, index) => {
            return (
              <p
                key={item + index}
                className={`Montserrat  index flex flex-wrap text-16 font-500  text-white/[0.7] max-[850px]:text-[16px] ${
                  item == "software" ||
                  item == "development" ||
                  item == "company" ||
                  item == "marketing" ||
                  item == "agency"
                    ? "font-700 !text-white"
                    : ""
                }`}
              >
                {item}
              </p>
            );
          })}
          {/* <p className="Montserrat flex flex-wrap text-16 font-500 text-white max-[850px]:text-[16px] ">
            Creaditech is one of the most reputable and trusted
          </p>
          <p className="Montserrat flex  flex-wrap  text-16 font-600 text-white max-[850px]:text-[16px]">
            software development company
          </p>
          <p className="Montserrat flex  flex-wrap  text-16 font-300 text-white max-[850px]:text-[16px]">
            and
          </p>
          <p className="Montserrat flex  flex-wrap text-16 font-600 text-white max-[850px]:text-[16px]">
            marketing agency
          </p>
          <p className="Montserrat flex  flex-wrap text-16 font-500 text-white max-[850px]:text-[16px]">
            in the USA. Since 2015, we have worked with several B2B and B2C
            companies and have developed custom softwares and websites for them.
            Apart from that, we have a team of expert, certified and highly
            educated digital marketers who work day and night to make your
            business recognized among your customers.
          </p> */}
        </div>
        <Image  loader={({ src }) => {
                return src;
              }}
          width={1000}
          height={1000}
          className="hidden w-full max-[850px]:flex"
          src={"/assets/images/backgrounds/service-bg-mob.png"}
          alt=""
        />
      </div>
      <section className="flex justify-center px-8 py-32  ">
        <div className="flex items-center max-[850px]:flex-col">
          <h2 className="leading-1 robot-condensed m-auto flex h-[30rem] max-w-[28rem] items-center justify-center text-150 font-600 uppercase leading-[80%] text-black max-[640px]:text-[70px]  max-[640px]:font-900 min-[850px]:-rotate-90">
            Our <br /> Service
          </h2>
          <div className="flex  max-w-[100rem] flex-wrap gap-8 max-[850px]:justify-center">
            {serviceCards.slice(0, 5).map((item, index) => (
              <Card
                styles={item.styles}
                key={index}
                heading1={item.title}
                heading2={item.title1}
                image={item.icon}
              />
            ))}
            <div
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              className="border-[rgba(198, 206, 211, 1)] group flex h-[30rem] w-[30rem] flex-col items-center justify-center gap-4  overflow-hidden rounded-25 border-2 border-solid bg-black p-12 shadow-xl duration-300 ease-linear hover:border-0 hover:bg-yellow max-[500px]:w-[40rem] max-[500px]:h-[40rem]"
            >
              <div className=" group-hover:after:wi relative flex h-160 w-160  items-center justify-center ease-linear after:absolute after:bottom-0 after:left-0 after:h-full after:w-full after:rounded-full after:bg-[#E4E4E4] after:duration-700 group-hover:after:bg-black   ">
                {/* <Image  loader={({ src }) => {
                return src;
              }} alt="" src={Image2} className="z-10" />
                {Image2} */}
                <svg
                  width="4.4rem"
                  height="7.1rem"
                  viewBox="0 0 44 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-translate-x-[1/2] -translate-y-[1/2] absolute  top-[1/2] left-[41%] z-10 duration-300 ease-linear group-hover:left-[55%]"
                >
                  <path
                    d="M-0.000488281 8.3425L27.0978 35.5L-0.000488281 62.6575L8.34201 71L43.842 35.5L8.34201 0L-0.000488281 8.3425Z"
                    fill={isHover ? "#ffe100" : "#1E1E1E"}
                  />
                </svg>
                <svg
                  width="4.4rem"
                  height="7.1rem"
                  viewBox="0 0 44 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-translate-x-[1/2] -translate-y-[1/2] absolute  top-[1/2] left-[41%] z-10 duration-300 ease-linear group-hover:left-[25%]"
                >
                  <path
                    d="M-0.000488281 8.3425L27.0978 35.5L-0.000488281 62.6575L8.34201 71L43.842 35.5L8.34201 0L-0.000488281 8.3425Z"
                    fill={isHover ? "#ffe100" : "#1E1E1E"}
                  />
                </svg>
              </div>
              <h2 className=" Montserrat upp text-center text-[4rem] font-600 leading-[80%] text-white group-hover:text-[#1E1E1E]">
                More <br /> Services
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="flex p-20 max-[850px]:flex-col max-[850px]:gap-[6rem] ">
        <div className="flex w-1/2 flex-col  max-[850px]:order-3 max-[850px]:w-full max-[640px]:gap-[2rem]">
          <h2 className="robot-condensed text-[4rem] font-600 uppercase leading-[90%] text-[#5B5E71] max-[640px]:text-[40px]">
            why choose creaditech?
          </h2>
          <div className="max-w-[58rem] text-16 font-300 text-[#000000] max-[640px]:text-[16px]">
            At this point, you might be considering why shall I choose
            Creaditech to get my software/ app developed or ask them to promote
            my business. Well, Creaditech has a proven track record of
            developing custom softwares and doing digital marketing for
            different brands. We have a team of expert{" "}
            <p className="text-blue-800">web developers</p>, app developers, and
            digital marketers who are always ready to cater to any development
            or marketing challenge.
            <br />
            We have been in the industry for years and have a long list of
            satisfied customers.
          </div>
          <div className="hidden w-1/2 max-[850px]:flex max-[850px]:w-full">
            <Image  loader={({ src }) => {
                return src;
              }} className="h-full w-full" src={imageChoose} alt="" />
          </div>
          <div className="flex flex-wrap items-center gap-8 py-8 max-[850px]:justify-center">
            <Card2 show={show} numbers={500} text="Projects delivered" />
            <Card2 numbers={10} text="Years of experience" />
            <Card2 numbers={150} text="Team Members" />
            <Card2 numbers={20} text="Countries" />
          </div>
        </div>
        <div className="w-1/2 max-[850px]:hidden max-[850px]:w-full">
          <Image  loader={({ src }) => {
                return src;
              }} className="h-full w-full" src={imageChoose} alt="" />
        </div>
      </section>
      <div className="flex bg-[#2B2B2B] py-32 max-[850px]:px-8">
        <div className="mx-auto flex max-[850px]:flex-col max-[850px]:gap-[2rem]">
          <h2 className="leading-1 robot-condensed mr-auto flex justify-center text-[14rem] font-600 uppercase leading-[80%] text-white max-[850px]:text-[10rem] max-[640px]:h-auto max-[640px]:w-auto max-[640px]:text-[7rem] max-[640px]:font-700 max-[350px]:text-[6rem] min-[850px]:m-auto min-[850px]:h-[30rem] min-[850px]:w-[25rem] min-[850px]:max-w-[310px] min-[850px]:-rotate-90  min-[850px]:items-center">
            Our <br /> Portfolio
          </h2>
          {/* <h2 className="leading-1 m-auto flex h-[30rem] max-w-[310px] items-center justify-center robot-condensed text-150 font-600 uppercase leading-[80%] text-black max-[640px]:text-[70px]  max-[640px]:font-900 min-[850px]:-rotate-90">
            Our <br /> Portfolio
          </h2> */}
          <div className="flex  max-w-[100rem] flex-wrap gap-8 max-[850px]:justify-center">
            {/* <Card heading1="website" heading2="Development" image={Image1} /> */}
            <Card3 classes="" />
            <Card3 classes="!bg-[url('/assets/images/backgrounds/portfolio-img12.png')]" />
            <Card3 classes="!bg-[url('/assets/images/backgrounds/portfolio-img9.png')]" />
            <Card3 classes="!bg-[url('/assets/images/backgrounds/portfolio-img10.png')]" />
            <Card3 classes="!bg-[url('/assets/images/backgrounds/portfolio-img11.png')]" />
            <div
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              className="group flex  h-[39.3rem] w-[31.3rem] flex-col items-center justify-center gap-4 overflow-hidden  bg-[#5B5E71] p-12   shadow-xl duration-300 ease-linear hover:border-0 hover:bg-yellow max-[400px]:h-[50rem] max-[400px]:w-[40rem]"
            >
              <div className=" group-hover:after:wi relative flex h-160 w-160  items-center justify-center ease-linear after:absolute after:bottom-0 after:left-0 after:h-full after:w-full after:rounded-full after:bg-[#E4E4E4] after:duration-700 group-hover:after:bg-black   ">
                {/* <Image  loader={({ src }) => {
                return src;
              }} alt="" src={Image2} className="z-10" />
                {Image2} */}
                <svg
                  width="4.4rem"
                  height="7.1rem"
                  viewBox="0 0 44 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-translate-x-[1/2] -translate-y-[1/2] absolute  top-[1/2] left-[41%] z-10 duration-300 ease-linear group-hover:left-[55%]"
                >
                  <path
                    d="M-0.000488281 8.3425L27.0978 35.5L-0.000488281 62.6575L8.34201 71L43.842 35.5L8.34201 0L-0.000488281 8.3425Z"
                    fill={isHover ? "#ffe100" : "#1E1E1E"}
                  />
                </svg>
                <svg
                  width="4.4rem"
                  height="7.1rem"
                  viewBox="0 0 44 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-translate-x-[1/2] -translate-y-[1/2] absolute  top-[1/2] left-[41%] z-10 duration-300 ease-linear group-hover:left-[25%]"
                >
                  <path
                    d="M-0.000488281 8.3425L27.0978 35.5L-0.000488281 62.6575L8.34201 71L43.842 35.5L8.34201 0L-0.000488281 8.3425Z"
                    fill={isHover ? "#ffe100" : "#5B5E71"}
                  />
                </svg>
              </div>
              <h2 className=" Montserrat upp text-center text-[4rem] font-600 leading-[80%] text-white group-hover:text-[#1E1E1E]">
                More <br /> Projects
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[2rem] px-8 py-32">
        <h2 className="clash mx-auto text-[6rem] font-600 leading-[90%] text-[#2A2A2A] max-[640px]:text-center max-[640px]:text-[4rem]">
          Let’s build your next Product
        </h2>
        <button className="clash mx-auto h-[70px] w-[43rem] rounded-[1rem] border-b-[6px] border-solid border-black/[0.4] bg-[#ED435C] px-12 text-[2.5rem]   font-500  text-white  active:scale-[1.01] max-[850px]:text-[20px] max-[400px]:w-[80%] ">
          Let’s Work Together
        </button>
        {/* <Button title="Let’s Work Together" classes="" /> */}
      </div>
      <div className="flex bg-[#2B2B2B] py-24 pr-[4rem]  pl-[6rem] max-[850px]:flex-col max-[640px]:gap-[4rem]">
        <div className="flex w-[50%] flex-col gap-[2rem] max-[850px]:w-full  max-[850px]:items-center">
          <div className="clash flex max-w-[42rem] flex-wrap gap-x-[1rem] text-[8rem] font-600 leading-85 text-white max-[850px]:max-w-[100%] max-[850px]:justify-center max-[850px]:text-center ">
            Industries we've{" "}
            <p className="text-yellow  max-[850px]:text-white"> Worked</p> with
          </div>
          <p className="mt-4 max-w-[460px] text-16 font-light leading-130 text-white max-[850px]:text-center max-[850px]:text-[2.5rem]">
            At this point, you might be considering why shall I choose
            Creaditech to get my software/ app developed or ask them to promote
            my business. Well, Creaditech has a proven track record of
            developing custom softwares and doing digital marketing for
            different brands. We have a team.
          </p>
        </div>
        <div className=" flex max-w-[90rem] flex-wrap justify-center gap-[2.5rem] max-[850px]:mt-[3rem] max-[850px]:w-full">
          {industriesCards.map((item, index) => (
            <Card4 key={index} title={item.title} icon={item.icon} />
          ))}
        </div>
      </div>
      <div className="flex flex-col px-12 py-28">
        <h2 className="clash mx-auto text-[6rem] font-600 leading-[90%] text-[#2A2A2A] max-[640px]:text-center max-[400px]:text-[30px]">
          Our Happy Clients
        </h2>
      </div>
      <div className="my-[4rem] ">
        <Carousel
          ref={carouselRef}
          {...consts}
          showEmptySlots
          // enableAutoPlay
          focusOnSelect={true}
          renderArrow={myArrow}
          onPrevStart={(currentItem, nextItem) => {
            if (currentItem.index === nextItem.index) {
              // we hit the last item, go to first item
              carouselRef.current.goTo(10);
            }
          }}
          onPrevEnd={({ index }) => {
            clearTimeout(resetTimeout);
            if (index + 1 === 0) {
              if (carouselRef?.current?.goTo) {
                resetTimeout = setTimeout(() => {
                  if (carouselRef?.current?.goTo) {
                    carouselRef?.current?.goTo(10);
                  }
                }, 3000);
              }
            }
          }}
          onNextStart={(currentItem, nextItem) => {
            if (currentItem.index === nextItem.index) {
              // we hit the last item, go to first item
              carouselRef.current.goTo(0);
            }
          }}
          onNextEnd={({ index }) => {
            clearTimeout(resetTimeout);
            if (index + 1 === 10) {
              if (carouselRef?.current?.goTo) {
                resetTimeout = setTimeout(() => {
                  if (carouselRef?.current?.goTo) {
                    carouselRef.current.goTo(0);
                  }
                }, 3000);
              }
            }
          }}
          breakPoints={breakPoints}
          // outerSpacing={100}
          itemPadding={[0, 10]}
          itemsToShow={3}
          renderPagination={({ pages, activePage, onClick }) => {
            console.log("===>", activePage);
            return (
              <div className="my-12 flex gap-4">
                {pages.map((page, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => onClick(String(page))}
                      // active={isActivePage}
                      className={`h-[14px] w-[14px] cursor-pointer rounded-full ${
                        activePage != index ? "bg-[#D9D9D9]" : "bg-black"
                      }  `}
                    ></div>
                  );
                })}
              </div>
            );
          }}
        >
          <Card5 />
          <Card5 />
          <Card5 />
          <Card5 />
          <Card5 />
          <Card5 />
          <Card5 />
          <Card5 />
          <Card5 />
          <Card5 />
        </Carousel>
      </div>
      <div className="group  flex border-y-[6px] border-solid border-[#5B5E71] bg-[#C6CED3] max-[850px]:border-[#3D404E]">
        <div className="relative flex w-1/2 bg-white py-[2rem] pl-[6rem] pr-[2rem] max-[850px]:w-full max-[850px]:flex-col max-[850px]:gap-[5rem] max-[850px]:bg-[#5B5E71] max-[850px]:py-[6rem]">
          <h2 className="clash relative  mx-auto text-[5.5rem] font-600 leading-[90%] text-[#3D404E] max-[850px]:text-center max-[850px]:text-white max-[640px]:text-[4rem]">
            We love to listen your requirements
          </h2>
          <button className="clash mx-auto h-[60px] rounded-[1.5rem] border-b-[6px] border-solid border-black/[0.4] bg-[#FFE100] px-[6rem] py-4 text-[2.5rem]  font-500 text-black  active:scale-[1.01] max-[400px]:w-[80%] min-[850px]:hidden ">
            Estimate Project
          </button>
          {/* <Button title="Let’s Work Together" classes="" /> */}
        </div>
        <div className="relative flex w-1/2  items-center gap-9 overflow-hidden duration-300 ease-linear after:absolute after:top-0 after:-left-[200%] after:h-full after:w-[90rem] after:bg-[#ffe100] after:duration-500 after:ease-linear group-hover:after:left-0 max-[850px]:hidden">
          <h2 className="clash z-20 my-[2rem] ml-[6rem] max-w-[24rem] bg-[trasnparent] text-[5.5rem] font-400 leading-[90%] text-[#1E1E1E] max-[640px]:text-center max-[640px]:text-[4rem]">
            Estimate Project
          </h2>
          <div className="relative z-[1000] flex flex-1 overflow-hidden">
            <div className=" top-0 left-0  z-[1000] duration-300 ease-linear group-hover:relative">
              <Image  loader={({ src }) => {
                return src;
              }} src={arrow} alt="" />
            </div>
            <div className=" absolute left-0 z-[1000]  duration-300 ease-linear group-hover:left-[37px]">
              <Image  loader={({ src }) => {
                return src;
              }} src={arrow} alt="" />
            </div>
            <div className=" absolute top-0 left-0  z-[1000]   duration-300 ease-linear group-hover:left-[74px]">
              <Image  loader={({ src }) => {
                return src;
              }} src={arrow} alt="" />
            </div>
            <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[111px]">
              <Image  loader={({ src }) => {
                return src;
              }} src={arrow} alt="" />
            </div>
            <div className=" absolute top-0 left-0   z-[1000] duration-300 ease-linear group-hover:left-[146px]">
              <Image  loader={({ src }) => {
                return src;
              }} src={arrow} alt="" />
            </div>
            <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[184px]">
              <Image  loader={({ src }) => {
                return src;
              }} src={arrow} alt="" />
            </div>
            <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[221px]">
              <Image  loader={({ src }) => {
                return src;
              }} src={arrow} alt="" />
            </div>
            <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[258px]">
              <Image  loader={({ src }) => {
                return src;
              }} src={arrow} alt="" />
            </div>
            <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[288px]">
              <Image  loader={({ src }) => {
                return src;
              }} src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <h2 className="clash mx-auto mb-[3rem] mt-[6rem] text-[6rem] font-600 leading-[90%] text-[#2A2A2A] max-[640px]:text-center max-[400px]:text-[30px]">
        Our Creative Blogs
      </h2>
      <div className="my-[4rem] ">
        <Carousel
          ref={carouselRef1}
          showEmptySlots
          // enableAutoPlay
          focusOnSelect={true}
          renderArrow={myArrow}
          breakPoints={breakPoints}
          onPrevStart={(currentItem, nextItem) => {
            if (currentItem.index === nextItem.index) {
              // we hit the last item, go to first item
              carouselRef1.current.goTo(10);
            }
          }}
          onPrevEnd={({ index }) => {
            clearTimeout(resetTimeout);
            if (index + 1 === 0) {
              if (carouselRef1?.current?.goTo) {
                resetTimeout = setTimeout(() => {
                  if (carouselRef1?.current?.goTo) {
                    carouselRef.current.goTo(10);
                  }
                }, 3000);
              }
            }
          }}
          onNextStart={(currentItem, nextItem) => {
            if (currentItem.index === nextItem.index) {
              // we hit the last item, go to first item
              carouselRef1.current.goTo(0);
            }
          }}
          onNextEnd={({ index }) => {
            clearTimeout(resetTimeout);
            if (index + 1 === 10) {
              if (carouselRef1?.current?.goTo) {
                resetTimeout = setTimeout(() => {
                  if (carouselRef1?.current?.goTo) {
                    carouselRef1.current.goTo(0);
                  }
                }, 3000);
              }
            }
          }}
          // outerSpacing={100}
          itemPadding={[0, 10]}
          itemsToShow={3}
          renderPagination={({ pages, activePage, onClick }) => {
            return (
              <div className="my-12 flex gap-4">
                {pages.map((page, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => onClick(page)}
                      // active={isActivePage}
                      className={`h-[14px] w-[14px] cursor-pointer rounded-full ${
                        activePage != index ? "bg-[#D9D9D9]" : "bg-black"
                      }  `}
                    ></div>
                  );
                })}
              </div>
            );
          }}
        >
          <Card7 image={robot} />
          <Card7 image={robot1} />
          <Card7 image={robot2} />
          <Card7 image={robot} />
          <Card7 image={robot1} />
          <Card7 image={robot2} />
          <Card7 image={robot} />
          <Card7 image={robot1} />
          <Card7 image={robot2} />
          <Card6 />
        </Carousel>
      </div>
      <Footer />
      <BottomNav index={0} />
    </div>
  );
};

export default Home;
