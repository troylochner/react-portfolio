import React from "react";
import Nav from "../Nav"
import logo from "../../img/DataSlayer50.png"

function Header () {
    return (

      <nav>
        <div className="nav-wrapper">
        <img  alt="Troy Lochner Graphic" className="responsive-img circle s12 m8 " src={logo}></img>

          <a href="#" className="brand-logo">Troy Lochner - Portfolio & Information</a>
          

          <ul id="nav-mobile" className="right hide-on-med-and-down">
           <Nav/>
          </ul>
        </div>
      </nav>
            

       
    )
}

export default Header;


