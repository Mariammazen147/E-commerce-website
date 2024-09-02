import React, { forwardRef } from "react";
import { useCart } from "../context/CartContext";
import Offer1 from "../assets/images/Offer1.png";
import Offer2 from "../assets/images/Offer2.png";

const Offersmap = {
  1: {
    id: 'offer1',
    image: Offer1,
    name: "Best Selling Products Deal",
    price: 30,
    description: "Special offer on our best-selling products! Get them now with only $30!",
  },
  2: {
    id: 'offer2',
    image: Offer2,
    price:40,
    name: "New Arrival Bundle",
    description: "Limited-time offer on this new arrival. Enjoy this bundle with $40!",
  },
};

const Offers = forwardRef((props, ref) => {
  const { addToCart } = useCart();

  const handleAddToCart = (offer) => {
    addToCart({ ...offer, quantity: 1 });
  };

  return (
    <div ref={ref} id="offers" className="container my-5">
      <h2 className="mb-4">Exclusive Offers</h2>
      <div className="row">
        {Object.keys(Offersmap).map((key) => (
          <div className="col-md-6 mb-4" key={key}>
            <div className="card h-100">
              <img
                src={Offersmap[key].image}
                className="card-img-top"
                alt={`Offer ${key}`}
              />
              <div className="card-body">
                <h5 className="card-title">{Offersmap[key].name}</h5>
                <p className="card-text">{Offersmap[key].description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(Offersmap[key])}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Offers;
