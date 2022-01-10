import "./App.css"
import Body from "./PortfolioContainer/Body/Body";
import Footer from "./PortfolioContainer/Footer/Footer";
import Home from "./PortfolioContainer/Home/Home";


function App() {
  return (
    <div className="App">
      <div>
      <Home/>
      </div>

      <div>
        <Body/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    
  );
}

export default App;
