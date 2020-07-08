import React from "react";
import { v4 as uuidv4 } from "uuid";
import Cars from "./components/CarList/Cars";
import AddCars from "./components/CarList/AddCars";

class App extends React.Component {
  state = {
    carList: []
  };

  addCar = car => {
    const newCar = {
      ...car,
      id: uuidv4()
    };
    this.setState({
      carList: [...this.state.carList, newCar]
    });
  };

  delCar = id => {
    this.setState({
      carList: [...this.state.carList.filter(deleteCar => deleteCar.id !== id)]
    });
  };

  updateCar = updatedCar => {
    this.setState({
      carList: [
        ...this.state.carList.map(car =>
          car.id === updatedCar.id ? updatedCar : car
        )
      ]
    });
  };

  render() {
    return (
      <div>
        <Cars
          carList={this.state.carList}
          delCar={this.delCar}
          updateCar={this.updateCar}
        />
        <AddCars addCar={this.addCar} />
      </div>
    );
  }
}

export default App;

// // App Js
// import React from "react";
// import { v4 as uuidv4 } from "uuid";
// import Products from "./components/ProductList/Products";
// import AddProForm from "./components/ProductList/addProForm";

// class App extends React.Component {
//   state = {
//     appState: []
//   };

//   // Here
//   addProForm = pro => {
//     const newPro = {
//       id: uuidv4(),
//       ...pro
//     };
//     this.setState(prevState => ({
//       appState: [...prevState.appState, newPro]
//     }));
//   };

//   // create delete event
//   deleteProEvent = id => {
//     this.setState(prevState => ({
//       appState: prevState.appState.filter(pro => pro.id !== id)
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <Products
//           appState={this.state.appState}
//           deleteProEvent={this.deleteProEvent}
//         />
//         <AddProForm
//           addProForm={this.addProForm}
//           // this is the function being called ^ call it above
//         />
//       </div>
//     );
//   }
// }

// export default App;
