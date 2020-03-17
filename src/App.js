import React from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"
import Container from "./components/Container";
import EventListContainer from "./components/EventDetailsContainer";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Route exact path="/events/:id" component={EventListContainer} />
      <Route exact path="/" component={Container} />
      
    </div>
    </Provider>
  );
}

export default App;
