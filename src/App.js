import './App.css';
import Home from "./components/Home/Home"
import Auth from "./components/auth/Auth"
import Routes from './routes'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {

  return (
    // <Router>
    //   <div className="App">
    //   <Switch>
    //   <Route exact path='/' component={Auth} />
    //   </Switch>
    // </div>
    // </Router>
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
