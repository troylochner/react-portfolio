import React from "react";


const ProjectLink = ({GitHubRepo, deployURL }) =>{

    return(
    <div>
        <div className="Container">
            <div className="row">
      <a target="_blank" href={GitHubRepo}>GitHub Repo</a>
      <a target="_blank" href={deployURL}>Demo</a>


  </div>
  </div>
  </div>
        
    )

};

export default ProjectLink;