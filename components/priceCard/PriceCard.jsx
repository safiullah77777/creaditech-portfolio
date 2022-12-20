import React from "react";
import Button from "../button/Button";

const PriceCard = () => {
  return (
    <div className=" card-price flex max-w-[424px]  rounded-[10px] border-[2px] border-solid ">
      <div className="flex w-full flex-col items-center justify-center  px-[5rem] py-[3rem]">
        <h2 className="text-[16px] max-[500px]:text-[12px] font-300 leading-[100%] text-[#000000] ">
          WORDMARK / LETTERMARK
        </h2>
        <h2 className="text-[16px] font-[300] text-[#000000] ">
          LOGO DESIGN ONLY
        </h2>

        <h2 className="clash py-[1rem] text-center text-[35px] font-[500] leading-[80%] text-[#000000] ">
          Silver Package
        </h2>
        <h2 className="clash pb-[2rem] text-center text-[35px] font-[500] leading-[80%] text-[#C6CED3]  ">
          US$600
        </h2>

        <ul className="price w-full h-[25rem] overflow-y-scroll mb-[4rem]">
          <li className=" border-[rgb(198, 206, 211)] w-full border-t-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
            CMS (Shopify, WooCommerce, Magento) based Ecommerce website
          </li>
          <li className=" border-[rgb(198, 206, 211)] w-full border-t-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
            Free eCommerce theme
          </li>
          <li className=" border-[rgb(198, 206, 211)] w-full border-t-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
            Custom-designed homepage (1 concept)
          </li>
          <li className=" border-[rgb(198, 206, 211)] w-full border-t-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
            Up to 25 to 50 products
          </li>
          <li className=" border-[rgb(198, 206, 211)] w-full border-t-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
            Up to 10 categories
          </li>
          <li className=" border-[rgb(198, 206, 211)] w-full border-t-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
            Payment gateways integrated
          </li>
          <li className=" border-[rgb(198, 206, 211)] w-full border-t-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
            Homepage Slider
          </li>
          <li className=" border-[rgb(198, 206, 211)] w-full border-t-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
            Mobile responsive
          </li>
          <li className=" border-[rgb(198, 206, 211)] w-full border-t-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
            W3C Certified HTML
          </li>
          <li className="border-[rgb(198, 206, 211)] mb-[3rem] w-full border-y-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
            Admin panel
          </li>
          <li className="border-[rgb(198, 206, 211)] mb-[3rem] w-full border-y-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
            SEO-friendly
          </li>
          <li className="border-[rgb(198, 206, 211)] mb-[3rem] w-full border-y-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
            Complete deployment
          </li>
        </ul>

        <ul className="price w-full h-[28rem] overflow-y-scroll mb-[4rem]">
          <h2 className="clash py-[1rem] text-center text-[25px] font-[500] leading-[80%] text-[#000000]">
            ADD-ONS
          </h2>
          <li className=" border-[rgb(198, 206, 211)] w-full border-t-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
            Premium theme (+$199)
          </li>
          <li className=" border-[rgb(198, 206, 211)] w-full border-t-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
            Live chat integration (+$199)
          </li>
          <li className=" border-[rgb(198, 206, 211)] w-full border-t-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
            1 month support ($100)
          </li>
          <li className=" border-[rgb(198, 206, 211)] w-full border-t-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
            2 month support ($100)
          </li>
          <li className=" border-[rgb(198, 206, 211)] w-full border-t-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
            3 month support ($100)
          </li>
        </ul>
        <Button title="Contact Us" classes="" />
      </div>
    </div>
  );
};

export default PriceCard;
