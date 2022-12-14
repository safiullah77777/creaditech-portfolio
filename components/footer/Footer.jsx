import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/assets/images/icons/@.svg";
import logo1 from "../../public/assets/images/icons/whatsapp-icon.svg";
import logo2 from "../../public/assets/images/icons/call-icon.svg";
import Tag from "../tag/Tag";
import facebook from "../../public/assets/images/icons/facebook-rounded.svg";
import insta from "../../public/assets/images/icons/insta-rounded.svg";
import twitter from "../../public/assets/images/icons/twitter-rounded.svg";
import linkedin from "../../public/assets/images/icons/linkedin-rounded.svg";
import pinterest from "../../public/assets/images/icons/pinterest-rounded.svg";
import Logo from "../../public/assets/images/Logo1.svg";
import Link from "next/link";
import contactForm from "../../services/fromService";
import { toast } from "react-toastify";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");
  
  return (
    <footer className="flex flex-col bg-primary px-24 pt-44 pb-24 max-[850px]:px-8  max-[600px]:pt-[4rem]">
      <div className="flex max-[850px]:flex-col">
        <div className="mb-28  flex w-1/2 flex-col items-center justify-center border-solid border-yellow py-16 max-[850px]:order-2 max-[850px]:w-full max-[850px]:border-none min-[850px]:border-r-2">
          <p className="heading-grey max-[400px]:text-[35px]">Contact</p>
          <Tag logo={logo} alt=" creaditech email" text="info@creaditech.com" />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            <Tag logo={logo2} alt="phone no" text="+1 2144734887" />
            <Tag logo={logo1} alt="whatsapp" text="WhatsApp" />
          </div>
          <p className="heading-grey my-8 border-solid border-[gray] max-[850px]:w-full max-[850px]:justify-center max-[850px]:border-t-2 max-[850px]:pt-[4rem] max-[850px]:text-center max-[400px]:text-[35px]">
            Connect
          </p>
          <div className="item-center flex gap-4">
            <Link
              href={"https://www.facebook.com/creaditech"}
              target="_blank"
              className="rounded-icons"
            >
              <Image unoptimized 
                loader={({ src }) => {
                  return src;
                }}
                src={facebook}
                className=""
                alt="creaditech facebook"
              />
            </Link>
            <Link
              href={"https://www.instagram.com/creaditech/"}
              target="_blank"
              className="rounded-icons"
            >
              <Image unoptimized 
                
                loader={({ src }) => {
                  return src;
                }}
                src={insta}
                className=""
                alt="creaditech instagram"
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/creaditechus/"}
              target="_blank"
              className="rounded-icons"
            >
              <Image unoptimized 
                
                loader={({ src }) => {
                  return src;
                }}
                src={linkedin}
                className=""
                alt="creaditech linkedin"
              />
            </Link>
            <Link
              href={"https://twitter.com/Creaditech"}
              target="_blank"
              className="rounded-icons"
            >
              <Image unoptimized 
                
                loader={({ src }) => {
                  return src;
                }}
                src={twitter}
                className=""
                alt="creaditech twitter"
              />
            </Link>
            <Link
              href={"https://www.pinterest.com/Creaditech/"}
              target="_blank"
              className="rounded-icons"
            >
              <Image unoptimized 
                
                loader={({ src }) => {
                  return src;
                }}
                src={pinterest}
                className=""
                alt="creaditech pinterest"
              />
            </Link>
          </div>
        </div>
        <div className="flex w-1/2 flex-col items-center py-16 max-[850px]:order-1 max-[850px]:w-full min-[600px]:px-8">
          <Image unoptimized 
            
            loader={({ src }) => {
              return src;
            }}
            src={Logo}
            className="logo max-[500px]:w-[59px]"
            alt="creaditech"
          />
          <p className="heading-grey robot-condensed my-10 text-[4.5rem] font-600 leading-[80%] max-[400px]:text-[30px]">
            Join our Newsletter
          </p>
          <div className="flex  items-center justify-center max-[850px]:w-full">
            <div className="flex w-380 max-[1100px]:w-[30rem] max-[850px]:w-[70rem] max-[850px]:max-w-[60rem]">
              <input
                placeholder="Email Address"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="inputs h-60 w-full rounded-5  border-b-8 border-solid bg-[#fff]/[0.2]  px-8 text-[1.6rem] font-300 text-white  outline-none  max-[850px]:h-[60px] max-[850px]:text-[16px]  "
                name="email"
                id=""
              />
              
            </div>
            <button disabled={loading} onClick={() => {
               const emailregex = new RegExp(
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
              );
              if (!emailregex.test(email)) { return toast.error('invalid email') };
              setLoading(true);
              contactForm({ email,type:"newsletter" }, setLoading)
              setEmail('')
            }} className="clash yellow-button relative flex h-60  min-w-[72px] items-center justify-center rounded-05 border-b-8 bg-yellow text-[2rem] text-black max-[850px]:-left-[2rem] max-[850px]:h-[60px] max-[850px]:rounded-[.5rem]  min-[500px]:w-120   min-[850px]:w-170 ">

              <span className="flex max-[850px]:hidden">{loading ? "loading..." : "Subscribe"}</span>
              <div className="mx-8 hidden max-[850px]:flex">
                {loading ? (
                  "..."
                ) : (
                  <svg
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.5877 12.6248L1.54564 2.07936L8.67416 12.6285L2.051 23.6757L24.5877 12.6248Z"
                      stroke="#1E1E1E"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </button>
          </div>
          <p className="Montserrat text-center mx-auto mt-8 max-w-[57rem] text-[1.6rem] leading-[130%] text-white max-[850px]:text-[16px] max-[400px]:text-center">
            Creaditech along with its team is scoring its winning goal in the
            world of Digital Marketing.The professionals of Creaditech are
            recognized as one of the most experienced and skilled
            creatives,around the world. Our professionals have high commands
            over online branding, SEO, Web designing and offering excellent
            customer services.
          </p>
        </div>
      </div>
      <div className="Montserrat flex  w-full flex-col items-center justify-center border-solid py-8 text-center text-[1.6rem] font-300 leading-[130%] text-white max-[600px]:text-[16px] max-[500px]:border-t-0 min-[500px]:border-gray-500 min-[850px]:border-t-2">
        ?? Copyright 2022 by Creaditech. All Rights Reserved.
      </div>
      <div className="Montserrat flex flex-wrap justify-center max-[678px]:mb-[7rem]">
        <Link
          href={"/privacy-policy"}
          className="cursor-pointer border-r-2 border-solid border-white px-8 text-[1.6rem] font-500 text-white"
        >
          Privacy Policy
        </Link>

        <Link
          href={"/terms-and-conditions"}
          className="cursor-pointer px-8 text-[1.6rem] font-500 text-white"
        >
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
