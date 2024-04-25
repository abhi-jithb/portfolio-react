import "./Navbar.css"

import React, { useState } from "react"
import { Link } from "react-router-dom"

import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {

    const [touch, setTouch] = useState(false);
    const handleClick = () => setTouch(!touch);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);
    return (
        <div className={color ? "header header-bg" : "header"}>
            < Link to="/" > <h1>Abhijith B</h1></Link >
            < ul className={touch ? "nav-menu active" : "nav-menu"} >
                <li>
                    <Link to="/home">Home</Link>
                </li >
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul >

            <div className="three-finger" onClick={handleClick}>
                {touch ? (
                    < FaTimes size={20} style={{ color: " #fff" }} />
                ) : (
                    <FaBars size={20} style={{ color: " #fff" }} />
                )}
            </div>
        </div >

    )
}

export default Navbar