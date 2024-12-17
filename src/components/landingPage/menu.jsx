import React, { useState } from "react";
import AddProduct from "../product/addProduct";

function MenuPage() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <div className="menuPage_main">
      <div className="menuPage_heading">
        <h1 className="menuPage_h1">MENU</h1>
      </div>
      <div className="menuPage_content">
        <p>
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to <br />
          place an order, use the "Order Online" button located below the menu.
        </p>
        <button className="category_Addbtn" onClick={handleShow}>Add product</button>
      </div>
      <AddProduct show={show} setShow={setShow}  />
    </div>
  );
}

export default MenuPage;
