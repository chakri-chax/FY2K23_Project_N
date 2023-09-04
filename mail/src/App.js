import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    name: 'Chax',
    email: 'lovachakravarthi@gmail.com',
    message: 'Hello from ReactJs'
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
     
    event.preventDefault();
console.log(formData);
    // Replace 'http://localhost:5000/send-email' with the actual backend API endpoint
    axios.post('http://localhost:3005/send-email', formData)
      .then((response) => {
        console.log('Email sent successfully!', response);
        // You can add additional logic here for showing a success message or resetting the form
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // You can add additional logic here for showing an error message or handling the error
      });
  };


  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </div>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}

export default App;
