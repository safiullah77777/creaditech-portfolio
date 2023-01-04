import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { List } from "../../utils/consts";
import React, { useRef, useState } from "react";
import Button from "../../components/button/Button";
import Button2 from "../../components/button2/Button2";
import Header from "../../components/header/Header";
import ImagesLine from "../../components/ImagesLine/ImagesLine";
import Image from "next/image";
import imageWriting from "../../public/assets/images/image-2.png";
import mono from "../../public/assets/images/mogogram.png";
import image3 from "../../public/assets/images/image-3.jpg";
import arrow from "../../public/assets/images/icons/arrow-fa2.svg";
import CardFull from "../../public/assets/images/Card-Full.webp";
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
import { data } from "../../utils/data";
import Error404 from "../404";
import Link from "next/link";
import { Content } from "../../utils/content";
import contactForm from "../../services/fromService";
import { toast } from "react-toastify";
import { shuffle, ValidateHuman } from "../../utils/functions";
import ReCAPTCHA from "react-google-recaptcha";
import { siteKey } from "../../utils/keys";

const Services = ({ datas }) => {
  const countings = [
    "two.svg",
    "two.svg",
    "one.svg",
    "four.svg",
    "five.svg",
    "six.svg",
  ];
  const [hydrated, setHydrated] = useState(false);
  const [loading, setLoading] = useState(false);
  const refCaptcha = useRef(null)
  React.useEffect(() => {
    setHydrated(true);
  }, []);

  const router = useRouter();
  const { serviceName } = router.query;
  const check = List.map((item) => item.children.map((item1) => item1)).reduce(
    (prev, next) => prev.concat(next)
  );
  let randomItems = shuffle(
    shuffle(
      shuffle(shuffle(check.filter((item) => !item.link.includes(serviceName))))
    )
  ).slice(3, 7);
  const content = data.filter((data) => data?.page === serviceName)[0];
  const pageContent = Content.filter((data) => data?.page === serviceName)[0];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    url: "",
    description: "",
  });
  const onChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const emailregex = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    const nameregex = new RegExp(/^[a-zA-Z][a-zA-Z ]*$/);
    const urlregex = new RegExp(
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
    );
    if (loading) return;
    else if (
      formData?.name?.length <= 0 ||
      formData?.phoneNo?.length <= 0 ||
      formData?.description?.length <= 0
    ) {
      toast.error("please fill the form.");
      refCaptcha?.current?.reset();
      return;
    }

    if (!nameregex.test(formData.name)) {
      toast.error(
        "invalid name.you can not use special characters in your name."
      );
      refCaptcha?.current?.reset();
      return;
    } else if (!emailregex.test(formData.email)) {
      toast.error("invalid email address");
      refCaptcha?.current?.reset();
      return;
    } else if (!urlregex.test(formData.url)) {
      toast.error("invalid url");
      refCaptcha?.current?.reset();
      return;
    }
    const token = await refCaptcha?.current?.executeAsync();
    console.log({ token })
    const response = await fetch('/api/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token })
    })
    const check =await response.json();
    if(!check?.success){
      toast.error(check?.message);
      refCaptcha?.current?.reset();
      return;
    }
    refCaptcha?.current?.reset();
    setLoading(true);
    contactForm({ ...formData, type: "service" }, setLoading);
    setFormData(prev => ({ ...prev, name: "", email: "", phoneNo: "", url: "", description: "" }));
  };

  if (!datas[0].page) return <Error404 />;
  return (
    <>
      <MetaHead
        title={datas[0]?.meta?.title}
        description={datas[0]?.meta?.description}
        link={datas[0]?.meta?.link}
      />

      <Header />

      <div
        className=" bg-banner-grey  flex min-h-[70rem] w-full  justify-evenly bg-[url('/assets/images/backgrounds/about-bg.webp')]  bg-cover  bg-center bg-no-repeat px-[2rem] pt-[20rem] bg-blend-overlay max-[950px]:gap-[3rem] gap-[5rem] max-[950px]:pb-[5rem]  max-[850px]:flex-col 
    			min-[500px]:px-28 "
      >
        <div className="flex h-full max-w-[66rem]  flex-col justify-center gap-[1rem] font-semibold max-[850px]:mx-auto max-[850px]:max-w-full ">
          <h1 className="robot-condensed  gap-x-[1rem] flex-wrap text-[4rem] font-600 uppercase leading-[110%] text-white  max-[1440px]:text-[6.5rem] max-[1300px]:text-[5rem] max-[850px]:justify-center max-[850px]:text-center max-[400px]:text-[5rem] min-[1600px]:text-[3.8rem]">
            {/* {content?.h1?.pre
              .trim()
              .split(" ")
              .map((item) => (
                <span>{item}</span>
              ))}{" "}
            {content?.h1?.main
              .trim()
              .split(" ")
              .map((item) => (
                <span className=" text-yellow">{item}</span>
              ))}{" "}
            {content?.h1?.post
              .trim()
              .split(" ")
              .map((item) => (
                <span>{item}</span>
              ))} */}
            {content?.h1?.pre.trim()}{" "}
            <span className=" text-yellow">{content?.h1?.main.trim()}</span>{" "}
            {content?.h1?.post.trim()}
          </h1>
          <div className="detail-heading">
            <p className=" Montserrat mt-4  max-w-[646px] text-[2.2rem] font-[300] leading-[130%] text-white max-[850px]:text-center">
              {content?.tagline}
            </p>
            <div className="mt-[4rem] flex flex-wrap gap-8 max-[850px]:justify-center">
              <Link href={"#pricing"}>
                <Button classes="" title={"View Pricing & Plan"} />
              </Link>
              <Link href={"/our-clients"}>
                <Button2 title={"View Portfolio"} />
              </Link>
            </div>
          </div>
        </div>
        <form

          className="flex h-full flex-col justify-center gap-[2rem]"
        >
          <div className="flex gap-[2rem]">
            <div className="flex-1">
              <Input
                onChange={onChange}
                name="name"
                placeholder="Your Name"
                classes="w-full"
                type="text"
                value={formData.name}
              />
            </div>
            <div className="flex-1">
              <Input
                onChange={onChange}
                name="phoneNo"
                placeholder="Phone*"
                classes="w-full"
                type="number"
                value={formData.phoneNo}
              />
            </div>
          </div>
          <Input
            onChange={onChange}
            placeholder="Email Address*"
            name={"email"}
            classes="w-full"
            type="email"
            value={formData.email}
          />
          <Input
            onChange={onChange}
            placeholder="Website URL"
            name="url"
            classes="w-full"
            type="text"
            value={formData.url}
          />
          <textarea
            onChange={onChange}
            value={formData.description}
            name="description"
            placeholder="Write your Requirements here..."
            className="w-full h-[106px] rounded-[5px] border-none bg-[#515151] p-[2rem] text-[1.6rem] font-300 text-[#FFFFFF]/[0.5] outline-none"
            id=""
          ></textarea>

          {loading ? (
            <div className="loader"></div>
          ) : (
            <Button
              onClick={onSubmit}
              type="submit"
              title="Send Now"
              classes="!rounded-[10px] !text-[2.5rem] !font-500"
              loading
            />
          )}
          <ReCAPTCHA
            ref={refCaptcha}
            sitekey={siteKey}
            size="invisible"
          />
        </form>
      </div>
      <ImagesLine />
      <br />
      <div className="parent flex gap-[2rem] px-20 max-[850px]:flex-col">
        <div className="setion-right flex-1">
          <div className="h-90vh flex max-w-[120rem]  flex-col  flex-wrap content-center	items-center gap-4">
            <h2 className="robot-condensed max-[500px]:text-[5rem] text-[4rem] 	font-[600] uppercase leading-[100%] text-[#5B5E71]">
              {pageContent.section1.heading}
            </h2>
            <div className="max-[850px]:text-[19px] flex flex-col gap-[1rem] text-[1.7rem] text-[#5B5E71]">
              {pageContent.section1.paras}
              <Link href={"/contact-us"} className=" mx-auto">
                <Button
                  title={"Lets Get Started"}
                  classes="bg-[#FEE236] text-[#111111] mt-[2rem] mx-auto"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="section-left flex  w-[64.6rem] flex-col gap-[3rem]  max-[850px]:w-full">
          <div className="w-full  ">
            <Image unoptimized

              loader={({ src }) => {
                return src;
              }}
              className="w-full"
              src={pageContent?.section1?.image?.img}
              alt={pageContent?.section1?.image?.alt}
              width={650}
              height={500}
            />
          </div>
          <div className="  flex flex-col justify-center gap-5 rounded-[10px] border-[0.2rem] border-solid border-[#1E1E1E0D] bg-[#1E1E1E0D] p-8 text-center max-[850px]:w-full">
            <div>
              <p className=" clash h-25 bg-transparent text-[2.5rem] font-medium">
                Other Services
              </p>
            </div>
            <div className=" clash max-[550px]:flex  flex-col min-[550px]:grid min-[550px]:grid-cols-2 flex-wrap justify-between gap-y-5 p-5 text-3xl font-normal tracking-wide text-[#0377BC]">
              {randomItems.map((item) => (
                <Link key={item?.link + item?.title} href={item.link}>{hydrated && item.title}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className=" mt-20 w-full px-20">
        <Image unoptimized

          loader={({ src }) => {
            return src;
          }}
          className="w-full rounded-[20px] shadow-shadowImage "
          src={pageContent?.inforaphic?.img}
          alt={pageContent?.inforaphic?.alt}
          width={2000}
          height={200}
        />
      </div>
      <br />
      {pageContent?.phpExtra?.is === true ? (
        <>
          <div className="flex flex-col w-full p-[5rem] pb-0 ">
            <h2 className="mx-auto font-600 text-[#000000] text-[4rem] leading-[100%] !text-center	 ">
              {pageContent.phpExtra.heading}
            </h2>
            <p className="font-300 text-[#000000] text-[1.8rem] max-w-[100rem] mx-auto text-center py-[2rem]">
              {pageContent.phpExtra.p}
            </p>
            <div className="grid grid-cols-3 max-[550px]:grid-cols-2 max-[380px]:grid-cols-1 justify-center gap-[5rem] mx-auto mt-[5rem]">
              {pageContent.phpExtra.cards.map((item, index) => (
                <>
                  <div key={item.title + index} className="flex flex-col border-t-[.3rem] pt-[1rem] gap-[2rem] border-[#000000] border-solid max-w-[35rem] ">
                    <h3 className="font-600 max-w-[25rem] text-[#000000] text-[2rem] leading-[100%]">
                      {item.title}
                    </h3>
                    <p className="font-300 text-[#000000] text-[1.6rem]">
                      {item.para}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="flex flex-col items-center justify-center pt-10 ">
        <h2 className="robot-condensed mx-auto  flex max-w-[109.1rem] flex-wrap justify-center gap-x-[1.4rem] text-center text-[5rem]  font-[600] uppercase leading-[5rem] ">
          {/* <span>
            {" "}
            We Design Custom Logos for your brand to look{" "}
            <span className="mr-[1rem] text-[#5B5E71]">exited</span>and
          </span>
          <span className="text-[#5B5E71]">exaggerated.</span> */}
          {pageContent.section2.heading}
        </h2>
        <div className="Montserrat max-w[1440px]:leading-[130%] mt-10 flex max-w-[1091px] flex-col gap-3 px-[3rem] text-center max-[850px]:text-[19px] text-[1.7rem] font-light	">
          {pageContent.section2.paras}
        </div>
        {pageContent.ecommerceExtra !== false ? (
          <>
            <div className="flex py-[8rem] px-[3rem] flex-col gap-[3rem]">
              <h2 className="mx-auto font-600 text-[#000000] text-[4rem] leading-[100%] max-sm:text-center max-sm:text-[3.5rem] max-sm:py-2">
                {pageContent.ecommerceExtra.heading}
              </h2>
              <div className="flex gap-[4rem] flex-wrap justify-center">
                {pageContent.ecommerceExtra.icons.map((item) => (
                  <Image unoptimized

                    loader={({ src }) => {
                      return src;
                    }}
                    src={item?.img}
                    alt={item?.alt}
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        {/* <div className=" flex flex-col w-full items-center bg-[#eeeeee] pt-[4rem] pb-[6rem] gap-[5rem] ">
          <h2 className=" clash mb-4 text-[8rem] font-semibold leading-[79.5%] tracking-[0.02em] max-[360px]:text-[50px]">
            Look into our Projects
          </h2>
          <div className="grid grid-cols-3 w-full max-[850px]:grid-cols-2 px-[0rem] pt-[0rem] max-[850px]:px-0">
            <Card10
              para={"Subheading description here for more details"}
              heading={"Fulfil Supermart Branding Kit Design"}
              src={require("../../public/assets/images/service-image.png")}
            />
            <Card10
              para={"Subheading description here for more details"}
              heading={"Mr. pillar Branding Kit Design"}
              src={require("../../public/assets/images/service-image1.png")}
            />
            <Card10
              para={"Subheading description here for more details"}
              heading={"fushius home decor Branding Kit Design"}
              src={require("../../public/assets/images/service-image2.png")}
            />
            <Card10
              para={"Subheading description here for more details"}
              heading={"Fulfil Supermart Branding Kit Design"}
              src={require("../../public/assets/images/service-image.png")}
            />
            <Card10
              para={"Subheading description here for more details"}
              heading={"Mr. pillar Branding Kit Design"}
              src={require("../../public/assets/images/service-image1.png")}
            />
            <Card10
              para={"Subheading description here for more details"}
              heading={"fushius home decor Branding Kit Design"}
              src={require("../../public/assets/images/service-image2.png")}
            />
          </div>
        </div> */}
        {/* pricing section */}
        {pageContent.pricing !== false && (
          <div className=" flex w-full flex-col bg-[#C6CED3] max-[500px]:px-[3rem] mt-[3rem]">
            <div className="mb-2 mt-12 text-center">
              <h2
                id="pricing"
                className=" clash mb-4 text-[8rem] font-semibold leading-[79.5%] tracking-[0.02em] max-[360px]:text-[50px]"
              >
                Pricing & Packages.
              </h2>
              <div className=" flex w-full  flex-col justify-center ">
                <p className="Montserrat mx-auto max-w-[98rem] pt-[1.5rem] text-center text-[16px]	font-light	leading-[130%]	text-black	">
                  Our branding and logo design packages are very suitable for
                  both market newbies and popular brands. You can select any
                  package as per your requirements and also make changes to
                  these packages. No matter whether it is about a single logo or
                  a bulk of them we are equally productive in both cases.
                </p>
              </div>
            </div>

            <div className="relative mt-[3rem] flex flex-col  before:absolute before:top-0 before:left-0 before:z-40 before:h-[50%] before:w-full after:absolute after:bottom-0 after:left-0 after:z-40 after:h-[50%] after:w-full max-[1055px]:pb-[5rem] max-[1055px]:after:bg-[transparent] after:bg-[#FFFFFF]">
              <div className="z-50 mx-[3rem] flex items-stretch flex-wrap justify-center gap-[2rem] ">
                {pageContent?.pricing.map((item, index) => (
                  <PriceCard key={index} item={item} no={index} />
                ))}
              </div>
            </div>
          </div>
        )}
        {/* //we love to listen your requirements */}

        {/* old code of estimate */}

        <Link
          href={"/contact-us"} className="group mt-[7rem] flex w-full border-y-[6px] border-solid border-[#5B5E71] bg-[#C6CED3] max-[850px]:border-[#3D404E]">
          <div className="relative flex w-1/2 bg-white py-[2rem] pl-[6rem] pr-[2rem] max-[850px]:w-full max-[850px]:flex-col max-[850px]:gap-[5rem] max-[850px]:bg-[#5B5E71] max-[850px]:py-[6rem]">
            <p className="clash relative mx-auto  text-[5.5rem] font-600 leading-[90%] text-[#3D404E] max-[850px]:text-center max-[850px]:text-white max-[640px]:text-center max-[640px]:text-[4rem]">
              We'd love to hear your requirements
            </p>
            <button className="clash mx-auto h-[60px] rounded-[1rem] border-b-[6px] border-solid border-black/[0.4] bg-[#FFE100] px-12 py-4 text-[2.5rem] font-500  text-black active:scale-[1.01]  max-[850px]:hidden max-[400px]:w-[80%] min-[850px]:hidden ">
              Let’s Work Together
            </button>
            <Button
              classes="min-[850px]:hidden mx-auto  bg-[#FFE100] !rounded-[15px]"
              title="Estimate Project"
            />
          </div>

          <div className="relative flex w-1/2  items-center gap-9 overflow-hidden duration-300 ease-linear after:absolute after:top-0 after:-left-[200%] after:h-full after:w-[90rem] after:bg-[#ffe100] after:duration-500 after:ease-linear group-hover:after:left-0 max-[850px]:hidden">
            <h2 className="clash z-20 my-[2rem] ml-[6rem] max-w-[24rem] bg-[trasnparent] text-[5.5rem] font-400 leading-[90%] text-[#1E1E1E] max-[640px]:text-center max-[640px]:text-[4rem]">
              Estimate Project
            </h2>
            <div className="relative z-[1000] flex flex-1 overflow-hidden">
              <div className=" top-0 left-0  z-[1000] duration-300 ease-linear group-hover:relative">
                <Image unoptimized

                  loader={({ src }) => {
                    return src;
                  }}
                  src={arrow}
                  alt="arrow1"
                />
              </div>
              <div className=" absolute left-0 z-[1000]  duration-300 ease-linear group-hover:left-[37px]">
                <Image unoptimized

                  loader={({ src }) => {
                    return src;
                  }}
                  src={arrow}
                  alt="arrow2"
                />
              </div>
              <div className=" absolute top-0 left-0  z-[1000]   duration-300 ease-linear group-hover:left-[74px]">
                <Image unoptimized

                  loader={({ src }) => {
                    return src;
                  }}
                  src={arrow}
                  alt="arrow3"
                />
              </div>
              <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[111px]">
                <Image unoptimized

                  loader={({ src }) => {
                    return src;
                  }}
                  src={arrow}
                  alt="arrow4"
                />
              </div>
              <div className=" absolute top-0 left-0   z-[1000] duration-300 ease-linear group-hover:left-[146px]">
                <Image unoptimized

                  loader={({ src }) => {
                    return src;
                  }}
                  src={arrow}
                  alt="arrow5"
                />
              </div>
              <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[184px]">
                <Image unoptimized

                  loader={({ src }) => {
                    return src;
                  }}
                  src={arrow}
                  alt="arrow6"
                />
              </div>
              <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[221px]">
                <Image unoptimized

                  loader={({ src }) => {
                    return src;
                  }}
                  src={arrow}
                  alt="arrow7"
                />
              </div>
              <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[258px]">
                <Image unoptimized

                  loader={({ src }) => {
                    return src;
                  }}
                  src={arrow}
                  alt="arrow8"
                />
              </div>
              <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[288px]">
                <Image unoptimized

                  loader={({ src }) => {
                    return src;
                  }}
                  src={arrow}
                  alt="arrow9"
                />
              </div>

            </div>
          </div>
        </Link>

        {/* Estimated projects */}
        {/* <Button title="Let’s Work Together" classes="" /> */}

        {/* <Link
        href={"/contact-us"}
        className="group w-full flex mt-[3rem] border-y-[6px] border-solid border-[#5B5E71] bg-[#C6CED3] max-[850px]:border-[#3D404E]"
      >
        
        <div className="relative flex w-1/2 bg-white py-[2rem] pl-[2rem] pr-[2rem] max-[850px]:w-full max-[850px]:flex-col max-[850px]:gap-[5rem] max-[850px]:bg-[#5B5E71] max-[850px]:py-[6rem]">
          <p className="clash relative  mx-auto text-[5.5rem] font-600 leading-[90%] text-[#3D404E] max-[850px]:text-center max-[850px]:text-white max-[640px]:text-[4rem]">
            We'd love to hear your requirements
          </p>
          <button className="clash mx-auto h-[60px] rounded-[1.5rem] border-b-[6px] border-solid border-black/[0.4] bg-[#FFE100] px-[6rem] max-[350px]:px-[4rem] py-4 text-[2.5rem]  font-500 text-black  active:scale-[1.01] max-[400px]:w-[100%] min-[850px]:hidden ">
            Estimate Project
          </button>
        </div>
        <div className="relative flex w-1/2  items-center gap-9 overflow-hidden duration-300 ease-linear after:absolute after:top-0 after:-left-[200%] after:h-full after:w-[90rem] after:bg-[#ffe100] after:duration-500 after:ease-linear group-hover:after:left-0 max-[850px]:hidden">
          <p className="clash z-20 my-[2rem] ml-[6rem] max-w-[24rem] bg-[trasnparent] text-[5.5rem] font-400 leading-[90%] text-[#1E1E1E] max-[640px]:text-center max-[640px]:text-[4rem]">
            Estimate Project
          </p>
          <div className="relative z-[1000] flex flex-1 overflow-hidden">
            <div className=" top-0 left-0  z-[1000] duration-300 ease-linear group-hover:relative">
              <Image unoptimized 
                
                loader={({ src }) => {
                  return src;
                }}
                src={arrow}
                alt="arrow1"
              />
            </div>
            <div className=" absolute left-0 z-[1000]  duration-300 ease-linear group-hover:left-[37px]">
              <Image unoptimized 
                
                loader={({ src }) => {
                  return src;
                }}
                src={arrow}
                alt="arrow2"
              />
            </div>
            <div className=" absolute top-0 left-0  z-[1000]   duration-300 ease-linear group-hover:left-[74px]">
              <Image unoptimized 
                
                loader={({ src }) => {
                  return src;
                }}
                src={arrow}
                alt="arrow3"
              />
            </div>
            <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[111px]">
              <Image unoptimized 
                
                loader={({ src }) => {
                  return src;
                }}
                src={arrow}
                alt="arrow4"
              />
            </div>
            <div className=" absolute top-0 left-0   z-[1000] duration-300 ease-linear group-hover:left-[146px]">
              <Image unoptimized 
                
                loader={({ src }) => {
                  return src;
                }}
                src={arrow}
                alt="arrow5"
              />
            </div>
            <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[184px]">
              <Image unoptimized 
                
                loader={({ src }) => {
                  return src;
                }}
                src={arrow}
                alt="arrow6"
              />
            </div>
            <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[221px]">
              <Image unoptimized 
                
                loader={({ src }) => {
                  return src;
                }}
                src={arrow}
                alt="arrow7"
              />
            </div>
            <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[258px]">
              <Image unoptimized 
                
                loader={({ src }) => {
                  return src;
                }}
                src={arrow}
                alt="arrow8"
              />
            </div>
            <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[288px]">
              <Image unoptimized 
                
                loader={({ src }) => {
                  return src;
                }}
                src={arrow}
                alt="arrow9"
              />
            </div>
          </div>
        </div>

      </Link> */}

        <div className="flex flex-wrap flex-col mt-[4rem] justify-center gap-[4rem] pb-[5rem]">
          {/* <span className="font-clash max-w-[1092px] text-center text-[4rem] font-300 leading-[100%] tracking-[0.02em]">
            How we involve
          </span> */}
          <h2 className="robot-condensed mb-10  max-w-[110rem] text-center   gap-[1rem]  text-[9rem] font-600  leading-[80%] tracking-[0.02em] max-[850px]:text-[6rem] max-[500px]:justify-center">
            {pageContent?.steps?.mainHeading.one}{" "}
            <span className="text-yellow">
              {pageContent?.steps?.mainHeading.two}
            </span>{" "}
            {pageContent?.steps?.mainHeading.three}
          </h2>
        </div>

        <div className=" grid grid-cols-3 mx-auto max-[850px]:grid-cols-2 items-stretch max-[500px]:grid-cols-1 flex-wrap items-center justify-center gap-[3rem] px-[2rem]">
          {pageContent?.steps?.steps.map((data, index) => {
            return (
              <DesignCard
                no={index + 1}
                key={index}
                // bg={`bg-[url('/assets/images/icons/${countings[index]}')]`}
                image={data?.imgage?.img}
                alt={data.imgage.alt}
                para={data.para}
                title1={data?.title1}
                title2={data?.title2}
              />
            );
          })}
        </div>
        {/* <div className="bg-[#1E1E1E] p-[3rem] w-full"></div> */}
        {/* Payless logo design page  */}
        {pageContent.blackSection !== false ? (
          <div className="mt-10 flex w-full gap-[2rem] bg-[#1E1E1E] p-4 pr-20 pl-[3rem] max-[850px]:flex-col">
            <div className="relative  order-1 mx-auto mb-2 min-[850px]:mt-12 max-[850px]:w-full w-[50rem] text-center max-[850px]:order-2  ">
              <Image unoptimized

                loader={({ src }) => {
                  return src;
                }}
                className="relative !max-[850px]:top-[21rem]  top-[12rem] w-full"
                src={CardFull}
                alt="card"
              //   width={2000}
              //   height={200}
              />
            </div>

            <div className="order-2 ml-auto mt-[6rem] flex min-h-[40rem] max-w-[50%] flex-col justify-center max-[850px]:order-1 max-[850px]:max-w-full max-[850px]:items-center ">
              <h2 className="clash text-[5rem] font-600 leading-[90%] text-[#FFFFFF] max-[850px]:text-center">
                {pageContent.blackSection.heading}
              </h2>
              <p className="mt-[3rem] text-[18px] font-300 text-[#FFFFFF] max-[850px]:text-center">
                {/* At this point, you might be considering why shall I choose
              Creaditech to get my software/ app developed or ask them to
              promote my business. Well, Creaditech has a proven track record of
              developing custom softwares and doing digital marketing for
              different brands. We have a team of expert{" "}
              <span className="text-blue-500">web developers</span>, app
              developers, and digital marketers who are always ready to cater to
              any development or marketing challenge. */}
                {pageContent.blackSection.paras}
              </p>
              <div className="my-[3rem] mr-auto max-[850px]:mx-auto">
                <Link href={"/contact-us"}>
                  <Button title="Get Started Now" classes="" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        {pageContent.cmsExtra !== false ? (
          <>
            <div className="flex flex-col w-full p-[5rem] pb-0 ">
              <h2 className="mx-auto font-600 text-[#000000] text-[4rem] leading-[100%]">
                {pageContent.cmsExtra.heading}
              </h2>
              <div className="grid grid-cols-3 max-[550px]:grid-cols-2 max-[380px]:grid-cols-1 justify-center gap-[5rem] mx-auto mt-[5rem]">
                {pageContent.cmsExtra.cards.map((item, index) => (
                  <>
                    <div key={index} className="flex flex-col border-t-[.3rem] pt-[1rem] gap-[2rem] border-[#000000] border-solid max-w-[35rem] ">
                      <h3 className="font-600 max-w-[25rem] text-[#000000] text-[2rem] leading-[100%]">
                        {item.title}
                      </h3>
                      <p className="font-300 text-[#000000] text-[1.6rem]">
                        {item.para}
                      </p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="mt-[10rem] flex px-[6rem] pb-[7rem] max-[850px]:flex-col max-[850px]:gap-[4rem] max-[500px]:px-[2rem] ">
          <div className="max-w-[77rem] flex-1 max-[850px]:max-w-full">
            <h2 className="robot-condensed mt-[5rem] text-[4.2rem] font-600 uppercase leading-[100%] text-[#5B5E71]  ">
              {pageContent.section3.heading}
            </h2>
            {pageContent.section3.paras}
          </div>
          <div className="flex items-center justify-center max-[850px]:pt-[5rem] min-[500px]:px-[5rem] ">
            <Image unoptimized

              loader={({ src }) => {
                return src;
              }}
              src={pageContent?.section3?.image.img}
              className="w-full min-[500px]:h-[42rem] min-[500px]:w-[42rem]"
              alt={pageContent?.section3?.image.alt}
            />
          </div>
        </div>
        <div className="bg-faq w-full py-[3rem] pt-[2rem] px-[2rem]">
          <h2 className="clash mb-[1rem] text-center text-[8rem] font-600 text-[#1E1E1E]">
            FAQs
          </h2>
          <div className="grid grid-cols-2 max-[500px]:grid-cols-1  items-center flex-wrap justify-center gap-[2rem] ">
            {pageContent.faqs.map((item, index) => {
              return <Accordian item={item} key={index} index={index + 1} />;
            })}
          </div>
        </div>
        <Slider />
      </div>
      <BottomNav index={3} />

      <Footer />
    </>
  );
};
export async function getStaticProps({ params = {} }) {
  return {
    props: {
      datas: data.filter((item) => {
        return params.serviceName == item.page;
      }),
    }, // will be passed to the page component as props
  };
}
export async function getStaticPaths() {
  const paths = data.map((item) => {
    return {
      params: {
        serviceName: item.page,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export default Services;
