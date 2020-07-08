import React from "react";

class AddTodo extends React.Component {
  state = {
    title: ""
  };

  // form submit event
  onSubmit = e => {
    e.preventDefault(); // prevents default submit
    this.props.addTodo(this.state.title); // passing up the state
    this.setState({ title: "" }); // re-setting the state
  };

  formEvent = e => this.setState({ title: [e.target.value] });
  // ^Single event handles multiple inputs as long as the input names are the same
  //formEvent = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    this.formCont = {};

    this.formInputCss = {
      display: "flex",
      width: "25%",
      marginLeft: "20px"
    };

    this.formBtnCss = {
      margin: "15px 0 0 20px"
    };

    return (
      <div>
        <form onSubmit={this.onSubmit} style={this.formCont}>
          <input
            style={this.formInputCss}
            type="text"
            name="title"
            placeholder="type todo here.."
            value={this.state.title}
            onChange={this.formEvent}
          />
          <input type="submit" value="Submit" style={this.formBtnCss} />
        </form>
      </div>
    );
  }
}

export default AddTodo;
