import React, { Component } from "react";
import { connect } from "react-redux";

import LoginFormContainer from "./LoginFormContainer";
import SignUpContainer from "./SignUpContainer";
import "./style/AuthContainer.css";

class AuthContainer extends Component {
  render() {
    if (!this.props.user.jwt) {
      return (
        <div>
          <p
            style={{
              color: "#FF3232",
              backgroundColor: "#FFFFFF",
              fontSize: "large",
            }}
          >
            {this.props.errors ? this.props.errors : null}
          </p>
          <div className="auth">
            <LoginFormContainer errors={this.props.errors} />
            <SignUpContainer />
          </div>
        </div>
      );
    } else {
      const userName = this.props.user.name;
      return (
        <div>
          <p
            style={{
              color: "#97BA28",
              backgroundColor: "#FFFFFF",
              fontSize: "large",
            }}
          >
            You are logged in as{" "}
            {userName[0].toUpperCase() + this.props.user.name.substr(1)}!
          </p>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    errors: state.errors,
  };
}

export default connect(mapStateToProps)(AuthContainer);
