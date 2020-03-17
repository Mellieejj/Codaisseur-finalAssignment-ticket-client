import React, { Component } from "react"
import AuthContainer from "./AuthContainer"
import EventListContainer from "./EventListContainer"

export default class Home extends Component {
  render(){
    return(
    <div>
      <AuthContainer />
      <EventListContainer />
    </div>
    )
  }
}