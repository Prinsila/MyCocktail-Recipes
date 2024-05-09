import React, { useState } from 'react';
import './ContactPage.css'; // Ensure the stylesheet is correctly linked
import contactImage from '../../assets/cocktail-photos/contact.jpg';
import FormField from './FormField'; // Ensure this component is properly implemented

const Contact: React.FC = () => {
  // State hooks for each form field
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form Submitted:', { name, email, message });
    // Here, you could also add API calls to send the data to a server
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <img className="contactImage" src={contactImage} alt="Contact Us" />
      <form onSubmit={handleSubmit}>
        <div className="field">
          <FormField 
            text="Name" 
            name="name" 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <FormField 
            text="E-mail" 
            name="email" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <FormField 
            text="Message" 
            name="message" 
            type="textarea" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
