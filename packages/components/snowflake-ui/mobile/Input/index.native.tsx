import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { InputProps } from './index.d';
import { theme } from '../../../../shared/styles/theme';

export const Input: React.FC<InputProps> = ({ isValid = true, style, ...props }) => {
  const inputStyles = [
    styles.input,
    isValid ? styles.valid : styles.invalid,
    style,
  ];

  return <TextInput style={inputStyles} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    padding: 8,
    fontSize: 20,
    fontWeight: '300',
    borderRadius: 4,
    color: theme.colors.primary[700],
    borderWidth: 1,
  },
  valid: {
    borderColor: theme.border.colors.default,
  },
  invalid: {
    borderColor: theme.border.colors.danger,
  },
});
