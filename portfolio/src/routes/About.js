import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer.js'
import HeroImg2 from '../components/HeroImg2.js'


const About = () => {
    return (
        <>
            <Navbar />
            <HeroImg2 heading="About." text="I'm a Full Stack Developer"/>
            <Footer />
        </>
    )
}

export default About