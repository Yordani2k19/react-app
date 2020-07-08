import React from "react";
import ItemCall from "./ItemCall";
import itemData from "./itemData";

class ItemRender extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: itemData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map(item => (
      <ItemCall key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return <div>{todoItems}</div>;
  }
}

export default ItemRender;
