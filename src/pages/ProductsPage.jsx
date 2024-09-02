import React from "react";
import ProductList from "../components/ProductList.jsx";

const ProductsPage = () => {
  return (
    <div className="container" style={{paddingTop: "140px"}}>
      <h1>Products</h1>
      <ProductList />
    </div>
  );
};

export default ProductsPage;
