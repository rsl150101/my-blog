import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import PostCard from "../components/common/PostCard";

const Container = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
`;

const Sidebar = styled.aside`
  width: 300px;
  height: 100%;
  flex-shrink: 0;
  overflow-y: auto;
  background-color: white;
  padding: 3rem 2rem;
  border-right: 1px solid #eee;
`;

const ContentArea = styled.section`
  flex: 1;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  align-content: start;
  overflow-y: auto;
  padding: 3rem 2rem;

  @media (max-width: 1370px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const IndexPage: React.FC<PageProps<Queries.BlogPostsQuery>> = ({ data, location }) => {
  return (
    <Layout match={location.pathname}>
      <Container>
        <Sidebar>...카테고리 버튼들...</Sidebar>
        <ContentArea>
          {data.allMdx.nodes.map((post) => (
            <PostCard post={post} />
          ))}
        </ContentArea>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY.MM.DD")
        }
        excerpt(pruneLength: 30)
      }
    }
  }
`;
export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
