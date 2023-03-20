import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className="myBg">  
      <NavigationBar/>
      <Intro/>
      </div>
      <div className="trending">
      <Trending/>
      </div>
    </div>
  );
}

export default App;
