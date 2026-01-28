import * as React from "react";

import { useSiteMetadata } from "../hooks/useMetaData";

interface ISeoProps {
  pageTitle: string;
  summary?: string;
}

const Seo = ({ pageTitle, summary }: ISeoProps) => {
  const { title: siteTitle, siteUrl, description } = useSiteMetadata();
  const logo = `${siteUrl}/assets/logo.png`;

  return (
    <>
      <title>
        {pageTitle}
        {summary ? ` - ${summary}` : ` | ${siteTitle}`}
      </title>
      <meta name="description" content={description} />
      <link rel="canonical" href={siteUrl} />

      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={logo} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="ko_KR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logo} />
      <meta name="twitter:creator" content="WooJoong" />
    </>
  );
};

export default Seo;
