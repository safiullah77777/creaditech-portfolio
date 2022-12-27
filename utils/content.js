import Link from "next/link";
import Header from "../components/header/Header";
import webInfoGraphic from "../public/assets/images/website-development-agency.webp";
import cmsInfoGraphic from "../public/assets/images/why-your-business-needs-a-CMS.webp";
import ecommerceInfoGraphic from "../public/assets/images/why-you-should-have-an-ecommerce-website.webp";
import hireExpert from "../public/assets/images/hire-an-expert.svg";
import cmsExpert from "../public/assets/images/CMS-developers.svg";
import ecommercehireExpert from "../public/assets/images/ecommerce-website-developers.svg";
import ecommerce from "../public/assets/images/ecommerce-website-development-services.webp";

import webDev from "../public/assets/images/web-dev.webp";
import cmsDev from "../public/assets/images/cms-development-services.webp";

import wordpressInfoGraphic from "../public/assets/images/why-you-should-use-wordpress.webp";
import wordpressDev from "../public/assets/images/wordpress-development-services.webp";
import wordpressExpert from "../public/assets/images/wordpress-developers.svg";

import customInfoGraphic from "../public/assets/images/why-your-business-needs-a-custom-web-app.webp";
import customDev from "../public/assets/images/custom-web-app-development-services.webp";
import customExpert from "../public/assets/images/custom-web-app-developers.svg";

import phpInfoGraphic from "../public/assets/images/advantages-of-PHP.webp";
import phpDev from "../public/assets/images/PHP-web-development-services.webp";
import phpExpert from "../public/assets/images/PHP-web-developers.svg";

import seoInfoGraphic from "../public/assets/images/why-your-business-needs-SEO.webp";
import seoDev from "../public/assets/images/SEO-services.webp";
import seoExpert from "../public/assets/images/SEO-specialists.svg";

import semInfoGraphic from "../public/assets/images/why-your-business-needs-SEM.webp";
import semDev from "../public/assets/images/SEM-services.webp";
import semExpert from "../public/assets/images/SEM-experts.svg";

import contentInfoGraphic from "../public/assets/images/why-quality-content-is-important.webp";
import contentDev from "../public/assets/images/Content-creation-services.webp";
import contentExpert from "../public/assets/images/Content-creators.svg";

import logos_woocommerce from "../public/assets/images/icons/logos-woocommerce.svg";
import open_cart from "../public/assets/images/icons/open-cart.svg";
import square_space from "../public/assets/images/icons/sqaure-space.svg";
import magento from "../public/assets/images/icons/magento.svg";
import big_commerce from "../public/assets/images/icons/big-commerce.svg";
import shopify from "../public/assets/images/icons/shopify.svg";

import analysis from "../public/assets/images/icons/analysis.svg";
import ecommerces from "../public/assets/images/icons/ecommerce.svg";
import design from "../public/assets/images/icons/design.svg";
import design1 from "../public/assets/images/icons/design1.svg";
import seo from "../public/assets/images/icons/seo.svg";
import testing from "../public/assets/images/icons/testing.svg";
import testing2 from "../public/assets/images/icons/testing2.svg";
import deployment from "../public/assets/images/icons/deployment.svg";
import development from "../public/assets/images/icons/development.svg";
import quality from "../public/assets/images/icons/quality.svg";
import maintenance from "../public/assets/images/icons/maintenance.svg";
import competitor from "../public/assets/images/icons/competitor.svg";
import research from "../public/assets/images/icons/research.svg";
import strategize from "../public/assets/images/icons/strategize.svg";
import monitoring from "../public/assets/images/icons/monitoring.svg";
import refine from "../public/assets/images/icons/refine.svg";
import understanding from "../public/assets/images/icons/understanding.svg";
import landing from "../public/assets/images/icons/landing.svg";
import compaign from "../public/assets/images/icons/compaign.svg";
import identification from "../public/assets/images/icons/identification.svg";
import contentCreation from "../public/assets/images/icons/content_creation.svg";
import contentOptimization from "../public/assets/images/icons/content_optimization.svg";
import promotion from "../public/assets/images/icons/promotion.svg";

