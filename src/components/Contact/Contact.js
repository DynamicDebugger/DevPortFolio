import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';
import { colors } from '../../styles/CommonStyles';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../../config/emailjs';

const ContactSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.darkMode ? colors.darkBg : colors.lightBg};
  transition: all 0.3s ease;
  padding: 2rem;
`;

const ContactForm = styled.div`
  background: ${props => props.darkMode ? colors.darkSecondary : colors.gray900};
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Title = styled.h3`
  text-align: center;
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${props => props.darkMode ? colors.textLight : colors.textDark};
`;

const Subtitle = styled.p`
  text-align: center;
  color: ${props => props.darkMode ? colors.textLight : colors.textDark};
  margin-bottom: 1rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  color: ${colors.primary};
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  color: ${props => props.darkMode ? colors.textLight : '#1f2937'};
  background: ${props => props.darkMode ? colors.gray800 : 'white'};
  border-radius: 0.5rem;
  border: 1px solid ${props => props.darkMode ? colors.gray600 : '#ccc'};
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem 0.75rem;
  color: ${props => props.darkMode ? colors.textLight : '#1f2937'};
  background: ${props => props.darkMode ? colors.gray800 : 'white'};
  border-radius: 0.5rem;
  border: 1px solid ${props => props.darkMode ? colors.gray600 : '#ccc'};
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.primary};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: ${colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.secondary};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const sendMail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.phone,
          message: formData.message,
          to_name: "Balasubramani Elamurugan",
        },
        emailjsConfig.publicKey
      );

      alert("Message sent successfully!");
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="connect" darkMode={darkMode}>
      <ContactForm darkMode={darkMode}>
        <Title darkMode={darkMode}>Connect via Email</Title>

        <form onSubmit={sendMail}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              darkMode={darkMode}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              darkMode={darkMode}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              minLength="10"
              maxLength="12"
              required
              darkMode={darkMode}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              darkMode={darkMode}
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
        </form>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact; 