import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  color: #333;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Message = styled.p`
  font-size: 24px;
  margin-bottom: 32px;
`;

const HomeLink = styled.a`
  padding: 12px 20px;
  background-color: #6200ea;
  color: white;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: #5a00c4;
  }
`;

const NotFound: React.FC = () => {
  return (
    <Container>
      <Title>404</Title>
      <Message>Page Not Found</Message>
      <HomeLink href="/layout">Go to Home</HomeLink>
    </Container>
  );
};

export default NotFound;
