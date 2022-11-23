import Head from "next/head";
import React from "react";

const MetaHead = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content={
          description ||
          "Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
        }
      />
    </Head>
  );
};

export default MetaHead;
