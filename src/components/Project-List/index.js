import React, {useState, useContext} from "react";
import ProjectCard from "../Project-Card";
import {ProjectContext} from "../../utils/ProjectContext"

const ProjectList = () =>{
 const [projects,setProjects] = useContext(ProjectContext)
    return(
        <div className="container">
        <div className="row">
            {projects.map(project=>(
           <div className="col s12 m6 l4 xl3">
               <ProjectCard id={project.id} key={project.id} name={project.name} imageURL= {project.imageURL} description_short={project.description_short} GitHubRepo={project.GitHubRepo} deployURL={project.deployURL}  />
               </div>
            ))} 
        </div>
      </div>
);
};

export default ProjectList;