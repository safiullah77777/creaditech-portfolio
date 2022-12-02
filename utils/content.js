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
      image: webDev,
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
    inforaphic: webInfoGraphic,
    section1: {
      heading:
        "Grow Your Revenue By Taking Our Custom Ecommerce Website Development Services",
      paras: (
        <>
          <p>
            Ecommerce has become an important part of global businesses. Today,
            if you don’t have an online store, you’re losing more than 50% of
            your revenue. According to a study, it is estimated that  (
            <Link href={"www.facebook.com"} className="anchor	">
               218.8 million US consumers will shop online in 2023
            </Link>{" "}
            ). The stat clearly shows how important it is to have an online
            ecommerce store today. However, to get an attractive, SEO-friendly,
            and user-friendly ecommerce store developed, you must take ecommerce
            website development services from a reliable and expert{" "}
            <Link href={"www.facebook.com"} className="anchor	">
               web development
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
      image: webDev,
      link: "",
    },
    ecommerceExtra: {
      heading: "Leading Ecommerce Platforms.",
      icons: [],
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

  {
    page: "cms-development",
    inforaphic: webInfoGraphic,
    section1: {
      heading:
        "Edge Out Your Competitors By Taking Our CMS Development Services",
      paras: (
        <>
          <p>
            Not everyone is a coder and cannot add new content easily on the
            website; this is why around  (
            <Link href={"www.facebook.com"} className="anchor	">
              67% of websites around the world are using a CMS
            </Link>{" "}
            ). CMS or content management system is a software that helps users
            add, edit, or manage the content on a website without having
            specific technical knowledge; therefore, Creaditech offers custom
            CMS development services so that you can add and update your content
            regularly and can edge out your competitors.
          </p>

          <p>
            Our experienced <span>CMS developers</span> and consultants use the
            latest technologies and deploy the best practices to develop a CMS
            solution that best fits your business needs. From development to
            testing and maintenance, we provide cms website development services
            that will help you perform speedy content creation and optimization.
          </p>
          <p>
            Having been in the industry for over 7 years, Creaditech has
            developed several CMS for multiple businesses. We are one of the
            best CMS development company in USA whose experts can provide custom
            CMS solutions for any industry. Whether you are looking for
            WordPress development services, Drupal development services, or any
            other custom cms development services, just contact Creaditech, and
            our consultants will find the best solution for you.
          </p>
        </>
      ),
      image: webDev,
      link: "",
    },
    ecommerceExtra: {
      heading: "Leading Ecommerce Platforms.",
      icons: [],
    },
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
