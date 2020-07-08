import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <h1 style={todoHeader}>Todo App</h1>
        <Link to="/">Home</Link> | <Link to="About">About</Link>
      </header>
    </div>
  );
}

const todoHeader = {
  background: "#333",
  color: "#fff",
  textAlign: "center"
};

export default Header;
