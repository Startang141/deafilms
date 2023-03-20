import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className="myBg">  
      <NavigationBar/>
      <Intro/>
      </div>
    </div>
  );
}

export default App;
