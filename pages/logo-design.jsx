import React from "react";
import Button from "../components/button/Button";
import Button2 from "../components/button2/Button2";
import Header from "../components/header/Header";
import ImagesLine from "../components/ImagesLine/ImagesLine";
import Image from "next/image";
import imageWriting from "../public/assets/images/image-2.png";
import mono from "../public/assets/images/mogogram.png";
import image3 from "../public/assets/images/image-3.jpg";
import arrow from "../public/assets/images/icons/arrow-fa2.svg";
import CardFull from "../public/assets/images/Card-Full.png";
import PriceCard from "../components/priceCard/PriceCard";
import DesignCard from "../components/designCard/DesignCard";
import Slider from "../components/slider/Slider";
import Input from "../components/input/Input";
import Footer from "../components/footer/Footer";
import Accordian from "../components/accordian/Accordian";
import icon from "../public/assets/images/icons/design-icon.svg";
import bxmessage from "../public/assets/images/icons/bxmessage.svg";
import arcticons from "../public/assets/images/icons/arcticons_minds.svg";
import iconpark from "../public/assets/images/icons/iconpark.svg";
import arcticon from "../public/assets/images/icons/arcti-con.svg";
import AiIcon from "../public/assets/images/icons/Ai-icon.svg";
import comTick from "../public/assets/images/icons/com-tick.svg";
import BottomNav from "../components/bottomNav/BottomNav";

