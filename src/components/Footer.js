import React from "react";
import "./FooterStyles.css";
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="left">
                        <div className="location">
                            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            <div>
                                <p></p>
                                <p>India</p>
                            </div>
                        </div>

                        <div className="phone">
                            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                +91 790*****46</h4>
                        </div>

                        <div className="email">
                            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                freelancewithabhijith@gmail.com</h4>
                        </div>
                    </div>

                    <div className="right">
                        <h4>About me</h4>
                        <p>I'm Abhijith B. Freelancer. I love creating responsive websites and full-stack web apps.</p>
                        <div className="social">
                            <Link to={"https://linkedin.com/abhi-jithb/"}><FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} /></Link>
                            <Link to={"https://github.com/abhi-jithb/"}><FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} /></Link>
                            <Link to={"https://wa.me/message/GJL275RDKR3UF1"}><FaWhatsapp size={30} style={{ color: "#fff", marginRight: "1rem" }} /></Link>
                        </div>

                        {/* Buy Me a Coffee Button */}
                        <div className="buy-me-a-coffee">
                            <a
                                href="https://www.buymeacoffee.com/abhijithb"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                                    alt="Buy Me A Coffee"
                                    style={{
                                        height: "50px",
                                        width: "200px",
                                        marginTop: "1rem"
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
