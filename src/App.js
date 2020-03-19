import React from "react";
import {Route} from "react-router-dom";
import HomePage from "./Components/pages/HomePage";
import LoginPage from "./Components/pages/LoginPage";

const App =() =><div className="ui container">
  <Route path="/" exact component={HomePage} />
  <Route path="/Login" exact component={LoginPage} />
</div>

export default App;
