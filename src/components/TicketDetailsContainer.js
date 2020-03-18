import React, { Component } from "react";
import { connect } from "react-redux";
import { loadTicket, getTickets } from "../actions/ticketActions";
import { loadEvent } from "../actions/eventActions";
import TicketDetails from "./TicketDetails";
import AddCommentsFormContainer from "./AddCommentsFormContainer";
import Comments from "./Comments";

class TicketDetailsContainer extends Component {
  componentDidMount() {
    this.props.loadEvent(this.props.match.params.eventId);
    this.props.loadTicket(this.props.match.params.ticketId);
    this.props.getTickets()
  }

  render() {
    return (
      <div>
        <TicketDetails
          ticket={this.props.ticket}
          user={this.props.user}
          event={this.props.event}
          tickets={this.props.tickets}
        />
        <div className="comments">
          {this.props.user ? (
            <AddCommentsFormContainer
              // user={this.props.user}
              ticket={this.props.ticket}
            />
          ) : null}

          <Comments ticket={this.props.ticket} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("ticketDetailsContainer", state);

  return {
    user: state.user.jwt,
    event: state.event,
    ticket: state.ticket,
    comments: state.comments,
    tickets: state.tickets
  };
}

const mapDispatchToProps = { loadTicket, loadEvent , getTickets};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketDetailsContainer);
