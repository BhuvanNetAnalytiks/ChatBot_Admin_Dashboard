import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './index.d';
import { theme } from '@shared/core/styles/theme';

const variantStyles = {
  primary: {
    background: theme.colors.primary[500],
    color: theme.font.colors.white,
    hover: theme.colors.primary[600],
    active: theme.colors.primary[600],
  },
  secondary: {
    background: theme.colors.secondary[500],
    color: theme.font.colors.primary,
    hover: theme.colors.secondary[600],
    active: theme.colors.secondary[600],
  },
  danger: {
    background: theme.colors.danger[500],
    color: theme.font.colors.white,
    hover: theme.colors.danger[600],
    active: theme.colors.danger[600],
  },
};

export const StyledButton = styled.button<ButtonProps>`
  padding: 8px 28px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  background-color: ${({ variant = 'primary' }) => variantStyles[variant].background};
  color: ${({ variant = 'primary' }) => variantStyles[variant].color};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ variant = 'primary' }) => variantStyles[variant].hover};
  }

  &:active {
    background-color: ${({ variant = 'primary' }) => variantStyles[variant].active};
  }

  &:focus-visible {
    border: 2px solid #0ea5e9;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};
