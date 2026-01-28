import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `DING`,
    siteUrl: `https://dingblog.netlify.app`,
    description: `개발 공부를 하면서 기록하고 공유하는 곳입니다.`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://dingblog.netlify.app",
        sitemap: "https://dingblog.netlify.app/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1600,
              linkImagesToOriginal: false,
              showCaptions: true,
              quality: 90,
              withWebp: true,
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/src/content/blog/`,
      },
      __key: "blog",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets/`,
      },
      __key: "assets",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/assets/favicon.png",
      },
    },
  ],
};

export default config;
