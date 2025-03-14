import React, { useState } from "react";
import styled from "styled-components";

interface MessageProps {
  success: boolean;
}

const Container = styled.div`
  padding: 20px;
  max-width: 500px;
  margin: auto;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.p<MessageProps>`
  margin-top: 10px;
  color: ${(props) => (props.success ? "green" : "red")};
`;

const App: React.FC = () => {
  const [integrationType, setIntegrationType] = useState("Jira");
  const [email, setEmail] = useState("");
  const [apiToken, setApiToken] = useState("");
  const [instanceUrl, setInstanceUrl] = useState("");  // State for the instance URL
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setMessage(""); // Clear any previous messages
    setSuccess(false);

    if (!email || !apiToken || !instanceUrl) {
      setMessage("Email, API token, and instance URL are required.");
      setSuccess(false);
      return;
    }

    try {
      // Authenticate
      const authResponse = await fetch("http://localhost:5104/api/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, apiToken, instanceUrl }),  // Send instance URL
      });

      const authData = await authResponse.json();

      if (authData.success) {
        // Save the data if authentication succeeds
        const saveResponse = await fetch("http://localhost:5104/api/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ integrationType, email, apiToken, instanceUrl }),  // Include instance URL
        });

        const saveData = await saveResponse.json();

        if (saveData.success) {
          setMessage("Integration saved successfully!");
          setSuccess(true);
        } else {
          setMessage(`Error saving integration: ${saveData.message}`);
          setSuccess(false);
        }
      } else {
        setMessage(`Authentication failed: ${authData.message}`);
        setSuccess(false);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
      setSuccess(false);
    }
  };

  return (
    <Container>
      <h2>Integration Setup</h2>
      <FormGroup>
        <Label>Integration Type</Label>
        <Select value={integrationType} onChange={(e) => setIntegrationType(e.target.value)}>
          <option value="Jira">Jira</option>
          <option value="ServiceNow" disabled>
            ServiceNow (Coming Soon)
          </option>
          <option value="Zendesk" disabled>
            Zendesk (Coming Soon)
          </option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </FormGroup>
      <FormGroup>
        <Label>API Token</Label>
        <Input
          type="password"
          value={apiToken}
          onChange={(e) => setApiToken(e.target.value)}
          placeholder="Enter your API token"
        />
      </FormGroup>
      <FormGroup>
        <Label>Instance URL</Label>
        <Input
          type="url"
          value={instanceUrl}
          onChange={(e) => setInstanceUrl(e.target.value)}
          placeholder="Enter the instance URL (e.g., https://your-jira-instance.atlassian.net)"
        />
      </FormGroup>
      <Button onClick={handleSubmit}>Authenticate and Submit</Button>
      {message && <Message success={success}>{message}</Message>}
    </Container>
  );
};

export default App;
