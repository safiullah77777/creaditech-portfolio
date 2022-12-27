import Head from "next/head";
import React from "react";

const MetaHead = ({ title, description, link }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Creaditech",
    "url": "https://creaditech.com/",
    "logo": "https://creaditech.com/_next/static/media/Logo.a9789352.svg",
    "sameAs": [
      "https://www.facebook.com/creaditech",
      "https://twitter.com/Creaditech",
      "https://www.instagram.com/creaditech/",
      "https://www.linkedin.com/company/creaditechus/",
      "https://www.pinterest.com/Creaditech/"
    ]
  };
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
      
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default MetaHead;
