import { Link } from 'react-router-dom';
import './NavbarStyles.css';
import React from 'react'


const Navbar = () => {
    return (
        <>
            <div className='header'>
                <Link to={'/'}>
                    <h1>Abhijith B</h1>
                </Link>
            </div>
        </>
    );
}

export default Navbar;
