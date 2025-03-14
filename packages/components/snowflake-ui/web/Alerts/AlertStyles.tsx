import styled from 'styled-components';

export const AlertContainer = styled.div<{ variant: string }>`
  padding: 16px;
  margin: 10px 0;
  border-radius: 4px;
  font-size: 14px;

  // Background color based on variant prop
  background-color: ${(props) =>
    props.variant === 'primary' ? '#007bff' :
    props.variant === 'secondary' ? '#6c757d' :
    props.variant === 'danger' ? '#FEF1F1' :
    props.variant === 'success' ? '#EDFCF2' :
    '#f8f9fa'};
  
  color: #fff;
`;


export const AlertMessage = styled.p<{ variant: string }>`
  margin: 0;
  font-weight:bold;
  color: ${(props) =>
    props.variant === 'success'
      ? '#991B1B'
      : props.variant === 'danger'
      ? '#991B1B'
      : props.variant === 'secondary'
      ? 'black'
      : 'navy'};
`;

