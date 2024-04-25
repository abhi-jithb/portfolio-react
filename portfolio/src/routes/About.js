import React from 'react'


import Navbar from '../components/Navbar'
import Footer from '../components/Footer.js'
import HeroProject from '../components/HeroProject.js'


const About = () => {
    return (
        <>
            <Navbar />
            <HeroProject heading="About me" text2="Freelance Worker" text=" I'm a Full Stack Developer." />
            <Footer />
        </>
    )
}

export default About