import development from "../public/assets/images/mega-development.png";
import designing from "../public/assets/images/mega-designing.png";
import marketing from "../public/assets/images/mega-marketing.png";
import lottiDevelopment from "../public/assets/images/mega-web-development.json";
import lottiMarketing from "../public/assets/images/mega-digital-marketing.json";

export const List = [
  {
    logo: development,
    lotti: lottiDevelopment,
    heading: "Development",
    children: [
      { title: "Website Development", link: "/services/web-development" },
      {
        title: "Ecommerce  Development",
        link: "/services/ecommerce-website-development",
        // children: [
        //   { title: "IOS App Development", link: "/services/ios-development" },
        //   {
        //     title: "Android App Development",
        //     link: "/services/android-development",
        //   },
        // ],
      },
      {
        title: "CMS Development",
        link: "/services/cms-development",
      },
      {
        title: "Wordpress Development",
        link: "/services/database-solutions",
      },
      {
        title: "Custom Web App Development",
        link: "/services/wordpress-wix-shopify-development",
      },
      {
        title: "PHP Web Development",
        link: "/services/wordpress-wix-shopify-development",
      },
    ],
  },
  // {
  //   logo: designing,
  //   heading: "Designing",
  //   children: [
  //     { title: "Branding", link: "/services/branding" },
  //     { title: "Logo Design", link: "/services/logo-design" },
  //     { title: "Infographics Design", link: "/services/infographics-design" },
  //     { title: "Social Media Design", link: "/services/social-media-design" },
  //   ],
  // },
  {
    logo: marketing,
    lotti: lottiMarketing,
    heading: "Marketing",
    children: [
      { title: "Search Engine Optimization", link: "/services/seo" },
      { title: "Search Engine Marketing", link: "/services/sem" },
      // {
      //   title: "Social Media Marketing",
      //   link: "/services/social-media-marketing",
      // },
      { title: "Content Creation", link: "/services/content-creation" },
    ],
  },
];

