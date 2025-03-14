import React from "react";
import { useNavigate } from "react-router-dom";
import { navLinks } from "./SideNavLinks";
import { NavigationSideBar } from "@snowflake-ui/web/Navigation/NavigationSlideBar";
import { useAuth } from "@shared/core/index";
import AdminChatbotLogo from '../../assets/AdminChatBot.png';
import Header from "../Header";

export const SidebarNav: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  const handleLinkClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      {navLinks ? (
        <NavigationSideBar
          links={navLinks.routers}
          activePath={location.pathname}
          onLinkClick={handleLinkClick}
          logo={AdminChatbotLogo}
          Header={<Header/>}
        />
      ) : (
        <p>No Sidebar</p>
      )}
    </>
  );
};
