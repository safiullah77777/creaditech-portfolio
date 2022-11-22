import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { List } from "../../utils/consts";
const Services = () => {
  const router = useRouter();
  const { serviceName } = router.query;
  const check = List.map((item) => item.children)
    .reduce((prev, next) => prev.concat(next))
    .map((item) => item.link.split("/")[2])
    .includes(serviceName);
    console.log(check)
  if (!check)return <ErrorPage statusCode={404} />;
  return(
    <>
    <h1>hello</h1>
    </>
  )
};

export default Services;
