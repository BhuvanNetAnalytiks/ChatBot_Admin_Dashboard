import React, { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@shared/core";
import { routes } from "./routes";

const TheLayout = lazy(() => import("./components/TheLayout"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/layout/admin/maindashboard" />} />

          <Route
            path="/layout/*"
            element={
              <TheLayout />
            }
          >
            {routes.map(({ path, element: Element, role }) => (
              <Route
                key={path}
                path={path}
                element={
                  <Element />
                }
              />
            ))}
          </Route>

          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </QueryClientProvider>
  );
};
