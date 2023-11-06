import React, { Component } from "react";
import WarehouseService from "../../services/warehouseService"; // Import the WarehouseService
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default class AddWarehouseItem extends React.Component {
  constructor(props) {
    super(props);

    this.addwarehouse = this.addwarehouse.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async addWarehouse(item) {
    const answer = await WarehouseService.add(item); // Use WarehouseService to add the item
    if (answer.ok) {
      window.location.href = "/warehouse/add";
    } else {
      console.log(answer);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const datainfo = new FormData(e.target);

    this.addWarehouseItem({
      name: datainfo.get("name"),
      quantity: parseFloat(datainfo.get("quantity")),
      available: datainfo.get("available") === "true",
    });
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Item name"
              maxLength={255}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              placeholder="Enter quantity"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="available">
            <Form.Label>Available</Form.Label>
            <Form.Control
              as="select"
              name="available"
              defaultValue="true"
              required
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Control>
          </Form.Group>

          <Row>
            <Col>
              <Link className="btn btn-danger gumb" to={`/warehouse`}>
                Cancel
              </Link>
            </Col>
            <Col>
              <Button variant="primary" className="gumb" type="submit">
                Add Item
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}