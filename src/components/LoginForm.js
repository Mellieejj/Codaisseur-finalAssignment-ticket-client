import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            placeholder="name"
            type="text"
            value={this.props.values.name}
            onChange={this.props.onChange}
            name="name"
          ></input>
          <input
            placeholder="password"
            type="password"
            value={this.props.values.password}
            onChange={this.props.onChange}
            name="password"
          ></input>
          <button type="submit">{this.props.buttonName}</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
