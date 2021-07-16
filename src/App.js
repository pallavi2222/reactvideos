import logo from './logo.svg';
import './App.css';
import Page from './components/Page'
import Videopage from './components/Videopage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
          <Route path="/" exact component={Page}/>
          <Route path="/Videopage" exact component={Videopage} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
