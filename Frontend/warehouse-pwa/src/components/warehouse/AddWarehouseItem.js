import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AddWarehouseItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        quantity: 0,
        entryTime: "",
        available: true,
      },
    };
  }

  handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: newValue,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, quantity, entryTime, available } = this.state.formData;
    // Construct the item object with form data

    const newItem = {
      name,
      quantity,
      entryTime,
      available,
    };

    // Implement the logic to send the new item data to your backend
    // You can use a service function for this or an API call.

    // Example: Replace the following with your API call
    // addWarehouseItem(newItem)
    //   .then((response) => {
    //     // Handle success and navigate
    //     this.props.history.push("/warehouse");
    //   })
    //   .catch((error) => {
    //     // Handle error
    //     console.error("Error adding item: ", error);
    //   });

    // For this example, we'll just log the newItem
    console.log("New Item Data:", newItem);

    // Optionally, you can navigate back to the warehouse list page
    this.props.history.push("/warehouse");
  };

  render() {
    return (
      <div>
        <h2>Add Warehouse Item</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={this.state.formData.quantity}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Entry Time:</label>
            <input
              type="datetime-local"
              name="entryTime"
              value={this.state.formData.entryTime}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Available:</label>
            <input
              type="checkbox"
              name="available"
              checked={this.state.formData.available}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Add Item</button>
          <Link to="/warehouse">Back to Warehouse List</Link>
        </form>
      </div>
    );
  }
}