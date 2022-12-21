import Head from "next/head";
import React from "react";

const MetaHead = ({ title, description, link }) => {
  return (
    <Head>
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content={
          description
        }
      />
      <link rel="canonical" href={`https://creaditech.com/${link || ""}`} />
    </Head>
  );
};

export default MetaHead;
