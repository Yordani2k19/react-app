import React from "react";

const Joke = props => {
  const styles = {
    color: "blue"
  };

  return (
    <div>
      <h1 style={{ display: props.question ? "block" : "none" }}>
        Question: {props.question}
      </h1>
      <h3 style={styles}>Answer: {props.punchLine}</h3>
    </div>
  );
};

export default Joke;
