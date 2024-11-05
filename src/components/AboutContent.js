import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import React from 'react'
import React1 from "../assets/ai-human.jpg"
import React2 from "../assets/Mern2.png"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a Full Stack Developer. I create responsive secure websites, and full stack web apps for my clients.</p>
           <Link to="/contact">
            <button className="btn">Contact</button>
           </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                    <img src={React1} alt="Img"className="img" />
                    </div>

                    <div className="img-stack bottom">
                    <img src={React2} alt="Img"className="img" />
                    </div>

                </div>
            </div>
    </div>
  )
}

export default AboutContent