import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { privacyPolicy, TermsAndConditions } from "../utils/terms";

const DetailsPage = ({ data }) => {
  const pageContent =
    data.page !== "privacy-policy" ? privacyPolicy : TermsAndConditions;
  return (
    <>
      <Header />
      <div className="clash font-700 flex justify-center items-center h-[50rem] bg-[grey] text-[5rem] text-[#ffe100]">
        <h1>{data.h1}</h1>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col p-[4rem] gap-[2rem] max-w-[120rem] ">
          {Object.keys(pageContent).map((item) => {
            if (item.includes("h2"))
              return (
                <h2 className="clash font-600 text-[#000000] text-[2.5rem]">
                  {pageContent[item]}
                </h2>
              );
            if (item.includes("h3"))
              return (
                <h2 className="clash font-600 text-[#000000] text-[3rem]">
                  {pageContent[item]}
                </h2>
              );
            if (item.includes("jsx")) return pageContent[item];
            if (item.includes("listTitle"))
            return (
              <p className="clash font-300 text-[#000000] text-[1.8rem] my-[.5rem]">
                {pageContent[item]}
              </p>
            );
            if (item.includes("paras"))
              return (
                <div>
                  {pageContent[item].map((item1) => (
                    <p 
                      key={item1}
                      className="text-[1.8rem] clash leading-[100%] font-300 text-[#000000]"
                    >
                      {item1}
                    </p>
                  ))}
                </div>
              );
            if (item.includes("li"))
              return (
                <ul className="flex flex-col gap-[1rem] pl-[4rem]">
                  {pageContent[item].map((item1) => (
                    <li className="text-[15px] flex   clash font-300 text-[#000000]">
                      <span className="relative -top-[.4rem] mr-[1rem] text-[2rem] ">
                        &#x2022;
                      </span>
                      {item1}
                    </li>
                  ))}
                </ul>
              );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
export async function getStaticProps({ params = {} }) {
  return {
    props: {
      data:
        params.detailPage === "terms&conditions"
          ? { h1: "Terms And Conditions", page: "terms&conditions" }
          : { h1: "Privacy Policy", page: "privacy-policy" }, // will be passed to the page component as props
    },
  };
}
export async function getStaticPaths() {
  const paths = [
    { params: { detailPage: "terms&conditions" } },
    { params: { detailPage: "privacy-policy" } },
  ];
  return {
    paths,
    fallback: false,
  };
}
export default DetailsPage;