export const Content = [
  {
    page: "web-development",
    button: "Web development Portfolio",
    inforaphic: { img: webInfoGraphic, alt: "web development" },
    pricing: false,
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
      image: { img: webDev, alt: "web development services" },
      link: "web development services",
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
      image: { img: hireExpert, alt: "hire an expert" },
    },
    ecommerceExtra: false,
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
    cmsExtra: false,
  },
  {
    cmsExtra: false,
    page: "ecommerce-website-development",
    button: "Ecommerce development Portfolio",

    inforaphic: { img: ecommerceInfoGraphic, alt: "why you should have an ecommerce website" },
    pricing: [
      {
        features: [
          "CMS (Shopify, WooCommerce, Magento) based Ecommerce website",
          "Free eCommerce theme",
          "Custom-designed homepage (1 concept)",
          "Up to 25 to 50 products",
          "Up to 10 categories",
          "Payment gateways integrated",
          "Homepage Slider",
          "Mobile responsive",
          "W3C Certified HTML",
          "Admin panel",
          "SEO-friendly",
          "Complete deployment",
        ],
        adons: [
          "Premium theme (+$199)",
          "Live chat integration (+$199)",
          "1 month support ($100)",
          "2 month support ($100)",
          "3 month support ($100)",
        ],
        price: "USD 600",
      },
      {
        features: [
          "Custom ecommerce website",
          "Custom designed homepage (3 concepts)",
          "Up to 200-250 products",
          "Up to 15 category pages with banners",
          "Lightweight homepage slider",
          "Custom Login/ Signup system",
          "Add to cart/ Add to Wishlist system",
          "CMS",
          "Sales and inventory management",
          "Product offers (discount codes, deals)",
          "Product ratings and reviews",
          "Payment module integration",
          "Homepage Slider",
          "Fully responsive",
          "SEO-friendly",
          "On-page SEO (title, description, etc.)",
          "Fast load time",
          "W3C Certified HTML",
          "Chatbot integration",
          "Complete deployment",
        ],
        adons: [
          "Multi-currency support (+$250)",
          "One year hosting and domain (+$250)",
          "1 month support ($100)",
          "2 month support ($100)",
          "3 month support ($100)",
        ],
        price: "USD 1000",
      },
      {
        features: [
          "Custom ecommerce website",
          "Custom designed homepage (5 concepts)",
          "Up to 1000 products",
          "Up to 20 categories with banners",
          "Lightweight homepage slider",
          "Custom Login/ Signup system",
          "Add to cart/ Add to Wishlist system",
          "CMS",
          "Sales and inventory management",
          "Product offers (discount codes, deals)",
          "Product ratings and reviews",
          "Payment module integration",
          "Homepage Slider",
          "Fully responsive",
          "Multi-currency support",
          "Multiple Product variation (Color, Size, Quantity, and other attributes)",
          "Guest Checkout",
          "3rd Party API Integration",
          "1 year hosting and domain",
          "On-page SEO (title, tags, etc.)",
          "Fast load time",
          "W3C Certified HTML",
          "Chatbot integration",
          "Google analytics and Facebook pixel integration",
          "Complete deployment",
        ],
        adons: [
          "Search engine optimization (4 months, 25 keywords) (+$1200)",
          "1 month support ($100)",
          "2 month support ($100)",
          "3 month support ($100)",
        ],
        price: "USD 2500",
      },
    ],
    steps: {
      mainHeading: {
        one: "Our ",
        two: " E-commerce",
        three: "Development Process:",
      },
      // subHeading: "",
      steps: [
        {
          title1: "Requirement",
          title2: "Analysis",
          para: "We start by understanding your requirements and finding your business goals.",
          imgage: {
            img: analysis,
            alt: "requirement analysis",
          },
        },
        {
          title1: "E-commerce",
          title2: "Platform",
          para: "After gathering your requirements, we suggest an e-commerce platform according to your business needs.",
          imgage: {
            img: ecommerces,
            alt: "e-commerce platform",
          },
        },
        {
          title1: "Design",
          title2: "and Development",
          para: "Our designers create the layout of your store, and our developers start developing it (after your approval)",
          imgage: {
            img: design,
            alt: "design and development",
          },
        },
        {
          title1: "",
          title2: "SEO-friendly",
          para: "After development, our marketing team performs multiple audits and ensures that your e-commerce store is SEO-friendly.",
          imgage: {
            img: seo,
            alt: "seo friendly",
          },
        },
        {
          title1: "",
          title2: "Testing",
          para: "Our QA analysts perform split testing to ensure that your website is error-free.",
          imgage: {
            img: testing,
            alt: "testing",
          },
        },
        {
          title1: "Deployment",
          title2: "and Launching",
          para: "After successful testing, our engineers deploy your store to the hosting and launch it.",
          imgage: {
            img: deployment,
            alt: "deployment and launching",
          },
        },
      ],
    },
    section1: {
      heading:
        "Grow Your Revenue By Taking Our Custom Ecommerce Website Development Services",
      paras: (
        <>
          <p>
            Ecommerce has become an important part of global businesses. Today,
            if you don’t have an online store, you’re losing more than 50% of
            your revenue. According to a study, it is estimated that  (
            <Link
              href={"https://www.oberlo.com/blog/ecommerce-statistics"}
              target="_blank"
              rel="nofollow"
              className="anchor"
            >
               218.8 million US consumers will shop online in 2023
            </Link>{" "}
            ). The stat clearly shows how important it is to have an online
            ecommerce store today. However, to get an attractive, SEO-friendly,
            and user-friendly ecommerce store developed, you must take ecommerce
            website development services from a reliable and expert{" "}
            <Link href={"https://creaditech.com"} className="anchor">
               web development company
            </Link>{" "}
            like Creaditech.
          </p>

          <p>
            Creaditech is one of the best ecommerce web development services and
            has been in the industry for more than 8 years. Our team of
            developers is highly qualified and experienced and can create any
            ecommerce store for our clients. Whether you are looking for Shopify
            store development, WooCommerce development, Magento ecommerce
            development, or any other custom ecommerce development, contact us,
            and we will deliver the best ecommerce application that will help
            you grow your sales and increase your revenue.
          </p>
        </>
      ),
      image: { img: ecommerce, alt: "ecommerce website development services" },
      link: "",
    },
    ecommerceExtra: {
      heading: "Leading Ecommerce Platforms.",
      icons: [
        { img: logos_woocommerce, alt: "woocommerce" },
        { img: open_cart, alt: "open cart" },
        { img: square_space, alt: "square space" },
        { img: magento, alt: "magento" },
        { img: big_commerce, alt: "big commerce" },
        { img: shopify, alt: "shipify" },
      ],
    },
    section2: {
      heading: "Our Ecommerce Solutions Will Turn Your Visitors Into Customers",
      paras: (
        <>
          <p>
            Turning your visitors into customers depends on several factors; for
            example, customers prefer to shop from those websites that are
            SSL-secured, have multiple payment gateways, have easy navigation,
            etc. When you take ecommerce website development services from
            Creaditech, we keep all these factors in mind and therefore deliver
            you an ecommerce store that will deliver astonishing results to you.
          </p>
          <p>
            Being a prominent reliable ecommerce web development service in the
            USA, we create online stores that are user-centric and search engine
            friendly. With our creative imaginations and expert knowledge, we
            aim to deliver a store that enhances your customer’s experience and
            helps you achieve your ROI goals.
          </p>

          <p>
            We understand that each of our clients may have different
            requirements; therefore, we have a separate team of ecommerce
            consultants who understand and analyze each of your requirements and
            present an ecommerce solution that best fits your business. So,
            without having any second thoughts take our ecommerce website
            development services and <b> grow your online sales </b> by more
            than 50%.
          </p>
        </>
      ),
      link: "",
    },
    blackSection: {
      heading: "Ecommerce Website Development Services At Affordable Rates",
      paras: `We understand that every client has different requirements and may have different budgets. So, to ease
      you out, we have kept the rates of our ecommerce web development services quite affordable. We can
      develop a custom ecommerce web application or an ecommerce platform like WooCommerce, Shopify,
      etc., based on your budget. Contact us now and be ready to increase your revenue without spending
      much.`,
    },
    section3: {
      heading: "Why Take Our Ecommerce Web Development Services?",
      paras: (
        <>
          <p className="font-Montserrat mt-[2rem] text-[18px] font-300 leading-[130%]">
            If you are still thinking that why shall I choose Creaditech to get
            my ecommerce store developed, then below are a few reasons on why
            Creaditech is one of the best ecommerce web development companies:
          </p>
          <ul className="mt-[2rem] flex flex-col ">
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">1)</span>We start each project from
              scratch and do proper requirement analysis to deliver an ecommerce
              solution that fits your business needs.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">2)</span>Our designers create modern
              and eye-catching interfaces that help you increase your customer
              engagement.
            </li>
            <li className="font-Montserrat text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">3)</span>Our expert ecommerce store
              developers build a store that will attractively showcase your
              products, allowing you to grab more customers and generate more
              sales.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">4)</span>
              You cannot grab organic traffic if your website is not
              SEO-friendly; therefore, our marketing team works directly with
              our developers so that your store is fully optimized and
              SEO-friendly.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">5)</span> We constantly work to
              improve your website by doing quality assurance testing.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">6)</span> We provide complete website
              support after deployment.
            </li>
          </ul>
        </>
      ),
      image: { img: ecommercehireExpert, alt: "hire an ecommerce expert" },
    },
    faqs: [
      {
        q: "How much will it cost to get my Ecommerce store developed?",
        a: `The development of your ecommerce store will depend on your requirements like you want a custom
        ecommerce store or an ecommerce platform on a CMS like Shopify, WooCommerce, etc.`,
      },
      {
        q: "What type of Ecommerce websites have you developed in the past?",
        a: `We have built ecommerce stores on all technologies and platforms, including WooCommerce, Shopify,
        Magento, and custom ecommerce stores using React JS, Next JS, PHP, and MySQL.`,
      },
      {
        q: "Will my online store be mobile-friendly?",
        a: `Yes, we understand that most of the users now come from mobile devices; therefore, our developers
        ensure that your store is fully optimized and mobile-friendly.`,
      },
      {
        q: "How much time will it take to develop my Ecommerce store?",
        a: `It depends upon your requirements. The average time ranges from 6 weeks to 8 weeks.`,
      },
      {
        q: "Do your offer custom packages?",
        a: `Yes, we do offer custom packages based on your requirements and budget.`,
      },
      {
        q: "Will I be kept in the loop throughout the development process?",
        a: `Yes, the project manager will be in direct touch with you and will provide you with regular updates on
        your project.`,
      },
      {
        q: "Will my ecommerce store be SEO optimized?",
        a: `Yes, our marketing team works directly with our development team to ensure that your store is SEO
        optimized.`,
      },
      {
        q: "Do you provide support after deployment?",
        a: `Yes, we provide full support and maintenance even after the deployment of your project.`,
      },
    ],
  },
  {
    page: "cms-development",
    button: "CMS development Portfolio",

    inforaphic: { img: cmsInfoGraphic, alt: "why your business needs a cms" },
    pricing: [
      {
        features: [
          "10 pages",
          "Responsive and custom design",
          "SEO-friendly",
          "integrated forms",
          "Social media integration",
          "3 month maintenance",
          "Admin panel",
          "Newsletter",
          "Testimonials",
          "XML sitemap",
        ],
        adons: [
          "Member panel (+$200)",
          "Blog Setup (+$150)",
          "1 month support ($100)",
          "2 month support ($100)",
          "3 month support ($100)",
        ],
        price: "USD 2200",
      },
      {
        features: [
          "Up to 20 pages",
          "Responsive and custom design",
          "SEO-friendly",
          "Integrated forms",
          "Social media integration",
          "6 months maintenance",
          "Newsletter",
          "Testimonials",
          "Homepage banner (if applicable)",
          "Blog ",
          "Member panel",
          "Media gallery",
          "Event management (if applicable)",
        ],
        adons: [
          "Payment gateway integration (+$250)",
          "Chatbot integration (+$200)",
          "1 month support ($100)",
          "2 month support ($100)",
          "3 month support ($100)",
        ],
        price: "USD 5050",
      },
      {
        features: [
          "Up to 30 pages",
          "Responsive and custom design",
          "SEO-friendly",
          "Integrated forms",
          "Social media integration",
          "12 months maintenance",
          "Newsletter",
          "Testimonials",
          "Homepage banner (if applicable)",
          "Blog ",
          "Member panel",
          "Media gallery",
          "Event management (if applicable)",
          "Payment gateway integration ",
          "Chatbot Integration",
        ],
        adons: [
          "Additional 12 months maintenance (+$299)",
          "1 month support ($100)",
          "2 month support ($100)",
          "3 month support ($100)",
        ],
        price: "USD 10500",
      },
    ],
    steps: {
      mainHeading: {
        one: "Our ",
        two: " Cms",
        three: " Development Process",
      },
      // subHeading: "",
      steps: [
        {
          title1: "Requirement",
          title2: "Analysis",
          para: "We start by understanding your requirements and finding your business goals.",
          imgage: {
            img: analysis,
            alt: "requirement analysis",
          },
        },
        {
          title1: "",
          title2: "Design",
          para: "Our CMS designers create an appealing design for your CMS.",
          imgage: {
            img: design1,
            alt: "design",
          },
        },
        {
          title1: "",
          title2: "Development",
          para: "Our CMS developers develop a CMS based on the design and functionalities.",
          imgage: {
            img: development,
            alt: "development",
          },
        },
        {
          title1: "",
          title2: "SEO-friendly",
          para: "After development, our marketing team performs multiple audits and ensures that your e-commerce store is SEO-friendly.",
          imgage: {
            img: seo,
            alt: "seo friendly",
          },
        },
        {
          title1: "",
          title2: "Testing",
          para: "Our QA analysts perform split testing to ensure that your website is error-free.",
          imgage: {
            img: testing,
            alt: "testing",
          },
        },
        {
          title1: "Deployment",
          title2: "",
          para: " Our engineers then deploy your CMS to your hosting.",
          imgage: {
            img: deployment,
            alt: "deployment",
          },
        },
      ],
    },
    section1: {
      heading:
        "Edge Out Your Competitors By Taking Our CMS Development Services",
      paras: (
        <>
          <p>
            Not everyone is a coder and cannot add new content easily on the
            website; this is why around  (
            <Link
              href={
                "https://www.appmysite.com/blog/cms-market-share-top-trends-and-usage-statistics/"
              }
              rel="nofollow"
              target={"_blank"}
              className="anchor	"
            >
              67% of websites around the world are using a CMS
            </Link>{" "}
            ). CMS or content management system is a software that helps users
            add, edit, or manage the content on a website without having
            specific technical knowledge; therefore, Creaditech offers custom
            CMS development services so that you can add and update your content
            regularly and can edge out your competitors.
          </p>

          <p>
            Our experienced <strong>CMS developers</strong> and consultants use
            the latest technologies and deploy the best practices to develop a
            CMS solution that best fits your business needs. From development to
            testing and maintenance, we provide cms website development services
            that will help you perform speedy content creation and optimization.
          </p>
          <p>
            Having been in the industry for over 7 years, Creaditech has
            developed several CMS for multiple businesses. We are one of the
            best CMS development company in USA whose experts can provide custom
            CMS solutions for any industry. Whether you are looking for
            <Link
              href={"https://creaditech.com/services/cms-development"}
              className="anchor"
            >
              {" "}
              WordPress development services
            </Link>
            , Drupal development services, or any other custom cms development
            services, just contact Creaditech, and our consultants will find the
            best solution for you.
          </p>
        </>
      ),
      image: { img: cmsDev, alt: "cms development services" },
      link: "",
    },
    ecommerceExtra: false,
    section2: {
      heading:
        "Take Control Of Your Website By Taking Our CMS Development Services",
      paras: (
        <>
          <p>
            A content management system puts you in the driving seat of your
            website. From user-friendly navigation to uploading any media, a CMS
            allows you to perform any task within learning how to code.
            Therefore, your website definitely needs a CMS, either custom-built
            or built on any existing CMS platform.
          </p>
          <p>
            Creaditech understands a CMS's importance and provides multiple CMS
            development services to its clients. We ensure that the CMS
            delivered to you will be user-friendly, super-fast, and responsive
            on all mobile devices. Our team is always ready to deliver the best
            possible CMS solution according to your requirements. Get in touch
            with us and get relief from all of your website stress.
          </p>
        </>
      ),
      link: "",
    },
    cmsExtra: {
      heading: "Our Full Range Of CMS Development Services",
      cards: [
        {
          title: "Open Source CMS Development",
          para: "Our CMS developers can easily build your website on open source CMS platforms like WordPress, Joomla, Magento, etc., based on your requirements and budget.",
        },
        {
          title: "Custom CMS Development",
          para: "We understand that every business has different requirements that cannot be met on open-source CMS platforms; therefore, we build custom CMS solutions to 100% fulfill your business needs.",
        },
        {
          title: "CMS Plugin/ Extension Development",
          para: "We work dedicatedly to develop custom CMS extensions so that you can add advanced features to your website.",
        },
        {
          title: "CMS theme development",
          para: "Our cms development services offer CMS theme development so that you can make your website more appealing.",
        },
        {
          title: "CMS Migration and Updation",
          para: "Our expert developers can easily migrate or update your existing CMS to another CMS platform.",
        },
        {
          title: "CMS support and maintenance",
          para: "Creaditech offers CMS support and maintenance so that your website remains updated all the time and provides high-grade performance.",
        },
      ],
    },
    blackSection: false,
    section3: {
      heading: "Why Choose Creaditech For Custom CMS Development?",
      paras: (
        <>
          <p className="font-Montserrat mt-[2rem] text-[18px] font-300 leading-[130%]">
            We are the most trusted and recommended CMS development company in
            USA. We offer a complete solution of web development services that
            will help you reach your business goals. We believe in 100% client
            satisfaction and work until you are 100% satisfied with your
            project. Below are a few reasons on why you shall invest in
            Creaditech:
          </p>
          <ul className="mt-[2rem] flex flex-col ">
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">1)</span>We have an expert and
              dedicated team of CMS developers and designers who design and
              develop the best CMS for you.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">2)</span>All our team members are
              highly qualified and experienced and think out of the box to
              provide you with the best solution.
            </li>
            <li className="font-Montserrat text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">3)</span>Our marketing team works
              directly with the developers to ensure that you receive an SEO-
              friendly CMS solution.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">4)</span>
              We will keep you in the loop throughout the whole development
              process.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">5)</span> Our CMS development services
              rates are quite affordable.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">6)</span> We provide maintenance and
              support after deployment.
            </li>
          </ul>
        </>
      ),
      image: { img: cmsExpert, alt: "cms developers" },
    },
    faqs: [
      {
        q: "What Is a CMS?",
        a: `A CMS is a platform that can be used to create or modify a website's content without having coding
        knowledge.`,
      },
      {
        q: "What is the best CMS?",
        a: `All CMS are best since they allow you to edit your website easily. However, the most popular platform is
        WordPress, having a share of 65% among the CMS platforms.`,
      },
      {
        q: "What technologies do you use for custom CMS development?",
        a: `We have expert web developers for almost every web development technology, including Next JS, React
        JS, Laravel, Vue JS, etc.`,
      },
      {
        q: "Do you provide custom packages?",
        a: `Yes, we do offer custom packages based on your requirements and budget.`,
      },
      {
        q: "How many years of experience do you have in CMS development?",
        a: `We have experience of more than 8 years in CMS development`,
      },
      {
        q: "Will I be kept in the loop throughout the development process?",
        a: `Yes, the project manager will be in direct touch with you and will provide you with regular updates on
        your project.`,
      },
      {
        q: "Can you build any type of CMS?",
        a: `Yes, we can develop or modify any type of CMS for you based on your requirements.`,
      },
      {
        q: "Will you provide support after the completion of my project?",
        a: `Yes, we provide full support even after the delivery and deployment of your project.`,
      },
    ],
  },
  {
    page: "wordpress-development",
    button: "Wordpress development Portfolio",
    pricing: [
      {
        features: [
          "Parent+ child theme installation",
          "Upto 5 pages design",
          "Caching plugin",
          "1 week timeline",
          "2 page revision",
          "Security plugin",
          "Unique Home page Design",
          "Mobile-friendly (Responsive)",
          "50% advance 50% delivery",
          "Contact-Us sepecial page design",
          "Daily Website Backups & SSL Certificate",
          "Homepage Slider",
        ],
        adons: [
          "Domain and hosting (+$399)",
          "1 month support ($100)",
          "2 month support ($100)",
          "3 month support ($100)",
        ],
        price: "USD 250",
      },
      {
        features: [
          "Upto 10 pages design",
          "Parent+ child theme installation",
          "Upto 5 pages design",
          "Caching plugin",
          "Homepage Slider",
          "Security plugin",
          "1 week timeline",
          "Custom Layout Design",
          "5 page revision",
          "Mobile-friendly (Responsive) with extra screens ",
          "50% advance 50% delivery",
          "Contact-Us sepecial page design with map integration",
          "Daily Website Backups & SSL Certificate",
        ],
        adons: [
          "Domain and hosting (+$399)",
          "One year hosting and domain (+$250)",
          "1 month support ($100)",
          "2 month support ($100)",
          "3 month support ($100)",
        ],
        price: "USD 350",
      },
      {
        features: [
          "Upto 10 pages with beatifill animation design",
          "Parent+ child theme installation",
          "Upto 5 pages design",
          "Caching plugin",
          "1 week timeline",
          "Custom Layout Design",
          "Security plugin",
          "5 page revision",
          "Mobile-friendly (Responsive) with extra screens ",
          "GT matrix repotes ",
          "Embed video integration",
          "50% advance 50% delivery",
          "page revision",
          "Can add more pages ",
          "Contact-Us sepecial page design with map integration",
          "Daily Website Backups & SSL Certificate",
          "Website Hosting Options (Fast, Secure, Reliable)",
          "Lead Capture Contact Forms",
        ],
        adons: [
          "Domain and hosting (+$399)",
          "1 month support ($100)",
          "2 month support ($100)",
          "3 month support ($100)",
        ],
        price: "USD 900",
      },
    ],
    inforaphic: {
      img: wordpressInfoGraphic,
      alt: "why you should use wordpress",
    },
    steps: {
      mainHeading: {
        one: "Our ",
        two: " WordPress",
        three: " Development Process",
      },
      // subHeading: "",
      steps: [
        {
          title1: "Requirement",
          title2: "Analysis",
          para: "In this phase, we gather your requirements and identify your business goals.",
          imgage: {
            img: analysis,
            alt: "requirement analysis",
          },
        },
        {
          title1: "",
          title2: "Designing",
          para: "In this phase, our expert designers create an appealing design for your website.",
          imgage: {
            img: design1,
            alt: "designing",
          },
        },
        {
          title1: "",
          title2: "Development",
          para: "After approval of the design from your side, our developers begin developing your project.",
          imgage: {
            img: development,
            alt: "development",
          },
        },
        {
          title1: "",
          title2: "SEO-friendly",
          para: "During the development phase, our marketing team works directly with the development team to ensure that your website is mobile-friendly and SEO-optimized.",
          imgage: {
            img: seo,
            alt: "seo friendly",
          },
        },
        {
          title1: "Quality ",
          title2: "assurance",
          para: "In this phase, our QA analysts perform split testing to ensure that your website is free from any technical errors.",
          imgage: {
            img: quality,
            alt: "quality assurance",
          },
        },
        {
          title1: "Launching",
          title2: "the site",
          para: "Our engineers will deploy and launch your website in the final phase.",
          imgage: {
            img: deployment,
            alt: "launching the site",
          },
        },
      ],
    },
    section1: {
      heading:
        "Expand Your Business By Taking Our WordPress Development Services",
      paras: (
        <>
          <p>
            In this competitive world, having a website is a must if you want to
            remain in the market. However, developing your website and then
            making your online presence is not a piece of cake; this is where
            WordPress comes to help. WordPress is a CMS platform where you can
            easily set up your blog or a fully functional business website.
            Creaditech is one of the best WordPress development agencies in USA
            that provides the best WordPress development services.
          </p>

          <p>
            WordPress has some unique features and functions that cannot be
            ignored; this is the reason that{" "}
            <Link
              href={"https://blog.hubspot.com/website/wordpress-stats"}
              className="anchor"
              rel="nofollow"
              target="_blank"
            >
              WordPress is used by 43.2% of all websites on the Internet.
            </Link>{" "}
            Apart from that, it is one of the leading CMS platforms having a
            share of almost 65.2% of all websites using a CMS. However, if not
            developed by expert WordPress developers, a WordPress website won't
            benefit you; therefore, you shall always take WordPress website
            development services from expert companies like Creaditech.
          </p>
          <p>
            By taking our WordPress web development services, you can expand
            your business by increasing your site’s functionality. Contact us if
            you are a blogger, freelancer, or company, and get a fully
            functional and scalable WordPress website within a few days.
          </p>
        </>
      ),
      image: { img: wordpressDev, alt: "wordpress development services" },
      link: "",
    },
    ecommerceExtra: false,
    section2: {
      heading: "Achieve Your Goals Using WordPress Technology",
      paras: (
        <>
          <p>
            What makes WordPress so popular is the ease of use that it offers.
            Someone with zero coding knowledge can easily add or update content
            within a few minutes on WordPress. Because of its extensive themes
            and plugins, WordPress is an all-one solution for commercial
            websites and personal blogs. Being the top-rated{" "}
            <Link href={"https://creaditech.com"} className="anchor">
              web development company
            </Link>
            in the USA, Creaditech realizes the importance of WordPress and
            therefore offers robust WordPress development services to its
            clients.
          </p>
          <p>
            At Creaditech, we are always ready to cater to any sort of web
            development challenge. Our expert web developers can create any
            WordPress website according to your requirements. Our WordPress
            website development services include theme and plugin development,
            WordPress migration, 3rd party API integration, and much more.
          </p>
          <p>
            We have more than 8 years of developing WordPress websites. Our
            experience over the years has helped us further improve our custom
            WordPress development services. Therefore, we assure you that you
            will get a fully functional and responsive WordPress website that
            will help you achieve your goals.
          </p>
        </>
      ),
      link: "",
    },
    cmsExtra: {
      heading: "Our Wide Range Of WordPress Development Services:",
      cards: [
        {
          title: "PSD To WordPress Conversion",
          para: "Our designers and developers understand your requirements and convert your PSD files into fully responsive and W3C-validated WordPress themes.",
        },
        {
          title: "WordPress theme customization",
          para: "We provide WordPress theme customization so that if you have an already purchased theme and want to modify it, we can do that for you.",
        },
        {
          title: "WordPress Plugin Development",
          para: "We provide custom plugin development services so that you can get a WordPress plugin developed according to your requirements.",
        },
        {
          title: "Custom WordPress development",
          para: "From custom theme development to customizing the WordPress dashboard, we provide custom WordPress development services at affordable rates..",
        },
        {
          title: "Maintenance and support",
          para: "We provide maintenance and support services so that your WordPress site remains updated and free from any technical errors.",
        },
        {
          title: "E-commerce Development",
          para: `With the help of WooCommerce, we  provide ecommerce website development services on WordPress.`,
        },
      ],
    },
    blackSection: false,
    section3: {
      heading: "Why Choose Creaditech To Get Your WordPress Website Developed?",
      paras: (
        <>
          <p className="font-Montserrat mt-[2rem] text-[18px] font-300 leading-[130%]">
            Creaditech is one of the best WordPress development agencies in the
            USA; we have successfully delivered 300+ WordPress projects as of
            yet. Below are a few reasons on why you shall take our WordPress
            development services:
          </p>
          <ul className="mt-[2rem] flex flex-col ">
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">1)</span>We have a team of expert
              WordPress developers and designers.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">2)</span>We deliver websites that are
              fully responsive and highly optimized for SEO..
            </li>
            <li className="font-Montserrat text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">3)</span>Your website will be highly
              secure and scalable.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">4)</span>
              You can reach us anytime, 24/7, through calls and emails.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">5)</span> We provide support and
              maintenance after delivering and deploying the project.
            </li>
          </ul>
        </>
      ),
      image: { img: wordpressExpert, alt: "wordpress developers" },
    },
    faqs: [
      {
        q: "How much will it cost me to get a WordPress website developed?",
        a: `It depends on several factors. For example, if you want to go with paid themes and plugins, it will
        cost from $300 to $2500; if you want to go with a free theme, the price can go from $150 to $1000.`,
      },
      {
        q: "Is WordPress good for website development?",
        a: `WordPress is one of the most used CMS platforms and is preferred by many developers for website
        development.`,
      },
      {
        q: "How long will it take to get my WordPress website developed?",
        a: `It depends on your requirements. If your requirements are limited and clearly defined, it will take 10 to
        15 days to develop your WordPress website.`,
      },
      {
        q: "Can I get an Ecommerce store developed on WordPress?",
        a: `Yes, you can get a fully responsive and user-friendly ecommerce store with the help of the
        WooCommerce plugin.`,
      },
      {
        q: "Do you provide support after the completion of the project?",
        a: `Being a reputable and trusted web development company in the USA, we provide full support after the
        completion of your projects.`,
      },
      {
        q: "Will I be kept in the loop throughout the development process?",
        a: `Yes, the project manager will be in direct touch with you and will provide you with regular updates on
        your project.`,
      },
      {
        q: "Will my website be SEO-optimized?",
        a: `Yes, our marketing team works directly with the developers to ensure that your website is fully
        responsive and SEO-optimized.`,
      },
      {
        q: "Do you provide other CMS development services too?",
        a: `Yes, we also provide other CMS development services, including Magento, Drupal, Shopify, and custom
        CMS development.`,
      },
    ],
  },
  {
    page: "custom-web-app-development",
    button: "Custom Web development Portfolio",

    inforaphic: {
      img: customInfoGraphic,
      alt: "why your business needs a custom web app",
    },
    steps: {
      mainHeading: {
        one: "Our Custom ",
        two: "Web App",
        three: " Development Process",
      },
      // subHeading: "",
      steps: [
        {
          title1: "Meeting ",
          title2: "and research",
          para: "In this phase, we will hold multiple meetings with you to clearly understand your business requirements and goals.",
          imgage: {
            img: analysis,
            alt: "meeting and research",
          },
        },
        {
          title1: "Prototype",
          title2: "",
          para: "In the second phase, our designers design your web application and present you with a prototype.",
          imgage: {
            img: design1,
            alt: "prototype",
          },
        },
        {
          title1: "",
          title2: "Development",
          para: "After getting approval for the protype from your side, our developers start developing the project.",
          imgage: {
            img: development,
            alt: "development",
          },
        },
        {
          title1: "",
          title2: "SEO-friendly",
          para: "During the development of your project, our marketing team ensures that your website or web application is SEO-optimized and mobile-friendly.",
          imgage: {
            img: seo,
            alt: "seo friendly",
          },
        },
        {
          title1: "",
          title2: "Testing",
          para: "In this phase, our QA analysts perform split testing to ensure that your web application is free from errors.",
          imgage: {
            img: testing,
            alt: "testing",
          },
        },
        {
          title1: "Launch",
          title2: "",
          para: "In the final phase, our engineers launch your web application and make it go live on the internet.",
          imgage: {
            img: deployment,
            alt: "launch",
          },
        },
      ],
    },
    section1: {
      heading: "Custom Web App Development Tailored To Your Business Needs",
      paras: (
        <>
          <p>
            Creaditech is a custom web app development company that uses
            advanced methodologies and the latest web development technologies
            to create a custom web app tailored to your business needs. We have
            been in the web development industry for more than 8 years and have
            implemented more than 150 web solutions for several B2B and B2C
            companies.
          </p>

          <p>
            Our custom web app development services are focused on meeting your
            business-specific requirements. Our team of engineers and
            consultants is always motivated to scale and grow your business. We
            provide a wide range of web application development services,
            including
            <Link
              href={"https://creaditech.com/services/cms-development"}
              className="anchor"
            >
              CMS development Services
            </Link>{" "}
            ,WordPress development services, E-commerce development services,
            etc. Contact us now to get a reliable, cost- effective, and secure
            web app tailored to your business needs.
          </p>
        </>
      ),
      image: { img: customDev, alt: "custom web app development services" },
      link: "",
    },
    ecommerceExtra: false,
    section2: {
      heading: "Custom Web App Development Services At Affordable Rates",
      paras: (
        <>
          <p>
            Not all web applications or websites are created equally. Visitors
            on the web today now want fast loading time and easy navigation;
            therefore, settling for a low-end website or web application is not
            an option in this era. Several companies may build you custom web
            apps, but only a few, like Creaditech, can create custom web apps
            that will deliver astonishing results. We aim to design and develop
            web solutions to help our clients achieve their business goals.
          </p>
          <p>
            Since our customers come from all over the world, we understand that
            they will have different requirements and budgets. To provide the
            best possible assistance, we have kept the prices of our custom web
            app development services extremely affordable. We build web
            applications and websites that are fast, mobile-friendly, secure,
            and easy to navigate. No matter which industry you are from or how
            complex your requirements are, just contact us, and our consultants
            will provide the best affordable solution that meets your business
            requirements.
          </p>
        </>
      ),
      link: "",
    },
    cmsExtra: false,
    blackSection: false,
    section3: {
      heading: "Why Choose Creaditech To Get Your Custom Web App Developed?",
      paras: (
        <>
          <ul className="mt-[2rem] flex flex-col ">
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">1)</span>We have a proven track record
              of delivering successful web development projects.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">2)</span>We have hired the best IT
              talent.
            </li>
            <li className="font-Montserrat text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">3)</span>Your web application will be
              highly secure and scalable.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">4)</span>
              We have worked with almost all major industries.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">5)</span> You can reach us anytime,
              24/7, through calls and emails.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">6)</span> We provide support and
              maintenance even after the deployment of the project.
            </li>
          </ul>
        </>
      ),
      image: { img: customExpert, alt: "custom web app developers" },
    },
    pricing: false,
    faqs: [
      {
        q: "How much will it cost to develop my custom web application?",
        a: `The estimated cost may vary depending on your requirements.`,
      },
      {
        q: " Will you maintain my web application for me?",
        a: `Yes, we love to do that, as regular maintenance is necessary for any web application. However, there are separate charges for maintenance.`,
      },
      {
        q: " Will my web application or website be mobile-friendly?",
        a: `Yes, we ensure to deliver a fully responsive and mobile-friendly website that will look appealing to your visitors and boost your search engine rankings.`,
      },
      {
        q: "Do you provide web designing services too?",
        a: `Yes, we do provide web designing services separately. Contact us to get a quote.`,
      },
      {
        q: " How long will it take to get my web application developed?",
        a: `It all depends on the complexity of the website. However, on average, we take around six to 8 weeks of turnaround time.`,
      },
      {
        q: "Can you create any type of web application?",
        a: `Yes, we surely can. We have a team of expert developers for all web technologies.`,
      },
      {
        q: "Why Shall I choose Creaditech over any other agency?",
        a: `Creaditech is one of the best web development companies. Our team has over 7+ years of experience in web development. We ensure that we understand your business objectives and deliver on them fully.`,
      },
      {
        q: "During the development of my web application, what kind of assistance will you offer?",
        a: `We will assist you 24/7 and respond to your messages within an hour. Our goal is to listen to and resolve your concerns and queries.`,
      },
    ],
  },
  {
    page: "php-web-development",
    button: "Php development Portfolio",

    inforaphic: {
      img: phpInfoGraphic,
      alt: "advantages of php",
    },
    steps: {
      mainHeading: {
        one: "How we ",
        two: "work on your",
        three: " PHP projects",
      },
      // subHeading: "",
      steps: [
        {
          title1: "Requirements Analysis ",
          title2: "And Development",
          para: "We start by understanding your requirements and finding your business goals; based on your requirements, we propose you an estimated solution.",
          imgage: {
            img: analysis,
            alt: "requirement analysis and development",
          },
        },
        {
          title1: "Preparation And",
          title2: "Designing",
          para: "We prepare the contract and start designing the application's architecture.",
          imgage: {
            img: design1,
            alt: "preperation and designing",
          },
        },
        {
          title1: "",
          title2: "Development",
          para: "Our expert PHP developers then begin developing your application.",
          imgage: {
            img: development,
            alt: "development",
          },
        },
        {
          title1: "",
          title2: "Testing",
          para: "Our QA analysts perform split testing both on software and manually to ensure that your application is error-free.",
          imgage: {
            img: testing,
            alt: "testing",
          },
        },
        {
          title1: "",
          title2: "Deployment",
          para: "Our deployment team then deploys the application to your site.",
          imgage: {
            img: deployment,
            alt: "deployment",
          },
        },
        {
          title1: "Support And ",
          title2: "Maintenance",
          para: "We provide maintenance and support that includes new features implementation, new versions, data backups, etc.",
          imgage: {
            img: maintenance,
            alt: "support and maintenance",
          },
        },
      ],
    },
    section1: {
      heading:
        "Create A Powerful Web Solution With Our PHP Development Services",
      paras: (
        <>
          <p>
            Came in 1994, PHP is still one of the most used server-side
            scripting languages. According to{" "}
            <Link
              className="anchor"
              rel="nofollow"
              target={"_blank"}
              href="https://w3techs.com/technologies/details/pl-php"
            >
              {" "}
              W3Tech's data
            </Link>
            , PHP is used by 78.9 of all websites, including Facebook, Slack,
            Etsy, etc. The most used CMS platform, WordPress, also uses PHP.
            Powered by a team of expert PHP developers, Creaditech has been
            providing custom PHP web development services to its clients for
            over 8 years.
          </p>

          <p>
            PHP has several features that make it a powerful language to use for
            businesses. Some features of PHP are its super compatibility with
            other technologies, integration with popular databases, open-source,
            and universal browser support. Since our inception, we've developed
            ourselves as the leading PHP development company in the USA.
          </p>
          <p>
            Our experienced team of PHP web developers has developed and
            delivered more than 100+ PHP projects, including custom PHP
            websites, E-commerce stores, and portals that have helped our
            clients grow their businesses. Get in touch with us now and get a
            customized PHP solution according to your business needs.
          </p>
        </>
      ),
      image: { img: phpDev, alt: "php web development services" },
      link: "",
    },
    ecommerceExtra: false,
    section2: false,
    cmsExtra: false,
    phpExtra: {
      is: true,
      heading: "PHP Web Development Services We Offer",
      p: "Creaditech offers PHP web development services at extremely affordable rates. Being the leading PHP web development company, we have a strong case history in domains like E-commerce, education, healthcare, entertainment, and finance. Our PHP application development services include:",
      cards: [
        {
          title: "Web Application Development",
          para: "This includes LMS, tickets reservation, online communities, online marketplaces, custom CRM/ ERP, etc.",
        },
        {
          title: "API Development",
          para: "APIs are a crucial part of web applications; therefore, our experienced engineers provide custom API development and 3 rd party API integration.",
        },
        {
          title: "E-commerce Solutions",
          para: "Our PHP developers can build custom E-commerce solutions",
        },
        {
          title: "Upgrade PHP applications",
          para: "Our PHP web development services provide you the facility to upgrade your existing PHP applications.",
        },
        {
          title: "Migration to PHP",
          para: "As a leading PHP web development company, we provide reliable migration from your existing web technology to PHP..",
        },

        {
          title: "Support And Maintenance",
          para: "To ensure a seamless user experience, we keep your PHP application fast and secure and upgrade it from time to time.",
        },
      ],
    },
    blackSection: false,
    section3: {
      heading: "Why Choose Our PHP Web Development Services?",
      paras: (
        <>
          <p className="font-Montserrat mt-[2rem] text-[18px] font-300 leading-[130%]">
            Creaditech is one of the most recommended PHP web development
            companies in the USA. Ranging from{" "}
            <Link
              className="anchor"
              href={"https://creaditech.com/services/cms-development"}
            >
              CMS development services
            </Link>{" "}
            to custom web app development services, we provide robust web
            solutions that help our clients reach their business goals. Below
            are a few reasons on why you shall take our PHP website development
            services:
          </p>
          <ul className="mt-[2rem] flex flex-col ">
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">1)</span>We have a team of expert PHP
              consultants and developers who provide the best web solution
              according to your business needs.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">2)</span>We have a proven track record
              of delivering more than 100+ PHP projects.
            </li>
            <li className="font-Montserrat text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">3)</span>We will keep you in the loop
              throughout the whole development process..
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">4)</span>
              Your web application will be highly secure and scalable.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">5)</span> Our PHP website development
              services are quite affordable.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">6)</span> We provide maintenance and
              support after deployment.
            </li>
          </ul>
        </>
      ),
      image: { img: phpExpert, alt: "php web developers" },
    },
    pricing: false,
    faqs: [
      {
        q: "What is the average cost of your PHP web development services?",
        a: `The average cost depends on your requirements. We provide an estimated cost based on your
        requirements that can vary from $500 up to $1000.`,
      },
      {
        q: " How much time you take to develop a PHP project?",
        a: `It depends upon the complexity of your requirements and your project type.`,
      },
      {
        q: "Is PHP suitable for large-scale projects?",
        a: `Yes, PHP is suitable for large-scale projects, including LMS, CRM, ERP, etc.`,
      },
      {
        q: "Can I get my website redesigned in the future?",
        a: `Yes, you can get your website design updated later on.`,
      },
      {
        q: "What are the benefits of using PHP?",
        a: `PHP is fast, can integrate with a range of databases, has a large support community, pre-written codes,
        and universal browser support.`,
      },
      {
        q: "Do you provide maintenance after deployment?",
        a: `Yes, we provide complete support and maintenance after completing and deploying your PHP project.`,
      },
      {
        q: "Why Shall I choose Creaditech over any other agency?",
        a: `We have been in the tech industry long enough to understand that our clients need perfection. We
        ensure that we understand your perspective and deliver on it fully.`,
      },
      {
        q: "During the development of my web application, what kind of assistance will you offer?",
        a: `We will assist you 24/7 and respond to your messages within an hour. Our goal is to listen to and resolve your concerns and queries.`,
      },
    ],
  },
  {
    page: "seo",
    button: "SEO Portfolio",
    inforaphic: {
      img: seoInfoGraphic,
      alt: "why your business needs seo",
    },
    // pricing:false,
    // SEO Pricing Packages Start
    pricing: [
      {
        features: [
          "Up to 5 keywords",
          "Website and competitor analysis",
          "Initial ranking report",
          "Keywords research",
          "Meta tags creation",
          "Content optimization",
          "Image optimization",
          "Sitemap creation",
          "Robots.txt",
          "Google analytics and search console setup",
          "1 blog posting",
          "30 social sharing",
          "1 infographic submission",
          "Keyword ranking report",
        ],
        adons: [
          "1 on site blog content (up to 1000 words)",
          "Local citations (5)",
        ],
        price: "USD 699",
      },
      {
        features: [
          "Up to 15 keywords",
          "Website and competitor analysis",
          "Initial ranking report",
          "Keywords research",
          "Meta tags creation",
          "Content optimization",
          "Image optimization",
          "Sitemap creation",
          "Robots.txt",
          "Google analytics and search console setup",
          "1 blog posting (offsite)",
          "2 on site blog content (up to 1000 words each)",
          "Local citations (5)",
          "Google my business setup (if applicable)",
          "40 social sharing",
          "2 infographic submissions",
          "Keyword ranking report",
          "3 guest posts",
        ],
        adons: ["5 guest posts ", "2 video creations"],
        price: "USD 999 ",
      },
      {
        features: [
          "Up to 25 keywords",
          "Website and competitor analysis",
          "Initial ranking report",
          "Keywords research",
          "Meta tags creation",
          "Content optimization",
          "Image optimization",
          "Sitemap creation",
          "Robots.txt",
          "Google analytics and search console setup",
          "3 blog posting (offsite)",
          "5 on site blog content (up to 1000 words each)",
          "Local citations (10)",
          "Google my business setup (if applicable)",
          "50 social sharing",
          "2 infographic submissions",
          "Keyword ranking report",
          "5 guest posts",
          "2 video creations",
        ],
        adons: ["7 guest posts ", "4 video creations"],
        price: "USD 1499  ",
      },
    ],

    // SEO Princing Packages End

    steps: {
      mainHeading: {
        one: "Our  ",
        two: " SEO",
        three: " Approach:",
      },
      // subHeading: "",
      steps: [
        {
          title1: "Analyze",
          title2: " and audit",
          para: "In this phase, we listen to your business requirements and begin analyzing and auditing your website and your business.",
          imgage: {
            img: analysis,
            alt: "Analyze and audit",
          },
        },
        {
          title1: "Competitor",
          title2: "Analysis",
          para: "In the 2nd phase, our SEO specialists identify your competitors and research their strategy to create one that sets you apart from them.",
          imgage: {
            img: competitor,
            alt: "competitor analysis",
          },
        },
        {
          title1: "Keyword",
          title2: "research",
          para: "This is the most critical phase and involves finding relevant keywords for your business. Our SEO specialists analyze keyword search volume and difficulty and then prepare keywords that will be the most valuable for your business growth.",
          imgage: {
            img: research,
            alt: "keyword research",
          },
        },
        {
          title1: "Strategize",
          title2: "and Execute",
          para: "Once our SEO specialists create an SEO strategy for your business, they execute it by performing technical, on-page, and off-page SEO.",
          imgage: {
            img: strategize,
            alt: "strategize and execute",
          },
        },
        {
          title1: "Monitor Rankings ",
          title2: "and Reporting",
          para: "After successfully executing the SEO strategy, we begin monitoring your rankings through different tools, including google search console, SEMrush, google analytics, etc. and provide your weekly reports. ",
          imgage: {
            img: monitoring,
            alt: "monitor rankings",
          },
        },
        {
          title1: "Refine",
          title2: "",
          para: "Using your site’s performance data, we modify and refine the SEO strategy to keep up with the latest search engine algorithm updates and market trends.",
          imgage: {
            img: refine,
            alt: "rafine",
          },
        },
      ],
    },
    section1: {
      heading:
        "Generate More Traffic And Conversions By Taking Our SEO Services",
      paras: (
        <>
          <p>
            Search Engine Optimization, or SEO, is a process of bringing your
            website to the top of the search results. Getting on top of the
            search results is important in today’s era because, according to a
            study,
            <Link
              href={"https://techjury.net/blog/seo-statistics/"}
              className="anchor"
              rel="nofollow"
              target="_blank"
            >
              93% of online experiences begin with a search engine
            </Link>{" "}
            , so whether you are a service-based business or product-based
            business, getting on top of the search results should be your
            priority to generate more traffic and conversions. However, doing
            proper SEO and getting on top of the SERPs is not everyone’s cup of
            tea. So, to dominate the search engine results, you shall look to
            take SEO services from a reliable SEO company like Creaditech.
          </p>
          <p>
            Creaditech provides the best organic SEO services that will help you
            reach the top of Search engine results. Getting on top of the search
            elements depends on several factors, including voice search
            optimization, proper keyword research, and placement, site
            authority, trustworthiness, etc. Our SEO experts are fully aware of
            all the search engine ranking updates and implement SEO strategies
            that will help your business reach the top of the search engine
            results. So, without any 2nd thoughts, take our SEO services and
            generate more traffic and conversions for your business.
          </p>
        </>
      ),
      image: { img: seoDev, alt: "seo services" },
      link: "",
    },
    ecommerceExtra: false,
    section2: {
      heading:
        "Edge Out Your Competitors With Our Search Engine Optimization Service",
      paras: (
        <>
          <p>
            Emerge as the industry leader and beat out your competitors by
            getting a well-planned SEO strategy created by our SEO experts. We
            are a client-centric SEO agency that provides SEO services tailored
            to your business needs. From startups to organizations and from
            E-commerce SEO to service-based SEO, we have worked with all types
            of companies and business industries.
          </p>
          <p>
            From keyword research to building backlinks, we provide all types of
            SEO services. Our SEO strategy starts by identifying your business
            goals and your competitors. We not only provide SEO services to our
            clients but also guide them about the major ranking factors that
            include quality content, SSL-secured website, friendly UI/UX,
            mobile-friendly site, quick page speed, business information, and
            backlinks. Get in touch with us now and get a perfect SEO strategy
            for your business.
          </p>
        </>
      ),
      link: "",
    },
    cmsExtra: {
      heading: "What Our SEO Services Include:",
      cards: [
        {
          title: "Keyword Research",
          para: "Keyword research is the main step of any SEO strategy; if you cannot identify proper keywords for your business, then contact us, and our SEO specialists will provide the best keywords for your business.",
        },
        {
          title: "Technical SEO",
          para: "If your website is not mobile-friendly or contains broken links or any other technical error, then you won’t be able to rank high; therefore, we provide technical SEO services in which our Specialists audit your website and guide your accordingly.",
        },
        {
          title: "Local SEO",
          para: "Customers love to take services or purchase from those that are near them. We provide local SEO services in which we will optimize or publish your business on google maps (Google my business) so that you can attract more customers locally.",
        },
        {
          title: "On-page SEO",
          para: "In on-page SEO, we optimize the pages of your website, including meta tags, images alt texts, headings, content, keyword placement, keyword density, URL structure, and internal links.",
        },
        {
          title: "Off-page SEO",
          para: " In off-page SEO, we build backlinks for your website through multiple channels; this includes guest posting, profile backlinks, social sharing, business listings, press release distribution, etc.",
        },
        {
          title: "Content Writing",
          para: `We have a team of expert content writers that offers content creation services and can create any type of content, including blog posts, articles, email templates, Press releases, product descriptions, etc, within tight deadlines.`,
        },
      ],
    },
    blackSection: false,
    section3: {
      heading: "Why Take Our SEO Services?",
      paras: (
        <>
          <p className="font-Montserrat mt-[2rem] text-[18px] font-300 leading-[130%]">
            Creaditech is a reliable SEO agency because we provide SEO solutions
            that work. Below are a few reasons that make us better than the
            rest:
          </p>
          <ul className="mt-[2rem] flex flex-col ">
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">1)</span>We have a team of expert and
              dedicated SEO specialists who create the best SEO strategy for our
              clients.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">2)</span>We play fair and provide you
              with weekly reports.
            </li>
            <li className="font-Montserrat text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">3)</span>We offer customized SEO
              packages based on your requirements.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">4)</span>We don’t work on old-school
              SEO strategies; instead, we implement new SEO strategies and
              always work on improving ourselves.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">5)</span>You can reach us anytime
              through calls or email.
            </li>
          </ul>
        </>
      ),
      image: { img: seoExpert, alt: "seo experts" },
    },
    faqs: [
      {
        q: "What is SEO, and why does my website need SEO services?",
        a: `Search Engine Optimization (SEO) is to optimize your website across the web and bring your business to the top of the Search engine results. SEO services are important for your website because it increases your website's visibility in search engine results.`,
      },
      {
        q: "How much do your SEO services cost?",
        a: `SEO is a long-term strategy and requires a high cost. Our packages range from $1000 per month to $5000, depending on your business industry and goals.`,
      },
      {
        q: "Does your SEO work for all search engines?",
        a: `Our SEO specialists focus on optimizing your website on all major search engines, including google, yahoo, Bing, and Yandex.`,
      },
      {
        q: "Is SEO better than SEM?",
        a: `In terms of results, SEO is better, but it takes time to get your website on top of the search results. Therefore, SEM is better if you want early results. `,
      },
      {
        q: "How long does SEO take?",
        a: `We don't make false claims; SEO is a long-term process and takes 4-6 months to deliver results.`,
      },
      {
        q: "How will you create my SEO strategy?",
        a: `We will first work on the technical and on-page SEO and will optimize your website page speed, alt tags, meta tags, etc.`,
      },
      {
        q: "Can you perform an SEO audit on my website?",
        a: `Yes, we will provide with an audit report free of cost. Just send us your URL.`,
      },
      {
        q: "Do you offer search engine marketing services too?",
        a: `Yes, we do offer search engine marketing (SEM) services too.`,
      },
    ],
  },
  {
    page: "content-creation",
    button: "Content Creation Portfolio",
    inforaphic: {
      img: contentInfoGraphic,
      alt: "why quality content is important",
    },
    pricing: false,
    steps: {
      mainHeading: {
        one: "How We Create A",
        two: " Content Strategy",
        three: "",
      },
      // subHeading: "",
      steps: [
        {
          title1: "Analyze",
          title2: " and audit",
          para: "In this phase, we analyze your business and perform an in-depth audit to understand your business goals.",
          imgage: {
            img: analysis,
            alt: "analyze and audit",
          },
        },
        {
          title1: "Identify",
          title2: "Audience",
          para: "In the 2nd phase, we identify your audience based on your business goals.",
          imgage: {
            img: identification,
            alt: "indentify audience",
          },
        },
        {
          title1: "Content",
          title2: "Creation",
          para: "In the 3rd phase, our content creators begin creating content based on your audience and business goals.",
          imgage: {
            img: contentCreation,
            alt: "content creation",
          },
        },
        {
          title1: "Content",
          title2: "Optimization",
          para: "In this phase, our editorial team optimizes your content for your readers and search engines.",
          imgage: {
            img: contentOptimization,
            alt: "content optimization",
          },
        },
        {
          title1: "Content",
          title2: "Promotion",
          para: "The content is then promoted via multiple channels like influencer marketing.",
          imgage: {
            img: promotion,
            alt: "cotent promotion",
          },
        },
        {
          title1: "Content",
          title2: "Reporting",
          para: "We publish content on a regular schedule and measure success.",
          imgage: {
            img: analysis,
            alt: "content reporting",
          },
        },
      ],
    },
    section1: {
      heading:
        "Increase Visitors To Your Site By Taking Our Content Creation Services",
      paras: (
        <>
          <p>
            There's no doubt that visuals are appealing and attention-grabbing,
            but one cannot deny the importance of high-quality content. You
            might have heard many people saying that "Content is the King". It
            is true because appealing content is necessary to grab visitors or
            generate leads from your website. According to{" "}
            <Link
              href={"https://www.hubspot.com/hubfs/State-of-Marketing (2).pdf"}
              className="anchor"
              target={"_blank"}
              rel="nofollow"
            >
              Hubspot,
            </Link>{" "}
            82% of marketers actively invest in content marketing. Therefore, to
            increase brand awareness and your visitors, you must look to take
            content creation services from a reliable content creation service
            like Creaditech.
          </p>

          <p>
            Creaditech is one of the USA's most trusted and reliable content
            creation services. We have more than 1000 professional writers, and
            we believe that knowledge is power. Our writers know the search
            engine updates and your readers; therefore, they deliver appealing
            content that will boost your search engine rankings and help your
            business reach more qualified leads. Explore our content creation
            services now and increase visitors to your site.
          </p>
        </>
      ),
      image: { img: contentDev, alt: "content creation services" },
      link: "",
    },
    section2: {
      heading: "Content Creation Services To Increase Your ROI",
      paras: (
        <>
          <p>
            Being a reliable content creation service Creaditech provides
            content creation services that will improve your brand identity and
            will increase your Return On Investment (ROI). No matter which type
            of content you want to get written, our writers can write any type
            of content, including blog posts, press releases, product
            descriptions, social media posts, landing page content, e-books,
            email templates, and many more. Let us know your requirements, and
            we will assign the perfect writer to you.
          </p>
          <p>
            Ranging from social media content creation services to website
            content creation services, Creaditech is an all-in-one solution for
            all your content creation needs. Our expert writers not only write
            in sales languages because they understand that users are always
            bombarded with advertisements and are fed up with that; therefore,
            they create content that informs your clients and customers about
            the problems that your business can solve for them.
          </p>

          <p>
            The secret to our content creation strategy is extensive research
            and our highly motivated writing and editorial team. So, without any
            2nd thoughts, take our content generation services now and save more
            money by increasing your ROI.
          </p>
        </>
      ),
      link: "",
    },
    blackSection: {
      heading: "Creaditech Offers Content Creation Service At Affordable Rates",
      paras: `At Creaditech, we just don't create content; instead, we create content that sells that too at affordable rates. The price of our content writing services may vary depending on the type of content you require, your targeted audience, and your competitors. However, we assure you that we will find a solution that suits your budget, and we will deliver top-notch quality content that will generate more conversions for your business`,
    },
    section3: {
      heading: "Why Should You Take Content Creation Services From Creaditech?",
      paras: (
        <>
          <p className="font-Montserrat mt-[2rem] text-[18px] font-300 leading-[130%]">
            Being a reliable content creation service, Creaditech has many
            features that distinguish us from other content writing agencies.
            Below are a few reasons on why you shall take our content creations
            services:
          </p>
          <ul className="mt-[2rem] flex flex-col ">
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">1)</span>We have a highly motivated
              and dedicated team of content creators.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">2)</span>Our content creators will
              create appealing content that will deliver you astonishing
              results.
            </li>
            <li className="font-Montserrat text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">3)</span>We have a fast turnaround
              time.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">4)</span>We have a separate
              quality-checking team that proofreads the content before
              delivering it to you.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">5)</span>You can contact us anytime.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">6)</span>We allow you to get in touch
              with the writer directly.
            </li>
          </ul>
        </>
      ),
      image: { img: contentExpert, alt: "content creators" },
    },
    ecommerceExtra: false,
    faqs: [
      {
        q: "Does the content you deliver unique and original?",
        a: `Yes, our writers deliver 100% unique and original content. They start each task from scratch and conduct deep research to deliver top-notch quality content`,
      },
      {
        q: "Do I own the content that you write for me?",
        a: `Yes, you get the copyright of the content that we deliver to you.`,
      },
      {
        q: "What is the cost of your content creation service?",
        a: `The cost of our content creation service depends on your requirements like which type of content you want, the number of words, the targeted audience, etc.`,
      },
      {
        q: "Do you provide a long-term contract?",
        a: `Yes, we do provide a long-term contract`,
      },
      {
        q: "Do you provide revisions?",
        a: `Absolutely yes, we provide unlimited revisions until you’re not satisfied.`,
      },
      {
        q: "Is the content SEO-optimized?",
        a: `Yes, our content creators and editors are aware of the latest google updates; therefore, they deliver SEO-optimized content that is also appealing to your readers.`,
      },
      {
        q: "What services do you offer under content creation?",
        a: `From social media to web content creation services, we provide blog posts, articles, newsletters, press releases, social media posts, product descriptions, e-book writing, ghostwriting, video content, white papers, and many more.`,
      },
      {
        q: "Can you write content urgently?",
        a: `Yes, our content creators can create content on an urgent basis without compromising the quality of the content.`,
      },
    ],
    cmsExtra: false,
  },
  {
    page: "sem",
    button: "SEM Portfolio",
    pricing: false,
    inforaphic: { img: semInfoGraphic, alt: "why your business needs SEM" },
    steps: {
      mainHeading: {
        one: "Our",
        two: " SEM",
        three: "Process",
      },
      // subHeading: "",
      steps: [
        {
          title1: "Understanding",
          title2: "your business",
          para: "We hold multiple meetings with you to understand your business and your goals.",
          imgage: {
            img: understanding,
            alt: "understanding your business",
          },
        },
        {
          title1: "Landing page",
          title2: "optimization",
          para: "Our SEM experts create your campaign strategy and optimize your landing page based on your business goals.",
          imgage: {
            img: landing,
            alt: "landing page optimization",
          },
        },

        {
          title1: "Keyword",
          title2: "Research",
          para: "Our experts find low CPC and high-converting keywords to maximize your ROI.",
          imgage: {
            img: research,
            alt: "keyword research",
          },
        },
        {
          title1: "Campaign",
          title2: "Launch",
          para: "After finalizing the campaign and a well-designed landing page, our SEM experts launch your campaign and manage your campaign settings.",
          imgage: {
            img: compaign,
            alt: "campaign launch",
          },
        },
        {
          title1: "A/B",
          title2: "Testing",
          para: "Our experts perform A/B testing on ad copies to identify which one gives the best response.",
          imgage: {
            img: testing2,
            alt: "a/b testing",
          },
        },
        {
          title1: "Analysis",
          title2: "",
          para: "After successfully launching the campaign and identifying the best ad copy, we track and analyze the campaign based on your KPIs, click-through rate (CTR), and quality score.",
          imgage: {
            img: analysis,
            alt: "analysis",
          },
        },
      ],
    },
    section1: {
      heading: "SEM Services To Boost Your Online Presence",
      paras: (
        <>
          <p>
            Search engine marketing (SEM) is one of the best-paid marketing
            strategies to boost your online business. Through SEM, you promote
            your content to show on top of the search engine result pages based
            on your targeted keyword. SEM is necessary because it boosts your
            online presence; according to a study, the first 3 ads on SERPs
            receive{" "}
            <Link
              href={"https://www.powertraffick.com/ppc-trends-and-statistics"}
              className="anchor"
              target={"_blank"}
              rel="nofollow"
            >
              46% of all clicks,
            </Link>{" "}
            and it is also one of the top 3 resources for website conversions.
            So, to boost your online presence take SEM services from Creaditech.
          </p>

          <p>
            Creaditech has a team of expert digital marketers who do not believe
            in creating the same strategy for all businesses. As a reliable SEM
            services company, we believe that every business requires a custom
            digital marketing strategy. We strategize, implement, split test,
            and analyze the campaigns to monitor their performance to achieve
            the best ROI.
          </p>
          <p>
            Our digital marketers aim is to provide conversions and not just
            clicks for your business. So, without any 2nd thoughts, take our SEM
            services now and boost your online presence.
          </p>
        </>
      ),
      image: { img: semDev, alt: "SEM services" },
      link: "",
    },
    section2: {
      heading: "Boost Your ROI By Taking Our Search Engine Marketing Services",
      paras: (
        <>
          <p>
            Consumers love to perform online research about a product or service
            before spending on it. Search engine marketing is a cost-efficient
            method to connect your brand with your customers. You can target
            your specific audience based on their online behavior and position
            your ads precisely through SEM. SEM is a strategy in which you don't
            have to pay to show your ads; instead, you only have to pay when a
            user clicks your ad, i.e., it works on a pay-per-click model (PPC).
          </p>
          <p>
            Our search engine marketing experts identify your audience, find
            relevant keywords, and bid on them so that they can bring more
            traffic and conversions to your website, thus boosting your ROI.
            Based on your industry and business goals, our SEM experts can
            create any type of paid campaign, including search ads, media ads,
            video ads, shopping ads, mobile-app-specific ads, etc. Apart from
            SEM services, Creaditech also offers SEO services so that your brand
            gets organic traffic too.
          </p>
        </>
      ),
      link: "",
    },
    blackSection: false,
    section3: {
      heading: "Why Choose Creaditech For SEM Services?",
      paras: (
        <>
          <p className="font-Montserrat mt-[2rem] text-[18px] font-300 leading-[130%]">
            Being a reliable SEM services company, Creaditech has many features
            that make us stand apart from our competitors. Here's what
            Creaditech has:
          </p>
          <ul className="mt-[2rem] flex flex-col ">
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">1)</span>We have a dedicated and
              certified team of SEM experts who create the best SEM strategy
              according to your business and budget.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">2)</span>We give each of our client’s
              consistent attention.
            </li>
            <li className="font-Montserrat text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">3)</span>We provide weekly reports on
              the whole strategy.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">4)</span>We offer custom SEM plans.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">5)</span>Our SEM pricing is
              affordable.
            </li>
            <li className="font-Montserrat  text-[18px] font-300 leading-[150%]">
              <span className="mr-[1rem]">6)</span>You can contact us anytime.
            </li>
          </ul>
        </>
      ),
      image: { img: semExpert, alt: "SEM experts" },
    },
    ecommerceExtra: false,
    faqs: [
      {
        q: "What is SEM?",
        a: `SEM is a paid advertising strategy on search engine results in which you market your product or services to your targeted audience. It works on a pay-per-click model (PPC).`,
      },
      {
        q: "Why is Search Engine Marketing Important?",
        a: `Search engine marketing is important because growing your brand online is getting tougher day by day. Search engine marketing is a proven way to grow your brand and target your specific audience.`,
      },
      {
        q: "How much do SEM services cost?",
        a: `The price of our SEM services depends upon your business industry and goals.`,
      },
      {
        q: "What is the difference between SEO and SEM?",
        a: `SEO is a method in which you reach the top of the search results without spending much; however, it takes time. SEO allows you to grab organic traffic. SEM is a paid marketing technique in which you carry out promotions through multiple marketing channels`,
      },
      {
        q: "What industries have you worked with?",
        a: `We have worked with almost all major industries, including e-commerce, hospitality, beauty, pharma, tour management, etc.`,
      },
      {
        q: "What tools do you use to manage digital campaigns?",
        a: `Our SEM experts use a wide range of tools including google keyword planner, SEMrush, Ahrefs, SpyFy, etc.`,
      },
      {
        q: "Will I get reports of my campaign?",
        a: `Yes, we provide weekly reports of how your campaign is performing.`,
      },
      {
        q: "Do you provide SEO services too?",
        a: `Yes, we do provide SEO services also. Contact us now and get a customized SEO package.`,
      },
    ],
    cmsExtra: false,
  },
];
