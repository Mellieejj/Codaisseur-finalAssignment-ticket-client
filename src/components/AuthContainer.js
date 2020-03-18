import React, { Component } from "react";
import { connect } from "react-redux";

import LoginFormContainer from "./LoginFormContainer";
import SignUpContainer from "./SignUpContainer";
import "./style/AuthContainer.css" 

class AuthContainer extends Component {
  render() {
    if (!this.props.user) {
      return (
        <div className="auth">
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
