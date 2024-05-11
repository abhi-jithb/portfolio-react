import "./WrkCardStyles.css"

import React from 'react';
import pro1 from '../assets/networking.jpg'
import { NavLink } from "react-router-dom";

const WrkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={pro1} alt="project-1" />
                 <h2 className="project-title">Project Title</h2>
                 <div className="project-details">
                    <p>this is the project description</p>
                    <div className="project-btns">
                    <NavLink to="#" className="btn">View</NavLink>

                        <NavLink to="#" className="btn">Source</NavLink>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default WrkCard