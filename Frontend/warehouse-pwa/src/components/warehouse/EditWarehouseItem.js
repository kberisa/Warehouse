import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const EditWarehouseItem = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state ? location.state.item : null;

  console.log('item:', item); // Debugging output

  if (!item) {
    // Handle the case where 'item' is null or undefined
    return (
      <div>
        <h2>Edit Warehouse Item</h2>
        <p>Item not found or missing.</p>
        <Link to="/warehouse">Back to Warehouse List</Link>
      </div>
    );
  }

  const [editedItem, setEditedItem] = useState(item);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditedItem((prevItem) => ({
      ...prevItem,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the code to update the item with the values from the 'editedItem'
    // You can send a request to your backend to update the item using the editedItem data.
    // After successfully updating the item, navigate back to the warehouse item details page
    
  };

  return (
    <div>
      <h2>Edit Warehouse Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={editedItem.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={editedItem.quantity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Available:</label>
          <input
            type="checkbox"
            name="available"
            checked={editedItem.available}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Item</button>
        <Link to="/warehouse">Back to Warehouse List</Link>
      </form>
    </div>
  );
};

export default EditWarehouseItem;