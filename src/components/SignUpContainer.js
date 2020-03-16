import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { createUser } from "../actions/userActions";

class SignupFormContainer extends Component {
  state = {
    name: "",
    password: "",
    message: ""
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createUser(this.state);
    this.setState({
      name: "",
      password: "",
      message: "Yeah, you can login with you new created account :-)"
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h3>Signup, if you don't have a account</h3>
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
          buttonName="Sign Up"
        />
        {this.state.message}
      </div>
    );
  }
}

export default connect(null, { createUser })(SignupFormContainer);
