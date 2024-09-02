import React from "react";
import { useCart } from "../context/CartContext.js";
import product1 from "../assets/images/Product1.png";
import product2 from "../assets/images/Product2.png";
import product3 from "../assets/images/Product3.png";
import product4 from "../assets/images/Product4.png";

const imageMap = {
  1: product1,
  5: product1,
  2: product2,
  3: product3,
  4: product4,
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddtoCart = () => {
    addToCart(product);
  };

  return (
    <div className="card mb-4 shadow-sm" style={{ width: "18rem" }}>
      <img
        src={`${imageMap[product.id]}`}
        className="card-img-top"
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text fw-bold">${product.price.toFixed(2)}</p>
        <button onClick={handleAddtoCart} className="btn btn-primary w-100">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;