import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  height: 300px;
  min-width: 320px;
  max-width: 400px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

interface IPostCardProps {
  post: {
    excerpt: string | null;
    frontmatter: {
      title: string | null;
      date: string | null;
    } | null;
  };
}

const PostCard = ({ post }: IPostCardProps) => {
  return (
    <Card>
      <h3>{post.frontmatter?.title}</h3>
      <p>{post.excerpt}</p>
      <h5>{post.frontmatter?.date}</h5>
    </Card>
  );
};

export default PostCard;
