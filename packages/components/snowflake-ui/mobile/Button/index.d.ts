import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary'| 'danger'; // Custom prop
}

export const Button: React.FC<ButtonProps>;