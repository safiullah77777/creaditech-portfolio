import Link from "next/link";
import Header from "../components/header/Header";
import webInfoGraphic from "../public/assets/images/website-development-agency.webp";
import hireExpert from "../public/assets/images/hire-an-expert.svg";
import webDev from "../public/assets/images/web-dev.webp";
export const Content = [
  {
    page: "web-development",
    inforaphic: webInfoGraphic,
    section1: {
      heading:
        "Bring Your Business Idea On The Internet By Taking Our Web Development Services",
      paras: (
        <>
          <p>
            “If you have a website, it makes your small business look big” (
            <Link href={"www.facebook.com"} className="text-sky-500 	">
              Natalie Sequera
            </Link>{" "}
            ). This quote signifies the importance of a website for any
            business. Therefore, if you are business and want to generate more
            leads then you must get your website developed. However, creating a
            high-quality website is not a piece of cake for everyone, therefore
            you must take web development services from expert companies like
            Creaditech.
          </p>

          <p>
            At Creaditech, we don’t just create websites, instead we create
            websites that help you generate more sales. We have a team of expert
            web developers who work day and night to satisfy our client’s needs.
            Our web developers and web designers work together to create an
            appealing website because studies show that 89% of website visitors
            are less likely to return after a bad website experience. Therefore,
            we create websites that have a fast-loading speed, easy to use, and
            easy navigation.
          </p>

          <p>
            So, without any second thoughts choose Creaditech to be your web
            development agency and make your business go live on the Internet.
          </p>
        </>
      ),
      image:webDev,
      link: "",
    },
    section2: {
      heading: "Custom Web Development Services In The USA At Affordable Rates",
      paras: (
        <>
          <p>
            At Creaditech, you can work with some exceptional and talented web
            developers and web designers. We are a reliable and trusted web
            development agency that provides custom{" "}
            <span className="font-600"> web development Service</span> at
            extremely affordable rates. Being in the market since 2015, we have
            worked with several clients and have successfully delivered a ton of
            projects.
          </p>
          <p>
            No matter which framework, language or CMS you want to get your
            website build on, our web developers are always ready to cater any
            type of web development challenge. Contact us now, and get a
            customized solution according to your budget.
          </p>

          <p>
            We value your objectives and requirements and therefore from
            scratch, we invest the time to understand your business objectives
            so that you get a website that is designed and developed according
            to your requirements. When you take our web development services, we
            ensure that it will meet your requirements and will turn your goals
            and visions into reality without putting a burden on your pocket.
          </p>
        </>
      ),
      link: "",
    },
    blackSection: {
      heading: "Your Responsive and Web-Friendly Website Is Just a Click Away",
      paras: `Creaditech is a web development agency that you have been looking for. We are a team of experts
        who are available 24/7 to provide the best possible solution to our clients. We execute well-planned
        strategies, and deliver results that meets the client’s expectation. Be it mobile app development or
        web development, we are Get in touch with us now and get your customized website built according
        to your requirements.`,
    },
    section3: {
      heading: "Why You Shall Take Our Web Development Services?",
      paras: (
        <>
          <p className="font-Montserrat mt-[2rem] text-[18px] font-300 leading-[130%]">
            As you have reached this section, it is evident that you might be
            inspired by our portfolio and website design, however you might be
            thinking that why shall I choose Creaditech to get my website
            developed? Well, below are a few reasons on why you shall take our
            website development service:
          </p>
          <ul className="mt-[2rem] flex flex-col ">
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">1)</span>Highly secure websites.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">2)</span>SEO friendly websites.
            </li>
            <li className="font-Montserrat text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">3)</span>We have expert web developers
              for all technologies.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">4)</span>User-friendly and responsive
              web design.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">5)</span>Support and maintenance.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">6)</span> Cost-effective web
              development services.
            </li>
          </ul>
        </>
      ),
      image: hireExpert,
    },
    faqs: [
      {
        q: "How much does a new website cost?",
        a: `It is only possible to calculate the exact cost of a website by knowing the requirements, as every
        website requires unique and different components. Get in touch with us now so that we can offer
        you a customized web solution.`,
      },
      {
        q: "Will you maintain my website for me?",
        a: `Yes, we love to do that, as regular maintenance is necessary for any website. However, there are
        separate charges for maintenance.`,
      },
      {
        q: "Will my website be mobile-friendly?",
        a: `Yes, we ensure to deliver a fully responsive and mobile-friendly website that will look appealing to
        your visitors and boost your search engine rankings.`,
      },
      {
        q: "Do you provide web designing services too?",
        a: `Yes, we do provide web designing services separately. Contact us to get a quote.`,
      },
      {
        q: "How long will it take to get my website developed?",
        a: `It all depends on the complexity of the website. However, on average, we take around six to 8 weeks
        of turnaround time.`,
      },
      {
        q: "Can you create any type of website?",
        a: `Yes, we surely can. We have a team of expert web developers for all web technologies. Either you
        want to get your website developed on a CMS, or you want a customized website on React, Laravel,
        Angular, etc., contact us &amp; our developers will do the job for you.`,
      },
      {
        q: "Why Shall I choose Creaditech over any other agency?",
        a: `Creaditech is one of the best web design agencies. Our team has over 7+ years of experience in
        web development. We ensure that we understand your business objectives and deliver on them
        fully.`,
      },
      {
        q: "During the development of my website, what kind of assistance will you offer?",
        a: `We will assist you 24/7 and respond to your messages within an hour. Our goal is to listen to and
        resolve your concerns and queries.`,
      },
    ],
  },
  //   {
  //     page: "branding",
  //     section1: {
  //       headding: "",
  //       paras: <></>,
  //       link: "",
  //     },
  //   },
  //   {
  //     page: "wordpress-wix-shopify-development",

  //     section1: {
  //       headding: "",
  //       paras: <></>,
  //       link: "",
  //     },
  //   },
  //   {
  //     page: "tailered-app-solution",
  //     section1: {
  //       headding: "",
  //       paras: <></>,
  //       link: "",
  //     },
  //   },
  //   {
  //     page: "mobile-app-development",
  //     section1: {
  //       headding: "",
  //       paras: <></>,
  //       link: "",
  //     },
  //   },
  //   {
  //     page: "database-solutions",

  //     section1: {
  //       headding: "",
  //       paras: <></>,
  //       link: "",
  //     },
  //   },
  //   {
  //     page: "logo-design",
  //     section1: {
  //       headding: "",
  //       paras: <></>,
  //       link: "",
  //     },
  //   },
  //   {
  //     page: "infographics-design",

  //     section1: {
  //       headding: "",
  //       paras: <></>,
  //       link: "",
  //     },
  //   },
  //   {
  //     page: "social-media-design",

  //     section1: {
  //       headding: "",
  //       paras: <></>,
  //       link: "",
  //     },
  //   },
  //   {
  //     page: "seo",

  //     section1: {
  //       headding: "",
  //       paras: <></>,
  //       link: "",
  //     },
  //   },
  //   {
  //     page: "sem",
  //     section1: {
  //       headding: "",
  //       paras: <></>,
  //       link: "",
  //     },
  //   },
  //   {
  //     page: "social-media-marketing",

  //     section1: {
  //       headding: "",
  //       paras: <></>,
  //       link: "",
  //     },
  //   },
  //   {
  //     page: "content-creation",

  //     section1: {
  //       headding: "",
  //       paras: <></>,
  //       link: "",
  //     },
  //   },
];
