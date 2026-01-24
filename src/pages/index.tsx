import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import styled from "styled-components";

import PostCard from "../components/common/PostCard";
import { getImage, IGatsbyImageData } from "gatsby-plugin-image";

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
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 24px;
  align-content: start;
  overflow-y: auto;
  padding: 3rem 2rem;
`;

interface IFileNode {
  name: string;
  relativePath: string;
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  } | null;
}

interface IPostNode {
  id: string;
  excerpt: string;
  frontmatter: {
    title: string;
    date: string;
    category: string;
    description: string | null;
    custom_slug: string | null;
  };
}

interface IIndexPageData {
  allMdx: {
    nodes: IPostNode[];
  };
  allFile: {
    nodes: IFileNode[];
  };
}

const IndexPage: React.FC<PageProps<IIndexPageData>> = ({ data }) => {
  const posts = data.allMdx.nodes;

  const thumbnailMap = React.useMemo(() => {
    const map: Record<string, IGatsbyImageData | undefined> = {};

    data.allFile.nodes.forEach((node) => {
      if (node.childImageSharp?.gatsbyImageData) {
        const categoryName = node.name.replace("-thumbnail", "");
        map[categoryName] = node.childImageSharp.gatsbyImageData;
      }
    });

    return map;
  }, [data.allFile.nodes]);

  return (
    <Container>
      <Sidebar>...카테고리 버튼들...</Sidebar>
      <ContentArea>
        {posts.map((post) => (
          <PostCard
            post={post}
            thumbnailImage={thumbnailMap[post.frontmatter.category]}
            key={post.frontmatter?.title! + post.frontmatter?.date!}
          />
        ))}
      </ContentArea>
    </Container>
  );
};

export const query = graphql`
  query BlogPosts {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY.MM.DD")
          custom_slug
          category
          description
        }
        excerpt(pruneLength: 30)
      }
    }
    allFile(filter: { relativePath: { glob: "uploads/*.png" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(width: 300, placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
  }
`;
export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
