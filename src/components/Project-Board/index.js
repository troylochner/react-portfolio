import React from "react";
import ProjectCard from "../Project-Card";
import projects from "../../utils/projects.json";

const projectBoard = () =>{

    return(

        <div className="container">

        <div className="row">
            <div className="col s3"><ProjectCard name={projects[0].name}/></div>
            <div className="col s3"><ProjectCard name={projects[1].name}/></div>
            <div className="col s3"><ProjectCard name={projects[2].name}/></div>
            <div className="col s3"><ProjectCard name={projects[3].name}/></div>
        </div>
        
      </div>


)
};

export default projectBoard;