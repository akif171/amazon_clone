import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <h1>Home Page</h1>
          </Route>
          <Route exact path="/about">
            <h1>about Page</h1>
          </Route>
          <Route exact path="/contact">
            <h1>Contact Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
