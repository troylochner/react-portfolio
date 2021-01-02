import React from "react";


const ProjectLink = ({GitHubRepo}) =>{

    return(
    <div>
        <div className="Container">
            <div className="row">
      <a target="_blank" href={GitHubRepo}>GitHub Repo</a>
  </div>
  </div>
  </div>
        
    )

};

export default ProjectLink;