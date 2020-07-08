import React from "react";

export default function Products(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {props.appState.map(pro => (
            <tr key={pro.id}>
              <td>{pro.product}</td>
              <td>{pro.quantity}</td>
              <td>
                <button onClick={() => props.deleteProEvent(pro.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
// App Js
// import React from "react";
// import Products from "./components/ProductList/Products";
// import AddProForm from "./components/ProductList/addProForm";

// class App extends React.Component {
//   state = {
//     appState: []
//   };

//   addProForm = () => {
//     console.log(true);
//   };

//   render() {
//     return (
//       <div>
//         <Products appState={this.state.appState} />
//         <AddProForm addProForm={this.addProForm} />
//       </div>
//     );
//   }
// }

// export default App;
