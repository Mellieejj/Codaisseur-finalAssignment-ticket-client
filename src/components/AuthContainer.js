import React, { Component } from "react";
import { connect } from "react-redux";

import LoginFormContainer from "./LoginFormContainer";
import SignUpContainer from "./SignUpContainer";
import "./style/AuthContainer.css";

class AuthContainer extends Component {
  render() {
    if (!this.props.user) {
      return (<div>
        <p style={{ color: "#B22222", backgroundColor: "#ffffff", fontSize: "large"}}>
        {this.props.errors ? this.props.errors : null}
      </p>
        <div className="auth">
          <LoginFormContainer errors={this.props.errors} />
          <SignUpContainer />
        </div></div>
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
    user: state.user.jwt,
    errors: state.errors
  };
}

export default connect(mapStateToProps)(AuthContainer);
