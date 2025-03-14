import React from "react";
import styled, { css } from "styled-components";
import { Controller } from "react-hook-form";
import { theme } from "@shared/core/styles/theme";
import { ChevronDown } from "lucide-react";

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;

const validStyles = css`
  border: 1px solid ${theme.border.colors.default};
  &:hover {
    border: 1px solid ${theme.border.colors.hover};
  }
  &:focus {
    border: 1px solid ${theme.border.colors.focus};
  }
`;

const invalidStyles = css`
  border: 1px solid ${theme.border.colors.danger};
  &:hover {
    border: 1px solid ${theme.border.colors.dangerHover};
  }
  &:focus {
    border: 1px solid ${theme.border.colors.dangerFocus};
  }
`;

const Select = styled.select<{ isValid: boolean }>`
  font-size: 0.875rem;
  font-weight: 300;
  outline: none;
  width: 100%;
  color: ${theme.colors.primary[700]};
  ${({ isValid }) => (isValid ? validStyles : invalidStyles)}
  appearance: none;
  background-color: white;
  padding: 0.625rem 0.75rem 0.625rem 0.75rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  position: relative;
`;

const ErrorMessage = styled.span`
  color: ${theme.border.colors.danger};
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  pointer-events: none;
`;

interface DropdownFieldProps {
  name: string;
  control: any;
  label?: string;
  options: { value: string | number; label: string }[];
  rules?: any;
  icon?: React.ReactNode;
  optionName?: string;
}

export function DropdownField({
  name,
  control,
  rules,
  label,
  options,
  optionName,
}: DropdownFieldProps) {
  
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState }) => {
        return (
          <DropdownWrapper>
            {label && <Label>{label}</Label>}
            <div style={{ position: "relative" }}>
              <Select
                onBlur={onBlur}
                onChange={(e) => onChange(e.target.value)}
                value={value}
                isValid={!!fieldState.error ? false : true}
              >
                <option value="" disabled>
                 {optionName ? optionName : 'Select an option'}
                </option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
              <IconWrapper>
                <ChevronDown size={16} color={theme.colors.primary[700]} />
              </IconWrapper>
            </div>
            {fieldState.error && fieldState.error.message && (
              <ErrorMessage>{fieldState.error.message}</ErrorMessage>
            )}
          </DropdownWrapper>
        );
      }}
    />
  );
}
