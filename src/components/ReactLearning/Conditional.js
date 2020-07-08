import React from "react";

function Conditional(props) {
  if (props.isLoading === true) {
    return <h1>Loading ...</h1>;
  } else {
    return <h2>still loading fag ....</h2>;
  }
}

export default Conditional;

// class App extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         isLoading: true
//       };
//     }

//     componentDidMount() {
//       setTimeout(() => {
//         this.setState({
//           isLoading: false
//         });
//       }, 1500);
//     }

//     render() {
//       return (
//         <div>
//           <Conditional isLoading={this.state.isLoading} />
//         </div>
//       );
//     }
//   }

//   export default App;
