import './App.css';
import Home from "./components/Home/Home"
import Form from "./components/Form/main"
import Admin from "./components/Form/formAdmin/Admin"
import Details from "./components/Form/formAdmin/details"
import Routes from './routes'

function App() {

  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Admin /> */}
      {/* <Details /> */}
      <Routes/>
    </div>
  );
}

export default App;
