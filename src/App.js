import React from "react";
import {Route } from "react-router-dom"

import Home from "./components/Home"

import "./App.css";



function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/events/:id" component={EventDetailsContainer}/> */}
    
    </div>
  );
}

export default App;
