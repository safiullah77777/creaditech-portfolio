import React, { useState } from "react";
import Button from "../../components/button/Button";
import Button2 from "../../components/button2/Button2";
import Header from "../../components/header/Header";
import ImagesLine from "../../components/ImagesLine/ImagesLine";
import Image from "next/image";
import imageWriting from "../../public/assets/images/image-2.png";
import mono from "../../public/assets/images/mogogram.png";
import image3 from "../../public/assets/images/image-3.jpg";
import arrow from "../../public/assets/images/icons/arrow-fa2.svg";
import CardFull from "../../public/assets/images/Card-Full.png";
import PriceCard from "../../components/priceCard/PriceCard";
import DesignCard from "../../components/designCard/DesignCard";
import Slider from "../../components/slider/Slider";
import Input from "../../components/input/Input";
import Footer from "../../components/footer/Footer";
import Accordian from "../../components/accordian/Accordian";
import bxmessage from "../../public/assets/images/icons/bxmessage.svg";
import arcticons from "../../public/assets/images/icons/arcticons_minds.svg";
import iconpark from "../../public/assets/images/icons/iconpark.svg";
import arcticon from "../../public/assets/images/icons/arcti-con.svg";
import AiIcon from "../../public/assets/images/icons/Ai-icon.svg";
import comTick from "../../public/assets/images/icons/com-tick.svg";
import BottomNav from "../../components/bottomNav/BottomNav";
import MetaHead from "../../components/metaHead/MetaHead";
import { serviceCards } from "../../utils/card";
import Card from "../../components/card/Card";
import Link from "next/link";

const LogoService = () => {
  const [data, setData] = useState({});
  const [isHover, setHover] = useState(false);
  const onChange = (e) => {
    setData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const onSubmit = (e) => {
    const emailregex = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    const urlregex = new RegExp(
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
    );
    e.preventDefault();
    if (!emailregex.test(data.email)) {
      alert("invalid email address");
    } else if (!data.name) alert("invalid name");
    else if (!data.description) alert("invalid description");
    else if (!urlregex.test(data.url)) alert("invalid url");
  };

  return (
    <>
      <MetaHead
        title={"Our Services - Creaditech"}
        description="Few companies have the expertise to build and market your product
              on the Internet. Creaditech is one of those companies that
              provides digital transformation for your business."
        link={"services"}
      />
      <div className=" bg-black ">
        <Header />
      </div>
      <div
        className=" bg-banner-grey  flex min-h-[70rem] w-full  justify-evenly bg-[url('/assets/images/backgrounds/about-bg.png')]  bg-cover  bg-center bg-no-repeat px-[2rem] pt-[20rem] bg-blend-overlay max-[950px]:gap-[3rem] max-[950px]:pb-[5rem]  max-[850px]:flex-col 
    			min-[500px]:px-28 "
      >
        <div className="flex h-full max-w-[700px] flex-col justify-center gap-[2rem] font-semibold max-[850px]:mx-auto max-[850px]:max-w-full ">
          <h1 className="robot-condensed flex flex-wrap text-[6.5rem] font-600 uppercase leading-[85%] text-white  max-[1440px]:text-[6.5rem] max-[1300px]:text-[5rem] max-[850px]:justify-center max-[850px]:text-center max-[400px]:text-[5rem] min-[1600px]:text-[5rem]">
            OUR SERVICES
          </h1>
          <div className="detail-heading">
            <p className=" Montserrat mt-4  max-w-[646px] text-[2.2rem] font-[300] leading-[130%] text-white max-[850px]:text-center">
              Few companies have the expertise to build and market your product
              on the Internet. Creaditech is one of those companies that
              provides digital transformation for your business.
            </p>
            <div className="mt-[4rem] flex flex-wrap gap-8 max-[850px]:justify-center">
              {/* <Button classes="" title={"View Pricing & Plan"} /> */}
              <Link href={"/our-clients"}><Button2 classes={"!text-[2rem]"} title={"View Portfolio"} /></Link>
            </div>
          </div>
        </div>
        <form className="flex h-full flex-col justify-center gap-[2rem]">
          <div className="flex gap-[2rem]">
            <div className="flex-1">
              <Input
                onChange={onChange}
                name="name"
                placeholder="Your Name"
                classes="w-full"
                type="text"
              />
            </div>
            <div className="flex-1">
              <Input
                onChange={onChange}
                name="phone-no"
                placeholder="Phone*"
                classes="w-full"
                type="number"
              />
            </div>
          </div>
          <Input
            onChange={onChange}
            placeholder="Email Address*"
            name={"email"}
            classes="w-full"
            type="email"
          />
          <Input
            onChange={onChange}
            placeholder="Website URL"
            name="url"
            classes="w-full"
            type="text"
          />
          <textarea
            onChange={onChange}
            name="description"
            placeholder="Write your Requirements here..."
            className="w-full h-[106px] rounded-[5px] border-none bg-[#515151] p-[2rem] text-[1.6rem] font-300 text-[#FFFFFF]/[0.5] outline-none"
            id=""
          ></textarea>
          <Button
            onClick={onSubmit}
            type="submit"
            title="Send Now"
            classes="!rounded-[10px] !text-[2.5rem] !font-500"
          />
        </form>
      </div>
      <section className="flex justify-center px-8 py-32  ">
        <div className="flex items-center flex-col gap-[3rem]">
          <h2 className="leading-1 robot-condensed m-auto flex  items-center justify-center text-[10rem] font-600 uppercase leading-[80%] text-black max-[640px]:text-[7rem]  max-[640px]:font-900 ">
            Our Services
          </h2>
          <div className="flex  max-w-[100rem] flex-wrap gap-8 max-[850px]:justify-center">
            {serviceCards.slice(0, 6).map((item, index) => (
              <Link href={"/services" + item?.link} key={index}>
                <Card
                  styles={item.styles}
                  heading1={item.title}
                  heading2={item.title1}
                  image={item.icon}
                  alt={item?.alt}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <BottomNav index={3} />

      <Footer />
    </>
  );
};

export default LogoService;
