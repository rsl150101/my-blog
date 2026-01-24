import * as React from "react";
import Layout from "./src/components/Layout";
import type { GatsbyBrowser } from "gatsby";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element, props }) => {
  return <Layout match={props.location.pathname}>{element}</Layout>;
};