export const BottomList = (active) => [
  {
    title: "Home",
    icon: (
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.375 17.2084V10.7559C18.375 10.236 18.2692 9.72144 18.0641 9.24367C17.859 8.76589 17.5588 8.33484 17.1819 7.97673L11.0706 2.1721C10.7144 1.8337 10.2418 1.64502 9.75048 1.64502C9.25915 1.64502 8.78659 1.8337 8.43037 2.1721L2.31812 7.97673C1.94117 8.33484 1.641 8.76589 1.43589 9.24367C1.23077 9.72144 1.125 10.236 1.125 10.7559V17.2084C1.125 17.7167 1.32693 18.2042 1.68638 18.5636C2.04582 18.9231 2.53334 19.125 3.04167 19.125H16.4583C16.9667 19.125 17.4542 18.9231 17.8136 18.5636C18.1731 18.2042 18.375 17.7167 18.375 17.2084Z"
          stroke={active !== 0 ? "#5B5E71" : "yellow"}
          strokeWidth="1.83333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.875 13.375C6.875 12.8667 7.07693 12.3792 7.43638 12.0198C7.79582 11.6603 8.28334 11.4584 8.79167 11.4584H10.7083C11.2167 11.4584 11.7042 11.6603 12.0636 12.0198C12.4231 12.3792 12.625 12.8667 12.625 13.375V19.125H6.875V13.375Z"
          stroke={active !== 0 ? "#5B5E71" : "yellow"}
          strokeWidth="1.83333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    link: "/",
  },
  {
    title: "Blogs",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.8583 0.466675V0.391675H19.7833H0.716675H0.641675V0.466675V14.7667V14.8417H0.716675H3.02501V19.1889V19.3699L3.15304 19.2419L7.55327 14.8417H19.7833H19.8583V14.7667V0.466675ZM4.36667 13.575V13.5H4.29167H1.98334V5.30834H18.5167V13.5H7.01947H6.98841L6.96644 13.522L4.36667 16.1217V13.575ZM12.6333 6.35001H12.5583V6.42501V12.3833V12.4583H12.6333H17.4H17.475V12.3833V6.42501V6.35001H17.4H12.6333ZM3.10001 7.54168H3.02501V7.61668V8.80834V8.88334H3.10001H11.4417H11.5167V8.80834V7.61668V7.54168H11.4417H3.10001ZM3.10001 9.92501H3.02501V10V11.1917V11.2667H3.10001H11.4417H11.5167V11.1917V10V9.92501H11.4417H3.10001ZM18.5167 3.96668H1.98334V1.73334H18.5167V3.96668ZM16.1333 7.69168V11.1167H13.9V7.69168H16.1333Z"
          fill={active !== 1 ? "#5B5E71" : "yellow"}
          stroke={active !== 1 ? "#5B5E71" : "yellow"}
          strokeWidth="0.15"
        />
      </svg>
    ),
    link: "/creative-blog",
  },
  {
    title: "About",
    icon: (
      <svg
        width="23"
        height="22"
        viewBox="0 0 23 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_486_3024)">
          <path
            d="M6.25094 17.126H9.72304V15.0633H6.25094C4.35125 15.0633 2.8127 13.5248 2.8127 11.6251V10.9379C2.8127 9.03823 4.35125 7.49967 6.25094 7.49967H21.7193H22.75V5.43823H6.25094C5.18887 5.43823 4.19702 5.73917 3.35564 6.2608C1.79201 7.23134 0.75 8.96425 0.75 10.9392V11.6263C0.75 14.6646 3.2127 17.1273 6.25094 17.1273V17.126Z"
            fill={active !== 2 ? "#5B5E71" : "yellow"}
          />
          <path
            d="M17.2503 8.87646L16.6773 8.87145L12.7337 8.83884L10.671 8.82129V17.126H12.7337V10.884L16.6773 10.9304L17.2503 10.9379C19.1462 10.9379 20.6886 12.4802 20.6886 14.3749V15.0633C20.6886 16.9605 19.15 18.5003 17.2503 18.5003H0.75V20.563H1.78072H17.2491C18.3124 20.563 19.303 20.262 20.1444 19.7404C21.708 18.7699 22.75 17.0395 22.75 15.0645V14.3761C22.75 11.3442 20.2835 8.87772 17.2491 8.87772L17.2503 8.87646Z"
            fill={active !== 2 ? "#5B5E71" : "yellow"}
          />
          <path
            d="M1.78072 4.0627H22.75V3.03448V3.03197V3.02947V2H1.78197H0.75V4.0627H1.78072Z"
            fill={active !== 2 ? "#5B5E71" : "yellow"}
          />
        </g>
        <defs>
          <clipPath id="clip0_486_3024">
            <rect
              width="22"
              height="18.563"
              fill="white"
              transform="translate(0.75 2)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    link: "/about-us",
  },
  {
    title: "Services",
    icon: (
      <svg
        width="23"
        height="22"
        viewBox="0 0 23 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.39941 13.7853L7.39933 13.7854L7.40444 13.7884L10.8308 15.8442C10.8923 15.8983 10.9702 15.9184 11.0347 15.9276C11.1037 15.9375 11.18 15.9375 11.2454 15.9375H11.25H11.2546C11.32 15.9375 11.3963 15.9375 11.4653 15.9276C11.5298 15.9184 11.6077 15.8983 11.6692 15.8442L15.0956 13.7884L15.0956 13.7886L15.1006 13.7853C15.3356 13.6285 15.5 13.386 15.5 13.0625V8.9375C15.5 8.61401 15.3356 8.37145 15.1006 8.21474L15.1007 8.21463L15.0956 8.21156L11.6692 6.15577C11.6077 6.10172 11.5298 6.08156 11.4653 6.07235C11.3963 6.06249 11.32 6.06249 11.2546 6.0625L11.25 6.0625L11.2454 6.0625C11.18 6.06249 11.1037 6.06249 11.0347 6.07235C10.9702 6.08156 10.8923 6.10172 10.8308 6.15577L7.40444 8.21156L7.40437 8.21144L7.39941 8.21474C7.16435 8.37145 7 8.61401 7 8.9375V13.0625C7 13.386 7.16435 13.6285 7.39941 13.7853ZM11.25 14.1542L8.625 12.5792V9.35202L11.25 7.77702L13.875 9.35202V12.5792L11.25 14.1542Z"
          fill={active !== 3 ? "#5B5E71" : "yellow"}
          stroke={active !== 3 ? "#5B5E71" : "yellow"}
          strokeWidth="0.25"
        />
        <path
          d="M10.8433 21.3517L10.8431 21.3519L10.8503 21.3556C10.9272 21.394 10.9908 21.4161 11.0576 21.4272C11.1195 21.4375 11.1801 21.4375 11.2443 21.4375H11.25H11.2557C11.3199 21.4375 11.3805 21.4375 11.4424 21.4272C11.5092 21.4161 11.5728 21.394 11.6497 21.3556L11.6498 21.3558L11.6567 21.3517L19.9067 16.5392L19.9068 16.5394L19.9131 16.5353C20.1481 16.3785 20.3125 16.136 20.3125 15.8125V10.3125V10.1875H20.1875H18.8125H18.6875V10.3125V15.3969L11.25 19.7241L3.8125 15.3969V6.67189L11.2504 2.34437L19.094 6.84591L19.2013 6.90747L19.264 6.80088L19.9515 5.63213L20.0151 5.52399L19.9067 5.46078L11.6567 0.648278L11.6569 0.648053L11.6497 0.644447C11.5728 0.606008 11.5092 0.583926 11.4424 0.572795C11.3806 0.562482 11.3199 0.562491 11.2557 0.562499L11.25 0.5625L11.2443 0.562499C11.1801 0.562491 11.1194 0.562482 11.0576 0.572795C10.9908 0.583926 10.9272 0.606008 10.8503 0.644447L10.8502 0.644214L10.8433 0.648278L2.59327 5.46078L2.59315 5.46058L2.58691 5.46474C2.35185 5.62145 2.1875 5.86401 2.1875 6.1875V15.8125C2.1875 16.136 2.35185 16.3785 2.58691 16.5353L2.58679 16.5354L2.59327 16.5392L10.8433 21.3517Z"
          fill={active !== 3 ? "#5B5E71" : "yellow"}
          stroke={active !== 3 ? "#5B5E71" : "yellow"}
          strokeWidth="0.25"
        />
      </svg>
    ),
    link: "",
  },
  {
    title: "Work",
    icon: (
      <svg
        width="23"
        height="22"
        viewBox="0 0 23 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.58337 2.74996H9.91671C9.91671 2.26373 10.1099 1.79741 10.4537 1.4536C10.7975 1.10978 11.2638 0.916626 11.75 0.916626C12.2363 0.916626 12.7026 1.10978 13.0464 1.4536C13.3902 1.79741 13.5834 2.26373 13.5834 2.74996H20.9167V4.58329H20V14.6666H14.7292L16.3334 20.1666H14.5L12.8959 14.6666H10.6042L9.00004 20.1666H7.16671L8.77087 14.6666H3.50004V4.58329H2.58337V2.74996ZM5.33337 4.58329V12.8333H18.1667V4.58329H5.33337ZM11.6125 10.8625C11.5709 10.9056 11.5211 10.94 11.466 10.9636C11.4109 10.9873 11.3517 10.9996 11.2917 11C11.1701 11 11.0536 10.9517 10.9676 10.8657C10.8817 10.7798 10.8334 10.6632 10.8334 10.5416V6.87496C10.8334 6.7534 10.8817 6.63682 10.9676 6.55087C11.0536 6.46491 11.1701 6.41663 11.2917 6.41663C11.42 6.41663 11.53 6.47163 11.6125 6.55413L12.8959 7.82829C13.1892 8.12163 13.4825 8.41496 13.4825 8.70829C13.4825 9.00163 13.1892 9.29496 12.8959 9.58829L11.6125 10.8625Z"
          fill={active !== 4 ? "#5B5E71" : "yellow"}
        />
      </svg>
    ),
    link: "/portfolio",
  },
  {
    title: "Careers",
    icon: (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.9083 4.13357C19.9086 3.98935 19.8748 3.84703 19.8095 3.71992C19.7442 3.59279 19.6494 3.48459 19.5331 3.40631L19.5331 3.40624L19.5293 3.40385C19.4064 3.32743 19.2662 3.28676 19.1228 3.28676C18.9809 3.28676 18.842 3.32663 18.72 3.4016L13.0988 6.40354L13.0988 4.13334L13.0988 4.13299C13.0984 3.98833 13.0637 3.84575 12.9974 3.71871C12.9312 3.59163 12.8353 3.48381 12.718 3.40629C12.6007 3.32872 12.4661 3.28427 12.327 3.278C12.188 3.27173 12.0503 3.30386 11.927 3.37071C11.9269 3.37074 11.9269 3.37078 11.9268 3.37081L6.28929 6.40285V1.20001C6.28929 0.97523 6.20647 0.757965 6.05645 0.596407C5.90614 0.434536 5.70021 0.341675 5.48334 0.341675H1.39763C1.18076 0.341675 0.97483 0.434536 0.824522 0.596407C0.674503 0.757965 0.591675 0.97523 0.591675 1.20001V19.5333V19.6583H0.716675H19.7833H19.9083V19.5333V4.13357ZM19.9083 4.13357L19.7833 4.13334M19.9083 4.13357V4.13334H19.7833M19.7833 4.13334V19.4083L18.7823 3.51001C18.8859 3.44564 19.0033 3.41176 19.1228 3.41176C19.2423 3.41176 19.3598 3.44564 19.4633 3.51001C19.5614 3.57606 19.6423 3.66796 19.6983 3.77702C19.7543 3.88608 19.7836 4.00872 19.7833 4.13334ZM4.86165 9.09807L11.4869 5.53062V8.98801V9.19729L11.6712 9.09807L18.2964 5.53062V17.9417H15.8226V12.2C15.8226 11.9752 15.7398 11.758 15.5898 11.5964C15.4395 11.4345 15.2335 11.3417 15.0167 11.3417H10.931C10.7141 11.3417 10.5082 11.4345 10.3579 11.5964C10.2078 11.758 10.125 11.9752 10.125 12.2V17.9417H2.20358V2.05834H4.67739V8.98801V9.19729L4.86165 9.09807ZM11.7369 17.9417V13.0583H14.2107V17.9417H11.7369Z"
          fill={active !== 5 ? "#5B5E71" : "yellow"}
          stroke={active !== 5 ? "#5B5E71" : "yellow"}
          strokeWidth="0.25"
        />
      </svg>
    ),
    link: "careers",
  },
];
