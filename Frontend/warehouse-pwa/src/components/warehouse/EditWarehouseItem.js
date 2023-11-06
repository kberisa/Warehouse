import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WarehouseService from '../../services/warehouseService';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default class EditWarehouseItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: null,
      editedItem: {
        name: '',
        quantity: 0,
        available: false,
      },
    };
  }

  componentDidMount() {
    this.handleUpdateState();
  }

  handleUpdateState() {
    const { location } = this.props;
    const item = location.state ? location.state.item : null;
    this.setState({
      item,
      editedItem: { ...item },
    });
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    this.setState((prevState) => ({
      editedItem: {
        ...prevState.editedItem,
        [name]: type === 'checkbox' ? checked : value,
      },
    }));
  };

  handleUpdateItem = () => {
    const { editedItem } = this.state;
    if (editedItem) {
      WarehouseService.update(editedItem.id, editedItem)
        .then((response) => {
          // Handle success and navigate
          // You can use the history object to navigate
          this.props.history.push(`/details/${editedItem.id}`);
        })
        .catch((error) => {
          // Handle error
          console.error('Error updating item:', error);
        });
    }
  }

  render() {
    const { item, editedItem } = this.state;

    if (!item) {
      return (
        <Container>
          <h2>Edit Warehouse Item</h2>
          <p>Item not found or missing.</p>
          <Link to="/warehouse" className="btn btn-danger gumb">
            Back to Warehouse List
          </Link>
        </Container>
      );
    }

    return (
      <Container>
        <h2>Edit Warehouse Item</h2>
        <Form onSubmit={this.handleUpdateItem}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={editedItem.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="quantity">
            <Form.Label>Quantity:</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              value={editedItem.quantity}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="available">
            <Form.Check
              type="checkbox"
              name="available"
              label="Available"
              checked={editedItem.available}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Row>
            <Col>
              <Link to="/warehouse" className="btn btn-danger gumb">
                Cancel
              </Link>
            </Col>
            <Col>
              <Button type="submit" variant="primary" className="gumb">
                Update Item
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}