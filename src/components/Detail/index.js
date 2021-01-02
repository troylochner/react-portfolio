import React from "react";
import {Link} from "react-router-dom";
import ProjectLinks from "../Project-Links";


const ProjectDetail = ({id,name,description_short,GitHubRepo,imageURL}) =>{

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
      <ProjectLinks GithubRepo={GitHubRepo} />
      <a target="_blank" href={GitHubRepo}>View </a>
      </div>

  </div>
        
    )

};

export default ProjectDetail;