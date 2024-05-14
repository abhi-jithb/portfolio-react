import React from "react";
import "./FooterStyles.css";
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <div className="footer" >
                <div className="footer-container">
                    <div className="left">
                        <div className="location">
                            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            <div>
                                <p>ABC House</p>
                                <p>India</p>
                            </div>
                        </div>

                        <div className="phone">
                            <h4> <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />

                                +91 790*****46</h4>

                        </div>

                        <div className="email">
                            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                abhisupport@gmail.com</h4>
                        </div>
                    </div>


                    <div className="right">
                        <h4>About My Company</h4>
                        <p>This is me Abhijith B. CEO of Break out. I love to motive people.</p>
                        <div className="social">
                          <Link to={"https://linkedin.com/abhijithb/"}>  <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} /></Link>
                            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                            <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />

                        </div>
                    </div>

                </div></div >
        </>
    )
}
export default Footer; 