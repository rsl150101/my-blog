import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

const Card = styled(Link)`
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  height: 300px;
  width: 360px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
`;

const Thumbnail = styled.div`
  flex: 1;
`;

const NoImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;

  svg {
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }
`;

const CardSummary = styled.div`
  padding: 0 20px 20px 20px;
  h5 {
    font-size: 12px;
    font-weight: 600;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Content = styled.p`
  margin-bottom: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface IPostCardProps {
  post: {
    excerpt: string | null;
    frontmatter: {
      title: string | null;
      date: string | null;
      custom_slug: string | null;
      category: string | null;
      description: string | null;
    } | null;
  };
  thumbnailImage?: IGatsbyImageData;
}

const PostCard = ({ post, thumbnailImage }: IPostCardProps) => {
  return (
    <Card to={`blog/${post.frontmatter?.category}/${post.frontmatter?.custom_slug}`}>
      <Thumbnail>
        {thumbnailImage ? (
          <GatsbyImage
            image={thumbnailImage}
            alt={`${post.frontmatter?.category} thumbnail`}
            style={{ width: "100%", height: "90%", borderRadius: "8px 8px 0 0" }}
          />
        ) : (
          <NoImg
            style={{
              background: "#ddd",
              width: "100%",
              height: "90%",
              borderRadius: "8px 8px 0 0",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
            No Image
          </NoImg>
        )}
      </Thumbnail>
      <CardSummary>
        <Title>{post.frontmatter?.title}</Title>
        <Content>{post.frontmatter?.description || post.excerpt}</Content>
        <h5>{post.frontmatter?.date}</h5>
      </CardSummary>
    </Card>
  );
};

export default PostCard;
