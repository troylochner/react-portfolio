import React from "react";
import Nav from "../Nav"
function Header () {
    return (

        <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
           <Nav/>
          </ul>
        </div>
      </nav>
            

       
    )
}

export default Header;


