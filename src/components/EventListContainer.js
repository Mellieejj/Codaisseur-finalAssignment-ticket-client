import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents } from "../actions/eventActions";
import EventList from "./EventList";
import CreateEventFormContainer from "./CreateEventFormContainer";

class EventListContainer extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    return (
      <div>
        {this.props.user.jwt ? (
          <div>
            <CreateEventFormContainer />
          </div>
        ) : null}

        <EventList events={this.props.events} />
      </div>
    );
  }
}

function mapStateToProps(state) {
// console.log("eventListContainer", state);

  return {
    events: state.events,
    user: state.user,
  };
}

const mapDispatchToProps = { getEvents };

export default connect(mapStateToProps, mapDispatchToProps)(EventListContainer);
