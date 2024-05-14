import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer.js'
import HeroImg2 from '../components/HeroImg2.js'
import ContactForm from '../components/ContactForm.js'


const Contact = () => {
    return (
        <>
            <Navbar />
            <HeroImg2 heading="Contact me." text="Feel free to connect with me "/>
            <ContactForm/>
            <Footer />
        </>
    )
}

export default Contact