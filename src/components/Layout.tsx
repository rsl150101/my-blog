import * as React from "react";
import { Link, navigate } from "gatsby";
import styled from "styled-components";

import GlobalStyle from "../styles/GlobalStyle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f8f9fa;
`;

const MobileBlocker = styled.div`
  display: none;

  @media (max-width: 719px) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0);
    color: white;
    z-index: 9999;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
  }
`;

const Header = styled.header`
  background-color: #ffffff;

  border-bottom: 1px solid #eee;
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 800;
  color: #333;
  text-decoration: none;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    font-size: 1rem;
    font-weight: 500;
    color: #555;
    &:hover {
      color: #000;
    }
  }
`;

const NavMenuLink = styled(Link)`
  position: relative;
`;

const NavMenuBar = styled.div`
  width: 100%;
  height: 3px;
  position: absolute;
  background-color: black;
  bottom: -7px;
`;

const SearchInput = styled.input`
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  border: 1px solid #ddd;
  background-color: #f8f9fa;
  font-size: 0.9rem;
  width: 200px;
  outline: none;
  transition: all 0.2s;

  &:focus {
    background-color: white;
    border-color: #333;
  }
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Footer = styled.footer`
  background-color: white;
  border-top: 1px solid #eee;
  color: #666;
  text-align: center;
  padding: 2rem;
  font-size: 0.85rem;
`;

interface ILayoutProps {
  children: React.ReactNode;
  match?: string;
}

const Layout = ({ children, match }: ILayoutProps) => {
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const handleSearchKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const searchValue = e.currentTarget.value;

      const params = new URLSearchParams(window.location.search);

      if (searchValue) {
        params.delete("category");
        params.set("search", searchValue);
      } else {
        params.delete("search");
      }

      navigate(`/?${params.toString()}`);

      e.currentTarget.value = "";
    }
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <MobileBlocker>
        <h2>화면이 너무 작습니다! 😢</h2>
        <p>이 블로그는 너비 720px 이상의 웹 환경에 최적화되어 있습니다.</p>
        <p>웹 환경에서 브라우저 창을 조금만 더 키워주세요.</p>
      </MobileBlocker>
      <Header>
        <Logo to="/">Dev Ing</Logo>
        <HeaderRight>
          <NavMenu>
            <NavMenuLink to="/">
              Blog
              {match === "/" ? <NavMenuBar /> : null}
            </NavMenuLink>
            <NavMenuLink to="/about">
              About
              {match === "/about" ? <NavMenuBar /> : null}
            </NavMenuLink>
          </NavMenu>
          <SearchInput
            type="text"
            placeholder="Search"
            ref={searchInputRef}
            onKeyDown={handleSearchKeydown}
          />
          <ToggleButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
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
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </ToggleButton>
        </HeaderRight>
      </Header>
      <Main>{children}</Main>
      <Footer>© {new Date().getFullYear()} Dev Ing Blog. All rights reserved.</Footer>
    </Wrapper>
  );
};

export default Layout;
