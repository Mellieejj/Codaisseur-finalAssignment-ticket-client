import React, { Component } from "react";
import { connect } from "react-redux";
import { loadEvent } from "../actions/eventActions";
import { getTickets } from "../actions/ticketActions";

import EventDetails from "./EventDetails";

class EventDetailsContainer extends Component {
  componentDidMount() {
    this.props.loadEvent(this.props.match.params.eventId);
    this.props.getTickets();
  }

  render() {
    return (
      <div>
        <EventDetails
          user={this.props.user}
          event={this.props.event}
          tickets={this.props.tickets}
          ticket={this.props.ticket}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.jwt,
    event: state.event,
    tickets: state.tickets,
    ticket: state.ticket,
  };
}

export default connect(mapStateToProps, { loadEvent, getTickets })(
  EventDetailsContainer
);
