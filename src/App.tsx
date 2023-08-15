import React from 'react';
import logo from './logo.svg';
import './App.css';

import PageHeader from "./components/PageHeader";
import AboutMe from "./components/AboutMe";
import { projectCardFactory, getThumbnailProps, ProjectCardThumbnails } from './components/ProjectCard';

// TODO: figure out how to make it center without adding the "height: 1000px to the css"


const data = require("./portfolioData");

const projectCardData = [
  data.projectStatMiner,
  data.projectBraveNW,
  data.projectMesh,
  data.projectBraveNWdb
]

const thumbnailData = getThumbnailProps(projectCardData)

// const pc =  <ProjectCard {...data.projectStatMiner}/>
const projectCards = projectCardFactory(projectCardData)
function App() {
  return (
   
    <div className="App">
      
        <PageHeader {...data.pageHeader}/> 
        <AboutMe {...data.aboutMe}/>
        {ProjectCardThumbnails(thumbnailData)}
   
      {/* {projectCards} */}
    
    </div>

  );
}

export default App;
