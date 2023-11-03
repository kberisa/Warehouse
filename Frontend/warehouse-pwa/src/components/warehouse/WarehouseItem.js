import React from 'react';
import { Link } from 'react-router-dom';

const WarehouseItem = ({ item }) => {
  const editLink = {
    pathname: `/edit/${item.id}`,
    state: { item }, // Pass the item data using the state property
  };

  return (
    <div>
      <h2>{item.name}</h2>
      <p>Quantity: {item.quantity}</p>
      <p>Available: {item.available ? 'Yes' : 'No'}</p>
      <Link to={editLink}>Edit Item</Link>
    </div>
  );
};

export default WarehouseItem;