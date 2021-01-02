import React, {useContext} from "react";
import {ProjectContext} from "../../utils/ProjectContext"
import {Link} from 'react-router-dom'
const Nav = ({id,name,description}) =>{
const [projects,setProjects]= useContext(ProjectContext)
    
return(
    <div>
        <ul>
            <li><Link to="/">Projects</Link></li>
            <li><Link to="/bio">Bio</Link></li>
            <li><Link to="contact">Contact</Link></li>
            </ul>
    </div>  
    )
};

export default Nav;