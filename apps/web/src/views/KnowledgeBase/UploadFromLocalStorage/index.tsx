import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Select = styled.select`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const FileInputLabel = styled.label`
  padding: 0.8rem;
  background-color: #f8f9fa;
  border: 1px dashed #ddd;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  
  &:hover {
    background-color: #e9ecef;
  }
`;

const UploadButton = styled.button`
  padding: 0.8rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.div<{ isError?: boolean }>`
  text-align: center;
  color: ${props => props.isError ? '#dc3545' : '#28a745'};
  margin-top: 1rem;
`;

const FileName = styled.div`
  margin-top: 0.5rem;
  color: #666;
  font-size: 0.9rem;
`;

const AcceptedFormats = styled.div`
  text-align: center;
  color: #666;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

interface UploadComponentProps {
  apiUrl?: string;
}

const UploadComponent: React.FC<UploadComponentProps> = ({ apiUrl = 'http://127.0.0.1:5100/api/upload' }) => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [status, setStatus] = useState<{ message: string; isError: boolean } | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const departments = ['IT', 'FINANCE', 'HR', 'OTHERS'];
  const acceptedFormats = ".pdf,.docx";

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    setStatus(null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!selectedFile || !selectedDepartment) {
      setStatus({
        message: 'Please select both a department and a file',
        isError: true
      });
      return;
    }

    setIsUploading(true);
    setStatus(null);

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('department', selectedDepartment);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          message: data.message || 'File uploaded successfully!',
          isError: false
        });
        setSelectedFile(null);
        // Reset the file input
        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        throw new Error(data.error || 'Upload failed');
      }
    } catch (error) {
      setStatus({
        message: error instanceof Error ? error.message : 'Upload failed',
        isError: true
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Container>
      <Title>Upload Document from Local Storage</Title>
      <Form onSubmit={handleSubmit}>
        <Select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          required
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </Select>

        <div>
          <FileInputLabel>
            <FileInput
              type="file"
              onChange={handleFileChange}
              accept={acceptedFormats}
            />
            {selectedFile ? 'Change File' : 'Choose Files'}
          </FileInputLabel>
          <AcceptedFormats>
            Accepted formats: PDF
          </AcceptedFormats>
        </div>
        
        {selectedFile && (
          <FileName>Selected file: {selectedFile.name}</FileName>
        )}

        <UploadButton 
          type="submit" 
          disabled={isUploading || !selectedFile || !selectedDepartment}
        >
          {isUploading ? 'Uploading...' : 'Upload'}
        </UploadButton>

        {status && (
          <StatusMessage isError={status.isError}>
            {status.message}
          </StatusMessage>
        )}
      </Form>
    </Container>
  );
};

export default UploadComponent;