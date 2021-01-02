import React from "react";
import {Link} from "react-router-dom";

const ProjectCard = ({id,name,description,GitHubRepo}) =>{

    return(
    <div className="card z-depth-3">

      <div className="card-image">
        <img alt="holding pattern" src="https://via.placeholder.com/100x100"></img>
        <span className="card-title">{name}</span>
      </div>

      <div className="card-content">
        <p>{description}</p>
      </div>

      <div className="card-action">
        <a target="_blank" href={`/project/${id}`}>View on GitHub</a>
      </div>

  </div>
        
    )

};

export default ProjectCard;