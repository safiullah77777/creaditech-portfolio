import React, { useState } from "react";
import Banner2 from "../../components/banner2/Banner2";
import Card8 from "../../components/card8/Card8";
import Header from "../../components/header/Header";
import MetaHead from "../../components/metaHead/MetaHead";
import Slider from "../../components/slider/Slider";
import BottomNav from "../../components/bottomNav/BottomNav";
import Footer from "../../components/footer/Footer";
import Pagination from "../../components/pagination/Pagination";
import { blogs } from "../../utils/blogs";
import Link from "next/link";

const CreativeBlogs = () => {
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);

  return (
    <>
      <MetaHead
        title={"Blog - Creaditech"}
        description={
          "Read some of the best and informative blogs from expert writers."
        }
        link="blog"
      />

      <Header />
      <Banner2 />
      <div className="flex flex-wrap justify-center gap-5 p-8">
        {blogs.map((item) => (
          <Link href={`blog/${item?.title}`}>
            <Card8
              title={item?.h1}
              alt={item?.h1.toLowerCase()}
              img={item?.featuredImage?.img}
              description={item?.meta?.description}
            />
          </Link>
        ))}
      </div>
      {/* <Pagination /> */}
      <Slider />
      <BottomNav index={1} />

      <Footer />
    </>
  );
};

export default CreativeBlogs;
