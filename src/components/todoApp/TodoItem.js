import React from "react";
import PropTypes from "prop-types";

class TodoItem extends React.Component {
  // getStyle = () => {
  //   if (this.props.todo.completed) {
  //     return {
  //       textDecoration: "line-through"
  //     };
  //   } else {
  //     return {
  //       textDecoration: "none"
  //     };
  //   }
  // };

  getStyle = () => {
    return {
      borderBottom: "1px #ccc #solid",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      display: "flex"
    };
  };

  buttonStyle = {
    display: "flex",
    alignSelf: "center",
    backgroundColor: "red",
    color: "white",
    padding: "5px 9px",
    border: "none",
    margin: "0 10px",
    borderRadius: "50%",
    cursor: "pointer"
  };

  // Climb the tree => onChange={this.props.markComplete}
  // Passes it on to Todos.js
  // ------------------------
  // markComplete = e => {
  //   console.log(this.props);
  // };
  render() {
    // DESTRUCTURING
    const { title, id } = this.props.todo;
    // Gets title and id from the state
    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          style={{ alignSelf: "center", margin: "20px" }}
          onChange={this.props.markComplete.bind(this, id)} // binds id to event handler
          // climb the ladder to Todos
        />
        <h2>
          {
            title /* use title directly since it getting called from the state above */
          }
        </h2>
        <button
          style={this.buttonStyle}
          onClick={this.props.delTodo.bind(this, id)}
        >
          x
        </button>
      </div>
    );
  }
}
// Prop Types
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;

// App.js
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
// import Header from "./components/todoApp/header";
// import Todos from "./components/todoApp/Todos";
// import AddTodo from "./components/todoApp/AddTodo";
// import About from "./components/todoApp/pages/About";
// import { throwStatement } from "@babel/types";

// class App extends React.Component {
//   state = {
//     todos: []
//   };

//   //   // State Normal..
//   //   // todos: [
//   //   //   {
//   //   //     id: uuidv4(),
//   //   //     title: "Take out dog",
//   //   //     completed: false
//   //   //   },
//   //   //   {
//   //   //     id: uuidv4(),
//   //   //     title: "Take out cat",
//   //   //     completed: false
//   //   //   },
//   //   //   {
//   //   //     id: uuidv4(),
//   //   //     title: "Take out garbage",
//   //   //     completed: false
//   //   //   }

//   //   // ]

//   // API
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
//       .then(res => res.json())
//       .then(data => this.setState({ todos: data }));
//   }

//   //Toggle Todos
//   markComplete = id => {
//     this.setState({
//       todos: this.state.todos.map(todo => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed;
//         }
//         return todo;
//       })
//     });
//   };

//   // Delete Todos
//   delTodo = id => {
//     this.setState({
//       todos: [...this.state.todos.filter(todo => todo.id !== id)]
//     });
//   };

//   // Add todo submit
//   addTodo = title => {
//     const newTodo = {
//       id: uuidv4(),
//       title,
//       completed: false
//     };
//     this.setState({
//       todos: [...this.state.todos, newTodo]
//     });
//   };

//   render() {
//     return (
//       <Router>
//         <div style={{ backgroundColor: "#f4f4f4" }}>
//           <Header />
//           <Route
//             exact
//             path="/"
//             render={props => (
//               <React.Fragment>
//                 <AddTodo addTodo={this.addTodo} />
//                 <Todos
//                   todos={this.state.todos}
//                   markComplete={this.markComplete}
//                   delTodo={this.delTodo}
//                   // (3) Finished climbing the ladder at this point
//                   // event is started in TodoItem, but changes the state here!!
//                 />
//               </React.Fragment>
//             )}
//           />
//           <Route path="/about" component={About} />
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;
