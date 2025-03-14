import React, { useState, ChangeEvent, DragEvent } from "react";
import styled from "styled-components";
import { ContainerProps, FileInputProps } from "./index.d";
import { Upload } from "lucide-react";

const Container = styled.div`
  width: 100%;
`;

const InputContainer = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  border: 1px solid
    ${({ $hasError, $isDragActive }) =>
      $hasError ? "#ef4444" : $isDragActive ? "#3b82f6" : "#cbd5e1"};
  border-radius: 4px;
  transition: all 0.2s ease;
  background-color: ${({ $isDragActive }) =>
    $isDragActive ? "#eff6ff" : "transparent"};
`;

const HiddenInput = styled.input`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0.6rem;
`;

const Text = styled.span`
  font-size: 12px;
  color: #64748b;
`;

const FileName = styled.span`
  font-size: 12px;
  color: #1f2937;
  margin-left: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ErrorMessage = styled.div`
  margin-top: 4px;
  font-size: 14px;
  color: #ef4444;
`;

export const StyledFileInputField: React.FC<FileInputProps> = ({
  onChange,
  accept = "image/*",
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<string>("");

  const MAX_FILE_SIZE = 200 * 1024;

  const validateAndHandleFile = (file: File): boolean => {
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        setError(
          `File size exceeds 200KB. Current size: ${(file.size / 1024).toFixed(
            2
          )}KB`
        );
        setSelectedFile("");
        return false;
      }
      setError("");
      setSelectedFile(file.name);
      return true;
    }
    setSelectedFile("");
    return false;
  };

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && validateAndHandleFile(file)) {
      onChange(e);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      if (validateAndHandleFile(file)) {
        const fileList = new DataTransfer();
        fileList.items.add(file);
        const newEvent = {
          target: {
            files: fileList.files,
          },
        } as ChangeEvent<HTMLInputElement>;
        onChange(newEvent);
      }
    }
  };

  return (
    <Container>
      <InputContainer
        $hasError={!!error}
        $isDragActive={dragActive}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <HiddenInput type="file" onChange={handleChange} accept={accept} />
        <TextContainer>
          {selectedFile ? (
            <FileName>{selectedFile}</FileName>
          ) : (
            <Text>Logo size less than 200KB</Text>
          )}
          <Upload size={15}/>
        </TextContainer>
      </InputContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
