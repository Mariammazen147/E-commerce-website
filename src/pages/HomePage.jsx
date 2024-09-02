import React, { useRef } from "react";
import Offers from "../components/Offers.jsx";
import Header from "../components/Header.jsx";
import About from "../components/About.jsx";

const HomePage = () => {
  const offersRef = useRef(null);

  const scrollToOffers = () => {
    if (offersRef.current) {
      offersRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{paddingTop: "120px"}}>
      <Header scrollToOffers={scrollToOffers} />
      <About />
      <Offers ref={offersRef} />
    </div>
  );
};

export default HomePage;
