import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.subText};
  font-size: ${({ theme }) => theme.fontSize.ml};
  padding: 50px 0;

  h1 {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 50px 0;
    font-weight: 800;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    margin-bottom: 10px;
    font-weight: 600;
  }

  h4 {
    margin-bottom: 30px;
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: underline 1px ${({ theme }) => theme.colors.primary};
    text-underline-offset: 3px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    path {
      stroke: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Container>
      <h1>404 Not found</h1>
      <h3>죄송합니다. 페이지를 찾을 수 없습니다.</h3>
      <h4>주소가 잘못 입력 되었거나, 변경 혹은 삭제된 페이지입니다.</h4>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
            clipRule="evenodd"
          />
        </svg>
        홈으로
      </Link>
    </Container>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
