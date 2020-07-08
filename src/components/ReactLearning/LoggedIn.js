import React from "react";

class LoggedIn extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      };
    });
  }

  render() {
    let dispText = this.state.isLoggedIn ? "Logged in" : "Logged out";
    let buttonText = this.state.isLoggedIn ? "Log out" : "Log in";
    return (
      <div>
        <h2>{dispText}</h2>
        <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    );
  }
}

export default LoggedIn;
