import React from "react";
import "./FooterStyles.css";
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className="footer" >
                <div className="footer-container">
                    <div className="left">
                        <div className="location">
                            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            <div>
                                <p>123 House </p>
                                <p>India</p>
                            </div>
                        </div>

                        <div className="phone">
                            <h4> <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />

                                1234567890</h4>

                        </div>

                        <div className="email">
                            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                support@gmail.com</h4>
                        </div>
                    </div>


                    <div className="right">
                        <h4>About My Company</h4>
                        <p>This is me Abhijith B. CEO of Wake Up. I love to motive people.</p>
                        <div className="social">
                            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                            <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />

                        </div>
                    </div>

                </div></div >
        </>
    )
}
export default Footer; 