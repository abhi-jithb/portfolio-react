import "./ContactStyles.css"

import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send form data to the backend
        const formData = {
            name,
            email,
            subject,
            message
        };

        // Make an API call to send the form data to the backend
        // Replace 'apiEndpoint' with your actual backend API endpoint
        fetch('apiEndpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the backend
                console.log(data);
            })
            .catch(error => {
                // Handle any errors that occurred during the API call
                console.error(error);
            });
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Subject:</label>
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />

                <label>Message:</label>
                <textarea rows="6" placeholder="Please type your message here..." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
