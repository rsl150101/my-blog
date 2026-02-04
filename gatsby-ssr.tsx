import * as React from "react";
import Layout from "./src/components/Layout";
import type { GatsbySSR } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

import Video from "./src/components/mdx/Video";

const components = {
  Video,
};

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element, props }) => {
  return (
    <MDXProvider components={components}>
      <Layout match={props.location.pathname}>{element}</Layout>
    </MDXProvider>
  );
};
