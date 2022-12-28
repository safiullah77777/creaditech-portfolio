import Link from "next/link";
import BottomNav from "../components/bottomNav/BottomNav";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MetaHead from "../components/metaHead/MetaHead";
// import { Banner } from "../element/banner";

function Error404() {
  // useEffect(() => {
  //   AOS.init();
  //   // return ()=>setActiveDefault(0)
  // }, []);
  return (
    <>
      <Header />
      <MetaHead title={""} description="" link={""} />
      <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1E1E1E]">
        <h1 className="text-[18rem] font-extrabold text-white tracking-widest">
          404
        </h1>
        <div className="bg-[#ffe100] px-2 text-[4rem] rounded rotate-12 absolute">
          <p> Page Not Found</p>
        </div>
        <button className="mt-5">
          <span className="relative inline-block text-sm font-medium text-[#ffe100] group active:text-[ffe100] focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#ffe100] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 pt-[4rem] pb-[2rem] bg-[#1A2238] border border-current">
              <Link href="/">
                <span className="text-[6rem]">Go Home</span>
              </Link>
            </span>
          </span>
        </button>
      </main>
      <BottomNav />
      <Footer />
    </>
  );
}

export default Error404;
