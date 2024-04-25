import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer.js'
import HeroProject from '../components/HeroProject.js'


const Project = () => {
    return (
        <>
            <Navbar />
            <HeroProject heading="Projects" text="These are some of my recent projects" />
            <Footer />
        </>
    )
}

export default Project