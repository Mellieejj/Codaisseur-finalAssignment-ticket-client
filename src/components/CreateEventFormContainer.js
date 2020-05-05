import React, { Component } from "react";
import { connect } from "react-redux";
import { createEvent } from "../actions/eventActions";
import CreateEventForm from "./CreateEventForm";

class CreateEventFormContainer extends Component {
  state = {
    eventName: "",
    description: "",
    pictureUrl: "",
    startingDate: "",
    endDate: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.createEvent(this.state);

    this.setState({
      eventName: "",
      description: "",
      pictureUrl: "",
      startingDate: "",
      endDate: "",
    });
  };

  render() {
    return (
      <CreateEventForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null, { createEvent })(CreateEventFormContainer);
