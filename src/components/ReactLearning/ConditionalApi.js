import React from "react";

class ConditionalApi extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {}
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.co/api/people/1")
      .then(Response => Response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        });
      });
  }

  render() {
    let loadingText = this.state.loading
      ? "Loading..."
      : this.state.character.name;
    return <div>{loadingText}</div>;
  }
}

export default ConditionalApi;
