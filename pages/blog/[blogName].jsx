import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

import { blogs } from "../../utils/blogs";
import BottomNav from "../../components/bottomNav/BottomNav";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MetaHead from "../../components/metaHead/MetaHead";
import contactForm from "../../services/fromService";
import { toast } from "react-toastify";

const BlogPost = ({ blogInfo }) => {
  const ref = useRef(null);
  const blogContent = blogs[0];
  const [dropdown, setDropdown] = useState(-1);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");
  let headings = Object.keys(blogContent)
    .map((item) => {
      return {
        ...blogContent[item],
      };
    })
    .filter((item) => {
      return Object.keys(item).includes("h2");
    });
  headings.map((item) => {
    return Object.keys(item).map((item1) => {
      if (item1.includes("h2") || item1.includes("h3")) {
        return item[item1];
      } else {
        return delete item[item1];
      }
    });
  });
  return (
    <>
      {/* after:w-full after:h-full after:absolute after:top-0 after:z-[1000] after:bg-gradient-bg */}
      <MetaHead
        title={blogContent?.meta?.title}
        description={blogContent?.meta?.description}
        link={`blog/${blogContent.title}`}
      />
      <Header />
      <div className="flex flex-col relative min-h-[60rem]  ">
        <div className="flex ">
          <Image unoptimized 

            loader={({ src }) => {
              return src;
            }}
            width={2000}
            height={1000}
            className="w-full h-full"
            src={blogContent?.featuredImage?.img}
            alt={blogContent?.featuredImage?.alt}
          />
        </div>
        <div className=" flex flex-col gap-[1rem] w-full items-center bg-[#1E1E1E] p-[3rem] ">
          <h1  className="robot-condensed max-w-[104rem] text-center leading-[100%] font-600 text-[6.5rem] text-[#ffffff] uppercase">
            {blogContent?.h1}
          </h1>
          <p className="bg-[#2B2B2B] rounded-[2rem] flex gap-[.5rem] px-[1rem] py-[.1rem] mx-auto">
            <span className="text-[2rem] text-[#ffffff] font-700 clash">
              Uploaded on :
            </span>
            <span className="text-[2rem] text-[#ffe100] font-300 clash">
              {blogContent?.uploadDate}
            </span>
          </p>
        </div>
      </div>
      <div className="flex pt-[7rem] pb-[3rem] gap-[2rem] max-[750px]:flex-col  items-start max-[600px]:px-[3rem] px-[8rem] ">
        <div className="flex max-[850px]:static sticky top-[5rem] mr-auto flex-col rounded-t-[2rem] bg-[#EEEEEE] max-[850px]:w-full max-[850px]:max-w-full max-w-[33rem] overflow-hidden">
          <div className="bg-[#1E1E1E] w-full py-[1rem] ">
            <h2 className="text-[#ffffff] clash font-500 text-[2.5rem] w-full text-center">
              Contents
            </h2>
          </div>

          <ul className="flex flex-col py-[1rem] gap-[.3rem]">
            {headings.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() =>
                    setDropdown((prev) => (prev == index ? -1 : index))
                  }
                  className="flex flex-col px-[2rem] py-[1rem]  gap-[0.5rem] Montserrat text-[1.6rem] font-600 bg-[#ffe100] leading-[130%] text-[#000000]"
                >
                  <div className="flex gap-[1rem]">
                    <a
                      className=" mr-auto list-disc items-center"
                      href={`#${item.h2.split(" ").join("")}`}
                      rel="nofollow"
                    >
                      <span>{index + 1}.</span>
                      <span>{item.h2}</span>
                    </a>
                    {Object.keys(item)?.length > 1 && (
                      <svg
                        width="26"
                        height="17"
                        viewBox="0 0 44 71"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`ease-linear duration-150 relative top-[.5rem] ${dropdown === index
                          ? "rotate-[90deg]"
                          : "rotate-[0deg]"
                          }`}
                      >
                        <path
                          d="M-0.000488281 8.3425L27.0978 35.5L-0.000488281 62.6575L8.34201 71L43.842 35.5L8.34201 0L-0.000488281 8.3425Z"
                          fill="#1E1E1E"
                        />
                      </svg>
                    )}
                  </div>
                  {Object.keys(item)?.length > 1 && (
                    <ul
                      ref={ref}
                      className={`list-disc pl-[3rem] ease-linear transition-[height] duration-200 ${dropdown === index
                        ? "max-h-auto opacity-100"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      {Object.keys(item)
                        .slice(1)
                        .map((item1, key) => {
                          return (
                            <li key={`#${item[item1].split(" ").join("") + key}`} className="flex  py-[.2rem]  gap-[0.5rem] Montserrat text-[1.4rem] leading-[130%] text-[#000000]">
                              <a
                                className="flex "
                                href={`#${item[item1].split(" ").join("")}`}
                                rel="nofollow"
                              >
                                {/* <span>{index }+ 1.</span> */}
                                <span>{item[item1]}</span>
                              </a>
                            </li>
                          );
                        })}
                    </ul>
                  )}
                </li>
              );
            })}
            {/* <Link
              href={"#"}
              className="px-[2rem] py-[1rem] flex gap-[0.5rem] Montserrat text-[1.6rem] font-400 leading-[130%] text-[#5B5E71]"
            >
              <span>1.</span>
              <span>Understand what keywords people are searching for</span>
            </Link>
            <Link
              href={"#"}
              className="px-[2rem] py-[1rem] flex gap-[0.5rem] Montserrat text-[1.6rem] font-400 leading-[130%] text-[#5B5E71]"
            >
              <span>1.</span>
              <span>Understand what keywords people are searching for</span>
            </Link>
            <Link
              href={"#"}
              className="px-[2rem] py-[1rem] flex gap-[0.5rem] Montserrat text-[1.6rem] font-400 leading-[130%] text-[#5B5E71]"
            >
              <span>1.</span>
              <span>Understand what keywords people are searching for</span>
            </Link>
            <Link
              href={"#"}
              className="flex px-[2rem] py-[1rem]  gap-[0.5rem] Montserrat text-[1.6rem] font-600 bg-[#ffe100] leading-[130%] text-[#000000]"
            >
              <span>1.</span>
              <span>Understand what keywords people are searching for</span>
            </Link> */}
          </ul>
        </div>

        <div className="flex flex-1 flex-col gap-[1rem] ">
          {Object.keys(blogContent).map((item, index) => {
            if (item.includes("parasonly")) {
              return blogContent[item].map((para) => {
                return (
                  <p key={index + para} className="robot-condensed text-[#303030] text-[2rem] leading-[100%]">
                    {para}
                  </p>
                );
              });
            }
            if (item.includes("headingWithParas")) {
              const temp = blogContent[item];
              return (
                <>
                  <h2
                    id={`${temp.h2.split(" ").join("")}`}
                    key={`${temp.h2.split(" ").join("") + index}`}
                    className="clash text-[#000000] leading-[100%] clash font-600 text-[3.5rem]"
                  >
                    {temp.h2}
                    
                  </h2>
                  {temp.paras.map((para, key) => {
                    return (
                      <p  key={key} className="robot-condensed text-[#303030] text-[2rem] leading-[100%]">
                        {para}
                      </p>
                    );
                  })}
                  {Object.keys(temp).includes("ols") && (
                    <ol
                      className="pl-[2rem] flex flex-col gap-[.5rem] list-decimal"
                      start={1}
                    >
                      {temp.ols.map((li, index) => {
                        return (
                          <li key={index + li} className="robot-condensed text-[#303030] text-[2rem] leading-[100%]">
                            {li}
                          </li>
                        );
                      })}
                    </ol>
                  )}
                </>
              );
            }
            if (item.includes("headingParasAndSubHeadings")) {
              const temp = Object.keys(blogContent[item]);
              return temp.map((item1, index) => {
                if (item1.includes("h2")) {
                  return (
                    <h2
                      id={`${blogContent[item][item1].split(" ").join("")}`}
                      key={index + blogContent[item][item1]}
                      className="clash text-[#000000] leading-[100%] clash font-600 text-[3.5rem]"
                    >
                      {blogContent[item][item1]}
                    </h2>
                  );
                }
                if (item1.includes("h3")) {
                  return (
                    <h3
                      key={`${blogContent[item][item1].split(" ").join("")+index}`}
                      id={`${blogContent[item][item1].split(" ").join("")}`}
                      className="clash text-[#000000] leading-[100%] clash font-600 text-[2.5rem]"
                    >
                      {blogContent[item][item1]}
                    </h3>
                  );
                }
                if (item1.includes("paras")) {
                  return blogContent[item][item1].map((para, index) => {
                    return (
                      <p
                        key={index}
                        className="robot-condensed text-[#303030] text-[2rem] leading-[100%]">
                        {para}
                      </p>
                    );
                  });
                }
                if (item1.includes("uls")) {
                  return (
                    <ul className="flex flex-col list-disc pl-[5rem]">
                      {blogContent[item][item1].map((li, index) => {
                        return (
                          <li
                            key={index+li}
                            className="robot-condensed text-[#303030] text-[2rem] leading-[100%]">
                            {li}
                          </li>
                        );
                      })}
                    </ul>
                  );
                }
                if (item1.includes("ulWithHeadings")) {
                  return (
                    <ul className="flex flex-col list-disc pl-[5rem]">
                      {blogContent[item][item1].map((li, index) => {
                        return (
                          <li
                            key={index+li?.heading}
                            className="robot-condensed text-[#303030] text-[2rem] leading-[100%]">
                            <span className="font-700">{li?.heading}</span>{" "}
                            {li?.des}
                          </li>
                        );
                      })}
                    </ul>
                  );
                }
              });
            }
          })}

          {/* <h3 className="clash font-500 text-[#303030] text-[2.5rem] leading-[100%]">
            Starting with SEO can be overwhelming???many technical terms,
            checklists of tens of tasks to do, learning resources contradicting
            each other, and the list goes on. I remember when I got into the
            game.
          </h3>
          <p className="robot-condensed text-[#303030] text-[2rem] leading-[100%]">
            This SEO tutorial should get you on the right track. We???ll go
            through seven essential steps to help you increase organic traffic
            and ensure you have the right foundation to advance your SEO skills
            further.
          </p>
          <h2 className="clash text-[#000000] leading-[100%] clash font-600 text-[3.5rem]">
            1. Understand what keywords people are searching for
          </h2>*/}
        </div>
        <div className="flex max-[850px]:static sticky top-[5rem] max-[850px]:w-full max-[850px]:max-w-full items-center justify-center min-[851px]:ml-auto mx-auto flex-col gap-[2rem] max-w-[33rem] ">
          <h2 className="text-[#000000] leading-[110%] clash font-500 text-[2rem] w-full text-center">
            Share this Blog
          </h2>
          <div className="flex mx-auto gap-[2rem]">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 15C30 6.71578 23.2842 0 15 0C6.71578 0 0 6.71566 0 15C0 22.4869 5.48531 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.3219 5.85938C19.9631 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.9248 9.84375 17.3438 11 17.3438 12.1863V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.487 30 15Z"
                fill="#1877F2"
              />
            </svg>
            <svg
              width="37"
              height="30"
              viewBox="0 0 37 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.7484 3.65328C35.3723 4.26287 33.9128 4.663 32.4183 4.84037C33.975 3.90735 35.1703 2.42989 35.7331 0.669504C34.2533 1.54766 32.6342 2.16638 30.9459 2.49893C29.5706 1.03381 27.6114 0.118164 25.443 0.118164C21.2794 0.118164 17.9038 3.49367 17.9038 7.65692C17.9038 8.24788 17.9705 8.82319 18.099 9.3751C11.8334 9.0606 6.27841 6.05931 2.55999 1.49816C1.91119 2.61161 1.53942 3.90678 1.53942 5.28821C1.53942 7.90381 2.87047 10.2112 4.89324 11.5632C3.69604 11.5257 2.52518 11.2024 1.47841 10.6202C1.47798 10.6518 1.47798 10.6833 1.47798 10.7151C1.47798 14.3677 4.07664 17.4148 7.52535 18.1074C6.41519 18.4093 5.2507 18.4535 4.12085 18.2366C5.08013 21.2317 7.86439 23.4112 11.1632 23.4722C8.5831 25.4941 5.33234 26.6995 1.80037 26.6995C1.19176 26.6995 0.591762 26.6637 0.00195312 26.5941C3.33827 28.7331 7.301 29.9812 11.5584 29.9812C25.4254 29.9812 33.0083 18.4935 33.0083 8.53123C33.0083 8.20424 33.0011 7.87912 32.9865 7.55587C34.4624 6.48891 35.7363 5.16737 36.7484 3.65328Z"
                fill="#55ACEE"
              />
            </svg>
            <svg
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.3114 25.5618H21.8664V18.6005C21.8664 16.9406 21.8367 14.8037 19.5545 14.8037C17.2393 14.8037 16.8851 16.6123 16.8851 18.4797V25.5614H12.4402V11.2462H16.7073V13.2025H16.7671C17.1941 12.4723 17.8112 11.8716 18.5526 11.4644C19.2941 11.0572 20.1321 10.8587 20.9774 10.8901C25.4827 10.8901 26.3133 13.8535 26.3133 17.7087L26.3114 25.5618ZM7.42453 9.28953C5.99988 9.28976 4.84477 8.135 4.84453 6.71035C4.8443 5.2857 5.99895 4.13058 7.42359 4.13035C8.84824 4.13 10.0034 5.28476 10.0036 6.70941C10.0037 7.39356 9.73207 8.04973 9.2484 8.53359C8.76474 9.01746 8.10868 9.28937 7.42453 9.28953ZM9.64711 25.5619H5.19738V11.2462H9.64699V25.5618L9.64711 25.5619ZM28.5274 0.00218342H2.96379C1.75559 -0.0114103 0.764766 0.956441 0.75 2.16464V27.8349C0.764297 29.0437 1.755 30.0125 2.96367 29.9998H28.5274C29.7387 30.0148 30.7332 29.0461 30.75 27.8349V2.16265C30.7328 0.952105 29.7381 -0.0156291 28.5274 0.000191237"
                fill="#0A66C2"
              />
            </svg>
          </div>
          <div className="flex flex-col max-[850px]:w-full gap-[1rem] items-center bg-[#F9F9F9] rounded-[2rem] w-[33rem] py-[3rem] px-[2rem] ">
            <div className="w-[21rem] h-[21rem]">
              <Image unoptimized 

                loader={({ src }) => {
                  return src;
                }}
                width={2000}
                height={1000}
                className="w-full h-full rounded-full"
                src={
                  "https://img.freepik.com/premium-vector/female-character-working-from-home_14588-430.jpg"
                }
                alt="content writer"
              />
            </div>
            <h3 className="text-[2rem]  font-500 text-[#000000] clash">
              Author: Katherine
            </h3>
            {/* <p className="robot-condensed text-[#838383] text-[1.6rem] font-400 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <div className="flex gap-[2rem]">
              <svg
                width="37"
                height="30"
                viewBox="0 0 37 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.7484 3.65328C35.3723 4.26287 33.9128 4.663 32.4183 4.84037C33.975 3.90735 35.1703 2.42989 35.7331 0.669504C34.2533 1.54766 32.6342 2.16638 30.9459 2.49893C29.5706 1.03381 27.6114 0.118164 25.443 0.118164C21.2794 0.118164 17.9038 3.49367 17.9038 7.65692C17.9038 8.24788 17.9705 8.82319 18.099 9.3751C11.8334 9.0606 6.27841 6.05931 2.55999 1.49816C1.91119 2.61161 1.53942 3.90678 1.53942 5.28821C1.53942 7.90381 2.87047 10.2112 4.89324 11.5632C3.69604 11.5257 2.52518 11.2024 1.47841 10.6202C1.47798 10.6518 1.47798 10.6833 1.47798 10.7151C1.47798 14.3677 4.07664 17.4148 7.52535 18.1074C6.41519 18.4093 5.2507 18.4535 4.12085 18.2366C5.08013 21.2317 7.86439 23.4112 11.1632 23.4722C8.5831 25.4941 5.33234 26.6995 1.80037 26.6995C1.19176 26.6995 0.591762 26.6637 0.00195312 26.5941C3.33827 28.7331 7.301 29.9812 11.5584 29.9812C25.4254 29.9812 33.0083 18.4935 33.0083 8.53123C33.0083 8.20424 33.0011 7.87912 32.9865 7.55587C34.4624 6.48891 35.7363 5.16737 36.7484 3.65328Z"
                  fill="#5B5E71"
                />
              </svg>
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.3114 25.5618H21.8664V18.6005C21.8664 16.9406 21.8367 14.8037 19.5545 14.8037C17.2393 14.8037 16.8851 16.6123 16.8851 18.4797V25.5614H12.4402V11.2462H16.7073V13.2025H16.7671C17.1941 12.4723 17.8112 11.8716 18.5526 11.4644C19.2941 11.0572 20.1321 10.8587 20.9774 10.8901C25.4827 10.8901 26.3133 13.8535 26.3133 17.7087L26.3114 25.5618ZM7.42453 9.28953C5.99988 9.28976 4.84477 8.135 4.84453 6.71035C4.8443 5.2857 5.99895 4.13058 7.42359 4.13035C8.84824 4.13 10.0034 5.28476 10.0036 6.70941C10.0037 7.39356 9.73207 8.04973 9.2484 8.53359C8.76474 9.01746 8.10868 9.28937 7.42453 9.28953ZM9.64711 25.5619H5.19738V11.2462H9.64699V25.5618L9.64711 25.5619ZM28.5274 0.00218342H2.96379C1.75559 -0.0114103 0.764766 0.956441 0.75 2.16464V27.8349C0.764297 29.0437 1.755 30.0125 2.96367 29.9998H28.5274C29.7387 30.0148 30.7332 29.0461 30.75 27.8349V2.16265C30.7328 0.952105 29.7381 -0.0156291 28.5274 0.000191237"
                  fill="#5B5E71"
                />
              </svg>
            </div> */}
          </div>
          <h3 className="text-[2rem] text-center mx-auto max-w-[25rem] leading-[100%] mt-[1rem] font-500 text-[#000000] clash">
            Subscribe for weekly updates
          </h3>
          <div className="flex flex-col mx-auto max-[600px]:w-full">
            <input
              placeholder="Email Address"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" h-60 max-[600px]:w-full  w-[25rem] rounded-t-[0.5rem]   bg-[#515151]   px-8 text-[1.6rem] font-300 text-[#FFFFFF]/[0.5]  outline-none  max-[850px]:h-[60px] max-[850px]:text-[16px]  "
              name=""
              id=""
            />
            <button
              disabled={loading}
              onClick={() => {
                const emailregex = new RegExp(
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                );
                if (!emailregex.test(email)) {
                  return toast.error("invalid email");
                }
                setLoading(true);
                contactForm({ email,type:"newsletter" }, setLoading);
                setEmail("");
              }}
              className="clash h-60 max-[600px]:w-full  w-[25rem] rounded-b-[0.5rem] active:scale-y-[1.02]   bg-[#ffe100] border-solid border-b-[5px] border-[#000000]/[0.3]  px-8 text-[1.6rem] font-500 text-[#000000]  outline-none  max-[850px]:h-[60px] max-[850px]:text-[16px]  "
            >
              {loading ? "loading..." : "Subscribe"}
            </button>
          </div>
        </div>
      </div>
      <BottomNav index={-1} />
      <Footer />
    </>
  );
};
export async function getStaticProps({ params = {} }) {
  return {
    props: {
      blogInfo: blogs.filter((item) => {
        return params.blogName == item.title;
      }),
    }, // will be passed to the page component as props
  };
}
export async function getStaticPaths() {
  const paths = blogs.map((item) => {
    return {
      params: {
        blogName: item?.title,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export default BlogPost;
