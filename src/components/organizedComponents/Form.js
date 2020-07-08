import React from "react";

function Form(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          value={props.data.firstName}
          onChange={props.handleChange}
          placeholder="First Name"
        />
        <br />
        <input
          type="text"
          name="lastName"
          value={props.data.lastName}
          onChange={props.handleChange}
          placeholder="Last Name"
        />
        <br />
        <input
          type="number"
          name="age"
          value={props.data.age}
          onChange={props.handleChange}
          placeholder="Your age"
        />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={props.data.gender === "Male"}
            onChange={props.handleChange}
          />
          M
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={props.data.gender === "Female"}
            onChange={props.handleChange}
          />
          F
        </label>
        <br />
        <label>
          Where you going?
          <br />
          <select
            name="trip"
            value={props.data.trip}
            onChange={props.handleChange}
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
            value={props.data.problems}
            onChange={props.handleChange}
          />
          Poopy?
          <input
            type="checkbox"
            name="problems"
            value={props.data.problems}
            onChange={props.handleChange}
          />
          Lactose poopy?
          <br />
          <input
            type="checkbox"
            name="problems"
            value={props.data.problems}
            onChange={props.handleChange}
          />
          Vegi?
          <input
            type="checkbox"
            name="problems"
            value={props.data.problems}
            onChange={props.handleChange}
          />
          Heart sucks?
        </label>
        <hr />
        <h2>Entered Information</h2>
        <h3>
          Name: {props.data.firstName} {props.data.lastName}
        </h3>
        <p>Age: {props.data.age}</p>
        <p>Gender: {props.data.gender}</p>
        <p>Destination: {props.data.trip}</p>
        <p>Problems: {props.data.problems}</p>
      </form>
    </div>
  );
}

export default Form;
