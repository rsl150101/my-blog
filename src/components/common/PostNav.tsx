import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  padding: 1.5rem 0;
`;

const NavLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  max-width: 450px;
  transition: transform 0.2s ease-in-out;

  span {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.subText};
    transition: color 0.2s;
  }

  p {
    margin: 0.4rem 0 0;
    font-weight: bold;
    font-size: 1.1rem;
    word-break: keep-all;
    transition: color 0.2s;
  }

  && {
    text-decoration: none;

    &:hover {
      text-decoration: none;

      transform: translateY(-3px);
    }
  }
`;

interface IPostNavProps {
  prev: {
    frontmatter: { title: string; custom_slug: string; category: string };
  } | null;
  next: {
    frontmatter: { title: string; custom_slug: string; category: string };
  } | null;
}

const PostNav = ({ prev, next }: IPostNavProps) => {
  return (
    <NavContainer>
      <div>
        {prev && (
          <NavLink to={`/blog/${prev.frontmatter.category}/${prev.frontmatter.custom_slug}/`}>
            <span>이전 글</span>
            <p>{prev.frontmatter.title}</p>
          </NavLink>
        )}
      </div>
      <div style={{ textAlign: "right" }}>
        {next && (
          <NavLink to={`/blog/${next.frontmatter.category}/${next.frontmatter.custom_slug}/`}>
            <span>다음 글</span>
            <p>{next.frontmatter.title}</p>
          </NavLink>
        )}
      </div>
    </NavContainer>
  );
};

export default PostNav;
