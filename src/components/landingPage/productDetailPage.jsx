import React, { useState } from "react";
import img1 from "../../assets/cocktail1 1.svg";
import img2 from "../../assets/img2.svg";
import { Button } from "bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProductDetailPage() {
  const [data, SetData] = useState([
    {
      title: "CINNAMON TOAST CRUNCH",
      price: "50",
      description:
        " Skrewball peanut butter whiskey, vanilla extract, Amaretto Baileys, egg white, cinnamon",
    },
    {
      title: "Mary bar",
      price: "09",
      description:
        "Titos, tomato juice, worcestershire, celery salt, black pepper, tabasco, fully loaded",
    },
    {
      title: "Mary bar",
      price: "09",
      description:
        "Titos, tomato juice, worcestershire, celery salt, black pepper, tabasco, fully loaded",
    },

  ]);
  return (
    <div className="productDetailPage_main">
      <span className="productDetailPage_img1">
        <img src={img2} alt="" />
      </span>
      <div className="productDetailPage_box">
        <h1 className="productDetailPage_heading">
          <div>
            <hr className="productDetailPage_heading_line" />
          </div>
          BRUNCH COCKTAILS
          <div>
            <hr className="productDetailPage_heading_line" />
          </div>
        </h1>
        <div className="productDetailPage_box_content container gap-2 ">
          <Row>
            {data.map((e) => {
              return (
                <Col md={6}>
                  <div className="productDetailPage_box_contentBox">
                    <h4 className="productDetailPage_box_contentBox_heading">
                      {e?.title}..........................{" "}
                      <span className="product_price">${e?.price} </span>
                    </h4>
                    <p className="productDetailPage_description">
                      {e?.description}
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <span className="productDetailPage_img2">
        <img src={img1} alt="" />
      </span>
    </div>
  );
}

export default ProductDetailPage;
