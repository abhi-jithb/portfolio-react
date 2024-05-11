import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer.js'
// import HeroImg2 from '../components/heroImage/HeroImg2.js'
import HeroImg2 from '../components/HeroImg2.js'
import PricingCard from '../components/PricingCard.js'
import WrkCard from '../components/WrkCard.js'


const Project = () => {
    return (
        <>
            <Navbar />
            <HeroImg2 heading="Projects." text="Some the latest Projects"/>
            <WrkCard/>
            <PricingCard/>
            <Footer />
        </>
    )
}

export default Project