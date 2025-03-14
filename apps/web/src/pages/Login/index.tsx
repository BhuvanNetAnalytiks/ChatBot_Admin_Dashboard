import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "@shared/core";
import { InputField } from "@snowflake-ui/web";
import {
  ForgotPasswordContainer,
  LoginTitle,
  StyledImage,
  StyledInputWithLabel,
  StyledLoginBody,
  StyledLoginButton,
  StyledLoginContainer,
  StyledLoginForm,
  StyledLoginFormContainer,
  StyleFullWidthDiv,
} from "./login.style";
import { StyledLogo } from "@shared/core/styles/components.style";
import { initialRoutes } from "./../../routes";
import Loader from "../../components/Loader";
import { useForm } from "react-hook-form";
import { RegularExpressions } from "../../components/common";
import PramitiHRLogo from "../../../src/assets/PramitiHRLogo.svg";
import { checkAuth } from "@shared/core/services/auth/authService.web";

export const Login = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated, getUserRole, isLoading } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const values = getValues();

  const navigateToInitialPage = () => {
    const role = getUserRole() || "";
    const path = initialRoutes[role] || "/";
    navigate(`../${path}`, { replace: true });
  };

  const handleLogin = async (data: any) => {
    const { email, password } = data;
    setErrorMessage("");
    try {
      await login(email, password);
      navigateToInitialPage();
    } catch (error: any) {
      if (error?.message === "Network Error" || error?.response?.status === 0) {
        setErrorMessage("Unable to connect to the server. Please try again later.");
      } else {
        setErrorMessage("The email or Password you have entered is wrong");
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      checkAuth()
        .then((res: any) => {
          if (res?.auth) {
            navigateToInitialPage();
          }
        })
        .catch((error) => {
          console.error("Error checking authentication:", error);
        });
    }
  }, [isAuthenticated]);

  return (
    <>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <StyledLoginBody>
          <StyledImage />
          <StyledLoginContainer>
            <StyledLoginFormContainer>
              <StyledLogo src={PramitiHRLogo} alt="PramitiHR" />
              <StyledLoginForm>
                <StyleFullWidthDiv>
                  <LoginTitle>Login to your account</LoginTitle>
                </StyleFullWidthDiv>
                <StyledInputWithLabel>
                  <InputField
                    label={"Email"}
                    placeholder="Enter your email"
                    name={"email"}
                    value={values.email}
                    control={control}
                    rules={{
                      required: { value: true, message: "Email is required" },
                      pattern: {
                        value: RegularExpressions.email,
                        message: "Invalid email address",
                      },
                    }}
                  />
                </StyledInputWithLabel>

                <StyledInputWithLabel>
                  <InputField
                    label={"Password"}
                    placeholder="Enter password"
                    type="password"
                    value={values.password}
                    name={"password"}
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                    }}
                  />
                </StyledInputWithLabel>
                <ForgotPasswordContainer to={"#"}>
                  <span>Forgot Password ? </span>
                </ForgotPasswordContainer>

                <StyledLoginButton onClick={handleSubmit(handleLogin)}>
                  SIGN IN
                </StyledLoginButton>
              </StyledLoginForm>
            </StyledLoginFormContainer>
            {errorMessage && (
              <div
                style={{
                  backgroundColor: "#FEF1F1",
                  padding: "0.7rem",
                  marginTop: "1rem",
                  borderRadius: "0.5rem",
                }}
              >
                <span
                  style={{
                    color: "#991B1B",
                    fontWeight: "bold",
                    marginBottom: "20px",
                  }}
                >
                  Invalid credentials
                </span>
                <br />
                <span>The email or Password you have entered is wrong</span>
              </div>
            )}
          </StyledLoginContainer>
        </StyledLoginBody>
      )}
    </>
  );
};
