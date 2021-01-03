import React from "react";
import ProjectDetail from "../Detail";
import ProjectLink from "../Project-Links";

import {Link} from "react-router-dom";

const ProjectCard = ({id,name,description_short,GitHubRepo,imageURL,deployURL }) =>{

    return(
    <div className="card z-depth-3">

      <div className="card-image">
        <img alt="holding pattern" src={imageURL}></img>
        <span className="card-title">{name}</span>
      </div>

      <div className="card-content">
        <p>{description_short}</p>
      </div>

      <div className="card-action">
        <ProjectLink deployURL={deployURL} GitHubRepo={GitHubRepo}></ProjectLink>
  
      </div>

  </div>
        
    )

};

export default ProjectCard;