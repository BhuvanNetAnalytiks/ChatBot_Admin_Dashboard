import React from 'react';
import { AlertContainer, AlertMessage } from './AlertStyles'; 

interface AlertBoxProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'success'; 
  message: string;
  [key: string]: any; 
}

export const AlertBox: React.FC<AlertBoxProps> = ({ variant = 'primary', message, ...props }) => {
  return (
    <>
    <AlertContainer variant={variant} {...props}>
      <AlertMessage>{message}</AlertMessage>
    </AlertContainer>
    </>
  );
};
