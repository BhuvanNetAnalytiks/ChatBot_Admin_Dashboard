// import styled, { css } from 'styled-components';
// import { InputProps } from './index.d'; // Change the import to match the new interface
// import { theme } from '../../../../shared/styles/theme';

// const validStyles = css`
//   border: 1px solid ${theme.border.colors.default};
//   &:hover {
//     border: 1px solid ${theme.border.colors.hover};
//   }
//   &:focus {
//     border: 1px solid ${theme.border.colors.focus};
//   }
// `;

// const invalidStyles = css`
//   border: 1px solid ${theme.border.colors.danger};
//   &:hover {
//     border: 1px solid ${theme.border.colors.dangerHover};
//   }
//   &:focus {
//     border: 1px solid ${theme.border.colors.dangerFocus};
//   }
// `;

// export const Input = styled.input<InputProps>`
//   padding: 5px 12px;
//   font-size: 16px;
//   font-weight: 300;
//   border-radius: 4px;
//   outline: none;
//   margin-top: 10px;
  
//   color: ${theme.colors.primary[700]};
//   ${({ isValid = true }) => (isValid ? validStyles : invalidStyles)}
//   height: 40px;
//   width: 100%; 
// `;
