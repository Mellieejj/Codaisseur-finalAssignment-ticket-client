import React, { Component } from "react";
import { connect } from "react-redux";
import { createComment } from "../actions/commentActions";
import AddCommentForm from "./AddCommentForm";

class AddCommentsFormContainer extends Component {
  state = {
    text: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      ticketId: this.props.ticket.id
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createComment(this.state);
    this.setState({
      text: ""
    });
  };

  render() {
    console.log(this.props.user);

    return (
      <div>
        <AddCommentForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          values={this.state}
          user={this.props.user}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state ticket", state.event);
  return {
    user: state.user.jwt,
    event: state.event,
    ticket: state.ticket
  };
}

export default connect(mapStateToProps, { createComment })(
  AddCommentsFormContainer
);
