import React from "react";

function Bio() {
  return (
    <div className="container">
    
    <div className="PersonalDetail">

    <div className="row">

    
      <div className="col s6 info">
        <h3>Experience</h3>   
        <hr></hr>
        <p>

          I am the Director of Content Workflow Systems for WWE (World Wresting Entertainment, Inc ); an integrated media organization and leader in global entertainment. In this position I am responsible for the development and deployment of software systems & processes vital to WWE's content production pipeline. I began my career at WWE as a content technician in February 2014 at the outset of the launch of WWE's award-winning OTT streaming service 'WWE Network'. In this early role at WWE I developed a database system which became critical to the operational workflow of distributing content to our network.
          In my current role at WWE I have my hands involved in the creation and oversight of a wide range of systems; everything from a metadata mastering to creative request management, capital-expense tracking, production music licensing and media logging.
          <p></p>
          I came to WWE with prior experience developing databases and data-workflows in the feature-film industry where my film credits include 'The Amazing Spider-Man 2', 'Cowboys & Aliens', & 'Jack the Giant Slayer'. With earlier experience the production offices for the films 'A Serious Man', 'Paul', & 'Rampart'. All this experience gave me valuable insight into the both the creative and logistical challenges in producing content of any sort and serves as my background in how to develop or find software to suit these needs.  

       
        </p>
      </div>

      <div className="col s6">
         <h3>Personal</h3>   
         <hr></hr>
         <p>
           I currently reside in Norwalk, Connecticut but am originally from Minnesota & Wisconsin. I am a graduate of St. John's University in  Collegeville, Minnesota where I double-majored in Sociology & Communications...with a very large amount of my time spent in the art department building learning video production skills which ultimately led me in the film & content production.
           Outside of work I am an avid tennis player; and since Covid-19, spending a lot of time exercising my artistic muscles.

         </p>

         <h5>Get in Touch</h5>
         <p>You can get into contact with my via GitHub or LinkedIn. Or for the truly old-school and adventurous email : <a href="mailto:troy.lochner@gmail.com">troy.lochner@gmail.com</a>

         <ul>
            <li><a target="_blank" className="grey-text text-lighten-3" href="https://github.com/troylochner">GitHub</a></li>
            <li><a target="_blank" className="grey-text text-lighten-3" href="https://linkedin.com/in/troylochner">LinkedIn</a></li>
          </ul>

          <a className="downloadLink" href="../img/Resume-Troy-Lochner_jan21_dft.pdf" download>Download Resume
         </a>

         </p>

       

       


      </div>

    </div>

    </div>

    </div>
  );
}

export default Bio;
