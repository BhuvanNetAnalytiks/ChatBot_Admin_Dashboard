import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.div`
  margin-top: 1rem;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 4px;
  color: #fff;
  text-align: center;

  &.success {
    background-color: #28a745;
  }

  &.error {
    background-color: #dc3545;
  }
`;

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    smtpEmail: "",
    smtpPassword: "",
    smtpServer: "",
    portNumber: "",
  });
  const [isVerified, setIsVerified] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleVerifySMTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    try {
      const response = await fetch("http://localhost:5104/api/verify-smtp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        setIsVerified(true);
      }
      setMessage({ type: result.success ? "success" : "error", text: result.message });
    } catch (error) {
      setMessage({ type: "error", text: "Failed to verify SMTP credentials." });
    }
  };

  const handleSaveEmail = async () => {
    setMessage(null);

    try {
      const response = await fetch("http://localhost:5104/api/save-smtp-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setMessage({ type: result.success ? "success" : "error", text: result.message });
    } catch (error) {
      setMessage({ type: "error", text: "Failed to save SMTP credentials." });
    }
  };

  return (
    <Container>
      <h1>SMTP Credential Manager</h1>

      <Form onSubmit={handleVerifySMTP}>
        <h2>Verify and Save SMTP Credentials</h2>
        <Input
          type="email"
          name="smtpEmail"
          placeholder="SMTP Email"
          value={formData.smtpEmail}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="smtpPassword"
          placeholder="SMTP Password"
          value={formData.smtpPassword}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="smtpServer"
          placeholder="SMTP Server"
          value={formData.smtpServer}
          onChange={handleChange}
          required
        />
        <Input
          type="number"
          name="portNumber"
          placeholder="Port Number (e.g., 587)"
          value={formData.portNumber}
          onChange={handleChange}
          required
        />
        {!isVerified ? (
          <Button type="submit">Verify SMTP</Button>
        ) : (
          <Button type="button" onClick={handleSaveEmail}>
            Save Credentials
          </Button>
        )}
      </Form>

      {message && <Message className={message.type}>{message.text}</Message>}
    </Container>
  );
};

export default App;
