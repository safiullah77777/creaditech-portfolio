import React from "react";
import Button from "../components/button/Button";
import Header from "../components/header/Header";
import Input from "../components/input/Input";
import Image from "next/image";
import Facbook from "../public/assets/images/Facbook.png";
import Youtube from "../public/assets/images/Youtube.png";
import Pintrest from "../public/assets/images/Pintrest.png";
import LinkedIn from "../public/assets/images/Linkedin.png";
import Instagram from "../public/assets/images/Instagram.png";
import Slider from "../components/slider/Slider";
import Footer from "../components/footer/Footer";
import BottomNav from "../components/bottomNav/BottomNav";
import MetaHead from "../components/metaHead/MetaHead";

const ContactUs = () => {
  return (
    <>
      <MetaHead />

      <Header />
      <div
        className=" bg-banner-grey  banner7  bg-[url('/assets/images/backgrounds/banner7.png')]   flex  min-h-[80rem]   w-full  bg-cover bg-center bg-no-repeat px-[2rem] pt-[20rem] bg-blend-overlay max-[950px]:gap-[3rem]  max-[950px]:pb-[5rem] 
    			max-[850px]:flex-col min-[500px]:px-28 "
      >
        <div className="flex h-full max-w-[700px] flex-col  gap-[2rem]  max-[850px]:mx-auto max-[850px]:max-w-full max-[400px]:items-center">
          <h2 className="clash text-[3rem] font-[500] leading-[79.5%] tracking-[0.02em] text-[#FFE100] ">
            Contact us
          </h2>
          <h1 className="clash text-[5rem] font-[500] leading-[79.5%] tracking-[0.02em] text-[#FFFFFF] max-[400px]:text-center ">
            Let’s work together.
          </h1>
          <h3 className=" clash text-[2.5rem] font-[400] leading-[79.5%] tracking-[79.5%] text-[#FFE100]">
            Call us:
          </h3>
          <p className="clash text-[2rem] font-[400] leading-[100%] tracking-[0.05em] text-[#FFFFFF] max-[400px]:text-center ">
            +1 (214) 473-4887
          </p>
          <h3 className=" clash text-[2.5rem] font-[400] leading-[79.5%] tracking-[79.5%] text-[#FFE100]">
            Email us:
          </h3>
          <p className="clash text-[2rem] font-[400] leading-[100%] tracking-[0.05em] text-[#FFFFFF] max-[400px]:text-center ">
            info@creaditech.com br sales@creaditech.com
          </p>
          <h3 className=" clash text-[2.5rem] font-[400] leading-[79.5%] tracking-[79.5%] text-[#FFE100]">
            Headquater Address:
          </h3>
          <p className="clash text-[2rem] font-[400] leading-[100%] tracking-[0.05em] text-[#FFFFFF] max-[400px]:text-center ">
            6600 McKinney RANCH PKWY, TX, 75070
          </p>
          <h3 className=" clash text-[2.5rem] font-[400] leading-[79.5%] tracking-[79.5%] text-[#FFE100] max-[400px]:text-center">
            Pakistan Office Address:
          </h3>
          <p className="clash text-[2rem] font-[400] leading-[100%] tracking-[0.05em] text-[#FFFFFF] max-[400px]:text-center ">
            Record room building, Office#B-1, MACHS, Karachi. 75350
          </p>
        </div>
        <div className="mx-auto flex h-full w-[65rem] flex-col justify-center gap-[2rem] max-[600px]:w-full min-[850px]:ml-auto ">
          <div className="flex gap-[2rem]">
            <div className="flex-1">
              <Input placeholder="Your Name" classes="w-full" type="text" />
            </div>
            <div className="flex-1">
              <Input placeholder="Phone*" classes="w-full" type="text" />
            </div>
          </div>
          <Input placeholder="Email Address *" classes="w-full" type="text" />
          <Input
            placeholder="Company Name (Optional)"
            classes="w-full"
            type="text"
          />
          <Input
            placeholder="Pick a Subject (optional)"
            classes="w-full"
            type="text"
          />

          <textarea
            placeholder="Write your message here..."
            className="w-full rounded-[5px] border-none bg-[#515151] p-[2rem] text-[1.6rem] font-300 text-[#FFFFFF]/[0.5] outline-none max-[400px]:h-[15.7rem]"
            name=""
            id=""
          ></textarea>
          <Button
            title="Send Now"
            classes="!rounded-[10px] !text-[2.5rem] !font-500"
          />
        </div>
      </div>

      <div className=" mt-[5rem] ">
        <h1 className=" robot-condensed items-center  text-center text-[6.5rem] font-[700] uppercase leading-[81%] text-[#000000] ">
          Connect Us On Social Media{" "}
        </h1>
        <div className="  flex flex-wrap justify-center gap-[2rem] py-[10rem]">
          <Image src={Facbook} alt="Facbook" width={144} height={144} />
          <Image src={Instagram} alt="Instagram" width={144} height={144} />
          <Image src={Pintrest} alt="Pintrest" width={144} height={144} />
          <Image src={LinkedIn} alt="LinkedIn" width={144} height={144} />
          <Image src={Youtube} alt="Youtube" width={144} height={144} />
        </div>
        <Slider />
      </div>
      <BottomNav />

      <Footer />
    </>
  );
};

export default ContactUs;
