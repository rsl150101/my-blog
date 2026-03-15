import * as React from "react";
import Giscus from "@giscus/react";

import { useTheme } from "../hooks/useTheme";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
  border-top: 1px solid ${({ theme }) => theme.colors.layoutBorder};
`;

const Feedback = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.md};
`;

const Comments = () => {
  const { themeMode } = useTheme();

  const giscusTheme = themeMode === "dark" ? "dark_dimmed" : "light";

  return (
    <Container>
      <Feedback>
        <span>학습하며 정리한 내용이라 부족한 점이나 잘못된 정보가 있을 수 있습니다.</span>
        <span>혹시 틀린 부분을 발견하신다면 댓글로 따뜻한 지적 부탁드립니다!</span>
      </Feedback>
      <Giscus
        id="comments"
        repo="mogoo-copy/my-blog-comments"
        repoId="R_kgDORCUVyQ"
        category="Announcements"
        categoryId="DIC_kwDORCUVyc4C1fMZ"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme={giscusTheme}
        lang="ko"
        loading="lazy"
      />
    </Container>
  );
};

export default Comments;
