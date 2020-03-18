import React, { Component } from "react";
import { connect } from "react-redux";
import { loadEvent } from "../actions/eventActions";
import EventDetails from "./EventDetails";

class EventDetailsContainer extends Component {
  componentDidMount() {
    console.log("params", this.props.match.params.eventId);
    this.props.loadEvent(this.props.match.params.eventId);
  }

  render() {
    return (
      <div>
        <EventDetails user={this.props.user} event={this.props.event} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state event", state.event);
  return {
    user: state.user.jwt,
    event: state.event
  };
}

export default connect(mapStateToProps, { loadEvent })(EventDetailsContainer);
