import PortfolioNavbar from "./components/PortfolioNavbar";
import Presentation from "./components/Presentation";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import TechList from "./components/TechList";

function App() {
  return (
    <div className="App">
      <PortfolioNavbar />
      <Presentation />
      <TechList />
    </div>
  );
}

export default App;
