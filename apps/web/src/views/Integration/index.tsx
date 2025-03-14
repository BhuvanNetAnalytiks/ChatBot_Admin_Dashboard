import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  color: black;
  border-radius: 10px;
  border: 1px solid #f0f1f6;
  margin: 0.5rem 0;
  background-color: #f6f7fb;
  cursor: pointer;
  font-size: 18px;
  transition: padding-left 0.3s ease, color 0.3s ease, transform 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: #0056b3;
    transform: scale(1.05);
    padding-left: 1.5rem;
  }

  &:active {
    transform: scale(0.95);
  }
`;


const IntegrationSection: React.FC = () => {
    const navigate = useNavigate();

    const handleSharedEmailConfig = () => {
        console.log("Enter Shared Email Configurations clicked");
        navigate("/layout/integration/sharedemailconfigueartion");
    };

    const handleTicketingSystemConfig = () => {
        console.log("Select Ticketing System clicked");
        navigate("/layout/integration/ticketingsystem");
    };
    const handleSmtpConfigueration = () => {
        console.log("Configure SMTP clicked");
        navigate("/layout/integration/smtp");
    };

    return (
        <Container>
            <Heading>Integration Section</Heading>
            <Description>Welcome to the section on integration. Please select what you wish to incorporate.</Description>
            <ButtonContainer>
                <Button onClick={handleSharedEmailConfig}>Enter Shared Email Configurations</Button>
                <Button onClick={handleTicketingSystemConfig}>Select Ticketing System</Button>
                <Button onClick={handleSmtpConfigueration}>Enter SMTP Configueration</Button>
            </ButtonContainer>
        </Container>
    );
};

export default IntegrationSection;
