import React, { Component } from "react";
import { connect } from "react-redux";

import LoginFormContainer from "./LoginFormContainer";
import SignUpContainer from "./SignUpContainer";

class AuthContainer extends Component {
  render() {
    if (!this.props.user) {
      return (
        <div>
          <LoginFormContainer />
          <SignUpContainer />
        </div>
      );
    } else {
      return (
        <div>
          <p>You are logged in!</p>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.jwt
  };
}

export default connect(mapStateToProps)(AuthContainer);
