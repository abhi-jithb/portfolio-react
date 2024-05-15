import React, { useState } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import "./ContactStyles.css"

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const doc = new GoogleSpreadsheet('1l6sHTQfM2w6Fn6jzb8kz5CB3l9fIJZDnK2vzfA8duBA');
        doc.useApiKey('AIzaSyADaQa9e9myzPnAGR8KC4mNThIuOiLkboA');

        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];

        await sheet.addRow({ Name: name, Email: email, Subject: subject, Message: message });

        console.log('Data added to Google Sheets successfully!');
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
