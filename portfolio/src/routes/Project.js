import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer.js'
// import HeroImg2 from '../components/heroImage/HeroImg2.js'
import HeroImg2 from '../components/HeroImg2.js'
import PricingCard from '../components/PricingCard.js'
import Wrk from '../components/Wrk.js'


const Project = () => {
    return (
        <>
            <Navbar />
            <HeroImg2 heading="Projects" text="Some of recent projects are listed below..."/>
            <Wrk/>
            <PricingCard/>
            <Footer />
        </>
    )
}

export default Project