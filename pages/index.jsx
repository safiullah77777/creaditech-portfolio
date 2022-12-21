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
import { portfolioCards, serviceCards } from "../utils/card";
import VisibilitySensor from "react-visibility-sensor";
import Link from "next/link";
import { expertiseIcons } from "../utils/expertiseIcons";
import Card10 from "../components/card10/card10";
import { blogs } from "../utils/blogs";
import Banner3 from "../components/banner3/Banner3";
import { reviews } from "../utils/reviews";

// "scripts": {
//   "dev": "next dev",
//   "build": "next build",
//   "start": "next start",
//   "lint": "next lint"
// },

// "scripts": {
//   "dev": "node server.js",
//   "build": "next build",
//   "start": "NODE_ENV=production node server.js"
// },
const Home = () => {
  const carouselRef = React.useRef(null);
  const carouselRef1 = React.useRef(null);
  const [isHover, setHover] = useState(false);
  const [show, setShow] = useState(false);
  let resetTimeout;
  const breakPoints = [
    // { width: 750, itemsToShow: 1 },
    // { width: 950, itemsToShow: 2 },
    { width: 1100, itemsToShow: 3 },
    { width: 1367, itemsToShow: 4, itemsToScroll: 2 },
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
  function myArrow({ type, onClick }) {
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
        className={`${consts.PREV ? "rounded-r-[5px]" : "rounded-l-[5px]"
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
      <MetaHead
        link={"/"}
        title={"Best Web Development Company In The USA - Creaditech"}
        description={
          "Creaditech is one of the best web development company in the USA. We design and develop websites and web applications that will bring value to your customers."
        }
      />
      <Header />
      {/* <Banner /> */}
      <Banner3 />
      {/* <div className="grid grid-cols-3 max-[850px]:grid-cols-2 px-[0rem] pt-[0rem] max-[850px]:px-0">
        <Card10
          para={"Subheading description here for more details"}
          heading={"Fulfil Supermart Branding Kit Design"}
          src={require("../public/assets/images/service-image.png")}
        />
        <Card10
          para={"Subheading description here for more details"}
          heading={"Mr. pillar Branding Kit Design"}
          src={require("../public/assets/images/service-image1.png")}
        />
        <Card10
          para={"Subheading description here for more details"}
          heading={"fushius home decor Branding Kit Design"}
          src={require("../public/assets/images/service-image2.png")}
        />
        <Card10
          para={"Subheading description here for more details"}
          heading={"Fulfil Supermart Branding Kit Design"}
          src={require("../public/assets/images/service-image.png")}
        />
        <Card10
          para={"Subheading description here for more details"}
          heading={"Mr. pillar Branding Kit Design"}
          src={require("../public/assets/images/service-image1.png")}
        />
        <Card10
          para={"Subheading description here for more details"}
          heading={"fushius home decor Branding Kit Design"}
          src={require("../public/assets/images/service-image2.png")}
        />
      </div> */}
      {/* <div className=" rounded-[2rem] bg-[#ffe100] pt-[4rem] shadow-2xl my-[3rem] px-[4rem] max-[850px]:bg-none max-[850px]:mx-0 mx-[6rem] justify-center items-center flex flex-col  gap-[0rem] min-[850px]:gap-[2rem]  bg-cover bg-center bg-no-repeat pb-20  max-[850px]:h-auto  max-[850px]:p-0">
        <p className="robot-condensed text-center  text-[3rem]  font-700 text-[#111111]  max-[850px]:p-12 max-[850px]:pb-0  max-[850px]:text-[3rem] leading-[100%] max-[850px]:text-white">
          Offering cost-effective digital transformation for small businesses
          and startups that want to inspire the world with their products and
          services. We wish to empower you as we move forward in becoming
          universal market leaders in putting value-addition in Design, Branding
          and Technology.
        </p>
      </div> */}
      <section className="flex p-20 max-[850px]:flex-col max-[850px]:gap-[6rem] ">
        <div className="flex w-1/2 flex-col   max-[850px]:order-3 max-[850px]:w-full gap-[2rem]">
          <h2 className="robot-condensed text-[4rem] font-600 uppercase leading-[90%] text-[#5B5E71] max-[640px]:text-[40px]">
            why choose creaditech?
          </h2>
          <div className="flex flex-col gap-[1rem]">
            <p className="max-w-[58rem] text-16 font-300 text-[#000000] max-[640px]:text-[16px]">
              At this point, you might be considering why I shall I choose
              Creaditech to develop my website or web application? Well,
              Creaditech has a proven track record of developing custom websites
              and web applications for many years. We have an expert web
              development team that includes highly qualified and experienced
              UI/ UX designers, front-end developers, back-end developers,
              DevOps Engineers, QA experts, and a project manager.
            </p>
            <p className="max-w-[58rem] text-16 font-300 text-[#000000] max-[640px]:text-[16px]">
              We have been in the industry for years and have a long list of
              satisfied customers; we claim to be the best web development
              company just because of our expert team members and satisfied
              clients.
            </p>
          </div>
          <div className="hidden w-1/2 max-[850px]:flex max-[850px]:w-full">
            <Image
              loader={({ src }) => {
                return src;
              }}
              className="h-full w-full"
              src={imageChoose}
              alt="why choose creaditech"
            />
          </div>
          <div className="flex flex-wrap items-center gap-8 py-8 max-[850px]:justify-center">
            <Card2 show={show} numbers={500} text="Projects delivered" />
            <Card2 numbers={10} text="Years of experience" />
            <Card2 numbers={150} text="Team Members" />
            <Card2 numbers={20} text="Countries" />
          </div>
        </div>
        <div className="w-1/2 max-[850px]:hidden max-[850px]:w-full">
          <Image
            loader={({ src }) => {
              return src;
            }}
            className="h-full w-full"
            src={imageChoose}
            alt=""
          />
        </div>
      </section>

      {/* our service */}
      <section className="flex justify-center  px-[3rem] pt-32 pb-[4rem]">
        <div className="flex items-center max-[850px]:flex-col ">
          <h2 className="leading-1 robot-condensed m-auto flex h-[30rem] max-w-[28rem] items-center justify-center text-150 font-600 uppercase leading-[80%] text-black max-[640px]:text-[70px]  max-[640px]:font-900 min-[850px]:-rotate-90">
            Our <br /> Services
          </h2>
          <div className="flex  max-w-[100rem] flex-wrap gap-8 max-[850px]:justify-center">
            {serviceCards.slice(0, 6).map((item, index) => (
              <Link href={"/services" + item?.link}>
                {" "}
                <Card
                  styles={item.styles}
                  key={index}
                  heading1={item.title}
                  heading2={item.title1}
                  image={item.icon}
                />
              </Link>
            ))}
            {/* <div
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              className="border-[rgba(198, 206, 211, 1)] group flex h-[30rem] w-[30rem] flex-col items-center justify-center gap-4  overflow-hidden rounded-25 border-2 border-solid bg-black p-12 shadow-xl duration-300 ease-linear hover:border-0 hover:bg-yellow max-[500px]:w-[40rem] max-[500px]:h-[40rem]"
            >
              <div className=" group-hover:after:wi relative flex h-160 w-160  items-center justify-center ease-linear after:absolute after:bottom-0 after:left-0 after:h-full after:w-full after:rounded-full after:bg-[#E4E4E4] after:duration-700 group-hover:after:bg-black   ">
               
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
            </div> */}
          </div>
        </div>
      </section>
      {/* technologies min-[850px]:bg-[url('/assets/images/backgrounds/service-bg.png')] bg-[#2B2B2B]*/}
      <div className="flex bg-[#FFE100] px-[6rem] py-[4rem] gap-[4rem] max-[850px]:flex-col justify-center max-[850px]:items-center">
        <div className="flex ml-auto mt-[4rem] flex-col gap-[1rem] max-[850px]:max-w-full max-w-[75rem]">
          <h2 className="robot-condensed text-[5rem] text-[#2B2B2B] uppercase  font-600  leading-[100%]">
            Web Development Technologies And Frameworks We Work On
          </h2>
          <p className="Montserrat text-[2rem] leading-[130%] font-300 text-[#000000]">
            Ranging from front-end development technologies like React JS, Next
            JS, Angular JS, Vue JS, Bootstrap, etc to back-end development like
            Node JS, PHP, Python, MySQL, MongoDB, etc. Our software engineers
            are experts in all web development technologies and frameworks
            needed to deliver custom websites and web applications.
          </p>
        </div>
        <div className="mr-auto justify-center grid gap-[2rem] grid-cols-5 min-[851px]:ml-auto max-w-[65rem] max-[850px]:max-w-full rounded-[5rem] px-[4rem] pt-[3rem]">
          {expertiseIcons.map((item) => (
            <div className=" flex items-center">
              <Image
                src={item}
                loader={({ src }) => {
                  return src;
                }}
                alt=""
                className="w-6rem "
              />
            </div>
          ))}
        </div>
      </div>


      {/* industries we have */}
      <div className="flex bg-[#2B2B2B] py-24 pr-[4rem]  pl-[6rem] max-[850px]:flex-col max-[640px]:gap-[4rem]">
        <div className="flex w-[50%] flex-col gap-[2rem] max-[850px]:w-full  max-[850px]:items-center">
          <div className="clash flex max-w-[42rem] flex-wrap gap-x-[1rem] text-[8rem] font-600 leading-85 text-white max-[850px]:max-w-[100%] max-[850px]:justify-center max-[850px]:text-center ">
            Industries we've{" "}
            <p className="text-yellow  max-[850px]:text-white"> Worked</p> with
          </div>
          <p className="Montserrat mt-4 max-w-[460px] text-16 font-light leading-130 text-white max-[850px]:text-center max-[850px]:text-[2.5rem]">
            At this point, you might be considering why shall I choose
            Creaditech to get my software/ app developed or ask them to promote
            my business. Well, Creaditech has a proven track record of
            developing custom softwares and doing digital marketing for
            different brands. We have a team.
          </p>
        </div>
        <div className="max-[850px]:flex grid grid-cols-3 max-[1000px]:grid-cols-2 max-w-[90rem] mx-auto flex-wrap justify-center gap-[2.5rem] max-[850px]:mt-[3rem] max-[850px]:w-full">
          {industriesCards.map((item, index) => (
            <Card4 key={index} title={item.title} icon={item.icon} />
          ))}
        </div>
      </div>



      {/* our  portfolio*/}
      <div className="flex bg-[#2B2B2B] max-[850px]:py-[4rem] py-32 max-[850px]:px-8">
        <div className="mx-auto flex max-[850px]:flex-col max-[850px]:gap-[2rem]">
          <h2 className="leading-1 robot-condensed max-[850px]:leading-[100%] min-[850px]:mr-auto max-[850px]:text-center flex justify-center text-[14rem] max-[850px]:items-center font-600 uppercase leading-[80%] text-white max-[850px]:text-[10rem] max-[640px]:h-auto max-[640px]:w-auto max-[640px]:text-[7rem] max-[640px]:font-700 max-[350px]:text-[6rem] min-[850px]:m-auto min-[850px]:h-[30rem] min-[850px]:w-[25rem] min-[850px]:max-w-[310px] min-[850px]:-rotate-90  min-[850px]:items-center">
            Our <br /> Portfolio
          </h2>
          {/* <h2 className="leading-1 m-auto flex h-[30rem] max-w-[310px] items-center justify-center robot-condensed text-150 font-600 uppercase leading-[80%] text-black max-[640px]:text-[70px]  max-[640px]:font-900 min-[850px]:-rotate-90">
            Our <br /> Portfolio
          </h2> */}
          <div className="flex  max-w-[100rem] flex-wrap gap-8 max-[850px]:justify-center">
            {/* <Card heading1="website" heading2="Development" image={Image1} /> */}
            {/* <Card3 classes="" />
            <Card3 classes="!bg-[url('/assets/images/backgrounds/portfolio-img12.png')]" />
            <Card3 classes="!bg-[url('/assets/images/backgrounds/portfolio-img9.png')]" />
            <Card3 classes="!bg-[url('/assets/images/backgrounds/portfolio-img10.png')]" />
            <Card3 classes="!bg-[url('/assets/images/backgrounds/portfolio-img11.png')]" /> */}
            {portfolioCards.slice(0, 5).map((item, index) => (
              <Card3 classes="" img={item.img} />
            ))}
            <Link
              href={"/our-clients"}
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              className="group flex  h-[40rem] w-[31.3rem] flex-col items-center justify-center gap-4 overflow-hidden  bg-[#5B5E71] p-12   shadow-xl duration-300 ease-linear hover:border-0 hover:bg-yellow max-[400px]:h-[50rem] max-[400px]:w-[40rem]"
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
            </Link>
          </div>
        </div>
      </div>


      {/* impressed */}
      <div className="flex flex-col gap-[2rem] px-8 py-32">
        <h2 className="clash mx-auto text-[6rem] font-600 leading-[90%] text-[#2A2A2A] max-[640px]:text-center max-[640px]:text-[4rem]">
          Impressed?
        </h2>
        <>
          <Link
            href={"/contact-us"}
            className="clash flex text-center justify-center items-center mx-auto h-[70px] w-[43rem] rounded-[1rem] border-b-[6px] border-solid border-black/[0.4] bg-[#ED435C] px-12 text-[2.5rem]   font-500  text-white  active:scale-[1.01] max-[850px]:text-[20px] max-[400px]:w-[80%] "
          >
            Let’s Work Together
          </Link>
        </>
        {/* <Button title="Let’s Work Together" classes="" /> */}
      </div>
      {/* our happy clients */}
      <>
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
                        className={`h-[14px] w-[14px] cursor-pointer rounded-full ${activePage != index ? "bg-[#D9D9D9]" : "bg-black"
                          }  `}
                      ></div>
                    );
                  })}
                </div>
              );
            }}
          >
            {reviews.map((item,index)=><Card5 key={index} item={item} />)}
          </Carousel>
        </div>
      </>

      {/* Estimated projects */}
      <Link
        href={"/contact-us"}
        className="group  flex border-y-[6px] border-solid border-[#5B5E71] bg-[#C6CED3] max-[850px]:border-[#3D404E]"
      >
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
              <Image
                loader={({ src }) => {
                  return src;
                }}
                src={arrow}
                alt=""
              />
            </div>
            <div className=" absolute left-0 z-[1000]  duration-300 ease-linear group-hover:left-[37px]">
              <Image
                loader={({ src }) => {
                  return src;
                }}
                src={arrow}
                alt=""
              />
            </div>
            <div className=" absolute top-0 left-0  z-[1000]   duration-300 ease-linear group-hover:left-[74px]">
              <Image
                loader={({ src }) => {
                  return src;
                }}
                src={arrow}
                alt=""
              />
            </div>
            <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[111px]">
              <Image
                loader={({ src }) => {
                  return src;
                }}
                src={arrow}
                alt=""
              />
            </div>
            <div className=" absolute top-0 left-0   z-[1000] duration-300 ease-linear group-hover:left-[146px]">
              <Image
                loader={({ src }) => {
                  return src;
                }}
                src={arrow}
                alt=""
              />
            </div>
            <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[184px]">
              <Image
                loader={({ src }) => {
                  return src;
                }}
                src={arrow}
                alt=""
              />
            </div>
            <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[221px]">
              <Image
                loader={({ src }) => {
                  return src;
                }}
                src={arrow}
                alt=""
              />
            </div>
            <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[258px]">
              <Image
                loader={({ src }) => {
                  return src;
                }}
                src={arrow}
                alt=""
              />
            </div>
            <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[288px]">
              <Image
                loader={({ src }) => {
                  return src;
                }}
                src={arrow}
                alt=""
              />
            </div>
          </div>
        </div>
      </Link>



      {/* blogs */}
      <>
        <h2 className="clash mx-auto mb-[3rem] mt-[6rem] text-[6rem] pb-[1rem] border-solid border-[#2A2A2A] border-b-[.6rem] rounded-[.4rem] font-600 leading-[90%] text-[#2A2A2A] max-[640px]:text-center max-[400px]:text-[30px]">
          Blogs
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
                        className={`h-[14px] w-[14px] cursor-pointer rounded-full ${activePage != index ? "bg-[#D9D9D9]" : "bg-black"
                          }  `}
                      ></div>
                    );
                  })}
                </div>
              );
            }}
          >
            {blogs.map((item) => {
              return (
                <Link href={`/blog/${item?.title}`}>
                  <Card7 title={item?.h1} image={item.featuredImage.img} />
                </Link>
              );
            })}
            {/* <Card7 image={robot1} />
          <Card7 image={robot2} />
          <Card7 image={robot} />
          <Card7 image={robot1} />
          <Card7 image={robot2} />
          <Card7 image={robot} />
          <Card7 image={robot1} />
          <Card7 image={robot2} /> */}
            <Link href={"/blog"}>
              <Card6 />
            </Link>
          </Carousel>
        </div>
      </>

      {/* achieve your business */}
      <div className="bg-[#fff]  rounded-[2rem] pt-[4rem] shadow-2xl my-[1rem] px-[4rem] max-[850px]:bg-none max-[850px]:mx-0 mx-[6rem] justify-center items-center flex flex-col  gap-[0rem] min-[850px]:gap-[2rem]  bg-cover bg-center bg-no-repeat pb-20  max-[850px]:h-auto  max-[850px]:p-0">
        <h1 className="robot-condensed text-center  text-[4rem]  font-700 text-[#111111]  max-[850px]:p-12 max-[850px]:pb-0  max-[850px]:text-[4rem] leading-[100%] max-[850px]:text-white">
          Achieve Your Business Goals By Taking Web Development Services From
          The Best Web Development Company
        </h1>
        <div className="flex  flex-wrap gap-x-[.4rem] gap-y-[1rem] max-[850px]:p-12">
          {/* <p className="Montserrat flex flex-wrap text-[1.6rem] font-500 text-white/[0.7] max-[850px]:text-[16px]">
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
          })} */}
          <p className="Montserrat text-center flex flex-wrap text-[1.6rem] font-500 text-[#111111] max-[850px]:text-[16px]">
            “If your business is not on the Internet, then your business will be
            out of business.” This quote from Bill Gates proves the value of
            getting your business online. In this technology era, it is not
            difficult to develop websites, thanks to the multiple tutorials on
            YouTube and Udemy. However, developing a website or web application
            that is attractive and meets your business goals is not a piece of
            cake for everyone.
          </p>
          <p className="Montserrat text-center text-[1.6rem] font-500 text-[#111111] max-[850px]:text-[16px]">
            If you don’t have an attractive and mobile-friendly website, then
            there’s no reason to have a website. A study shows that{" "}
            <Link
              href="https://www.sweor.com/firstimpressions"
              rel="nofollow"
              className="anchor"
              target={"_blank"}
            >
              75% of users admit to make judgments on a company’s credibility
              based on its website
            </Link>
            , so if your website is not friendly and attractive, you won’t be
            able to generate leads.
          </p>
          <p className="Montserrat text-center text-[1.6rem] font-500 text-[#111111] max-[850px]:text-[16px]">
            Creaditech is one of the most reputable and trusted web development
            company and focuses on building websites and web applications that
            are user-friendly and SEO-optimized so that you can achieve your
            business goals. We have a team of expert web developers for every
            web technology that ensures your website meets your business goals.
          </p>
          <p className="Montserrat text-center text-[1.6rem] font-500 text-[#111111] max-[850px]:text-[16px]">
            Since 2015, we have worked with several B2B and B2C companies and
            have developed custom web applications for them; what makes us
            different from other web development companies is our research and
            development department and software engineers. Whether you are
            looking for{" "}
            <Link
              href="https://creaditech.com/services/cms-development"
              className="anchor"
            >
              CMS development services
            </Link>{" "}
            , or custom web development services, contact us and we will deliver
            a website or application with clear results that will help you
            achieve your business goals.
          </p>
        </div>
        <Image
          loader={({ src }) => {
            return src;
          }}
          width={1000}
          height={1000}
          className="hidden w-full max-[850px]:flex"
          src={"/assets/images/backgrounds/service-bg-mob.png"}
          alt=""
        />
      </div>
      <ImagesLine />
      <BottomNav index={0} />
      <Footer />
    </div>
  );
};

export default Home;
