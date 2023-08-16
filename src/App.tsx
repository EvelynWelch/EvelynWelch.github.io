import React from 'react';
import logo from './logo.svg';
import './App.css';

import PageHeader from "./components/PageHeader";
import AboutMe from "./components/AboutMe";
import { Projects} from './components/ProjectCard';
import { makeid } from './utilities';

// TODO: figure out how to make it center without adding the "height: 1000px to the css"


const data = require("./portfolioData");

const projectCardData = [
  data.projectStatMiner,
  data.projectBraveNW,
  data.projectMesh,
  data.projectBraveNWdb
]
// create uniqe id's for projects
projectCardData.forEach(element => element.key = makeid(5))

// const thumbnailData = getThumbnailProps(projectCardData)
// thumbnailData.push({
//   title: "About Me",
//   imgSrc: "",
//   imgAlt: "",
//   key: "1234"
// })

// const pc =  <ProjectCard {...data.projectStatMiner}/>
// const projectCards = projectCardFactory(projectCardData)
function App() {
  return (
   
    <div className="App">
      
        <PageHeader {...data.pageHeader}/> 
        <AboutMe {...data.aboutMe}/>

  
        {Projects(projectCardData)}

    
    </div>

  );
}

export default App;
