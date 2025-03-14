import React, { useEffect, useState } from "react";
import { SidebarNav } from "../SidebarNav/SidebarNav";
import styled from "styled-components";
import Content from "../Content";
import { theme } from "@shared/core/styles";
import Header from "../Header";

const LayoutContainer = styled.div<{ isSidebarVisible: boolean }>`
  display: flex;
  flex-direction: column;

  ${theme.breakpoints.up("md")} {
    flex-direction: row;
    margin-left: ${({ isSidebarVisible }) => (isSidebarVisible ? "20%" : "5%")};
    transition: margin-left 0.4s ease;
  }
`;

const MainContent = styled.div`
  flex-grow: 1;
  width: 100%;
`;

const TheLayout: React.FunctionComponent = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <LayoutContainer isSidebarVisible={true}>
      <SidebarNav />
      <MainContent>
        {!isMobile && <Header />}
        <Content />
      </MainContent>
    </LayoutContainer>
  );
};

export default TheLayout;
