import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommonNavbar from "./components/common/commonNavbar";
import MenuPage from "./components/landingPage/menu";
import Category from "./components/landingPage/category";
import MainPage from "./components/landingPage/main";
import ProductDetailPage from "./components/landingPage/productDetailPage";
import Footer from "./components/common/footer";
import AddProduct from "./components/product/addProduct";
import toast, { Toaster } from 'react-hot-toast';
import ViewProduct from "./components/product/viewProduct";
import ViewProductBrunch from "./components/product/viewProduct";
import ViewDrinks from "./components/product/viewDrinks";
import ViewSnacks from "./components/product/viewSnacks";

function App() {
  return (
    <div>
       <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/landingPage" element={<MainPage />} />
          <Route path="/commonNav" element={<CommonNavbar />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/productDetailPage" element={<ProductDetailPage />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/addproduct" element={<AddProduct/>}/>
          <Route path="/viewProduct" element={<ViewProductBrunch/>}/>
          <Route path="/viewDrinks" element={<ViewDrinks/>}/>
          <Route path="/viewSnacks" element={<ViewSnacks/>}/>
          {/* 404 page */}
          <Route path="/*" element={<h1>The page not available</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
