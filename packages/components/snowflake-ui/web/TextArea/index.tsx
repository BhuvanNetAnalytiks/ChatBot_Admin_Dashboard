import styled, { css } from "styled-components";
import React from "react";
import { TextareaProps } from "./index.d";
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
  border: 1px solid #d3d3d3;
  &:hover {
    border: 1px solid #d3d3d3;
  }
  &:focus {
    border: 1px solid #d3d3d3;
  }
`;

export const Textarea = styled.textarea<TextareaProps>`
  font-size: 0.875rem;
  font-weight: 300;
  border-radius: 4px;
  border: 1px solid #DCDBDD;
  outline: none;
  width: 100%;
  height: 5rem;
  color: ${theme.colors.primary[700]};
  ${({ isValid = true }) => (isValid ? validStyles : invalidStyles)}
  &::placeholder {
    color: #9ca3af;
  }
`;

const InputIconGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

const ErrorMessage = styled.span`
  color: ${theme.border.colors.danger};
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

export function TextareaField({
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
              <Textarea
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

export default TextareaField;
