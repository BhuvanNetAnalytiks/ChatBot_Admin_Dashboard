import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  height: 100vh;
`;

const Button = styled.button`
  background-color: #4285f4;
  color: white;
  margin-top: 20px;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #357ae8;
  }
`;

const Select = styled.select`
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
`;

const App: React.FC = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<{ fileId: string; name: string } | null>(null);
  const [department, setDepartment] = useState<string>("");

  const departments = ["IT", "FINANCE", "HR", "OTHERS"];

  useEffect(() => {
    const initializeGoogleAPI = () => {
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/api.js";
      script.onload = () => {
        window.gapi.load("client:picker", async () => {
          await window.gapi.client.init({
            apiKey: "AIzaSyD89-EbUP12CI0yUhhe6KPCTi0jBRznt6s",
            discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
          });
        });
      };
      document.body.appendChild(script);
    };

    initializeGoogleAPI();
  }, []);

  const authenticateUser = () => {
    const gisScript = document.createElement("script");
    gisScript.src = "https://accounts.google.com/gsi/client";
    gisScript.onload = () => {
      const tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: "82657460699-csrqm4jrd5a158rbi46gakct3rj2i7pj.apps.googleusercontent.com",
        scope: "https://www.googleapis.com/auth/drive",
        callback: (response) => {
          if (response.access_token) {
            setAccessToken(response.access_token);
          } else {
            console.error("Failed to get access token");
          }
        },
      });

      tokenClient.requestAccessToken();
    };
    document.body.appendChild(gisScript);
  };

  const openPicker = () => {
    if (!accessToken) {
      alert("You need to authenticate first!");
      return;
    }

    const picker = new window.google.picker.PickerBuilder()
      .addView(window.google.picker.ViewId.DOCS)
      .setOAuthToken(accessToken)
      .setDeveloperKey("AIzaSyD89-EbUP12CI0yUhhe6KPCTi0jBRznt6s")
      .setCallback((data: any) => {
        if (data.action === "picked" && data.docs.length > 0) {
          const file = data.docs[0];
          setSelectedFile({ fileId: file.id, name: file.name });
        }
      })
      .build();
    picker.setVisible(true);
  };

  const uploadToMilvus = async () => {
    if (!selectedFile || !department) {
      alert("Please select a file and a department!");
      return;
    }

    console.log("Access Token:", accessToken);

    try {
      const response = await fetch("http://localhost:5100/upload-gdrive-to-milvus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": accessToken ? `Bearer ${accessToken}` : '', // Ensure non-null
        },
        body: JSON.stringify({
          fileId: selectedFile.fileId,
          fileName: selectedFile.name,
          department,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error uploading to Milvus:", error);
    }
  };

  return (
    <AppContainer>
      <h1>Google Picker File Uploader</h1>
      <Button onClick={authenticateUser}>Authenticate</Button>
      <Button onClick={openPicker}>Pick a File</Button>
      {selectedFile && (
        <>
          <p>
            Selected File: <strong>{selectedFile.name}</strong>
          </p>
          <Select value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="" disabled>
              Select Department
            </option>
            {departments.map((dep) => (
              <option key={dep} value={dep}>
                {dep}
              </option>
            ))}
          </Select>
          <Button onClick={uploadToMilvus}>Upload to Milvus</Button>
        </>
      )}
    </AppContainer>
  );
};

export default App;
