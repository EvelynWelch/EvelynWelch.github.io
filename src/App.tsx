import React from 'react';
import logo from './logo.svg';
import './App.css';

import PageHeader from "./components/PageHeader";
import AboutMe from "./components/AboutMe";
import { projectCardFactory } from './components/ProjectCard';


const data = require("./portfolioData");

let projectCardData = [
  data.projectStatMiner,
  data.projectBraveNW,
  data.projectMesh,
  data.projectBraveNWdb
]

// const pc =  <ProjectCard {...data.projectStatMiner}/>
const t = projectCardFactory(projectCardData)
function App() {
  return (
    <div className="App">

        <PageHeader {...data.pageHeader}/> 
        <AboutMe {...data.aboutMe}/>
   
      {t}
    </div>
  );
}

export default App;
