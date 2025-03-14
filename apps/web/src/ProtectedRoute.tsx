import React from "react";
import { useAuth } from "@shared/core/index";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
  roles: string[];
  isRoleRequired: boolean;
}

const ProtectedRoute = ({ children, roles, isRoleRequired }: ProtectedRouteProps) => {
  const { isAuthenticated, getUserRole } = useAuth();
  const location = useLocation();
  const role = getUserRole();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if ((role && roles.includes(role)) || !isRoleRequired) {
    return children;
  } else {
    return <Navigate to="/notfound" state={{ from: location }} />;
  }
};

export default ProtectedRoute;
