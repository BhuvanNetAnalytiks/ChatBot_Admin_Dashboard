// import React, { useState } from "react";
// import styled from "styled-components";

// // Styled components
// const Container = styled.div`
//   max-width: 600px;
//   margin: 2rem auto;
//   padding: 2rem;
//   border-radius: 8px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h1`
//   text-align: center;
//   color: #333;
//   margin-bottom: 2rem;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
// `;

// const Select = styled.select`
//   padding: 0.8rem;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   font-size: 1rem;
//   width: 100%;
  
//   &:focus {
//     outline: none;
//     border-color: #007bff;
//   }
// `;

// const FileInput = styled.input`
//   display: none;
// `;

// const FileInputLabel = styled.label`
//   padding: 0.8rem;
//   background-color: #f8f9fa;
//   border: 1px dashed #ddd;
//   border-radius: 4px;
//   text-align: center;
//   cursor: pointer;
  
//   &:hover {
//     background-color: #e9ecef;
//   }
// `;

// const UploadButton = styled.button`
//   padding: 0.8rem;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   font-size: 1rem;
//   cursor: pointer;
  
//   &:hover {
//     background-color: #0056b3;
//   }
  
//   &:disabled {
//     background-color: #ccc;
//     cursor: not-allowed;
//   }
// `;

// const StatusMessage = styled.div<{ isError?: boolean }>`
//   text-align: center;
//   color: ${props => props.isError ? '#dc3545' : '#28a745'};
//   margin-top: 1rem;
// `;

// const FileName = styled.div`
//   margin-top: 0.5rem;
//   color: #666;
//   font-size: 0.9rem;
// `;

// const AcceptedFormats = styled.div`
//   text-align: center;
//   color: #666;
//   font-size: 0.8rem;
//   margin-top: 0.5rem;
// `;

// interface UploadComponentProps {
//   apiUrl?: string;
// }

// const UploadComponent: React.FC<UploadComponentProps> = ({ apiUrl = 'http://127.0.0.1:5100/api/upload' }) => {
//   const [selectedDepartment, setSelectedDepartment] = useState<string>('');
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [status, setStatus] = useState<{ message: string; isError: boolean } | null>(null);
//   const [isUploading, setIsUploading] = useState<boolean>(false);

//   const departments = ['IT', 'FINANCE', 'HR', 'OTHERS'];
//   const acceptedFormats = ".pdf,.docx.jpg,.png,.jpeg";

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0] || null;
//     setSelectedFile(file);
//     setStatus(null);
//   };

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
    
//     if (!selectedFile || !selectedDepartment) {
//       setStatus({
//         message: 'Please select both a department and a file',
//         isError: true
//       });
//       return;
//     }

//     setIsUploading(true);
//     setStatus(null);

//     const formData = new FormData();
//     formData.append('file', selectedFile);
//     formData.append('department', selectedDepartment);

