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
      <p>Welcome to our vibrant mixer's community at Cocktail Connoisseur. Whether you have a question, 
        feedback, or just want to share your unique cocktail creation, we're here to listen and engage. 
        Our community thrives on your contributions and insights, and we're eager to hear from you.
        Use the form below to drop us a message—be it a query about a specific recipe, suggestions for our site,
        or your own personal mixology experiences. We promise to stir up a conversation and get back to you as soon as we can. 
        Let's blend some ideas and keep the spirits high! </p>
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
