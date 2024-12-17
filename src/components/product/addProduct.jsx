import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import toast from "react-hot-toast";
import axios from "axios";

function AddProduct({ show, setShow }) {
  const handleClose = () => setShow(false);
  const [data, setData] = useState({
    productName: "",
    description: "",
    price: "",
    category: "",
    menuDescription: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    sendToServer();
    handleClose();
  };

  const sendToServer = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/addProduct",
        data
      );
      if (response?.status === 200) {
        toast.success("Product uploaded");
      }
    } catch (error) {
      toast.error("Something went wrong!!");
    }
  };
  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose} animation={true}>
          <Form>
            <Modal.Header closeButton>
              <Modal.Title>Add Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Product Name"
                    name="productName"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Price"
                    name="price"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product Description"
                  as="textarea"
                  name="description"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Menu Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Description of menu"
                  as="textarea"
                  name="menuDescription"
                  onChange={handleChange}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    name="category"
                    onChange={handleChange}
                    defaultValue="Choose..."
                  >
                    <option>Choose...</option>
                    <option>Drinks</option>
                    <option>Brunch</option>
                    <option>Snacks</option>
                  </Form.Select>
                </Form.Group>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    </div>
  );
}

export default AddProduct;
