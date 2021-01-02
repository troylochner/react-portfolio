import React from "react";


const ProjectLink = ({GitHubRepo}) =>{

    return(
    <div>
        <div className="Container">
            <div className="row">
      <a href={GitHubRepo}>GitHub Repo</a>
      <a href={GitHubRepo}>Deploy</a>

  </div>
  </div>
  </div>
        
    )

};

export default ProjectLink;