import React from "react";
import ProjectList from "../../utils/projectlist";
import ProjectCard from "../Project-Card";


const projectBoard = () =>{

    console.log(ProjectList)


    return(

        <div className="container">

        <div className="row">
            <div className="col s3"><ProjectCard/></div>
            <div className="col s3"><ProjectCard/></div>
            <div className="col s3"><ProjectCard/></div>
            <div className="col s3"><ProjectCard/></div>
            <div className="col s3"><ProjectCard/></div>
            <div className="col s3"><ProjectCard/></div>
            <div className="col s3"><ProjectCard/></div>
            <div className="col s3"><ProjectCard/></div>
        </div>
        
      </div>


)
};

export default projectBoard;