import Link from "next/link";
import React from "react";
import Button from "../button/Button";

const PriceCard = ({ item, no }) => {
  return (
    <div className=" card-price flex w-[42rem] rounded-[10px] border-[2px] border-solid ">
      <div className="flex w-full flex-col items-center justify-center  px-[5rem] py-[3rem]">
        {/* <h2 className="text-[16px] max-[500px]:text-[12px] font-300 leading-[100%] text-[#000000] ">
          WORDMARK / LETTERMARK
        </h2>
        <h2 className="text-[16px] font-[300] text-[#000000] ">
          LOGO DESIGN ONLY
        </h2> */}

        <h2 className="clash py-[1rem] text-center text-[35px] font-[500] leading-[80%] text-[#000000] ">
          {no === 0 ? "Silver" : no === 1 ? "Gold" : "Patinum"} Package
        </h2>
        <h2 className="clash pb-[2rem] text-center text-[35px] font-[500] leading-[80%] text-[#C6CED3]  ">
          {item.price}
        </h2>

        <ul className="price w-full h-[25rem] overflow-y-scroll pr-[1rem] mb-[4rem]">
          {item?.features.map((feature, index) => (
            <li
              key={index}
              className=" border-[rgb(198, 206, 211)] w-full border-t-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] "
            >
              {feature}
            </li>
          ))}
        </ul>

        <h2 className="clash py-[1rem] text-center text-[25px] font-[500] leading-[80%] text-[#000000]">
          ADD-ONS
        </h2>
        <ul className="price w-full h-[12rem] pr-[1rem] overflow-y-scroll mb-[4rem]">
          {item?.adons.map((addon, index) => (
            <li
              key={index}
              className=" border-[rgb(198, 206, 211)] w-full border-t-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] "
            >
              {addon}
            </li>
          ))}
        </ul>
        <Link href={"/contact-us"} className="">
        <Button title="Contact Us" classes="" />
        </Link>
      </div>
    </div>
  );
};

export default PriceCard;
