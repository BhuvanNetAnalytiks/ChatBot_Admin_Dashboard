import React from "react";
import {
  TicketCheck,
  House,
  Upload,
} from "lucide-react";

interface routers {
  title: string;
  path: string;
  icon: JSX.Element;
}

interface navLink {
  routers: routers[];
}

export const navLinks: navLink = {
    routers: [
      { title: "Main Dashboard", path: "admin/maindashboard", icon: <House /> },
      { title: "Knowledge Base", path: "admin/knowledgebase", icon:<Upload />},
      { title: "Integrations", path: "admin/integration", icon: <TicketCheck /> },
    ],
};
