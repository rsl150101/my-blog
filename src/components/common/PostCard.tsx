import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Card = styled(Link)`
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  height: 300px;
  min-width: 320px;
  max-width: 400px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
`;

const Thumbnail = styled.div`
  flex: 1;
`;

const CardSummary = styled.div`
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
`;

interface IPostCardProps {
  post: {
    excerpt: string | null;
    frontmatter: {
      title: string | null;
      date: string | null;
      custom_slug: string | null;
      category: string | null;
    } | null;
  };
}

const PostCard = ({ post }: IPostCardProps) => {
  return (
    <Card to={`blog/${post.frontmatter?.category}/${post.frontmatter?.custom_slug}`}>
      <Thumbnail></Thumbnail>
      <CardSummary>
        <Title>{post.frontmatter?.title}</Title>
        <Content>{post.excerpt}</Content>
        <h5>{post.frontmatter?.date}</h5>
      </CardSummary>
    </Card>
  );
};

export default PostCard;
