import React, { Component } from "react";

function Info() {
  var yc = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  return (
    <div>
      {yc.firstName}
      {yc.lastName}
      {yc.age}
    </div>
  );
}

export default Info;
