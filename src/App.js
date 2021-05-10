import "./App.css";

import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import OnDuty from "./pages/OnDuty";
import Signup from "./pages/Signup";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/onDuty" component={OnDuty} />
        <Route path="/signup" component={Signup} />
        <Route path="/details" component={Details} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
