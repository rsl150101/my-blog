import * as React from "react";
import { graphql, navigate, type HeadFC, type PageProps } from "gatsby";
import styled from "styled-components";

import PostCard from "../components/common/PostCard";
import { IGatsbyImageData } from "gatsby-plugin-image";

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
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

const CategoryBtn = styled.div<{ $isActive: boolean }>`
  padding: 10px 15px;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s;
  color: #555;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 10px;
  font-weight: 600;

  &:hover {
    background-color: #f5f5f5;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
      background-color: #e6f7ff; 
      color: #007acc;
    `}
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
  excerpt: string | null;
  bodyText: string | null;
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

const IndexPage: React.FC<PageProps<IIndexPageData>> = ({ data, location }) => {
  const posts = data.allMdx.nodes;
  const params = new URLSearchParams(location.search);
  const currentCategory = params.get("category") || "all";
  const currentSearch = params.get("search") || "";

  const handleSelectCategory = (category: string) => {
    const newParams = new URLSearchParams(location.search);

    if (category === "all") {
      newParams.delete("category");
    } else {
      newParams.set("category", category);
    }

    navigate(`/?${newParams.toString()}`);
  };

  const searchedPosts = React.useMemo(() => {
    if (!currentSearch) return posts;

    return posts.filter(
      (post) =>
        post.frontmatter.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
        post.frontmatter.description?.toLowerCase().includes(currentSearch.toLowerCase()) ||
        post.bodyText?.toLowerCase().includes(currentSearch.toLowerCase()),
    );
  }, [posts, currentSearch]);

  const filteredPosts = React.useMemo(() => {
    if (currentCategory === "all") return searchedPosts;

    return searchedPosts.filter((post) => post.frontmatter.category === currentCategory);
  }, [searchedPosts, currentCategory]);

  const categoryList = React.useMemo(() => {
    const categories = searchedPosts.map((post) => post.frontmatter.category);

    const uniqueCategories = [...new Set(categories)];

    return searchedPosts.length > 0 ? ["all", ...uniqueCategories] : [];
  }, [searchedPosts]);

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
      <Sidebar>
        <h3>Categories</h3>
        {categoryList.map((category) => {
          const count =
            category === "all"
              ? searchedPosts.length
              : searchedPosts.filter((p) => p.frontmatter.category === category).length;

          return (
            <CategoryBtn
              key={category}
              $isActive={currentCategory === category}
              onClick={() => handleSelectCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)} ({count})
            </CategoryBtn>
          );
        })}
      </Sidebar>
      <ContentArea>
        {filteredPosts.length === 0 ? (
          <div style={{ width: "100%", textAlign: "center", color: "#888" }}>
            "{currentSearch}"에 대한 검색 결과가 없습니다.
          </div>
        ) : (
          filteredPosts.map((post) => (
            <PostCard
              post={post}
              thumbnailImage={thumbnailMap[post.frontmatter.category]}
              key={post.id}
            />
          ))
        )}
      </ContentArea>
    </Container>
  );
};

export const query = graphql`
  query BlogPosts {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "YYYY.MM.DD")
          custom_slug
          category
          description
        }
        excerpt(pruneLength: 30)
        bodyText: excerpt(pruneLength: 50000)
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
