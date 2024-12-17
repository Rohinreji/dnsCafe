import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import axios from "axios";

function ViewSnacks({ show2, setShow2 }) {
  const handleClose = () => setShow2(false);
  const [data, SetData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3005/getCategorySnacks"
      );
      if (response?.status === 200) {
        SetData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal show={show2} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="viewProductModalBg">
          <div className="productDetailPage_box1">
            <h1 className="productDetailPage_heading1">
              <div>
                <hr className="productDetailPage_heading_line1" />
              </div>
              SNACKS
              <div>
                <hr className="productDetailPage_heading_line1" />
              </div>
            </h1>
            <div className="productDetailPage_box_content1 container gap-2 ">
              <Row>
                {data.length == 0 ? (
                  <h1 className="productDetailPage_heading1">
                    No Items Available
                  </h1>
                ) : (
                  data.map((e) => {
                    return (
                      <div className="productDetailPage_box_contentBox1">
                        <h4 className="productDetailPage_box_contentBox_heading1">
                          {e?.productName}.....................{" "}
                          <span className="product_price1">${e?.price} </span>
                        </h4>
                        <p className="productDetailPage_description1">
                          {e?.description}
                        </p>
                      </div>
                    );
                  })
                )}
              </Row>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ViewSnacks;
