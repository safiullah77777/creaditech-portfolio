import React from "react";
import Card5 from "../components/card5/Card5";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Sliders from "../components/slider/Slider";
import Carousel from "react-elastic-carousel";
import money from "../public/assets/images/money.png";
import portfolio from "../public/assets/images/portfolio.png";
import portfolio1 from "../public/assets/images/backgrounds/portfolio.png";
import Image from "next/image";
import BottomNav from "../components/bottomNav/BottomNav";
import MetaHead from "../components/metaHead/MetaHead";

const Portfolio = () => {
  const carouselRef = React.useRef(null);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 2 },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 4 },
    { width: 1850, itemsToShow: 4 },
  ];

  return (
    <>
      <MetaHead />
      <Header />
      <div
        className="banner4 bg-[url('/assets/images/backgrounds/banner4.png')] relative flex min-h-[80vh] w-full justify-center bg-cover  bg-center bg-no-repeat pl-28 bg-blend-overlay max-[850px]:h-[624px]  max-[850px]:flex-col max-[850px]:p-0 
    max-[850px]:pt-[12rem] max-[500px]:px-[3rem]"
      >
        <div className="my-auto flex flex-col items-center gap-[1rem]">
          <h1 className="max-w-[54rem] text-[8rem] font-500 leading-[80%] text-white max-[850px]:text-center max-[500px]:mb-[4rem]  max-[500px]:text-[6rem]">
            Solix banking app
          </h1>
          <p className="Montserrat max-w-[53rem] text-[1.6rem] font-300 text-white max-[850px]:text-center max-[850px]:text-[16px]">
            We help companies grow by providing them the best software
            development and marketing services in the USA. Get in touch with our
            experts now and make your business reach your targeted audience.
          </p>
        </div>
        <div className="my-auto ml-auto mr-[6rem] grid grid-cols-2 gap-y-[2rem] gap-x-[7rem] max-[850px]:mx-auto max-[850px]:gap-[10rem]">
          <div className="flex flex-col">
            <p className="clash text-[2rem] font-300 text-[#FFFFFF]/[0.5]">
              Client
            </p>
            <h2 className="clash max-w-[20rem] text-[2.5rem] font-500 leading-[90%] text-white">
              Solix Bank
            </h2>
          </div>
          <div className="flex flex-col">
            <p className="clash text-[2rem] font-300 text-[#FFFFFF]/[0.5]">
              Categoory
            </p>
            <h2 className="clash max-w-[20rem] text-[2.5rem] font-500 leading-[90%] text-white">
              Fintech Solution
            </h2>
          </div>
          <div className="flex flex-col">
            <p className="clash text-[2rem] font-300 text-[#FFFFFF]/[0.5]">
              Date
            </p>
            <h2 className="clash max-w-[20rem] text-[2.5rem] font-500 leading-[90%] text-white">
              September 2021
            </h2>
          </div>
          <div className="flex flex-col">
            <p className="clash text-[2rem] font-300 text-[#FFFFFF]/[0.5]">
              Role
            </p>
            <h2 className="clash max-w-[20rem] text-[2.5rem] font-500 leading-[90%] text-white">
              Web UI Design & Development
            </h2>
          </div>
        </div>
      </div>
      <div className="flex  px-[6rem] py-[8rem] max-[850px]:flex-col max-[850px]:items-center max-[500px]:px-[3rem]  min-[850px]:px-[0rem]">
        <h2 className="relative left-0 my-auto flex  max-w-[26rem] flex-col  pb-[2rem] text-[6rem]  font-600 leading-[88%] text-[#000] after:absolute after:bottom-0 after:h-[5px]  after:w-[14rem] after:bg-[#000] max-[850px]:mb-[3rem] max-[850px]:text-center max-[850px]:after:left-[50%] max-[850px]:after:-translate-x-[50%] max-[500px]:text-[45px] max-[500px]:after:mx-auto min-[850px]:px-[3rem]">
          The Problem
        </h2>
        <p className="Montserrat ml-auto flex flex-1 text-[16px] font-300 text-[#5B5E71] min-[850px]:max-w-[80rem] min-[850px]:px-[3rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam
          maxime vero laboriosam tempore. Inventore iure aspernatur similique?
          Mollitia, magnam. Quidem, aliquam? Sint sequi animi ipsa quam
          voluptas, enim eaque fugiat eos ad distinctio eveniet exercitationem
          repellat aliquam adipisci! Dolores ducimus debitis neque quasi
          recusandae ullam provident, nisi suscipit placeat quae omnis eos nihil
          blanditiis beatae alias. Ipsum beatae, doloremque temporibus harum
          laborum reiciendis tenetur, error incidunt ab est sed impedit
          inventore consequuntur fugiat quas. Quaerat quidem, incidunt ipsam
          dolor blanditiis maxime.
          <br />
          <br /> Autem enim consequuntur fugit voluptate, expedita quasi dolorem
          cum fugiat totam placeat explicabo praesentium id harum reprehenderit
          culpa?
        </p>
      </div>

      <div className="my-[4rem] ">
        <Carousel
          // itemPosition="CENTER"
          showEmptySlots={true}
          // enableAutoPlay={true}
          focusOnSelect={true}
          renderArrow={() => <></>}
          breakPoints={breakPoints}
          itemPadding={[0, 10]}
          itemsToShow={3}
          renderPagination={({ pages, activePage, onClick }) => {
            return (
              <div className="my-12 flex gap-4">
                {pages.map((page, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => onClick(String(page))}
                      // active={isActivePage}
                      className={`h-[14px]  cursor-pointer duration-200 ease-linear  ${
                        activePage != index
                          ? "w-[14px] rounded-full bg-[#D9D9D9]"
                          : "w-[40px] rounded-10 bg-black"
                      }  `}
                    ></div>
                  );
                })}
              </div>
            );
          }}
        >
          <Image  loader={({ src }) => {
                return src;
              }} src={money} alt="" width={646} height={410} />
          <Image  loader={({ src }) => {
                return src;
              }} src={money} alt="" width={646} height={410} />
          <Image  loader={({ src }) => {
                return src;
              }} src={money} alt="" width={646} height={410} />
          <Image  loader={({ src }) => {
                return src;
              }} src={money} alt="" width={646} height={410} />
          <Image  loader={({ src }) => {
                return src;
              }} src={money} alt="" width={646} height={410} />
          <Image  loader={({ src }) => {
                return src;
              }} src={money} alt="" width={646} height={410} />
          <Image  loader={({ src }) => {
                return src;
              }} src={money} alt="" width={646} height={410} />
          <Image  loader={({ src }) => {
                return src;
              }} src={money} alt="" width={646} height={410} />
          <Image  loader={({ src }) => {
                return src;
              }} src={money} alt="" width={646} height={410} />
        </Carousel>
      </div>
      <div className="flex gap-[5rem]  px-[6rem] py-[8rem] max-[850px]:flex-col max-[850px]:px-[3rem]">
        <div className="flex flex-col gap-[4rem] ">
          <h2 className="relative left-0 my-auto  flex flex-col  pb-[2rem] text-[6rem]  font-600 leading-[88%] text-[#000] after:absolute after:bottom-0 after:h-[5px]  after:w-[14rem] after:bg-[#000] max-[850px]:mb-[3rem] max-[850px]:text-center max-[850px]:after:left-[50%] max-[850px]:after:-translate-x-[50%] max-[500px]:text-[45px] max-[500px]:after:mx-auto min-[850px]:max-w-[26rem]">
            The Story
          </h2>
          <div className="flex flex-col gap-[1rem]  min-[850px]:max-w-[80rem]">
            <p className="Montserrat ml-auto flex   flex-1 text-[16px] font-300 leading-[130%] text-[#5B5E71]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              ipsam maxime vero laboriosam tempore. Inventore iure aspernatur
              similique? Mollitia, magnam. Quidem, aliquam? Sint sequi animi
              ipsa quam voluptas, enim eaque fugiat eos ad distinctio eveniet
              exercitationem repellat aliquam adipisci! Dolores ducimus debitis
              neque quasi recusandae ullam provident, nisi suscipit placeat quae
              omnis eos nihil blanditiis beatae alias. Ipsum beatae, doloremque
              temporibus harum laborum reiciendis tenetur, error incidunt ab est
              sed impedit inventore consequuntur fugiat quas. Quaerat quidem,
              incidunt ipsam dolor blanditiis maxime. Autem enim consequuntur
              fugit voluptate, expedita quasi dolorem cum fugiat totam placeat
              explicabo praesentium id harum reprehenderit culpa?
            </p>
            <p className="Montserrat ml-auto flex  flex-1 text-[16px] font-300 leading-[130%] text-[#5B5E71]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              ipsam maxime vero laboriosam tempore. Inventore iure aspernatur
              similique? Mollitia, magnam. Quidem, aliquam? Sint sequi animi
              ipsa quam voluptas, enim eaque fugiat eos ad distinctio eveniet
              exercitationem repellat aliquam adipisci! Dolores ducimus debitis
              neque quasi recusandae ullam provident, nisi suscipit placeat quae
              omnis eos nihil blanditiis beatae alias. Ipsum beatae, doloremque
              temporibus harum laborum reiciendis tenetur, error incidunt ab est
              sed impedit inventore consequuntur fugiat quas. Quaerat quidem,
              incidunt ipsam dolor blanditiis maxime. Autem enim consequuntur
              fugit voluptate, expedita quasi dolorem cum fugiat totam placeat
              explicabo praesentium id harum reprehenderit culpa?
            </p>
          </div>
        </div>
        <div className="w-[53.5rem] max-[850px]:w-full ">
          <Image  loader={({ src }) => {
                return src;
              }}
            src={portfolio}
            alt=""
            className="w-full "
            width={646}
            height={550}
          />
        </div>
      </div>
      <div className="w-full bg-[url('/assets/images/backgrounds/portfolio.png')] bg-cover bg-no-repeat p-[4rem] min-[850px]:h-[74rem] min-[850px]:p-[8rem]">
        <h2 className="relative left-0 my-auto  flex flex-col  pb-[3rem] text-[6rem]  font-600 leading-[88%] text-[#FFFFFF] after:absolute after:bottom-0 after:h-[5px]  after:w-[14rem] after:bg-[#FFFFFF] max-[850px]:mb-[3rem] max-[850px]:text-center max-[850px]:after:left-[50%] max-[850px]:after:-translate-x-[50%] max-[500px]:text-[45px] max-[500px]:after:mx-auto min-[850px]:max-w-[26rem]">
          The Approach
        </h2>
        <div className="mt-[3rem] flex flex-col  gap-[1rem] min-[850px]:max-w-[64rem]">
          <p className="Montserrat ml-auto flex   flex-1 text-[16px] font-300 leading-[130%] text-[#FFFFFF]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            ipsam maxime vero laboriosam tempore. Inventore iure aspernatur
            similique? Mollitia, magnam. Quidem, aliquam? Sint sequi animi ipsa
            quam voluptas, enim eaque fugiat eos ad distinctio eveniet
            exercitationem repellat aliquam adipisci! Dolores ducimus debitis
            neque quasi recusandae ullam provident, nisi suscipit placeat quae
            omnis eos nihil blanditiis beatae alias. Ipsum beatae, doloremque
            temporibus harum laborum reiciendis tenetur, error incidunt ab est
            sed impedit inventore consequuntur fugiat quas. Quaerat quidem,
            incidunt ipsam dolor blanditiis maxime. Autem enim consequuntur
            fugit voluptate, expedita quasi dolorem cum fugiat totam placeat
            explicabo praesentium id harum reprehenderit culpa?
          </p>
        </div>
      </div>
      <Sliders />
      <BottomNav index={4} />

      <Footer />
    </>
  );
};

export default Portfolio;
