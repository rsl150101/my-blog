import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import styled from "styled-components";
import Seo from "../../../components/Seo";
import Comments from "../../../components/Comments";

const Container = styled.div`
  width: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: block !important;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    height: 30%;
    background: rgba(136, 136, 136, 0.4);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const MarkdownWrapper = styled.div`
  background-color: transparent;
  width: 60%;
  min-width: 700px;
  margin: 0 auto;
  padding: 0 1rem;
  line-height: 1.75;
  word-break: keep-all;
  color: ${({ theme }) => theme.colors.subText};

  h1,
  h2,
  h3,
  h4 {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 3rem;
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  h1 {
    font-size: 2.25rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.layoutBorder};
    padding-bottom: 1rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.4rem;
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
  }

  strong,
  b {
    font-weight: 700 !important;
  }

  em,
  i {
    font-style: italic;
  }

  blockquote {
    background: ${({ theme }) => theme.colors.layoutBg};
    border-left: 5px solid #4c6ef5;
    padding: 1rem 1.5rem;
    margin: 2rem 0;
    border-radius: 4px;
    font-style: normal;
    p {
      margin-bottom: 0;
    }
  }

  ul,
  ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    li {
      margin-bottom: 0.5rem;
    }
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  /*  링크 */
  a {
    color: #228be6;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }

  /* 이미지 */
  img {
    display: block;
    max-width: 100%;
    margin: 3rem auto;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }

  /*구분선 */
  hr {
    border: 0;
    height: 1px;
    background: #dee2e6;
    margin: 4rem 0;
  }

  /*접기/펼치기 제목 */
  summary {
    font-weight: 600;
    cursor: pointer;
  }

  /* 코드 블록 위치 조정 (줄 번호 공간 확보) */
  pre[class*="language-"].line-numbers {
    padding-left: 2.8em;
    border-radius: 6px;
  }

  code[class*="language-"] {
    text-shadow: none;
  }

  /* 인라인 코드 (문장 중간에 있는 코드) */
  code[class="language-text"] {
    background-color: ${({ theme }) => theme.colors.layoutBorder};
    color: #ff4d6d;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 0.9em;
  }

  /* 줄 번호 바(Bar) 스타일 */
  .line-numbers .line-numbers-rows {
    border: none;
    padding: 1em;
    background-color: transparent;
  }

  /* 줄 번호 숫자 색상 */
  .line-numbers-rows > span:before {
    color: #858585 !important;
  }

  .token.operator {
    background: none;
  }
`;

interface IPostDetailProps {
  data: Queries.PostDetailQuery;
  children: React.ReactNode;
}

interface IPageContext {
  prev: {
    frontmatter: { title: string; custom_slug: string; category: string };
  } | null;
  next: {
    frontmatter: { title: string; custom_slug: string; category: string };
  } | null;
}

const PostDetail = ({
  data,
  children,
  pageContext,
}: IPostDetailProps & { pageContext: IPageContext }) => {
  const { prev, next } = pageContext;

  return (
    <Container>
      <MarkdownWrapper>
        <h1>{data.mdx?.frontmatter?.title}</h1>
        {children}
        <div style={{ display: "flex", justifyContent: "space-between", margin: "2rem 0" }}>
          <div>
            {prev && (
              <Link
                to={`/blog/${prev.frontmatter.category}/${prev.frontmatter.custom_slug}/`}
                style={{ color: "inherit" }}
              >
                <span>이전 글</span>
                <p style={{ margin: 0, fontWeight: "bold" }}>{prev.frontmatter.title}</p>
              </Link>
            )}
          </div>
          <div style={{ textAlign: "right" }}>
            {next && (
              <Link
                to={`/blog/${next.frontmatter.category}/${next.frontmatter.custom_slug}/`}
                style={{ color: "inherit" }}
              >
                <span>다음 글</span>
                <p style={{ margin: 0, fontWeight: "bold" }}>{next.frontmatter.title}</p>
              </Link>
            )}
          </div>
        </div>
        <hr />

        <Comments />
      </MarkdownWrapper>
    </Container>
  );
};

export const query = graphql`
  query PostDetail($frontmatter__custom_slug: String) {
    mdx(frontmatter: { custom_slug: { eq: $frontmatter__custom_slug } }) {
      frontmatter {
        category
        date(formatString: "YYYY.MM.DD")
        title
        description
      }
    }
  }
`;

export default PostDetail;

export const Head = ({ data }: PageProps<Queries.PostDetailQuery>) => {
  const title = data.mdx?.frontmatter?.title;
  const description = data.mdx?.frontmatter?.description;
  return <Seo pageTitle={title!} summary={description!} />;
};
