import React, { Component } from "react";
import AuthContainer from "./AuthContainer";
import EventListContainer from "./EventListContainer";

class Container extends Component {
  render() {
    return (
      <div>
        <AuthContainer />
        <EventListContainer />
      </div>
    );
  }
}

export default Container;
