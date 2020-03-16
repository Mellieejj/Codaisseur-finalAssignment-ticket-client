import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import LoginForm from "./LoginForm";

class LogininFormContainer extends Component {
  state = {
    name: "",
    password: ""
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state);
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
        <h3>Login</h3>
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
          buttonName="Login"
        />
      </div>
    );
  }
}

export default connect(null, { login })(LogininFormContainer);
