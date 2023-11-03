import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateWarehouseItem } from '../../services/warehouseService';

export default function EditWarehouseItem() {
  const location = useLocation();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [editedItem, setEditedItem] = useState({
    name: '',
    quantity: 0,
    available: false,
  });

  useEffect(() => {
    const item = location.state ? location.state.item : null;

    setItem(item);
    setEditedItem({ ...item });
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setEditedItem((prevEditedItem) => ({
      ...prevEditedItem,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleUpdateItem = () => {
    if (editedItem) {
      updateWarehouseItem(editedItem.id, editedItem)
        .then((response) => {
          // Handle success and navigate
          navigate(`/details/${editedItem.id}`);
        })
        .catch((error) => {
          // Handle error
          console.error('Error updating item:', error);
        });
    }
  };

  if (!item) {
    return (
      <div>
        <h2>Edit Warehouse Item</h2>
        <p>Item not found or missing.</p>
        <Link to="/warehouse">Back to Warehouse List</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Edit Warehouse Item</h2>
      <form>
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
        {/* Add more input fields for other item properties here */}
        <button type="button" onClick={handleUpdateItem}>
          Update Item
        </button>
        <Link to="/warehouse">Back to Warehouse List</Link>
      </form>
    </div>
  );
}