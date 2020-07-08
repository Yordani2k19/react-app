import React from "react";
import { returnStatement } from "@babel/types";
class ChangeCount extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickSub = this.handleClickSub.bind(this);
    this.handleClickDel = this.handleClickDel.bind(this);
  }

  handleClickAdd() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleClickSub() {
    this.setState(prevState => {
      const newCount = prevState.count - 1;
      return {
        count: newCount < 0 ? 0 : newCount
      };
    });
  }

  handleClickDel() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={this.handleClickAdd}>+</button>
        <button onClick={this.handleClickSub}>-</button>
        <button onClick={this.handleClickDel}>Clear</button>
      </div>
    );
  }
}

export default ChangeCount;
