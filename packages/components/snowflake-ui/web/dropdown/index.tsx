import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './index.d';
import { theme } from '../../../../shared/styles/theme'; 

export const CustomDropdown: React.FC<DropdownProps> = ({ label, options, value, onChange }) => {
  return (
    <DropdownContainer>
      <Label>{label}</Label>
      <Dropdown
        value={value}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Dropdown>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 14px;
  color: ${theme.colors.primary[500]};
`;

const Dropdown = styled.select`
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 300;
  border-radius: 4px;
  outline: none;
  border: 1px solid ${theme.border.colors.default};
  color: ${theme.colors.primary[700]};
  width: 40%;
  &:hover {
    border-color: ${theme.border.colors.hover};
  }
  &:focus {
    border-color: ${theme.border.colors.focus};
  }
`;

