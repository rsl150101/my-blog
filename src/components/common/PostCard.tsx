import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

const Card = styled(Link)`
  background: ${({ theme }) => theme.colors.layoutBg};
  border: 1px solid ${({ theme }) => theme.colors.boxBorder};
  border-radius: 8px;
  height: 300px;
  width: 360px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
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
  font-size: ${({ theme }) => theme.fontSize.ml};
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.boxBorder};
  color: ${({ theme }) => theme.colors.text};

  svg {
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }
`;

const CardSummary = styled.div`
  padding: 0 20px 20px 20px;
  color: ${({ theme }) => theme.colors.text};
  h5 {
    color: ${({ theme }) => theme.colors.subText};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 600;
  }
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.ml};
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
