
"use client"
import React, { useState } from 'react';
export default function ContactForm(){
    
    
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          message: '',
          subject:''
        });
      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            const response = await fetch('/api/send-email', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
            if (response.ok) {
              console.log('Email sent successfully!');
            } else {
              console.error('Failed to send email.');
            }
          } catch (error) {
            console.error('Error:', error);
          }
        // console.log(formData);
        };
    return(
        <div>
           <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
      <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea>
      <textarea name="subject" placeholder="Your subject" onChange={handleChange}></textarea>
      <button type="submit">Submit</button>
    </form>
        </div>
    )
}


