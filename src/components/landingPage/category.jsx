import React, { useState } from "react";
import ViewProduct from "../product/viewProduct";
import ViewDrinks from "../product/viewDrinks";
import ViewSnacks from "../product/viewSnacks";

function Category() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);
  const handleShow2 = () => setShow2(true);
  return (
    <div className="category_main">
      <button className="category_btn" onClick={handleShow2}>
        snacks
      </button>
      <button className="category_btn" onClick={handleShow1}>
        drinks
      </button>
      <button className="category_btn" onClick={handleShow}>
        brunch
      </button>
      <ViewProduct show={show} setShow={setShow} />
      <ViewDrinks show1={show1} setShow1={setShow1} />
      <ViewSnacks show2={show2} setShow2={setShow2} />
    </div>
  );
}

export default Category;
