import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const AddWarehouseItem = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    quantity: 0,
    entryTime: "",
    available: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to your backend for item creation
    const newItem = {
      name: formData.name,
      quantity: formData.quantity,
      entryTime: formData.entryTime,
      available: formData.available,
    };

    // Call a function to submit the new item data to your API
    fetch("/api/Warehouse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((data) => {
        // After successfully adding the item, navigate back to the WarehouseList page
        navigate("/warehouse");
      })
      .catch((error) => console.error("Error adding item: ", error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Quantity:</Form.Label>
        <Form.Control
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Entry Time:</Form.Label>
        <Form.Control
          type="datetime-local"
          name="entryTime"
          value={formData.entryTime}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Check
          type="checkbox"
          label="Available"
          name="available"
          checked={formData.available}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button type="submit">Add Item</Button>
    </Form>
  );
};

export default AddWarehouseItem;