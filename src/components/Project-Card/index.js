import React from "react";
//import 'materialize-css';

const projectCard = () =>{

    return(
        <div className="row">
        <div className="col s12 m7">

        <div className="card">

        <div className="card-image">
          <img alt="holding pattern" src="https://via.placeholder.com/100x100"></img>
          <span className="card-title">Card Title</span>
        </div>

        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>

        <div className="card-action">
          <a href="https://www.wwe.com/">My Employer</a>
        </div>

      </div>
      </div>
      </div>
        
    )

};

export default projectCard;