const LogoService = () => {
  return (
    <>
      <div className=" bg-black ">
        <Header />
      </div>
      <div
        className=" bg-banner-grey  flex min-h-[70rem] w-full  justify-evenly bg-[url('/assets/images/backgrounds/about-bg.png')]  bg-cover  bg-center bg-no-repeat px-[2rem] pt-[20rem] bg-blend-overlay max-[950px]:gap-[3rem] max-[950px]:pb-[5rem]  max-[850px]:flex-col 
    			min-[500px]:px-28 "
      >
        <div className="flex h-full max-w-[700px] flex-col justify-center gap-[2rem] font-semibold max-[850px]:mx-auto max-[850px]:max-w-full ">
          <h1 className="robot-condensed flex flex-wrap text-[6.5rem] font-600 uppercase leading-85 text-white  max-[1440px]:text-[6.5rem] max-[1300px]:text-[5rem] max-[850px]:justify-center max-[850px]:text-center max-[400px]:text-[5rem] min-[1600px]:text-[5rem]">
            LOGO <p className="mx-5 text-yellow"> DESIGN</p> SERVICES
          </h1>
          <div className="detail-heading">
            <p className=" Montserrat mt-4  max-w-[646px] text-[2.2rem] font-[300] leading-130 text-white max-[850px]:text-center">
              Let’s Bring in the Power of Popularity.It’s all about Your brand,
              your logo design & our services.Let’s Bring in the Power of
              Popularity It’s all about Your brand, your logo design & our
              services.
            </p>
            <div className="mt-[4rem] flex flex-wrap gap-8 max-[850px]:justify-center">
              <Button classes="" title={"View Pricing & Plan"} />
              <Button2 title={"Logo Design Portfolio"} />
            </div>
          </div>
        </div>
        <div className="flex h-full flex-col justify-center gap-[2rem]">
          <div className="flex gap-[2rem]">
            <div className="flex-1">
              <Input placeholder="Your Name" classes="w-full" type="text" />
            </div>
            <div className="flex-1">
              <Input placeholder="Phone*" classes="w-full" type="text" />
            </div>
          </div>
          <Input placeholder="Email Address*" classes="w-full" type="text" />
          <Input placeholder="Website URL" classes="w-full" type="text" />
          <textarea
            placeholder="Write your Requirements here..."
            className="w-full h-[106px] rounded-[5px] border-none bg-[#515151] p-[2rem] text-[1.6rem] font-300 text-[#FFFFFF]/[0.5] outline-none"
            name=""
            id=""
          ></textarea>
          <Button
            title="Send Now"
            classes="!rounded-[10px] !text-[2.5rem] !font-500"
          />
        </div>
      </div>
      <ImagesLine />
      <br />
      <div className="parent flex gap-[2rem] px-20 max-[850px]:flex-col">
        <div className="setion-right flex-1">
          <div className="h-90vh flex max-w-[120rem]  flex-col  flex-wrap content-center	items-center gap-4">
            <h1 className="robot-condensed max-[500px]:text-[5rem] text-[4rem] 	font-[600] uppercase leading-[100%] text-[#5B5E71]">
              Strengthen brand presence with our affordable logo designs
            </h1>
            <div className="max-[500px]:text-[14px] text-[16px] text-[#5B5E71]">
              <p>
                At this point, you might be considering why shall I choose
                Creaditech to get my software/ app developed or ask them to
                promote my business. Well, Creaditech has a proven track record
                of developing custom softwares and doing digital marketing for
                different brands. We have a team of expert{" "}
                <span className="text-sky-500	">web developers,</span> web
                developers, app developers, and digital marketers who are always
                ready to cater to any development or marketing challenge.
              </p>
              <br />
              <p>
                At this point, you might be considering why shall I choose
                Creaditech to get my software/ app developed or ask them to
                promote my business. Well, Creaditech has a proven track record
                of developing custom softwares and doing digital marketing for
                different brands. We have a team of expert{" "}
                <span className="text-sky-500	">web developers,</span> app
                developers, and digital marketers who are always ready to cater
                to any development or marketing challenge.
              </p>
              <br />
              <p>
                At this point, you might be considering why shall I choose
                Creaditech to get my software/ app developed or ask them to
                promote my business. Well, Creaditech has a proven track record
                of developing custom softwares and doing digital marketing for
                different brands. We have a team of expert
                <span className="text-sky-500	">web developers,</span> app
                developers, and digital marketers who are always ready to cater
                to any development or marketing challenge.
              </p>
              <br />
              <Button title={"Lets Get Started"} classes="bg-[#FEE236] text-[#111111]" />
            </div>
          </div>
        </div>
        <div className="section-left flex  w-[64.6rem] flex-col gap-[3rem]  max-[850px]:w-full">
          <div className="w-full  max-[850px]:hidden">
            <Image
              className="w-full"
              src={imageWriting}
              alt=""
              width={650}
              height={500}
            />
          </div>
          <div className="  flex flex-col justify-center gap-5 rounded-[10px] border-[0.2rem] border-solid border-[#1E1E1E0D] bg-[#1E1E1E0D] p-8 text-center max-[850px]:w-full">
            <div>
              <h2 className=" clash h-25 bg-transparent text-[2.5rem] font-medium">
                Other Services
              </h2>
            </div>
            <div className=" clash max-[550px]:flex  flex-col min-[550px]:grid min-[550px]:grid-cols-2 flex-wrap justify-between gap-y-5 p-5 text-3xl font-normal tracking-wide text-[#0377BC]">
              <p className=" max-[500px]:text-[text-[4rem] ">Web Developement</p>
              <p className="text-[2rem]">Mobile App Developement</p>
              <p className="text-[2rem]">Graphics Designing</p>
              <p className="text-[2rem]">Search Engine Optimization</p>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className=" mt-20 w-full px-20">
        <Image
          className="w-full rounded-[20px] shadow-shadowImage "
          src={image3}
          alt=""
          width={2000}
          height={200}
        />
      </div>
      <br />
      <div className="flex flex-col items-center justify-center pt-10 ">
        <h1 className="robot-condensed mx-auto  flex max-w-[109.1rem] flex-wrap justify-center gap-x-[1.4rem] text-center text-[7rem]  font-[600] uppercase leading-[5.9rem] ">
          <span>
            {" "}
            We Design Custom Logos for your brand to look{" "}
            <span className="mr-[1rem] text-[#5B5E71]">exited</span>and
          </span>
          <span className="text-[#5B5E71]">exaggerated.</span>
        </h1>
        <div className="Montserrat max-w[1440px]:leading-[130%] mt-10 flex max-w-[1091px] flex-col gap-3 px-[3rem] text-center text-[16px] font-light	">
          <p>
            “If your business is not on the Internet, then your business will be
            out of business”. This quote from Bill Gates proves the value of
            getting your business online. However, getting your business
            software or website getting developed and then doing it’s marketing
            is not a piece of cake. You need to take help from an expert
            software development and marketing agency like Creaditech.
          </p>
          <p>
            Creaditech is one of the most reputable and trusted{" "}
            <span className="font-600">software development company </span> and{" "}
            <span className="font-600">marketing agency</span> in the USA. Since
            2015, we have worked with several B2B and B2C companies and have
            developed custom softwares and websites for them. Apart from that,
            we have a team of expert, certified and highly educated digital
            marketers who work day and night to make your business recognized
            among your customers.
          </p>

          <p>
            “If your business is not on the Internet, then your business will be
            out of business”. This quote from Bill Gates proves the value of
            getting your business online. However, getting your business
            software or website getting developed and then doing it’s marketing
            is not a piece of cake. You need to take help from an expert
            software development and marketing agency like Creaditech.
          </p>
          <p>
            Creaditech is one of the most reputable and trusted{" "}
            <span className="font-600">software development company </span> and{" "}
            <span className="font-600">marketing agency</span>
            in the USA. Since 2015, we have worked with several B2B and B2C
            companies and have developed custom softwares and websites for them.
            Apart from that, we have a team of expert, certified and highly
            educated digital marketers who work day and night to make your
            business recognized among your customers.
          </p>
        </div>
        {/* pricing section */}
        <div className="mt-10 flex w-full flex-col bg-[#C6CED3] max-[500px]:px-[3rem]">
          <div className="mb-2 mt-12 text-center">
            <h1 className=" clash mb-4 text-[8rem] font-semibold leading-[79.5%] tracking-[0.02em] max-[360px]:text-[50px]">
              Pricing & Packages.
            </h1>
            <div className=" flex w-full  flex-col justify-center ">
              <p className="Montserrat mx-auto max-w-[98rem] pt-[1.5rem] text-center text-[16px]	font-light	leading-[130%]	text-black	">
                Our branding and logo design packages are very suitable for both
                market newbies and popular brands. You can select any package as
                per your requirements and also make changes to these packages.
                No matter whether it is about a single logo or a bulk of them we
                are equally productive in both cases.
              </p>
            </div>
          </div>
          {/* <div className="flex flex-col gap-8 p-10 xl:flex-row">
						<section className="flex w-full  flex-col items-start py-12 lg:flex-row lg:justify-center lg:px-10 ">
							<article className="lg:w-custom text-primary-dark rounded-lg mb-10 w-4/5 bg-white px-6 py-10 text-center lg:px-4">
								<h5 className="text-base font-bold">Basic</h5>
								<h2 className="flex justify-center border-b border-gray-300 pb-4 font-bold">
									<p className="mt-6 mr-1 text-3xl">$</p>
									<p className="text-6xl"> 199.99</p>
								</h2>
								<ul className="text-sm font-bold">
									<li className="border-b border-gray-300 pt-4 pb-4">
										500 GB Storage
									</li>
									<li className="border-b border-gray-300 pt-3 pb-4">
										2 Users Allowed
									</li>
									<li className="border-b border-gray-300 pt-4 pb-4">
										Send up to 3 GB
									</li>
								</ul>
								<button
									className=" text-primary-very-light rounded-md mt-12 px-12 py-2 text-center text-sm font-bold uppercase sm:px-16 xl:px-24"
									style={{
										backgroundImage:
											'linear-gradient(90deg, #a3a8f0 0%, #696fdd 100%)',
									}}
								>
									Learn More
								</button>
							</article>

							<article
								className="lg:w-custom rounded-lg mb-10 w-4/5 px-6 py-16 text-center text-white lg:-mt-6"
								style={{
									backgroundImage:
										'linear-gradient(90deg, #a3a8f0 0%, #696fdd 100%)',
								}}
							>
								<h5 className="text-base font-bold ">Professional</h5>
								<h2 className="mt-2 flex justify-center border-b border-gray-100 pb-4 font-bold">
									<p className="mt-6 mr-1 text-3xl">$</p>
									<p className="text-6xl "> 249.99</p>
								</h2>
								<ul className=" text-sm font-bold">
									<li className="border-b border-gray-200 pt-4 pb-4">
										1 TB Storage
									</li>
									<li className="border-b border-gray-200 pt-4 pb-4">
										5 Users Allowed
									</li>
									<li className="border-b border-gray-200 pt-4 pb-4">
										Send up to 10 GB
									</li>
								</ul>
								<button className="rounded-md bg-primary-very-light text-primary-blue mt-10 px-12 py-2 text-center text-sm font-bold uppercase sm:px-16 xl:px-24">
									Learn More
								</button>
							</article>
							<article className="lg:w-custom text-primary-dark rounded-lg mb-10 w-4/5 bg-white px-6 py-10 text-center lg:px-4">
								<h5 className="text-base font-bold">Master</h5>
								<h2 className="flex justify-center border-b border-gray-200 pb-4 font-bold">
									<p className="mt-6 mr-1 text-3xl">$</p>
									<p className="text-6xl">399.99</p>
								</h2>
								<ul className="text-sm font-bold">
									<li className="border-b border-gray-200 pt-4 pb-4">
										2 TB Storage
									</li>
									<li className="border-b border-gray-200 pt-4 pb-4">
										10 Users Allowed
									</li>
									<li className="border-b border-gray-200 pt-4 pb-4">
										Send up to 20 GB
									</li>
								</ul>
								<button
									className="rounded-md text-primary-very-light mt-12 px-12 py-2 text-center text-sm font-bold uppercase sm:px-16 xl:px-24"
									style={{
										backgroundImage:
											'linear-gradient(90deg, #a3a8f0 0%, #696fdd 100%)',
									}}
								>
									Learn More
								</button>
							</article>
						</section>
					</div> */}
          <div className="relative mt-[3rem] flex flex-col  before:absolute before:top-0 before:left-0 before:z-40 before:h-[50%] before:w-full after:absolute after:bottom-0 after:left-0 after:z-40 after:h-[50%] after:w-full after:bg-[#FFFFFF]">
            <div className="z-50  flex flex-wrap justify-center gap-[2rem] ">
              <PriceCard />
              <PriceCard />
              <PriceCard />
            </div>
          </div>
        </div>
        {/* //we love to listen your requirements */}
        <div className="group mt-[7rem] flex w-full border-y-[6px] border-solid border-[#5B5E71] bg-[#C6CED3] max-[850px]:border-[#3D404E]">
          <div className="relative flex w-1/2 bg-white py-[2rem] pl-[6rem] pr-[2rem] max-[850px]:w-full max-[850px]:flex-col max-[850px]:gap-[5rem] max-[850px]:bg-[#5B5E71] max-[850px]:py-[6rem]">
            <h2 className="clash relative mx-auto  text-[5.5rem] font-600 leading-[90%] text-[#3D404E] max-[850px]:text-center max-[850px]:text-white max-[640px]:text-center max-[640px]:text-[4rem]">
              We love to listen your requirements
            </h2>
            <button className="clash mx-auto h-[60px] rounded-[1rem] border-b-[6px] border-solid border-black/[0.4] bg-[#FFE100] px-12 py-4 text-[2.5rem] font-500  text-black active:scale-[1.01]  max-[850px]:hidden max-[400px]:w-[80%] min-[850px]:hidden ">
              Let’s Work Together
            </button>
            <Button
              classes="min-[850px]:hidden mx-auto  bg-[#FFE100] !rounded-[15px]"
              title="Estimate Project"
            />
          </div>
          <div className="relative flex w-1/2  items-center gap-9 overflow-hidden duration-300 ease-linear after:absolute after:top-0 after:-left-[200%] after:h-full after:w-[90rem] after:bg-[yellow] after:duration-500 after:ease-linear group-hover:after:left-0 max-[850px]:hidden">
            <h2 className="clash z-20 my-[2rem] ml-[6rem] max-w-[24rem] bg-[trasnparent] text-[5.5rem] font-400 leading-[90%] text-[#1E1E1E] max-[640px]:text-center max-[640px]:text-[4rem]">
              Estimate Project
            </h2>
            <div className="relative z-[1000] flex flex-1 overflow-hidden">
              <div className=" top-0 left-0  z-[1000] duration-300 ease-linear group-hover:relative">
                <Image src={arrow} alt="" />
              </div>
              <div className=" absolute left-0 z-[1000]  duration-300 ease-linear group-hover:left-[37px]">
                <Image src={arrow} alt="" />
              </div>
              <div className=" absolute top-0 left-0  z-[1000]   duration-300 ease-linear group-hover:left-[74px]">
                <Image src={arrow} alt="" />
              </div>
              <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[111px]">
                <Image src={arrow} alt="" />
              </div>
              <div className=" absolute top-0 left-0   z-[1000] duration-300 ease-linear group-hover:left-[146px]">
                <Image src={arrow} alt="" />
              </div>
              <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[184px]">
                <Image src={arrow} alt="" />
              </div>
              <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[221px]">
                <Image src={arrow} alt="" />
              </div>
              <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[258px]">
                <Image src={arrow} alt="" />
              </div>
              <div className=" absolute top-0 left-0  z-[1000]  duration-300 ease-linear group-hover:left-[288px]">
                <Image src={arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-[4rem] py-[5rem]">
          <span className="font-clash max-w-[1092px] text-center text-[4rem] font-300 leading-[100%] tracking-[0.02em]">
            How we involve
          </span>
          <h1 className="font-clash mb-10 flex max-w-[1092px]  flex-wrap gap-[1rem] text-center text-[8rem] font-600  leading-[80%] tracking-[0.02em] max-[850px]:text-[6rem] max-[500px]:justify-center">
            Our <span className="text-yellow">Logo</span> Designer?
          </h1>
        </div>
        <div className="max- flex w-full flex-wrap items-center justify-center gap-[3rem] px-[2rem]">
          <DesignCard
            bg="bg-[url('/assets/images/icons/one.svg')]"
            image={bxmessage}
            para="If your business is not on the Internet, then your business will be out of business”. This quote from Bill Gates proves the value of getting your."
            title1="Gather"
            title2="Brand Details"
          />
          <DesignCard
            bg="bg-[url('/assets/images/icons/two.svg')]"
            image={arcticons}
            para="If your business is not on the Internet, then your business will be out of business”. This quote from Bill Gates proves the value of getting your."
            title1="Turned Into"
            title2="Mindmap"
          />
          <DesignCard
            bg="bg-[url('/assets/images/icons/three.svg')]"
            image={iconpark}
            para="If your business is not on the Internet, then your business will be out of business”. This quote from Bill Gates proves the value of getting your."
            title1="Moodboard &"
            title2="Competitor Analysis"
          />
          <DesignCard
            bg="bg-[url('/assets/images/icons/four.svg')]"
            image={arcticon}
            para="If your business is not on the Internet, then your business will be out of business”. This quote from Bill Gates proves the value of getting your."
            title1="Creative Sketches Of"
            title2="Brandface"
          />
          <DesignCard
            bg="bg-[url('/assets/images/icons/five.svg')]"
            image={AiIcon}
            para="If your business is not on the Internet, then your business will be out of business”. This quote from Bill Gates proves the value of getting your."
            title1="Finalization On "
            title2="Software"
          />
          <DesignCard
            bg="bg-[url('/assets/images/icons/six.svg')]"
            image={comTick}
            para="If your business is not on the Internet, then your business will be out of business”. This quote from Bill Gates proves the value of getting your."
            title1="Making Branding"
            title2="System"
          />
        </div>
        {/* <div className="bg-[#1E1E1E] p-[3rem] w-full"></div> */}
        {/* Payless logo design page  */}
        <div className="mt-10 flex w-full gap-[2rem] bg-[#1E1E1E] p-4 pr-20 pl-[3rem] max-[850px]:flex-col">
          <div className="relative  order-1 mx-auto mb-2 min-[850px]:mt-12 max-[850px]:w-full w-[50rem] text-center max-[850px]:order-2  ">
            
            <Image
              className="relative !max-[850px]:top-[21rem]  top-[12rem] w-full"
              src={CardFull}
              alt=""
              //   width={2000}
              //   height={200}
            />
          </div>
          <div className="order-2 ml-auto mt-[6rem] flex min-h-[40rem] max-w-[50%] flex-col justify-center max-[850px]:order-1 max-[850px]:max-w-full max-[850px]:items-center ">
            <h2 className="clash text-[6.5rem] font-600 leading-[90%] text-[#FFFFFF] max-[850px]:text-center">
              Pay less for a better Logo Design
            </h2>
            <p className="mt-[3rem] text-[18px] font-300 text-[#FFFFFF] max-[850px]:text-center">
              At this point, you might be considering why shall I choose
              Creaditech to get my software/ app developed or ask them to
              promote my business. Well, Creaditech has a proven track record of
              developing custom softwares and doing digital marketing for
              different brands. We have a team of expert{" "}
              <span className="text-blue-500">web developers</span>, app
              developers, and digital marketers who are always ready to cater to
              any development or marketing challenge.
            </p>
            <div className="my-[3rem] mr-auto max-[850px]:mx-auto">
              <Button title="Get Started Now" classes="" />
            </div>
          </div>
        </div>

        <div className="mt-[10rem] flex px-[6rem] pb-[10rem] max-[850px]:flex-col max-[850px]:gap-[4rem] max-[500px]:px-[2rem] ">
          <div className="max-w-[77rem] flex-1 max-[850px]:max-w-full">
            <h2 className="robot-condensed mt-[10rem] text-[4.2rem] font-600 uppercase leading-[100%] text-[#5B5E71]  ">
              top logo designing firm in us providing complete branding
            </h2>
            <p className="font-Montserrat mt-[2rem] text-[18px] font-300 leading-[130%]">
              At this point, you might be considering why shall I choose
              Creaditech to get my software/ app developed or ask them to
              promote my business. Well, Creaditech has a proven track record of
              developing custom softwares and doing digital marketing for
              different brands. We have a team of expert{" "}
              <span className="text-blue-600">web developers</span>, app
              developers, and digital marketers who are always ready to cater to
              any development or marketing challenge.
            </p>
            <p className="font-Montserrat mt-[2rem] text-[18px] font-300 leading-[130%]">
              At this point, you might be considering why shall I choose
              Creaditech to get my software/ app developed or ask them to
              promote my business. Well, Creaditech has a proven track record of
              developing custom softwares and doing digital marketing for
              different brands. We have a team of expert
              <span className="text-blue-600">web developers</span>, app
              developers, and digital marketers who are always ready to cater to
              any development or marketing challenge.
            </p>
          </div>
          <div className="flex items-center justify-center max-[850px]:pt-[5rem] min-[500px]:px-[5rem] ">
            <Image
              src={mono}
              className="w-full min-[500px]:h-[42rem] min-[500px]:w-[42rem]"
              alt=""
            />
          </div>
        </div>
        <div className="bg-faq w-full py-[5rem] px-[3rem]">
          <h2 className="clash mb-[3rem] text-center text-[8rem] font-600 text-[#1E1E1E]">
            FAQs
          </h2>
          <div className="flex flex-wrap justify-center gap-[2rem] p-[3rem]">
            <Accordian index={1} />
            <Accordian index={2} />
            <Accordian index={3} />
            <Accordian index={4} />
            <Accordian index={5} />
            <Accordian index={6} />
            <Accordian index={7} />
            <Accordian index={8} />
          </div>
        </div>
        <Slider />
      </div>
      <BottomNav />

      <Footer />
    </>
  );
};

export default LogoService;
