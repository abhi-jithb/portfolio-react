import "./WrkCardStyles.css"

import React from 'react';
import WrkCard from "./WrkCard";
import wrkCarData from "./wrkCardData"

const Wrk = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
           {wrkCarData.map((val, index)=>{
            return(
                <WrkCard
                key={index}
                imgSrc={val.imgSrc}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            )
           })}
        </div>
    </div>
  )
}

export default Wrk