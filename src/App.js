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
