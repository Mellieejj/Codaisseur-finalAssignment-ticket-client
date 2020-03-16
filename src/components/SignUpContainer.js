import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { createUser } from "../actions";

class SignupFormContainer extends Component {
  state = {
    name: "",
    password: ""
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createUser(this.state);
    this.setState({
      name: "",
      password: ""
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
      </div>
    );
  }
}

export default connect(null, { createUser })(SignupFormContainer);
