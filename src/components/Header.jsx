import React from "react";

const Header = ({ scrollToOffers }) => {
  return (
    <header className="bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">Welcome to Kingsman</h1>
        <p className="lead mt-3">
          Discover amazing products and offers tailored just for you
        </p>
        <button
          className="btn btn-light mt-4 btn-lg"
          onClick={scrollToOffers}
        >
          Check Our Offers
        </button>
      </div>
    </header>
  );
};

export default Header;
