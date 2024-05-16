import "./ContactStyles.css"

import React from 'react';

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text"} />

                <label>Email:</label>
                <input type="email" />

                <label>Subject:</label>
                <input type="text"/>

                <label>Message:</label>
                <textarea rows="6" placeholder="Please type your message here..."}></textarea>

                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
