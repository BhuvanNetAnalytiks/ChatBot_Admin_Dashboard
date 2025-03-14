import React from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 40px);
`;

const Content: React.FC = () => {
  return (
    <Container>
      <React.Suspense fallback={<Loader isLoading={true} />}>
        <Outlet />
      </React.Suspense>
    </Container>
  );
};

export default Content;
