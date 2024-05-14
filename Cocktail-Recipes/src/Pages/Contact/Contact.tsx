import React, { useState } from 'react';
import './ContactPage.css'; 
import contactImage from '../../assets/cocktail-photos/contact.jpg';
import FormField from './FormField'; 

const Contact: React.FC = () => {
  
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form Submitted:', { name, email, message });
    setSend(true)
    setTimeout(()=>{
      setSend(false)
    },6000)
    
  };

const [send,setSend] = useState<boolean>(false)

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
      {send ? <h1> thanks for your message</h1> : ""}
    </div>
  );
};

export default Contact;
