import React from "react";

class Inputs extends React.Component {
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
    return (
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <br />
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Your age"
          />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={this.state.gender === "Male"}
              onChange={this.handleChange}
            />
            M
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={this.state.gender === "Female"}
              onChange={this.handleChange}
            />
            F
          </label>
          <br />
          <label>
            Where you going?
            <br />
            <select
              name="trip"
              value={this.state.trip}
              onChange={this.handleChange}
            >
              <option value="cuba">Cuba</option>
              <option value="miami">Miami</option>
              <option value="Puerto Rico">Puerto Rico</option>
            </select>
          </label>
          <br />

          <label>
            Anything we should know?
            <br />
            <input
              type="checkbox"
              name="problems"
              value={this.state.problems}
              onChange={this.handleChange}
            />
            Poopy?
            <input
              type="checkbox"
              name="problems"
              value={this.state.problems}
              onChange={this.handleChange}
            />
            Lactose poopy?
            <br />
            <input
              type="checkbox"
              name="problems"
              value={this.state.problems}
              onChange={this.handleChange}
            />
            Vegi?
            <input
              type="checkbox"
              name="problems"
              value={this.state.problems}
              onChange={this.handleChange}
            />
            Heart sucks?
          </label>
          <hr />
          <h2>Entered Information</h2>
          <h3>
            {this.state.firstName} {this.state.lastName}
          </h3>
          <p>Age: {this.state.age}</p>
          <p>Gender: {this.state.gender}</p>
          <p>Destination: {this.state.trip}</p>
          <p>Problems: {this.state.problems}</p>
        </form>
      </div>
    );
  }
}

export default Inputs;
