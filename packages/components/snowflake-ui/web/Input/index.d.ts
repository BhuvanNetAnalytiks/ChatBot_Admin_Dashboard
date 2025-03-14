import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;
}

export const Input: React.FC<InputProps>;