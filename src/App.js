import './App.css';
import Home from "./components/Home/Home";
import Auth from './components/Auth/Auth';
import Signup from './components/Auth/Signup';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path='/' component= {Auth} />
        <Route exact path='/home' component= {Home} />
        <Route exact path='/signup' component= {Signup} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
