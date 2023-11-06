import React, { Component } from "react";
import WarehouseService from '../../services/warehouseService';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

export default class WarehouseList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.getWarehouseItems();
  }

  async getWarehouseItems() {
    await WarehouseService.getAll()
      .then(response => {
        const transformedData = response.data.map(item => ({
          id: item.Id,
          name: item.Name,
          quantity: item.Quantity,
          entryTime: item['Entry Time'],
          available: item.Available,
        }));
  
        this.setState({
          items: transformedData,
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  async deleteWarehouseItem(id) {
    const answer = await WarehouseService.delete(id);
    if (answer.ok) {
      this.getWarehouseItems();
    } else {
      alert(answer.message);
    }
  }

  render() {
    const { items } = this.state;
    return (
      <Container>
        <a href="/warehouse/add" className="btn btn-success gumb">
          ADD NEW ITEM
        </a>

        <Table striped bordered hover responsive>
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
            {items && items.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.entryTime}</td>
                <td>{item.available ? "Yes" : "No"}</td>
                <td>
                  <Link className="btn btn-primary gumb" to={`/warehouse/edit/${item.id}`}>
                    <FaEdit />
                  </Link>
                  <Button variant="danger" className="gumb" onClick={() => this.deleteWarehouseItem(item.id)}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}