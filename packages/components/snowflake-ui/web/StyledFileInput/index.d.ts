import React, { ChangeEvent } from "react";

export interface FileInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
}

export interface ContainerProps {
  $hasError: boolean;
  $isDragActive: boolean;
}

export const StyledFileInput: React.FC<FileInputProps>;