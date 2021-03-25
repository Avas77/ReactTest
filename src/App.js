import React from "react";
import "./App.css";
import Form from "./components/Form/Form";
import { Route, Switch } from "react-router-dom";
import Profiles from "./components/Profiles/Profiles";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/profiles" exact component={Profiles} />
      </Switch>
    </div>
  );
}

export default App;