//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setStatus({
//           message: data.message || 'File uploaded successfully!',
//           isError: false
//         });
//         setSelectedFile(null);
//         // Reset the file input
//         const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
//         if (fileInput) fileInput.value = '';
//       } else {
//         throw new Error(data.error || 'Upload failed');
//       }
//     } catch (error) {
//       setStatus({
//         message: error instanceof Error ? error.message : 'Upload failed',
//         isError: true
//       });
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   return (
//     <Container>
//       <Title>Upload Document from Local Storage</Title>
//       <Form onSubmit={handleSubmit}>
//         <Select
//           value={selectedDepartment}
//           onChange={(e) => setSelectedDepartment(e.target.value)}
//           required
//         >
//           <option value="">Select Department</option>
//           {departments.map((dept) => (
//             <option key={dept} value={dept}>
//               {dept}
//             </option>
//           ))}
//         </Select>

//         <div>
//           <FileInputLabel>
//             <FileInput
//               type="file"
//               onChange={handleFileChange}
//               accept={acceptedFormats}
//             />
//             {selectedFile ? 'Change File' : 'Choose Files'}
//           </FileInputLabel>
//           <AcceptedFormats>
//             Accepted formats: PDF 
//           </AcceptedFormats>
//         </div>
        
//         {selectedFile && (
//           <FileName>Selected file: {selectedFile.name}</FileName>
//         )}

//         <UploadButton 
//           type="submit" 
//           disabled={isUploading || !selectedFile || !selectedDepartment}
//         >
//           {isUploading ? 'Uploading...' : 'Upload'}
//         </UploadButton>

//         {status && (
//           <StatusMessage isError={status.isError}>
//             {status.message}
//           </StatusMessage>
//         )}
//       </Form>
//     </Container>
//   );
// };

// export default UploadComponent;

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

const UploadTypeToggle = styled.div`
  display: flex;
  margin-bottom: 1rem;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #ddd;
`;

const ToggleButton = styled.button<{ isActive: boolean }>`
  flex: 1;
  padding: 0.8rem;
  background-color: ${props => props.isActive ? '#007bff' : '#f8f9fa'};
  color: ${props => props.isActive ? 'white' : '#333'};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.isActive ? '#0056b3' : '#e9ecef'};
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

const FilesList = styled.div`
  margin-top: 0.5rem;
  max-height: 150px;
  overflow-y: auto;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 0.5rem;
`;

const FileItem = styled.div`
  color: #666;
  font-size: 0.9rem;
  padding: 0.3rem 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
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
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [status, setStatus] = useState<{ message: string; isError: boolean } | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadType, setUploadType] = useState<'file' | 'folder'>('file');

  const departments = ['IT', 'FINANCE', 'HR', 'OTHERS'];
  const acceptedFormats = ".pdf,.docx,.jpg,.png,.jpeg";

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setSelectedFiles(files);
    setStatus(null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!selectedFiles || selectedFiles.length === 0 || !selectedDepartment) {
      setStatus({
        message: 'Please select both a department and file(s)',
        isError: true
      });
      return;
    }

    setIsUploading(true);
    setStatus(null);

    const formData = new FormData();
    
    // Append all files to the FormData
    Array.from(selectedFiles).forEach((file) => {
      formData.append('files', file);
    });
    
    formData.append('department', selectedDepartment);
    formData.append('uploadType', uploadType);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          message: data.message || `${selectedFiles.length} file(s) uploaded successfully!`,
          isError: false
        });
        setSelectedFiles(null);
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

  const renderFilesList = () => {
    if (!selectedFiles || selectedFiles.length === 0) return null;
    
    const fileList = Array.from(selectedFiles);
    return (
      <FilesList>
        {fileList.map((file, index) => (
          <FileItem key={index}>
            {file.name} ({(file.size / 1024).toFixed(1)} KB)
          </FileItem>
        ))}
      </FilesList>
    );
  };

  return (
    <Container>
      <Title>Upload Documents from Local Storage</Title>
      <Form onSubmit={handleSubmit}>
        <UploadTypeToggle>
          <ToggleButton 
            type="button"
            isActive={uploadType === 'file'} 
            onClick={() => setUploadType('file')}
          >
            Single File
          </ToggleButton>
          <ToggleButton 
            type="button"
            isActive={uploadType === 'folder'} 
            onClick={() => setUploadType('folder')}
          >
            Folder
          </ToggleButton>
        </UploadTypeToggle>

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
              accept={uploadType === 'file' ? acceptedFormats : undefined}
              multiple={true}
              {...(uploadType === 'folder' ? { webkitdirectory: "", directory: "" } : {})}
            />
            {uploadType === 'folder' ? 'Choose Folder' : 'Choose Files'}
          </FileInputLabel>
          <AcceptedFormats>
            {uploadType === 'file' 
              ? 'Accepted formats: PDF, DOCX, JPG, PNG, JPEG' 
              : 'Select an entire folder to upload'}
          </AcceptedFormats>
        </div>
        
        {selectedFiles && selectedFiles.length > 0 && (
          <>
            <div>Selected: {selectedFiles.length} file(s)</div>
            {renderFilesList()}
          </>
        )}

        <UploadButton 
          type="submit" 
          disabled={isUploading || !selectedFiles || selectedFiles.length === 0 || !selectedDepartment}
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