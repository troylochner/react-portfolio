import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectList from '../components/Project-List';
import {ProjectProvider} from "../utils/ProjectContext";

import Bio from "../pages/Bio";
import Contact from "../pages/Contact";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from "react-router-dom";


const Detail = ({id,name,description,GitHubRepo}) =>{

  //const project = ProjectProvider[0]

  return(
  <div>
<h1>This is a the project detail page for {id} </h1>
</div>
      
  )

};

export default Detail;