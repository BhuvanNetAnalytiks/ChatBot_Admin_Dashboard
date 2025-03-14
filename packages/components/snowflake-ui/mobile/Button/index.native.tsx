import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Pressable, Text } from 'react-native';
import { ButtonProps } from './index.d';
import { theme } from '../../../../shared/styles/theme';

// Define variant styles for React Native
const variantStyles = {
  primary: {
    background: theme.colors.primary[500],
    color: theme.font.colors.white,
    active: theme.colors.primary[700],
  },
  secondary: {
    background: theme.colors.secondary[500],
    color: theme.font.colors.primary,
    active: theme.colors.secondary[700],
  },
  danger: {
    background: theme.colors.danger[500],
    color: theme.font.colors.white,
    active: theme.colors.danger[700],
  },
};

// Styled Pressable for Button
const StyledPressable = styled(Pressable)<{ backgroundColor: string }>`
  padding: 12px 28px;
  border-radius: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  justify-content: center;
  align-items: center;
`;

const StyledText = styled(Text)<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 16px;
`;

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const [isPressed, setIsPressed] = useState(false);

  const backgroundColor = isPressed
    ? variantStyles[variant].active
    : variantStyles[variant].background;

  return (
    <StyledPressable
      backgroundColor={backgroundColor}
      onPressIn={() => setIsPressed(true)}  // Set active color on press
      onPressOut={() => setIsPressed(false)} // Revert to default color after press
      android_ripple={{ color: variantStyles[variant].active }}
      {...props}
    >
      <StyledText color={variantStyles[variant].color}>{children}</StyledText>
    </StyledPressable>
  );
};
