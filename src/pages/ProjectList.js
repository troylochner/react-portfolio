import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectList from './components/Project-List';
import {ProjectProvider} from "./utils/ProjectContext";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from "react-router-dom";

import './App.css';


function ProjectListPage() {
  return (
    <div className="Portfolio">  
      <ProjectProvider>
      <Header/>
      <ProjectList/>
      <Footer/>
      </ProjectProvider>
    </div>
  );
}

export default ProjectListPage;
