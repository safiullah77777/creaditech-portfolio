import React from "react";
import Image from "next/image";
import Avatar1 from "../public/assets/images/Rectangle 85.png";
import Avatar2 from "../public/assets/images/Rectangle 85 (1).png";
import Avatar3 from "../public/assets/images/Rectangle 85 (2).png";
import Logo1 from "../public/assets/images/Vector.png";
import Logo2 from "../public/assets/images/Vector (1).png";
import Logo3 from "../public/assets/images/Vector (2).png";
import Button from "../components/button/Button";
import Header from "../components/header/Header";
import Button2 from "../components/button2/Button2";
import Slider from "../components/slider/Slider";
import Footer from "../components/footer/Footer";
import BottomNav from "../components/bottomNav/BottomNav";
const AboutUs = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="banner6  bg-[url('/assets/images/backgrounds/banner6.png')]  relative flex h-[100vh] w-full  bg-cover bg-center bg-no-repeat  bg-blend-overlay max-[850px]:h-[850px] max-[850px]:flex-col max-[850px]:p-0 ">
        <div className="m-auto flex h-full flex-col items-center justify-center font-semibold max-[850px]:mx-auto max-[850px]:max-w-full  max-[850px]:px-8 max-[850px]:pl-12 ">
          <h1 className="robot-condensed px-[3.5rem] text-center text-65 uppercase leading-85 text-white max-[850px]:text-center max-[850px]:text-[5rem]">
            creative <span className="text-yellow"> workspace </span>
          </h1>
          <h1 className="robot-condensed px-[3.5rem] text-center text-65 uppercase leading-85 text-white max-[850px]:text-center max-[850px]:text-[5rem]">
            <span className="text-yellow">behind </span>successful{" "}
          </h1>{" "}
          <h1 className="robot-condensed px-[3.5rem] text-center text-65 uppercase leading-85 text-white max-[850px]:text-center max-[850px]:text-[5rem]">
            {" "}
            Journey!
          </h1>
          <p className="Montserrat mt-4 max-w-[53rem] text-center  text-[16px] font-[100] leading-130 text-[#FFFFFF] max-[850px]:text-center max-[850px]:text-[2.5rem]">
            We help companies grow by providing them the best software
            development and marketing services in the USA. Get in touch with our
            experts now and make your business reach your targeted audience.
          </p>
          <div className="my-8 flex flex-wrap justify-center gap-8 max-[850px]:mx-auto  max-[400px]:flex-col">
            <Button title={"Meet our Team"} classes={""} />
            <Button2 title={"Download Company Profile"}  />
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="  robot-condensed flex items-center justify-center gap-2 text-center font-600 uppercase text-[#1E1E1E] max-[850px]:text-center max-[850px]:text-[7rem] sm:text-[130px]">
          About <p className=" px-4 text-yellow  sm:px-[4rem]"> us</p>
        </h1>
        <p className=" sm:max-[868px] clash flex w-full justify-center px-[5rem] text-center text-[35px] font-[500]  leading-[85%] text-[#5B5E71]  max-[850px]:text-[3rem] sm:items-center sm:px-[30rem] sm:leading-[101.5%] sm:tracking-[0.02em] ">
          Creaditech is a digital marketing company bringing future which is
          already just around the corner – and will distribute it in the market
          fairly, by means of technology and business strategies your business
          needs the most in the digital age.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-[5rem] gap-x-[8rem] py-[3rem] px-[6rem]     ">
        <div className="group relative z-[1000] box-border rounded-t-[10px] border-[2px] border-solid border-black after:absolute after:-left-[5%]  after:bottom-[-2.25rem]  after:-z-[1] after:h-[4.5rem]  after:w-[110%] after:rounded-[2rem] after:bg-[#ffe100]/[0.7]  after:duration-300 after:ease-linear hover:after:h-[115%]  max-w-[55rem] ">
          <div className="z-[10000] flex w-full flex-col items-center justify-center px-[5rem] py-[5rem] pb-[10px]">
            <h3 className="robot-condensed flex items-center text-center  text-[30px] uppercase text-[#5B5E71] sm:text-[50px]  sm:font-[600] sm:leading-[59px]">
              our vision
            </h3>
            <p className="py-[2rem] text-[13px] leading-[18px] text-[#1E1E1E] sm:text-[15px] sm:font-[300] sm:leading-[21px]">
              “If your business is not on the Internet, then your business will
              be out of business”. This quote from Bill Gates proves the value
              of getting your business online. However, getting your business
              software or website getting developed and then doing it’s
              marketing is not a piece of cake. You need to take help from an
              expert software development and marketing agency like Creaditech.
            </p>
          </div>
        </div>
        <div className="group relative z-[1000] box-border rounded-t-[10px] border-[2px] border-solid border-black after:absolute after:-left-[5%]  after:bottom-[-2.25rem]  after:-z-[1] after:h-[4.5rem]  after:w-[110%] after:rounded-[2rem] after:bg-[#ffe100]/[0.7]  after:duration-300 after:ease-linear hover:after:h-[115%] max-w-[55rem] ">
          <div className="z-[10000] flex w-full flex-col items-center justify-center px-[5rem] py-[5rem] pb-[10px]">
            <h3 className="robot-condensed flex items-center text-center  text-[30px] uppercase text-[#5B5E71] sm:text-[50px]  sm:font-[600] sm:leading-[59px]">
              our mission
            </h3>
            <p className="py-[2rem] text-[13px] leading-[18px] text-[#1E1E1E] sm:text-[15px] sm:font-[300] sm:leading-[21px]">
              “If your business is not on the Internet, then your business will
              be out of business”. This quote from Bill Gates proves the value
              of getting your business online. However, getting your business
              software or website getting developed and then doing it’s
              marketing is not a piece of cake. You need to take help from an
              expert software development and marketing agency like Creaditech.
            </p>
          </div>
        </div>
      </div>

      {/* about us section */}
      <div>
        <div className="relative grid  grid-cols-1 gap-[20px] p-9 sm:grid-cols-4 sm:gap-[20px] sm:px-[64px] sm:pb-[8rem] ">
          {/* on desktop */}
          <div className="relative  ">
            <h2 className="leading-1 robot-condensed absolute bottom-[12rem] left-[-27rem] flex h-[63rem] w-[88rem] flex-col flex-wrap justify-center  text-[12rem] font-600 uppercase leading-[80%] text-black max-[640px]:hidden max-[640px]:text-[10rem] max-[640px]:font-900   min-[850px]:-rotate-90 ">
              Meet <br />{" "}
              <div>
                <span className="text-yellow"> Our</span> team
              </div>
            </h2>
          </div>

          {/* on mobile */}
          <div className="flex flex-wrap sm:hidden ">
            <h2 className=" leading-1 text-130 robot-condensed m-auto flex h-[10rem] items-center justify-center text-center font-600 uppercase leading-[80%] text-black max-[640px]:text-[10rem] max-[640px]:font-900 sm:h-[30rem] sm:text-left  sm:text-150 min-[850px]:-rotate-90">
              Meet <p className="text-yellow">Our</p> <br />
            </h2>
            <h2 className=" leading-1 text-130 robot-condensed m-auto flex h-[10rem] items-center justify-center text-center font-600 uppercase leading-[80%] text-black max-[640px]:text-[10rem] max-[640px]:font-900 sm:h-[30rem] sm:text-left  sm:text-150 min-[850px]:-rotate-90">
              team
            </h2>
          </div>

          <div className=" flex justify-center gap-[10px] rounded-[10px] bg-[#DCDCDC] px-[20px] pt-[20px] pb-[13px]">
            <div className="">
              <div>
                <Image
                  width={0}
                  height={0}
                  className="h-[450px] w-[300px]  rounded-[10px] "
                  src={Avatar1}
                  alt="avatar"
                />
              </div>
              <div>
                <h2 className="text-center text-[20px] font-semibold uppercase tracking-wider">
                  hassan annas
                </h2>
                <h4 className="bg-[#C2C2C2] text-center text-[15px] font-normal tracking-wider ">
                  Founder & CEO
                </h4>
                <p className=" text-center text-[14px] leading-[16px] ">
                  The Webflow Designer lets you build any website you can
                  imagine with the full power of HTML, CSS, and Javascript in a
                  visual canvas.
                </p>
              </div>
              <div className="flex justify-center gap-[8px] pt-4">
                <Image width={0} height={0} src={Logo1} alt="logo" />
                <Image width={0} height={0} src={Logo2} alt="logo" />
                <Image width={0} height={0} src={Logo3} alt="logo" />
              </div>
            </div>
          </div>
          <div className=" flex justify-center gap-[10px] rounded-[10px] bg-[#DCDCDC] px-[20px] pt-[20px] pb-[13px]">
            <div className="gap-1  ">
              <div>
                <Image
                  width={0}
                  height={0}
                  className="h-[450px]  rounded-[10px] "
                  src={Avatar3}
                  alt="avatar"
                />
              </div>
              <div>
                <h2 className="text-center text-[20px] font-semibold uppercase tracking-wider">
                  mirza asaad baig
                </h2>
                <h4 className="bg-[#C2C2C2] text-center text-[15px] font-normal tracking-wider ">
                  Cheif of Opretions
                </h4>
                <p className=" text-center text-[14px] leading-[16px] ">
                  The Webflow Designer lets you build any website you can
                  imagine with the full power of HTML, CSS, and Javascript in a
                  visual canvas.
                </p>
              </div>
              <div className="flex justify-center gap-[8px] pt-4">
                <Image width={0} height={0} src={Logo1} alt="logo" />
                <Image width={0} height={0} src={Logo2} alt="logo" />
                <Image width={0} height={0} src={Logo3} alt="logo" />
              </div>
            </div>
          </div>
          <div className="flex  justify-center gap-[10px] rounded-[10px] bg-[#DCDCDC] px-[20px] pt-[20px] pb-[13px]">
            <div className="gap-1">
              <div>
                <Image
                  width={0}
                  height={0}
                  className="h-[450px] w-[300px]  rounded-[10px] "
                  src={Avatar2}
                  alt="avatar"
                />
              </div>
              <div>
                <h2 className="text-center text-[20px] font-semibold uppercase tracking-wider">
                  jawar khan
                </h2>
                <h4 className="bg-[#C2C2C2] text-center text-[15px] font-normal tracking-wider ">
                  Head of Sales
                </h4>
                <p className=" text-center text-[14px]  leading-[16px]">
                  The Webflow Designer lets you build any website you can
                  imagine with the full power of HTML, CSS, and Javascript in a
                  visual canvas.
                </p>
              </div>
              <div className="flex justify-center gap-[8px] pt-4">
                <Image width={0} height={0} src={Logo1} alt="logo" />
                <Image width={0} height={0} src={Logo2} alt="logo" />
                <Image width={0} height={0} src={Logo3} alt="logo" />
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-[10px] rounded-[10px] bg-[#DCDCDC] px-[20px] pt-[20px] pb-[13px] max-[850px]:hidden">
            <div className="gap-1">
              <div>
                <Image
                  width={0}
                  height={0}
                  className="h-[450px] w-[300px]  rounded-[10px] "
                  src={Avatar1}
                  alt="avatar"
                />
              </div>
              <div>
                <h2 className="text-center text-[20px] font-semibold uppercase tracking-wider">
                  hassan annas
                </h2>
                <h4 className="bg-[#C2C2C2] text-center text-[15px] font-normal tracking-wider ">
                  Founder & CEO
                </h4>
                <p className=" text-center text-[14px] leading-[16px] ">
                  The Webflow Designer lets you build any website you can
                  imagine with the full power of HTML, CSS, and Javascript in a
                  visual canvas.
                </p>
              </div>
              <div className="flex justify-center gap-[8px] pt-4">
                <Image width={0} height={0} src={Logo1} alt="logo" />
                <Image width={0} height={0} src={Logo2} alt="logo" />
                <Image width={0} height={0} src={Logo3} alt="logo" />
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-[10px] rounded-[10px] bg-[#DCDCDC] px-[20px] pt-[20px] pb-[13px] max-[850px]:hidden">
            <div className="gap-1">
              <div>
                <Image
                  width={0}
                  height={0}
                  className="h-[450px] w-[300px]  rounded-[10px] "
                  src={Avatar3}
                  alt="avatar"
                />
              </div>
              <div>
                <h2 className="text-center text-[20px] font-semibold uppercase tracking-wider">
                  mirza asaad baig
                </h2>
                <h4 className="bg-[#C2C2C2] text-center text-[15px] font-normal tracking-wider ">
                  Cheif of Opretions
                </h4>
                <p className=" text-center text-[14px] leading-[16px] ">
                  The Webflow Designer lets you build any website you can
                  imagine with the full power of HTML, CSS, and Javascript in a
                  visual canvas.
                </p>
              </div>
              <div className="flex justify-center gap-[8px] pt-4">
                <Image width={0} height={0} src={Logo1} alt="logo" />
                <Image width={0} height={0} src={Logo2} alt="logo" />
                <Image width={0} height={0} src={Logo3} alt="logo" />
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-[10px] rounded-[10px] bg-[#DCDCDC] px-[20px] pt-[20px] pb-[13px] max-[850px]:hidden">
            <div className="gap-1">
              <div>
                <Image
                  width={0}
                  height={0}
                  className="h-[450px] w-[300px]  rounded-[10px] "
                  src={Avatar2}
                  alt="avatar"
                />
              </div>
              <div>
                <h2 className="text-center text-[20px] font-semibold uppercase tracking-wider">
                  jawar khan
                </h2>
                <h4 className="bg-[#C2C2C2] text-center text-[15px] font-normal tracking-wider ">
                  Head of Sales
                </h4>
                <p className=" text-center text-[14px] leading-[16px]">
                  The Webflow Designer lets you build any website you can
                  imagine with the full power of HTML, CSS, and Javascript in a
                  visual canvas.
                </p>
              </div>
              <div className="flex justify-center gap-[8px] pt-4">
                <Image width={0} height={0} src={Logo1} alt="logo" />
                <Image width={0} height={0} src={Logo2} alt="logo" />
                <Image width={0} height={0} src={Logo3} alt="logo" />
              </div>
            </div>
          </div>

          <div className="flex justify-center  gap-[10px] rounded-[10px] bg-[#DCDCDC] px-[20px] pt-[20px] pb-[13px] max-[850px]:hidden">
            <div className="gap-1">
              <div>
                <Image
                  width={0}
                  height={0}
                  className="h-[450px] w-[300px]  rounded-[10px] "
                  src={Avatar1}
                  alt="avatar"
                />
              </div>
              <div>
                <h2 className="text-center text-[20px] font-semibold uppercase tracking-wider">
                  hassan annas
                </h2>
                <h4 className="bg-[#C2C2C2] text-center text-[15px] font-normal tracking-wider ">
                  Founder & CEO
                </h4>
                <p className=" text-center text-[14px] leading-[16px]">
                  The Webflow Designer lets you build any website you can
                  imagine with the full power of HTML, CSS, and Javascript in a
                  visual canvas.
                </p>
              </div>
              <div className="flex justify-center gap-[8px] pt-4">
                <Image width={0} height={0} src={Logo1} alt="logo" />
                <Image width={0} height={0} src={Logo2} alt="logo" />
                <Image width={0} height={0} src={Logo3} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#C6CED3] py-[8rem] px-[4rem]">
        <h2 className="clash mx-auto text-center text-[8rem] font-600 text-[#1E1E1E]">
          Want to join our Team?
        </h2>
        <h3 className="clash mx-auto text-center text-[3.5rem] font-500 text-[#5B5E71]">
          Looking for the next career move?{" "}
        </h3>
        <p className="mx-auto max-w-[98rem] text-center text-[16px] font-300  text-[#000000]">
          Our branding and logo design packages are very suitable for both
          market newbies and popular brands. You can select any package as per
          your requirements and also make changes to these packages. No matter
          whether it is about a single logo or a bulk of them we are equally
          productive in both cases.
        </p>

        {/* want to join our team */}
        <div className="mx-auto my-[3rem] flex max-w-[43rem] flex-col items-center gap-[1rem] rounded-[4rem] border-[2px] border-dashed border-[#5B5E71] p-[2rem]">
          <h2 className="robot-condensed text-[3rem] font-300 leading-[100%] text-[#5B5E71]">
            {" "}
            Drop your Resume here
          </h2>
          <p className="robot-condensed text-[3rem] font-300 leading-[100%] text-[#000]">
            Or
          </p>
          <p className="robot-condensed cursor-pointer text-[3rem] font-300 leading-[100%] text-[#0377BC] underline">
            Select File
          </p>
        </div>
        <h2 className="robot-condensed mx-auto text-[2.5rem] font-300 leading-[100%] text-[#5B5E71]">
          {" "}
          Or send your resume at
        </h2>
        <h2 className="clash mx-auto text-[3.5rem] font-500 leading-[100%] text-[#5B5E71]">
          {" "}
          Careers@creaditech.com
        </h2>
      </div>

      <Slider />
      <BottomNav index={2} />

      <Footer />
    </>
  );
};

export default AboutUs;
