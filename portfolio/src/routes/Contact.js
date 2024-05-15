import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer.js'
import HeroImg2 from '../components/HeroImg2.js'
import ContactForm from '../components/ContactForm.js'
import Message from '../components/Message.jsx'


const Contact = () => {
    return (
        <>
            <Navbar /> 
            <Message/>
            <HeroImg2 heading="Contact me." text="Feel free to connect with me "/>
           
            <ContactForm/>
           
            <Footer />
        </>
    )
}

export default Contact