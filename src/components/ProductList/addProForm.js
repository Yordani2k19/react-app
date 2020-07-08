import React from "react";

class AddProForm extends React.Component {
  state = {
    product: "",
    quantity: ""
  };

  productEvent = e => this.setState({ product: e.target.value });

  quantityEvent = e => this.setState({ quantity: e.target.value });

  formSubEvent = e => {
    e.preventDefault();
    this.props.addProForm(this.state);
    // ^ being passed to app state.. create event in app state and log it to confirm.
    this.setState({ product: "" });
    this.setState({ quantity: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubEvent}>
          <input
            type="text"
            name="product"
            placeholder="Enter Product"
            value={this.state.product}
            onChange={this.productEvent}
          />
          <br />
          <input
            type="text"
            name="quantity"
            placeholder="Enter Quantity"
            value={this.state.quantity}
            onChange={this.quantityEvent}
          />
          <br />
          <input type="submit" value="Submit!" />
        </form>
      </div>
    );
  }
}

export default AddProForm;
