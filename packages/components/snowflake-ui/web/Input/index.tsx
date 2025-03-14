import React from "react";
import styled, { css } from "styled-components";
import { InputProps } from "./index.d";
import { theme } from "../../../../shared/styles/theme";
import { Controller } from "react-hook-form";
import { Label } from "../Label";

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

export const Input = styled.input<InputProps>`
  font-size: 0.875rem;
  font-weight: 300;
  border-radius: 4px;
  outline: none;
  width: 100%;
  color: ${theme.colors.primary[700]};
  ${({ isValid = true }) => (isValid ? validStyles : invalidStyles)}
  &::placeholder {
    color: #9ca3af;
  }
`;

const ErrorMessage = styled.span`
  color: ${theme.border.colors.danger};
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

const InputIconGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

export function InputField({
  name,
  control,
  rules,
  onChange,
  onBlur,
  label,
  icon: Icon,
  ...rest
}: any) {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState }) => {
        return (
          <>
            {label && <Label>{label}</Label>}
            <InputIconGroup>
              {Icon && (
                <Icon
                  className={"input-icon"}
                  style={{
                    position: "absolute",
                    width: "1rem",
                    zIndex: 1,
                    marginLeft: "8px",
                  }}
                />
              )}
              <Input
                style={{
                  padding: Icon ? "6px 2rem" : "8px 10px",
                  position: "relative",
                }}
                {...rest}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                isValid={!!fieldState.error ? false : true}
              />
              {fieldState.error && fieldState.error.message && (
                <ErrorMessage>{fieldState.error.message}</ErrorMessage>
              )}
            </InputIconGroup>
          </>
        );
      }}
    />
  );
}
