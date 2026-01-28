import { createGlobalStyle, css } from "styled-components";

const LightPrism = css`
  code[class*="language-"],
  pre[class*="language-"] {
    color: #393a34;
    background: ${({ theme }) => theme.colors.layoutBg};
    font-family: "Consolas", "Monaco", "Andale Mono", "Ubuntu Mono", monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
  }

  pre[class*="language-"] {
    padding: 1em;
  }

  /* 코드 블록 전체 배경 */
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: ${({ theme }) => theme.colors.layoutBg};
    border: none;
    border-radius: 6px;
  }

  /* 토큰 색상 */
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999988;
    font-style: italic;
  }
  .token.namespace {
    opacity: 0.7;
  }
  .token.string,
  .token.attr-value {
    color: #e3116c;
  }
  .token.punctuation,
  .token.operator {
    color: #393a34;
  }
  .token.entity,
  .token.url,
  .token.symbol,
  .token.number,
  .token.boolean,
  .token.variable,
  .token.constant,
  .token.property,
  .token.regex,
  .token.inserted {
    color: #36acaa;
  }
  .token.atrule,
  .token.keyword,
  .token.attr-name,
  .token.selector {
    color: #00a4db;
  }
  .token.function,
  .token.deleted,
  .token.tag {
    color: #d73a49;
  }
`;

const DarkPrism = css`
  code[class*="language-"],
  pre[class*="language-"] {
    color: #d4d4d4;
    background: ${({ theme }) => theme.colors.layoutBg};
    font-family: "Consolas", "Monaco", "Andale Mono", "Ubuntu Mono", monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
  }
  pre[class*="language-"] {
    padding: 1em;
  }
  /* 코드 블록 전체 배경 */
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: ${({ theme }) => theme.colors.layoutBg};
    border: none;
    border-radius: 6px;
  }

  /* 토큰 색상  */
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #6a9955;
  }
  .token.punctuation {
    color: #d4d4d4;
  }
  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #b5cea8;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #ce9178;
  }
  .token.operator,
  .token.entity,
  .token.url,
  .token.variable {
    color: #d4d4d4;
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #569cd6;
  }
  .token.function,
  .token.class-name {
    color: #dcdcaa;
  }
  .token.regex,
  .token.important {
    color: #d16969;
  }
`;

const PrismStyles = createGlobalStyle`
  .gatsby-highlight {
    font-size: 14px;
    margin-bottom: 1.5rem;
  }
  
  ${({ theme }) => (theme.name === "light" ? LightPrism : DarkPrism)}
`;

export default PrismStyles;
