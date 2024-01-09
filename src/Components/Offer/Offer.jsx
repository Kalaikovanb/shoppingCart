import React, { useEffect } from "react";
import "./Offer.scss";
import exclusive_image from "../Assets/exclusive_image.png";
import { Link } from "react-router-dom";

function Offer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="offer" id="offer">
      <div className="offers-left">
        <h1 className="offer-h1">Exclusive</h1>
        <h1 className="offer-h1">Offers For You</h1>
        <p className="para-offer">ONLY ON BEST SELLER PRODUCTS</p>
        <Link to="/women">
          <button id="scrolling">Check Now</button>
        </Link>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
}

export default Offer;
