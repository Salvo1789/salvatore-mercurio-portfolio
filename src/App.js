import PortfolioNavbar from "./components/PortfolioNavbar";
import Presentation from "./components/Presentation";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import TechList from "./components/TechList";
import ProjectsList from "./components/ProjectsList";


function App() {
  return (
    <div className="App">
      <PortfolioNavbar />
      <Presentation />
      <ProjectsList />
      <TechList />
    </div>
  );
}

export default App;
