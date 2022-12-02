import React, { useState } from "react";
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
import { toast } from "react-toastify";
import contactForm from "../services/fromService";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    subject: "",
    companyName: "",
    description: "",
  });
  const onChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const emailregex = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    const nameregex = new RegExp(/^[_A-zA-Z]*((-|\s)*[_A-zA-Z])*$/g);
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
      return;
    }
    if (!nameregex.test(formData.name)) {
      toast.error(
        "invalid name.you can not use special characters in your name."
      );
      return;
    } else if (!emailregex.test(formData.email)) {
      toast.error("invalid email address");
      return;
    } 
    else if (formData.companyName.length>0 && !nameregex.test(formData.companyName)) {
      toast.error("invalid compnay Name");
      return;
    }
    setLoading(true);
    contactForm({ ...formData, type: "contact-us" }, setLoading);
    setFormData({
      name: "",
      email: "",
      phoneNo: "",
      subject: "",
      companyName: "",
      description: "",
    });
  };
  return (
    <>
      <MetaHead />
      <Header />
      <div
        className=" bg-banner-grey  banner7  bg-[url('/assets/images/backgrounds/banner7.png')]   flex  min-h-[80rem]   w-full  bg-cover bg-center bg-no-repeat px-[2rem] pt-[20rem] bg-blend-overlay max-[950px]:gap-[3rem]  max-[950px]:pb-[5rem] 
    			max-[850px]:flex-col min-[500px]:px-28 "
      >
        <div className="flex h-full max-w-[700px] flex-col  gap-[2rem]  max-[850px]:mx-auto max-[850px]:max-w-full max-[400px]:items-center">
          <h1 className="clash text-[3rem] font-[500] leading-[79.5%] tracking-[0.02em] text-[#FFE100] ">
            Contact us
          </h1>
          <h2 className="clash text-[5rem] font-[500] leading-[79.5%] tracking-[0.02em] text-[#FFFFFF] max-[400px]:text-center ">
            Let’s work together.
          </h2>
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
            info@creaditech.com
          </p>
          <p className="clash text-[2rem] font-[400] leading-[100%] tracking-[0.05em] text-[#FFFFFF] max-[400px]:text-center ">
            sales@creaditech.com
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
              <Input
                onChange={onChange}
                value={formData.name}
                placeholder="Your Name"
                name={"name"}
                classes="w-full"
                type="text"
              />
            </div>
            <div className="flex-1">
              <Input
                onChange={onChange}
                value={formData.phoneNo}
                placeholder="Phone*"
                name="phoneNo"
                classes="w-full"
                type="text"
              />
            </div>
          </div>
          <Input
            onChange={onChange}
            value={formData.email}
            placeholder="Email Address *"
            name="email"
            classes="w-full"
            type="text"
          />
          <Input
            onChange={onChange}
            value={formData.companyName}
            placeholder="Company Name (Optional)"
            classes="w-full"
            type="text"
            name="companyName"
          />
          <Input
            onChange={onChange}
            value={formData.subject}
            placeholder="Pick a Subject (optional)"
            classes="w-full"
            type="text"
            name="subject"
          />

          <textarea
            value={formData.description}
            onChange={onChange}
            placeholder="Write your message here..."
            className="w-full rounded-[5px] border-none bg-[#515151] p-[2rem] text-[1.6rem] font-300 text-[#FFFFFF]/[0.5] outline-none max-[400px]:h-[15.7rem]"
            id=""
            name="description"
          ></textarea>
          {loading ? (
            <div class="loader"></div>
          ) : (
            <Button
              onClick={onSubmit}
              title="Send Now"
              classes="!rounded-[10px] !text-[2.5rem] !font-500"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col p-[4rem] gap-[5rem] items-center">
        <h2 className=" robot-condensed items-center  text-center text-[6.5rem] font-[600] uppercase leading-[81%] text-[#000000] ">
          Find Us At
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.203122973941!2d-96.70347288449602!3d33.156293871856015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1760fbb891db%3A0xaa52d244eb78af95!2sCreaditech!5e0!3m2!1sen!2s!4v1669139618632!5m2!1sen!2s"
          width="1312"
          height="409"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className=" mt-[5rem] ">
        <h2 className=" robot-condensed items-center  text-center text-[6.5rem] font-[600] uppercase leading-[81%] text-[#000000] ">
          Connect Us On Social Media{" "}
        </h2>
        <div className="  flex flex-wrap justify-center gap-[2rem] py-[10rem]">
          <Image
            loader={({ src }) => {
              return src;
            }}
            src={Facbook}
            alt="Facbook"
            width={144}
            height={144}
          />
          <Image
            loader={({ src }) => {
              return src;
            }}
            src={Instagram}
            alt="Instagram"
            width={144}
            height={144}
          />
          <Image
            loader={({ src }) => {
              return src;
            }}
            src={Pintrest}
            alt="Pintrest"
            width={144}
            height={144}
          />
          <Image
            loader={({ src }) => {
              return src;
            }}
            src={LinkedIn}
            alt="LinkedIn"
            width={144}
            height={144}
          />
          <Image
            loader={({ src }) => {
              return src;
            }}
            src={Youtube}
            alt="Youtube"
            width={144}
            height={144}
          />
        </div>
        <Slider />
      </div>
      <BottomNav />

      <Footer />
    </>
  );
};

export default ContactUs;
