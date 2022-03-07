import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

function App() {
  return (
    <div>
      <switch>
        <Route path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </switch>
    </div>
  );
}

export default App;
