// import "./ContactStyles.css"
// import React from 'react';
// const ContactForm = () => {
//     return (
//         <div className="form">
//             <form>
//                 <label>Name:</label>
//                 <input type="text" />
//                 <label>Email:</label>
//                 <input type="email" />
//                 <label>Subject:</label>
//                 <input type="text"/>
//                 <label>Message:</label>
//                 <textarea rows="6" placeholder="Please type your message here..."></textarea>
//                 <button className="btn" type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };
// export default ContactForm;


import "./ContactStyles.css";
import React from "react";

const ContactForm = () => {
    return (
        <div className="form">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfg2YH1llH-l_UGsBptptWUExWTJVYM1GnbrVAmRyTKMesQvw/viewform?embedded=true"
                width="100%"
                height="800px"
                frameBorder="0"
                title="Google Form"
                style={{
                    background: "#333",
                    border: "2px solid #336",
                    borderRadius: "10px",
                    color: "#fff",
                }}
            ></iframe>
        </div>
    );
};

export default ContactForm;
