import React from 'react'

class AddCars extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: null,
      make: '',
      model: '',
      year: '',
      ...props.carBeingEdited
    }
  }

  makeEvent = e => this.setState({ make: e.target.value })
  modelEvent = e => this.setState({ model: e.target.value })
  yearEvent = e => this.setState({ year: e.target.value })

  carFormSubmit = e => {
    e.preventDefault()
    const { id } = this.state
    const { addCar, updateCar } = this.props
    id ? updateCar(this.state) : addCar(this.state)

    this.setState({ make: '' })
    this.setState({ model: '' })
    this.setState({ year: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.carFormSubmit}>
          <input
            type="text"
            name="car_info"
            placeholder="Make"
            value={this.state.make}
            onChange={this.makeEvent}
            id="addMake"
          />
          <br />
          <input
            type="text"
            name="car_info"
            placeholder="Model"
            value={this.state.model}
            onChange={this.modelEvent}
            id="addModel"
          />
          <br />
          <input
            type="text"
            name="car_info"
            placeholder="year"
            value={this.state.year}
            onChange={this.yearEvent}
            id="addYear"
          />
          <br />
          <input type="submit" value="Submit!" id="submitCarBtn" />
        </form>
      </div>
    )
  }
}

export default AddCars
