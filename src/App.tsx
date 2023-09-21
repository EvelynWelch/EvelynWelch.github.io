import './App.css';
import PageHeader from "./components/PageHeader";
import { TabView } from './components/TabbedView';
import { makeid } from './utilities';

// TODO: figure out how to make it center without adding the "height: 1000px to the css"

const data = require("./portfolioData");

const projectCardData = [
  data.aboutMeTab,
  data.projectStatMiner,
  // data.projectBraveNW,
  data.braveNW,
  data.projectMesh,
  // data.projectBraveNWdb
]

projectCardData.forEach(element => element.key = makeid(5))

function App() {
  return (
   
    <div className="App">
      
        <PageHeader {...data.pageHeader}/> 


  
        {TabView(projectCardData)}

    
    </div>

  );
}

export default App;
