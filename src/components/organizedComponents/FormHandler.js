import React from "react";
import Form from "./Form";

class FormHandler extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      trip: "",
      problems: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // simple form event handler
  //   handleChange(e) {
  //       const {name, value} = e.target
  //       this.setState({
  //           [name]: value
  //       })
  //   }

  handleChange(e) {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({
          [name]: value
        });
  }
  render() {
    return <Form handleChange={this.handleChange} data={this.state} />;
  }
}

export default FormHandler;
