import React, { Component } from "react";
import { connect } from "react-redux";
import { loadTicket, getTickets } from "../actions/ticketActions";
import { loadEvent } from "../actions/eventActions";
import { getComments } from "../actions/commentActions";
import TicketDetails from "./TicketDetails";
import AddCommentsFormContainer from "./AddCommentsFormContainer";
import Comments from "./Comments";

class TicketDetailsContainer extends Component {
  componentDidMount() {
    this.props.loadEvent(this.props.match.params.eventId);
    this.props.loadTicket(this.props.match.params.ticketId);
    this.props.getTickets();
    this.props.getComments();
  }

  render() {
    return (
      <div>
        <TicketDetails
          ticket={this.props.ticket}
          user={this.props.user.jwt}
          event={this.props.event}
          tickets={this.props.tickets}
        />
        <div className="comments">
          {this.props.user.jwt ? (
            <AddCommentsFormContainer ticket={this.props.ticket} />
          ) : null}

          <Comments
            ticket={this.props.ticket}
            comments={this.props.comments}
            user={this.props.user.name}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("ticketDetailsContainer", state.comments);

  return {
    user: state.user,
    event: state.event,
    ticket: state.ticket,
    comments: state.comments,
    tickets: state.tickets
  };
}

const mapDispatchToProps = { loadTicket, loadEvent, getTickets, getComments };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketDetailsContainer);
