import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart();

  const totalCartPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  return (
    <div style={{paddingTop: "144px"}}>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          ))}
          <div className="d-flex flex-column align-items-end mt-3">
            <h4>Total Price: ${totalCartPrice.toFixed(2)}</h4>
            <div className="d-flex justify-content-between w-100 mt-3">
              <button onClick={clearCart} className="btn btn-warning">
                Clear Cart
              </button>
              <button className="btn btn-primary">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
