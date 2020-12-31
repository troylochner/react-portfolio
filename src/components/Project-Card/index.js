import React from "react";
//import 'materialize-css';

const projectCard = () =>{

    return(
 

        <div className="card z-depth-3">

        <div className="card-image">
          <img alt="holding pattern" src="https://via.placeholder.com/100x100"></img>
          <span className="card-title">Project Title</span>
        </div>

        <div className="card-content">
          <p>This is some placeholder - you will be replaced by some contextual data.</p>
        </div>

        <div className="card-action">
          <a target="_blank" href="https://www.wwe.com/">Demo</a>
        </div>

      </div>

        
    )

};

export default projectCard;