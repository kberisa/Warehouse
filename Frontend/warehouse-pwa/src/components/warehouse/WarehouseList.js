import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WarehouseItem from './WarehouseItem';
import Button from 'react-bootstrap/Button';

export default class WarehouseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    // Fetch warehouse items from your API
    fetch('/api/Warehouse') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => this.setState({ items: data }))
      .catch((error) => console.error('Error fetching items: ', error));
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <Link to="/add">Add New Item</Link> {/* Link to the AddWarehouseItem route */}
        {items.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Entry Time</th>
                <th>Available</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <WarehouseItem key={item.id} item={item} />
              ))}
            </tbody>
          </table>
        ) : (
          <p>No items available in the warehouse.</p>
        )}
      </div>
    );
  }
}