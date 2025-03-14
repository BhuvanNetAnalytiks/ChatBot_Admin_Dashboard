import React from "react";
import styled from "styled-components";
import { LabelProps } from "./index.d";
import { theme } from "@shared/core/styles/theme";

export const StyledSpan = styled.span<LabelProps>`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  color: ${theme.font.colors.primary};
`

export const Label: React.FC<LabelProps> = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};
