import React, { Component } from "react";

function Button({ children }) {
  const styles = {
    color: "blue",
    backgroundColor: "pink",
    padding: 5
  };

  return (
    <div className="button-cont">
      <button style={styles} className="button">
        {children}
      </button>
    </div>
  );
}

export default Button;
