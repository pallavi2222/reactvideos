
import PopularVideos from './components/PopularVideos'
import Videopage from './components/Videopage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
          <Route path="/" exact component={PopularVideos}/>
          <Route path="/Videopage" exact component={Videopage} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
