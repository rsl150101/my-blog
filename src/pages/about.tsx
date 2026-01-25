import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  color: ${({ theme }) => theme.colors.subText};
  font-size: ${({ theme }) => theme.fontSize.ml};
  padding: 50px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.xl};
  letter-spacing: -0.02em;
  margin-bottom: 30px;
`;

const ProfileImg = styled(GatsbyImage)`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 30px;
`;

const Intro = styled.div`
  padding: 10px;
  text-align: center;

  span {
    display: block;
    padding: 5px;
  }
  strong {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MyLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;

  svg {
    fill: ${({ theme }) => theme.colors.boxBorder};
    path {
      fill: ${({ theme }) => theme.colors.text};
    }
  }
`;

const MarginBottomSpan = styled.span`
  margin-bottom: 15px;
`;

const AboutPage: React.FC<PageProps<Queries.AboutImgQuery>> = ({ data }) => {
  const img = getImage(data.file?.childImageSharp?.gatsbyImageData!);
  return (
    <Container>
      <Title>모호함을 확신으로 바꾸는 기록</Title>
      <ProfileImg image={img!} alt={data.file?.name!} />
      <Intro>
        <MarginBottomSpan>
          안녕하세요. <strong>웹 풀스택 개발자</strong>를 꿈꾸는 김우중의 공간입니다.
        </MarginBottomSpan>
        <span>
          단순히 기술을 사용하는 것을 넘어, 시스템의 <strong>설계 의도</strong>를 깊이 파헤치고
        </span>
        <MarginBottomSpan>
          <strong>근본적인 동작 원리</strong>를 이해하는 과정에서 개발의 진정한 가치를 느낍니다.
        </MarginBottomSpan>
        <span>"내가 아는 것이 틀릴 수 있다"는 비판적 사고를 바탕으로,</span>
        <MarginBottomSpan>
          모호했던 지식을 검증하고 교정하며 기록하는 실천의 장으로 이 블로그를 만들게 되었습니다.
        </MarginBottomSpan>
        <span>본질에 대한 탐구와 공유를 통해 나를 증명하고, 팀의 기술적 성숙도에 기여하며</span>
        <span>
          <strong>단단하게 성장하는 개발자</strong>가 되고자 합니다.
        </span>
      </Intro>
      <MyLink>
        <a href="https://github.com/rsl150101" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 98 96">
            <g clip-path="url(#clip0_730_27126)">
              <path d="M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z" />
            </g>
            <defs>
              <clipPath id="clip0_730_27126">
                <rect width="98" height="96" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href="mailto:dnwnd501@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
            <path d="M61.4 64C27.5 64 0 91.5 0 125.4 0 126.3 0 127.1 .1 128L0 128 0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256-.1 0c0-.9 .1-1.7 .1-2.6 0-33.9-27.5-61.4-61.4-61.4L61.4 64zM464 192.3L464 384c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-191.7 154.8 117.4c31.4 23.9 74.9 23.9 106.4 0L464 192.3zM48 125.4C48 118 54 112 61.4 112l389.2 0c7.4 0 13.4 6 13.4 13.4 0 4.2-2 8.2-5.3 10.7L280.2 271.5c-14.3 10.8-34.1 10.8-48.4 0L53.3 136.1c-3.3-2.5-5.3-6.5-5.3-10.7z" />
          </svg>
        </a>
      </MyLink>
    </Container>
  );
};

export const query = graphql`
  query AboutImg {
    file(relativePath: { glob: "uploads/about/*.jpg" }) {
      name
      childImageSharp {
        gatsbyImageData(height: 250, width: 250, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
  }
`;

export default AboutPage;
