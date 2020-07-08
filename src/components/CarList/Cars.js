import React, { useState } from "react";
import AddCars from "./AddCars";

export default function Cars(props) {
  const [carBeingEdited, setCarBeingEdited] = useState(null);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {props.carList.map(car => (
            <tr key={car.id}>
              <td id="makeAddedInText">{car.make}</td>
              <td id="modelAddedInText">{car.model}</td>
              <td id="yearAddedInText">{car.year}</td>
              <td>
                <button id="deleteBtn" onClick={() => props.delCar(car.id)}>
                  X
                </button>
              </td>
              <td>
                <button id="editCarBtn" onClick={() => setCarBeingEdited(car)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {carBeingEdited && (
        <AddCars
          carBeingEdited={carBeingEdited}
          updateCar={car => {
            props.updateCar(car);
            setCarBeingEdited(null);
          }}
        />
      )}
    </div>
  );
}
