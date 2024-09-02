import React from "react";
import { Button } from "react-bootstrap";

const CartItem = ({
  item,
  //removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const totalItemPrice = item.price * item.quantity;
  console.log(item);
  return (
    <div className="card mb-3">
      <div className="d-flex align-items-center card-body justify-content-between">
        <div className="d-flex flex-column">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Price: ${item.price.toFixed(2)}</p>
        </div>
        <div className="d-flex align-items-center">
          <Button
            onClick={() => decreaseQuantity(item.id)}
            variant="secondary"
            size="sm"
            className="mx-2"
          >
            -
          </Button>
          <p className="card-text">Quantity: {item.quantity}</p>

          <Button
            onClick={() => increaseQuantity(item.id)}
            variant="secondary"
            size="sm"
            className="mx-2"
          >
            +
          </Button>
          <p className="card-text ml-3">Total: ${totalItemPrice.toFixed(2)}</p>
        </div>
        {/* <Button
          onClick={() => removeFromCart(item.id)}
          variant="danger"
          size="sm"
        >
          Remove
        </Button> */}
      </div>
    </div>
  );
};

export default CartItem;
