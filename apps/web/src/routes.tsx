import React, { lazy, ReactElement } from "react";

interface routes {
  path: string;
  element: React.LazyExoticComponent<React.FC>;
  role?: string;
}

//SideBarNavigation -> MainDashboard
const MainDashboard = lazy(() => import("./views/MainDashboard"));
//SideBarNavigation -> KnowledgeBase
const KnowledgeBase = lazy(() => import("./views/KnowledgeBase"));
//SideBarNavigation -> Integartion
const Integration = lazy(() => import("./views/Integration"));

//IntegrationSection -> TicketingSystem
const TicketingSystem = lazy(() => import ("./views/Integration/TicketingSystem"));
//IntegrationSection -> SharedEmailConfigueartion
const SharedEmailConfigueartion = lazy(() => import ("./views/Integration/SharedEmailConfigueration"));
//IntegrationSection -> SmtpConfigueration
const SmtpConfigueration = lazy(() => import ("./views/Integration/SmtpConfigueartion"));

//KnowledgeBaseSection -> UploadFromLocalStorage
const UploadFromLocalStorage = lazy(() => import("./views/KnowledgeBase/UploadFromLocalStorage"));
//KnowledgeBaseSection -> UploadFromGoogleDrive
const UploadFromGoogleDrive = lazy(() => import("./views/KnowledgeBase/UploadFromGoogleDrive"));
//KnowledgeBaseSection -> UploadFromOneDrive
const UploadFromOneDrive = lazy(() => import("./views/KnowledgeBase/UploadFromOneDrive"));

export const routes: routes[] = [
  {
    path: "admin/maindashboard",
    element: MainDashboard,
    role: "Admin",
  },
  {
    path: "admin/integration",
    element: Integration,
    role: "Admin",
  },
  {
    path: "admin/knowledgebase",
    element: KnowledgeBase,
    role:"Admin",
  },
  {
    path: "integration/ticketingsystem",
    element: TicketingSystem,
    role: "integartion",
  },
  {
    path: "integration/sharedemailconfigueartion",
    element: SharedEmailConfigueartion,
    role: "integration",
  },
  {
    path: "integration/smtp",
    element: SmtpConfigueration,
    role: "integration",
  },
  {
    path: "knowledgebase/uploadfromlocalstorage",
    element: UploadFromLocalStorage,
    role: "knowledgebase",
  },
  {
    path: "knowledgebase/uploadfromgoogledrive",
    element: UploadFromGoogleDrive,
    role: "knowledgebase",
  },
  {
    path: "knowledgebase/uploadfromonedrive",
    element: UploadFromOneDrive,
    role: "knowledgebase",
  },

];


