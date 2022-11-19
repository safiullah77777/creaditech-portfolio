import React, { useState } from "react";
import SideNav from "../sideNav/SideNav";

const BottomNav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="fixed   bottom-0 left-0 z-[100] hidden h-[70px]  w-full  max-[678px]:flex  ">
      <ul className="flex bg-[#C6CED3] mt-auto h-[60px] w-full justify-evenly">
        <li
          onClick={() => {
            setOpenDrawer(true);
          }}
          className=" relative z-[1000]  flex h-[105%] cursor-pointer  items-center justify-center gap-[1rem] bg-[grey]    p-[1rem] px-[3rem] after:absolute after:bottom-0 after:left-0 after:border-t-[white] after:bg-[red]  after:-z-[2] after:h-[120%] after:w-full after:rounded-t-[10px] after:border-solid rounded-full  after:border-t-[10px] "
        >
          <div className="-z-[1] flex gap-[1rem] items-center flex-col">
            <span className="z-[100]">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.375 17.2084V10.7559C18.375 10.236 18.2692 9.72144 18.0641 9.24367C17.859 8.76589 17.5588 8.33484 17.1819 7.97673L11.0706 2.1721C10.7144 1.8337 10.2418 1.64502 9.75048 1.64502C9.25915 1.64502 8.78659 1.8337 8.43037 2.1721L2.31812 7.97673C1.94117 8.33484 1.641 8.76589 1.43589 9.24367C1.23077 9.72144 1.125 10.236 1.125 10.7559V17.2084C1.125 17.7167 1.32693 18.2042 1.68638 18.5636C2.04582 18.9231 2.53334 19.125 3.04167 19.125H16.4583C16.9667 19.125 17.4542 18.9231 17.8136 18.5636C18.1731 18.2042 18.375 17.7167 18.375 17.2084Z"
                  stroke="#5B5E71"
                  strokeWidth="1.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.875 13.375C6.875 12.8667 7.07693 12.3792 7.43638 12.0198C7.79582 11.6603 8.28334 11.4584 8.79167 11.4584H10.7083C11.2167 11.4584 11.7042 11.6603 12.0636 12.0198C12.4231 12.3792 12.625 12.8667 12.625 13.375V19.125H6.875V13.375Z"
                  stroke="#5B5E71"
                  strokeWidth="1.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="z-[100] text-[9px] font-600 leading-[81%] text-[#5B5E71]">
              Home
            </span>
          </div>
        </li>
        <li className="flex rounded-[3rem] border-[red] border-solid border-t-[6px] h-full cursor-pointer flex-col items-center justify-center gap-[1rem] p-[1rem]">
          <span>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.375 17.2084V10.7559C18.375 10.236 18.2692 9.72144 18.0641 9.24367C17.859 8.76589 17.5588 8.33484 17.1819 7.97673L11.0706 2.1721C10.7144 1.8337 10.2418 1.64502 9.75048 1.64502C9.25915 1.64502 8.78659 1.8337 8.43037 2.1721L2.31812 7.97673C1.94117 8.33484 1.641 8.76589 1.43589 9.24367C1.23077 9.72144 1.125 10.236 1.125 10.7559V17.2084C1.125 17.7167 1.32693 18.2042 1.68638 18.5636C2.04582 18.9231 2.53334 19.125 3.04167 19.125H16.4583C16.9667 19.125 17.4542 18.9231 17.8136 18.5636C18.1731 18.2042 18.375 17.7167 18.375 17.2084Z"
                stroke="#5B5E71"
                strokeWidth="1.83333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.875 13.375C6.875 12.8667 7.07693 12.3792 7.43638 12.0198C7.79582 11.6603 8.28334 11.4584 8.79167 11.4584H10.7083C11.2167 11.4584 11.7042 11.6603 12.0636 12.0198C12.4231 12.3792 12.625 12.8667 12.625 13.375V19.125H6.875V13.375Z"
                stroke="#5B5E71"
                strokeWidth="1.83333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-[9px] font-600 leading-[81%] text-[#5B5E71]">
            Home
          </span>
        </li>
        <li className="flex h-full cursor-pointer flex-col items-center justify-center gap-[1rem] p-[1rem]">
          <span>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.375 17.2084V10.7559C18.375 10.236 18.2692 9.72144 18.0641 9.24367C17.859 8.76589 17.5588 8.33484 17.1819 7.97673L11.0706 2.1721C10.7144 1.8337 10.2418 1.64502 9.75048 1.64502C9.25915 1.64502 8.78659 1.8337 8.43037 2.1721L2.31812 7.97673C1.94117 8.33484 1.641 8.76589 1.43589 9.24367C1.23077 9.72144 1.125 10.236 1.125 10.7559V17.2084C1.125 17.7167 1.32693 18.2042 1.68638 18.5636C2.04582 18.9231 2.53334 19.125 3.04167 19.125H16.4583C16.9667 19.125 17.4542 18.9231 17.8136 18.5636C18.1731 18.2042 18.375 17.7167 18.375 17.2084Z"
                stroke="#5B5E71"
                strokeWidth="1.83333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.875 13.375C6.875 12.8667 7.07693 12.3792 7.43638 12.0198C7.79582 11.6603 8.28334 11.4584 8.79167 11.4584H10.7083C11.2167 11.4584 11.7042 11.6603 12.0636 12.0198C12.4231 12.3792 12.625 12.8667 12.625 13.375V19.125H6.875V13.375Z"
                stroke="#5B5E71"
                strokeWidth="1.83333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-[9px] font-600 leading-[81%] text-[#5B5E71]">
            Home
          </span>
        </li>
        <li className="flex h-full cursor-pointer flex-col items-center justify-center gap-[1rem] p-[1rem]">
          <span>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.375 17.2084V10.7559C18.375 10.236 18.2692 9.72144 18.0641 9.24367C17.859 8.76589 17.5588 8.33484 17.1819 7.97673L11.0706 2.1721C10.7144 1.8337 10.2418 1.64502 9.75048 1.64502C9.25915 1.64502 8.78659 1.8337 8.43037 2.1721L2.31812 7.97673C1.94117 8.33484 1.641 8.76589 1.43589 9.24367C1.23077 9.72144 1.125 10.236 1.125 10.7559V17.2084C1.125 17.7167 1.32693 18.2042 1.68638 18.5636C2.04582 18.9231 2.53334 19.125 3.04167 19.125H16.4583C16.9667 19.125 17.4542 18.9231 17.8136 18.5636C18.1731 18.2042 18.375 17.7167 18.375 17.2084Z"
                stroke="#5B5E71"
                strokeWidth="1.83333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.875 13.375C6.875 12.8667 7.07693 12.3792 7.43638 12.0198C7.79582 11.6603 8.28334 11.4584 8.79167 11.4584H10.7083C11.2167 11.4584 11.7042 11.6603 12.0636 12.0198C12.4231 12.3792 12.625 12.8667 12.625 13.375V19.125H6.875V13.375Z"
                stroke="#5B5E71"
                strokeWidth="1.83333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-[9px] font-600 leading-[81%] text-[#5B5E71]">
            Home
          </span>
        </li>
        <li className="flex h-full cursor-pointer flex-col items-center justify-center gap-[1rem] p-[1rem]">
          <span>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.375 17.2084V10.7559C18.375 10.236 18.2692 9.72144 18.0641 9.24367C17.859 8.76589 17.5588 8.33484 17.1819 7.97673L11.0706 2.1721C10.7144 1.8337 10.2418 1.64502 9.75048 1.64502C9.25915 1.64502 8.78659 1.8337 8.43037 2.1721L2.31812 7.97673C1.94117 8.33484 1.641 8.76589 1.43589 9.24367C1.23077 9.72144 1.125 10.236 1.125 10.7559V17.2084C1.125 17.7167 1.32693 18.2042 1.68638 18.5636C2.04582 18.9231 2.53334 19.125 3.04167 19.125H16.4583C16.9667 19.125 17.4542 18.9231 17.8136 18.5636C18.1731 18.2042 18.375 17.7167 18.375 17.2084Z"
                stroke="#5B5E71"
                strokeWidth="1.83333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.875 13.375C6.875 12.8667 7.07693 12.3792 7.43638 12.0198C7.79582 11.6603 8.28334 11.4584 8.79167 11.4584H10.7083C11.2167 11.4584 11.7042 11.6603 12.0636 12.0198C12.4231 12.3792 12.625 12.8667 12.625 13.375V19.125H6.875V13.375Z"
                stroke="#5B5E71"
                strokeWidth="1.83333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-[9px] font-600 leading-[81%] text-[#5B5E71]">
            Home
          </span>
        </li>
        <li className="flex h-full cursor-pointer flex-col items-center justify-center gap-[1rem] p-[1rem]">
          <span>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.375 17.2084V10.7559C18.375 10.236 18.2692 9.72144 18.0641 9.24367C17.859 8.76589 17.5588 8.33484 17.1819 7.97673L11.0706 2.1721C10.7144 1.8337 10.2418 1.64502 9.75048 1.64502C9.25915 1.64502 8.78659 1.8337 8.43037 2.1721L2.31812 7.97673C1.94117 8.33484 1.641 8.76589 1.43589 9.24367C1.23077 9.72144 1.125 10.236 1.125 10.7559V17.2084C1.125 17.7167 1.32693 18.2042 1.68638 18.5636C2.04582 18.9231 2.53334 19.125 3.04167 19.125H16.4583C16.9667 19.125 17.4542 18.9231 17.8136 18.5636C18.1731 18.2042 18.375 17.7167 18.375 17.2084Z"
                stroke="#5B5E71"
                strokeWidth="1.83333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.875 13.375C6.875 12.8667 7.07693 12.3792 7.43638 12.0198C7.79582 11.6603 8.28334 11.4584 8.79167 11.4584H10.7083C11.2167 11.4584 11.7042 11.6603 12.0636 12.0198C12.4231 12.3792 12.625 12.8667 12.625 13.375V19.125H6.875V13.375Z"
                stroke="#5B5E71"
                strokeWidth="1.83333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-[9px] font-600 leading-[81%] text-[#5B5E71]">
            Home
          </span>
        </li>
      </ul>
        <SideNav classes={`${openDrawer?"left-0":"-left-[120%]"}`} />
      <div onClick={()=>setOpenDrawer(false)} className={`${openDrawer?"flex":"hidden"} bg-[#000000]/[0.8] w-[100vw] h-[100vh] fixed top-0 left-0`}>
      </div>
    </div>
  );
};

export default BottomNav;
