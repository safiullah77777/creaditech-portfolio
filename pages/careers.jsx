import Head from "next/head";
import React, { useState } from "react";
import BottomNav from "../components/bottomNav/BottomNav";
import Card9 from "../components/card9/Card9";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MetaHead from "../components/metaHead/MetaHead";
import Modal from "../components/modal/Modal";
import Slider from "../components/slider/Slider";

const Careers = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(-1);
  const jobs = [
    {
      title: "Design Lead",
      job: "Karachi Office / Full Time",
      experience: "3-6 Years",
      salary: "Market Competitive",
      keySkills: "UI/UX, Branding Kit",
      tags: ["Adobe", "Premier", "Illustrator",],
      description:
      "Together as a team, we create experiences used and by millions of people every day. For over 20 years, we have worked with ambitious global organizations to launch world-leading digital products and services. Come and join us.",
    line:"The ideal candidate will be responsible for:",
      responsibilities: [
      "You’ll lead the design and provide strategic guidance throughout the duration of projects.",
      "You’ll execute against the principles that create great, human-centered products.",
      "As a hands-on designer with a meticulous eye for detail, you’ll help oversee the work to ensure it is realized with incredible creativity and expert craftsmanship.",
      "You’ll help construct design systems that combine delight and systematic thinking to deliver incredible experiences for global audiences.",
      "You’ll work with other disciplines to establish unified strategic and experiential approaches.",
    ],
     
    },
    {
      title: "Bidder",
      job: "Karachi Office / Full Time",
      experience: "1-3 Years",
      salary: "Market Competitive",
      keySkills: "Good Bidding Skills, Strong Communication Skills",
      tags: ["Upwork", "Freelancer", "Fiver"],
      description:
      "We are looking for a Business Development Intern who can get business from online portals. This will be a two months Internship and based on the performance the ideal candidate will be hired for a permanent role.",
    line:"The ideal candidate will be responsible for:",
      responsibilities: [
      "Acquiring business through different channels (Fiverr, Upwork, Freelance, Guru, People PerHour, Craiglist, etc.) for web design, SEO, Social Media, Development, App Development, Graphic Design projects E.t.c",
      "Quality project selection and bidding.",
      "Writing proposals and customizing each proposal based on the nature of the project.",
      "Project price estimation, quote, proposal creation, talking with client and closure.",
      "Gather client requirements, communicate the requirements with the team and deliver the project to the client. Talking on phone, chatting applications and Skype depending on the requirement from the client",
      "Maintain very high rating on all platforms",
      "Maintain a healthy relationship with the client(s)",
    ],
    },
    // {
    //   title: "Web Developer",
    //   job: "Karachi Office / Full Time",
    //   experience: "4-6 Years",
    //   salary: "Market Compatitive",
    //   keySkills: "UI/UX, Branding Kit",
    // },
    // {
    //   title: "Animator",
    //   job: "Karachi Office / Full Time",
    //   experience: "4-6 Years",
    //   salary: "Market Compatitive",
    //   keySkills: "UI/UX, Branding Kit",
    // },
  ];
  return (
    <>
      <MetaHead
        title={"Careers - Creaditech"}
        description="View our job openings"
        link="careers"
      />
      {/* <Head>
        <meta
          name="robots"
          content="noindex, nofollow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>Careers - Creaditech</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={"description"} /> 
        <link rel="canonical" href={`https://creaditech.com/careers`} />
      </Head> */}
      <Header />
      <div
        className="banner5  bg-[url('/assets/images/backgrounds/banner5.webp')]   max-[850px]: relative flex h-[100vh]  w-full bg-cover bg-center  bg-no-repeat bg-blend-overlay max-[850px]:flex-col max-[850px]:p-0 
    max-[850px]:pt-[5rem]"
      >
        <div className="m-auto flex h-full flex-col items-center justify-center font-semibold max-[850px]:mx-auto max-[850px]:max-w-full  max-[850px]:px-8 max-[850px]:pl-12 ">
          <h1 className="robot-condensed max-w-[790px] text-center text-[6.5rem] font-600 uppercase leading-[85%] text-white max-[850px]:text-center max-[850px]:text-[5rem] max-[393px]:text-[6rem]">
            <span className="text-yellow">JOIN US</span> and realise the{" "}
            <span className="text-yellow">UNIMAGINED.</span>
          </h1>
          <p className="Montserrat mt-4 max-w-[76rem] text-center text-[1.6rem] font-light leading-[130%] text-white max-[850px]:text-center max-[850px]:text-[2.5rem]">
            Together as a team, we create experiences used and loved by millions
            of people every day. For over 20 years, we have worked with
            ambitious global organizations to launch world-leading digital
            products and services. Come and join us.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-stretch h-[100%] justify-center gap-[2rem] px-[4rem] py-[8rem]">
        {jobs.map((data, index) => (
          // <div className="h-[100%]" onClick={() => setModalData(index)}>
            <Card9 onPress={setModalData} index={index} key={index} setShowModal={setShowModal} data={data} />
          // </div>
        ))}
      </div>
      <div className="max-[600] flex flex-col bg-[#C6CED3] py-[8rem] px-[4rem] max-[600px]:py-[4rem] max-[600px]:px-[2rem] ">
        <h2 className="clash mx-auto text-center text-[8rem] font-600 leading-[100%] text-[#1E1E1E] max-[600px]:mb-[3rem] max-[600px]:text-[6rem]">
          Want to join our Team?
        </h2>
        <h3 className="clash mx-auto mt-8 text-center  text-[3.5rem] font-500 leading-[80%] text-[#5B5E71] max-[600px]:mb-[3rem]">
          Looking for the next career move?{" "}
        </h3>
        <p className="Montserrat mx-auto mt-8 max-w-[98rem] text-center text-[16px]  font-300 leading-[130%] text-[#000000]">
          Our branding and logo design packages are very suitable for both
          market newbies and popular brands. You can select any package as per
          your requirements and also make changes to these packages. No matter
          whether it is about a single logo or a bulk of them we are equally
          productive in both cases.
        </p>

        <div className="mx-auto my-[3rem] flex max-w-[43rem] flex-col   items-center gap-[1rem] rounded-[4rem] border-[2px] border-dashed border-[#5B5E71] p-[2rem] max-[600px]:mb-[6rem]">
          <h2 className="robot-condensed text-[3rem] font-300 leading-[100%] text-[#5B5E71]">
            {" "}
            Drop your Resume here
          </h2>
          <p className="robot-condensed text-[3rem] font-300 leading-[100%] text-[#000]">
            or
          </p>
          <p className="robot-condensed cursor-pointer text-[3rem] font-300 leading-[100%] text-[#0377BC] underline">
            Select File
          </p>
        </div>
        <h2 className="robot-condensed mx-auto text-[2.5rem] font-300 leading-[100%] text-[#5B5E71]">
          {" "}
          Or send your resume at
        </h2>
        <h2 className="clash mx-auto text-[3.5rem] font-500 leading-[100%] text-[#5B5E71] max-[600px]:text-[2.5rem]">
          {" "}
          Careers@creaditech.com
        </h2>
      </div>
      <Modal
        data={jobs[modalData]}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <Slider />
      <BottomNav index={5} />

      <Footer />
    </>
  );
};

export default Careers;
