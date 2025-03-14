import styled, { css } from 'styled-components';
import React from 'react';
import { theme } from '../../../../shared/styles/theme'; 
import { DateInputProps } from './index.d';

const validStyles = css`
  border: 1px solid ${theme.border.colors.default};
  &:hover {
    border: 1px solid ${theme.border.colors.hover};
  }
  &:focus {
    border: 1px solid ${theme.border.colors.focus};
  }
`;

const invalidStyles = css`
  border: 1px solid ${theme.border.colors.danger};
  &:hover {
    border: 1px solid ${theme.border.colors.dangerHover};
  }
  &:focus {
    border: 1px solid ${theme.border.colors.dangerFocus};
  }
`;

const Container = styled.div`
  position: relative;
  margin-top: 10px;
  width: 100%;
`;

const DateInputStyled = styled.input.attrs({ type: 'date' })<{ isValid?: boolean }>`
  padding: 4px;
  font-size: 14px;
  font-weight: 300;
  border-radius: 4px;
  outline: none;
  width: 40%;
  height: 40px; // Set the height
  color: ${theme.colors.primary[700]};
  ${({ isValid = true }) => (isValid ? validStyles : invalidStyles)}
`;

const Icon = styled.span`
  position: absolute;
  left: 12px; // Position from the left for the icon
  top: 50%;
  transform: translateY(-50%); // Center the icon vertically
  pointer-events: none; // Make sure the icon doesn't interfere with input interaction
`;

export const DateInput: React.FC<DateInputProps> = ({ icon, isValid = true, ...props }) => {
  return (
    <Container>
      {icon && <Icon>{icon}</Icon>} 
      <DateInputStyled isValid={isValid} {...props} /> 
    </Container>
  );
};
