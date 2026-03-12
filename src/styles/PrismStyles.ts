import { createGlobalStyle, css } from "styled-components";

const LightPrism = css`
  /* One Light Style (One Dark Pro의 라이트 버전) */
  code[class*="language-"],
  pre[class*="language-"] {
    color: #383a42; /* 기본 텍스트 (짙은 회색) */
    background: ${({ theme }) => theme.colors.layoutBg};
    font-family: "JetBrains Mono", "Fira Code", "Consolas", monospace;
    line-height: 1.6;
  }

  .token.comment {
    color: #a0a1a7;
    font-style: italic;
  }
  .token.punctuation {
    color: #383a42;
  }
  .token.keyword {
    color: #a626a4;
  } /* 보라 - One Dark의 Purple */
  .token.operator,
  .token.attr-name {
    color: #986801;
  } /* 주황 - One Dark의 Orange */
  .token.string,
  .token.attr-value {
    color: #50a14f;
  } /* 초록 - One Dark의 Green */
  .token.function {
    color: #4078f2;
  } /* 파랑 - One Dark의 Blue */
  .token.boolean,
  .token.number {
    color: #986801;
  } /* 주황 */
  .token.variable,
  .token.property,
  .token.constant {
    color: #e45649;
  } /* 빨강 - One Dark의 Red */
  .token.class-name {
    color: #c18401;
  } /* 노랑/황토 - One Dark의 Yellow */

  /* JSX 일관성 적용 */
  .token.tag {
    color: #e45649;
  } /* 빨강 (div, span 등) */
  .token.tag .token.punctuation {
    color: #383a42;
  }
  .token.script-punctuation {
    color: #a626a4;
  } /* JSX 중괄호 */
`;

const DarkPrism = css`
  /* One Dark Pro Style */
  code[class*="language-"],
  pre[class*="language-"] {
    color: #abb2bf; /* 기본 텍스트 (밝은 회색) */
    background: ${({ theme }) => theme.colors.layoutBg};
    font-family: "JetBrains Mono", "Fira Code", "Consolas", monospace;
    line-height: 1.6;
  }

  .token.comment {
    color: #5c6370;
    font-style: italic;
  }
  .token.punctuation {
    color: #abb2bf;
  }
  .token.keyword {
    color: #c678dd;
  } /* 보라 */
  .token.operator,
  .token.attr-name {
    color: #d19a66;
  } /* 주황 */
  .token.string,
  .token.attr-value {
    color: #98c379;
  } /* 초록 */
  .token.function {
    color: #61afef;
  } /* 파랑 */
  .token.boolean,
  .token.number {
    color: #d19a66;
  } /* 주황 */
  .token.variable,
  .token.property,
  .token.constant {
    color: #e06c75;
  } /* 빨강/산호 */
  .token.class-name {
    color: #e5c07b;
  } /* 노랑 */

  /* JSX 일관성 적용 */
  .token.tag {
    color: #e06c75;
  } /* 빨강/산호 */
  .token.tag .token.punctuation {
    color: #abb2bf;
  }
  .token.script-punctuation {
    color: #c678dd;
  } /* JSX 중괄호 */
`;

const PrismStyles = createGlobalStyle`
  .gatsby-highlight {
    font-size: 14px;
    margin-bottom: 1.5rem;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => (theme.name === "light" ? "#eeeeee" : "#3e4451")};
  }
  
  pre[class*="language-"] {
    padding: 1.25em;
    margin: 0;
  }

  ${({ theme }) => (theme.name === "light" ? LightPrism : DarkPrism)}
`;

export default PrismStyles;
