import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { X as CloseIcon, Menu } from "lucide-react";
import { theme } from "@shared/core/styles/theme";

interface NavLink {
  title: string;
  path: string;
  icon?: React.ReactNode;
}

interface UserInfo {
  imageUrl: string;
  name: string;
  email: string;
}

interface NavigationSideBar {
  links: NavLink[];
  activePath: string;
  onLinkClick: (path: string) => void;
  logo: string;
  Header: JSX.Element;
}

const SidebarContainer = styled.div<{ isVisible: boolean }>`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  transition: width 0.4s ease;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  ${theme.breakpoints.up("md")} {
    position: fixed;
    top: 0;
    left: 0;
    width: ${({ isVisible }) => (isVisible ? "20%" : "5%")};
    height: 100vh;
    z-index: 1000;
    min-height: 100vh;
    max-width: 220px;
  }
`;

const NavList = styled.ul<{ isVisible: boolean }>`
  list-style-type: none;
  padding: 0;
  margin: 0 1rem;
  max-height: ${({ isVisible }) => (isVisible ? "500px" : "0")};
  overflow: hidden;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: max-height 0.4s ease, opacity 0.4s ease;
  ${theme.breakpoints.up("md")} {
    margin-top: 2rem;
  }
`;

const NavItem = styled.li<{ isActive: boolean }>`
  padding: 0.5rem 1rem;
  color: black;
  border-radius: 10px;
  border: 1px solid #f0f1f6;
  margin: 1rem 0;
  background-color: ${({ isActive }) => (isActive ? "#F6F7FB" : "transparent")};
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
  transition: padding-left 0.3s ease, color 0.3s ease, transform 0.2s ease;
  transform: none;
  -webkit-tap-highlight-color: transparent;

  ${theme.breakpoints.up("md")} {
    &:hover {
      background-color: #f6f7fb;
      transform: scale(0.9);
    }
  }
`;

const IconWrapper = styled.span<{ isActive: boolean }>`
  margin-right: 10px;
  color: ${({ isActive }) => (isActive ? "#8F55F7" : "black")};
`;

const LinkTitle = styled.span`
  color: inherit;
  font-size: 1rem;
`;

const SidebarHeaderContainer = styled.div<{ isVisible: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  transition: flex-direction 0.4s ease;

  ${theme.breakpoints.up("md")} {
    flex-direction: ${({ isVisible }) =>
      isVisible ? "row" : "column-reverse"};
  }
`;

const MenuIconWrapper = styled.div<{ isVisible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  transform: ${({ isVisible }) =>
    isVisible ? "rotate(0deg)" : "rotate(180deg)"};
`;

//Mobile Screen
const Logo = styled.img` 
  width: 2rem;
  margin-left: 0.5rem;
  transition: width 0.4s ease, margin-left 0.4s ease;

  // Web Screen
  ${theme.breakpoints.up("md")} {
    width: 4rem;
    margin-top: 1rem;
    margin-left: 4rem;
  }
`;

const LogoutButton = styled.button<{ isVisible: boolean }>`
  background-color: #8f55f7;
  color: white;
  margin: 3rem 1rem;
  padding: 0.5rem 1rem;
  margin-top: auto;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease display 0.3s ease;

  &:hover {
    background-color: #e63a3a;
  }
`;

const MobileHeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const NavigationSideBar: React.FC<NavigationSideBar> = ({
  links,
  activePath,
  onLinkClick,
  logo,
  Header,
}) => {
  const checkIsActive = (path: string): boolean => {
    const currentActivePath = activePath.split("/").pop();
    const currentPath = path.split("/").pop();
    return currentActivePath === currentPath;
  };

  const [showNavList, setShowNavList] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
      setShowNavList(window.innerWidth > 960);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSideBarMenu = () => {
    setShowNavList(!showNavList);
  };

  return (
    <SidebarContainer isVisible={showNavList}>
      <SidebarHeaderContainer
        className="sidebar-header-container"
        isVisible={showNavList}
      >
        <Logo src={logo} alt="PramitiHR" />

        {isMobile && (
          <MobileHeaderContainer>
            {Header}
            <MenuIconWrapper isVisible={showNavList}>
              {showNavList ? (
                <CloseIcon
                  onClick={handleSideBarMenu}
                  size={"2rem"}
                  className="sidenav-close-icon"
                  style={{
                    margin: "10px",
                  }}
                />
              ) : (
                <Menu
                  onClick={handleSideBarMenu}
                  size={"2rem"}
                  className="sidenav-close-icon"
                  style={{
                    margin: "10px",
                  }}
                />
              )}
            </MenuIconWrapper>
          </MobileHeaderContainer>
        )}
      </SidebarHeaderContainer>
      <NavList isVisible={showNavList}>
        {links.map((link, index) => (
          <NavItem
            key={index}
            isActive={checkIsActive(link.path)}
            onClick={() => onLinkClick(link.path)}
          >
            {link.icon && (
              <IconWrapper isActive={checkIsActive(link.path)}>
                {link.icon}
              </IconWrapper>
            )}
            <LinkTitle>{link.title}</LinkTitle>
          </NavItem>
        ))}
      </NavList>
    </SidebarContainer>
  );
};
