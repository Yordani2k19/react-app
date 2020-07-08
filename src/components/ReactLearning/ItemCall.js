import React from "react";

const ItemCall = props => {
  const completedStyles = {
    textDecoration: "line-through",
    fontStyle: "italic",
    color: "#cdcdcd"
  };
  return (
    <div>
      <h3 style={props.item.completed ? completedStyles : null}>
        {props.item.product}
      </h3>
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
    </div>
  );
};

export default ItemCall;
