import React, { useState } from 'react';
import axios from 'axios';

const Mail = () => {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    body: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/send-mail', emailData);
      console.log('Email sent!', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div>
      <h1>Send Email</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>To:</label>
          <input type="text" name="to" value={emailData.to} onChange={handleChange} />
        </div>
        <div>
          <label>Subject:</label>
          <input type="text" name="subject" value={emailData.subject} onChange={handleChange} />
        </div>
        <div>
          <label>Body:</label>
          <textarea name="body" value={emailData.body} onChange={handleChange} />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Mail;
