import { Link } from 'react-router-dom';
import './NavbarStyles.css';
import React from 'react'


const Navbar = () => {
    return (
        <>
            <div className='header'>
                <Link to="/about" >
                    <h1>Abhijith B</h1>
                </Link>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/project">Project</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul >
            </div >
        </>
    );
}

export default Navbar;
