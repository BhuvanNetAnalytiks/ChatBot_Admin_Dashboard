import styled from "styled-components";
import { theme } from "@shared/core/styles";
import { Button } from "@snowflake-ui/web";
import loginBg from "../../assets/login_bg.svg"
import { Link } from "react-router-dom";

export const StyledLoginBody = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  ${theme.breakpoints.up('md')} {
    flex-direction: row;
    height: 85vh;
  }
`;

export const ForgotPasswordContainer = styled(Link)`
  width: 100%;
  text-align: right;
  cursor: pointer;
  text-decoration: none;
  color: ${theme.colors.primary}
`

export const StyledLoginContainer = styled.div`
  width: 20rem;
  border-radius: 3%;
  padding: 2rem;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const StyledLoginFormContainer = styled.div`
  display: flex;
  gap: 56px;
  flex-direction: column;
  align-items: center;
`;

export const StyledLoginForm = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`;

export const StyledInputWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
`;

export const StyleFullWidthDiv = styled.div`
  width: 100%;
  align-self: stretch;
`;

export const LoginTitle = styled.span`
  font-size: ${theme.font.fontSize.xl};
  font-weight: ${theme.font.fontWeight.bold};
  line-height: 23.44px;
  text-align: left;
`

export const StyledLoginButton = styled(Button)`
  width: 100%;
  &:hover {
    transform: scale(0.98);
  }
  transition: transform 0.2s;
`;

export const StyledImage = styled.div`
  background-image: url(${loginBg});
  background-repeat: no-repeat;
  background-size: 22rem;
  width: 25rem;
  height: 25rem;
  background-position: center;
`;
