import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import AppLayout from "./AppLayout";

function App() {
  return (
    <div className="App">
      <h1>Private React Router</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/app">
            <AppLayout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
