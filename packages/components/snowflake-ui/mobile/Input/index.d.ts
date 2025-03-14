import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  isValid?: boolean;
}
export const Input: React.FC<InputProps>;