import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTicket } from "../actions/ticketActions";
import AddTicketForm from "./AddTicketForm";

class UpdateTicketFormContainer extends Component {
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
    this.props.updateTicket(this.props.ticket.id, this.state);
    this.setState({
      pictureUrl: "",
      price: "",
      description: "",
      eventId: ""
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
        buttonName="Update"
      />
    );
  }
}

function mapStateToProps(state) {
  // console.log("updateticket", state.ticket)
  return {
    user: state.user,
    event: state.event,
    ticket: state.ticket
  };
}
export default connect(mapStateToProps, { updateTicket })(
  UpdateTicketFormContainer
);
