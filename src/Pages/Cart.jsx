import React from "react";
import "./CSS/Cart.scss";
import CartItems from "../Components/CartItems/CartItems";

const Cart = () => {
  return (
    <div className="cart-display">
      <CartItems />
    </div>
  );
};

export default Cart;
