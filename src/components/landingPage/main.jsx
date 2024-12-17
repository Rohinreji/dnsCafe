import React from "react";
import CommonNavbar from "../common/commonNavbar";
import MenuPage from "./menu";
import Category from "./category";
import ProductDetailPage from "./productDetailPage";
import Footer from "../common/footer";

function MainPage() {
  return (
    <div>
      <CommonNavbar />
      <MenuPage />
      <Category />
      <ProductDetailPage />
      <Footer/>
    </div>
  );
}

export default MainPage;
