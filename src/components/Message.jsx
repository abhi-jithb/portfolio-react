import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./MessageStyles.css";

const Message = () =>{
  return (
    <div className='message'>
      <div className='msg-container'>

       <div className='plus'>
        <Link to={"https://wa.me/message/GJL275RDKR3UF1"}>
             <FaWhatsapp size={50} style={{ color: "#fff", marginRight: "1rem" }} />   
        
         <div className="msg-btn">
         Let's chat !!!
        </div>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Message;
