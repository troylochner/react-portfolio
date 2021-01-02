import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectList from './components/Project-List';
import {ProjectProvider} from "./utils/ProjectContext";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';


function App() {
  return (
    <div className="Portfolio">
       <Router>
        
      <ProjectProvider>
      <Header/>
      <Route exact path="/" component={ProjectList}></Route>
      <Route path="/bio" component={Bio}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Footer/>

      </ProjectProvider>
      </Router>
    </div>
  );
}

export default App;
