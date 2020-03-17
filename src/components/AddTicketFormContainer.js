import React, { Component } from "react";
import { connect } from "react-redux";
import { createTicket } from "../actions/ticketActions";
import AddTicketForm from "./AddTicketForm";

class AddTicketFormContainer extends Component {
  state = {
    pictureUrl: "",
    price: "",
    description: "",
    eventId: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      eventId: this.props.event.id
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createTicket(this.state);
    this.setState({
      pictureUrl: "",
      price: "",
      description: ""
    });
  };

  render() {
    return (
      <AddTicketForm
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        values={this.state}
        user={this.props.user}
        event={this.props.event}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    event: state.event
  };
}
export default connect(mapStateToProps, { createTicket })(
  AddTicketFormContainer
);
