import React, {useContext} from "react";
import {ProjectContext} from "../../utils/ProjectContext"
import {Link} from 'react-router-dom'
const Nav = ({id,name,description}) =>{
const [projects,setProjects]= useContext(ProjectContext)
// Disabled the contact portion for now. I don't have the page up to my standards<li><Link to="contact">Contact</Link></li>    
return(
    <div>
        <ul>
            <li><Link to="/">Portfolio</Link></li>
            <li><Link to="/bio">Bio</Link></li>
            
            </ul>
    </div>  
    )
};

export default Nav;