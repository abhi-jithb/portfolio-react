import "./HeroImgStyles.css";

import React from "react";

import IntroImg from "../assets/intro-img.jpg";
import { Link } from "react-router-dom"
const HeroImg = () => {
    return (

        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="intro image" />
            </div>
            <div className="content">
                <p>HI, I'M A FREELANCER.</p>
                <h1>Full Stack Developer.</h1>
                <div>
                    <Link to="/projects" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
        // revaluation
        /**
         * <div className="hero">
         * <div className="mask">
         * <img src={IntroImg} alt="introimage"/>
         * </div>
         * <div className="content">
         * <p>Hi, I'm  a freelancer.</p>
         * <h1>REACT DEVELOPER.</h1>
         * </div>
         * <div className="">
         * <Link to="/projects" className="btn">Projects</Link>
         * <Link to="/content" className="btnt-light">Content</Link>
         * 
         * </div></div>
         */
    )
}

export default HeroImg